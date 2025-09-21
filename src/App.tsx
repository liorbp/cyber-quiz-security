import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Play, ArrowClockwise, Shuffle, Clock, Trophy, Moon, Sun, X } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'
import cyberShieldLogo from '@/assets/images/cyber-shield-logo.svg'
import questionsData from '@/data/questions.json'

interface Question {
  id: number
  threat: string
  description: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface ScoreEntry {
  name: string
  score: number
  date: string
  questionsAnswered: number
  mode: 'normal' | 'challenge'
}

const QUESTIONS: Question[] = questionsData as Question[]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [usedQuestions, setUsedQuestions] = useState<number[]>([])
  const [timerEnabled, setTimerEnabled] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [totalTime, setTotalTime] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [playerName, setPlayerName] = useState('')
  const [showNameDialog, setShowNameDialog] = useState(false)
  const [showScoreboard, setShowScoreboard] = useState(false)
  const [quizMode, setQuizMode] = useState<'normal' | 'challenge'>('normal')
  const [isDarkMode, setIsDarkMode] = useKV<boolean>('cyber-quiz-dark-mode', true)

  const [highScore, setHighScore] = useKV<number>('cyber-quiz-high-score', 0)
  const [scoreboard, setScoreboard] = useKV<ScoreEntry[]>('cyber-quiz-scoreboard', [])

  // Theme effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    if (timerEnabled && quizStarted && !quizCompleted && !showFeedback && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
        setTotalTime(prev => prev + 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showFeedback) {
      handleAnswer(-1) // Auto-advance with wrong answer
    }
  }, [timerEnabled, quizStarted, quizCompleted, showFeedback, timeLeft])

  const getRandomQuestion = () => {
    const availableQuestions = QUESTIONS.filter(q => !usedQuestions.includes(q.id))
    if (availableQuestions.length === 0) {
      // Reset used questions if all have been used
      setUsedQuestions([])
      return QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]
    }
    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
  }

  const startQuiz = (enableTimer = false) => {
    const mode = enableTimer ? 'challenge' : 'normal'
    setQuizMode(mode)
    const firstQuestion = getRandomQuestion()
    setQuestions([firstQuestion])
    setUsedQuestions([firstQuestion.id])
    setQuizStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setWrongAnswers(0)
    setQuestionsAnswered(0)
    setQuizCompleted(false)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setTimerEnabled(enableTimer)
    setTimeLeft(30)
    setTotalTime(0)
  }

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)
    setQuestionsAnswered(prev => prev + 1)
    
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer
    
    if (isCorrect) {
      const timeBonus = timerEnabled ? Math.max(0, timeLeft) : 20
      setScore(prev => prev + 20 + timeBonus)
    } else {
      setWrongAnswers(prev => prev + 1)
    }

    setTimeout(() => {
      if (wrongAnswers + (isCorrect ? 0 : 1) >= 3) {
        // Game over - 3 wrong answers
        setQuizCompleted(true)
        if (score > 0) {
          setShowNameDialog(true)
        }
      } else {
        // Continue with next question
        const nextQuestion = getRandomQuestion()
        setQuestions([...questions, nextQuestion])
        setUsedQuestions(prev => [...prev, nextQuestion.id])
        setCurrentQuestion(prev => prev + 1)
        setSelectedAnswer(null)
        setShowFeedback(false)
        setTimeLeft(30)
      }
    }, 3000)
  }

  const addToScoreboard = () => {
    if (!playerName.trim()) return
    
    const newEntry: ScoreEntry = {
      name: playerName.trim(),
      score: score,
      date: new Date().toLocaleDateString(),
      questionsAnswered: questionsAnswered,
      mode: quizMode
    }
    
    const updatedScoreboard = [...(scoreboard || []), newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 20) // Keep top 20 total (10 per mode max)
    
    setScoreboard(updatedScoreboard)
    
    if (score > (highScore || 0)) {
      setHighScore(score)
    }
    
    setShowNameDialog(false)
    setPlayerName('')
    resetQuiz()
  }

  const abortQuiz = () => {
    setQuizCompleted(true)
    if (score > 0) {
      setShowNameDialog(true)
    }
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setWrongAnswers(0)
    setQuestionsAnswered(0)
    setQuizCompleted(false)
    setUsedQuestions([])
    setTimeLeft(30)
    setTotalTime(0)
    setShowNameDialog(false)
    setPlayerName('')
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center border-2 border-primary/30">
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={cyberShieldLogo} 
                  alt="Cyber Quiz Logo" 
                  className="w-12 h-12"
                  style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(15%) saturate(300%) hue-rotate(120deg) brightness(95%) contrast(90%)' }}
                />
                <div className="space-y-2">
                  <CardTitle className="text-3xl font-bold text-primary">CYBER QUIZ</CardTitle>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch 
                  checked={isDarkMode} 
                  onCheckedChange={setIsDarkMode}
                />
                <Moon className="h-4 w-4" />
              </div>
            </div>
            <p className="text-lg text-foreground">Sharpen Your Edge in Seconds</p>
            {(highScore || 0) > 0 && (
              <Badge variant="outline" className="text-accent border-accent">
                Best Score: {highScore}
              </Badge>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Endless threat scenarios</p>
              <p>• Normal & Challenge game modes</p>
              <p>• Game over after 3 wrong answers</p>
              <p>• Professional-grade content</p>
            </div>
            <div className="space-y-2">
              <Button 
                onClick={() => startQuiz(false)} 
                className="w-full" 
                size="lg"
              >
                <Play className="mr-2 h-4 w-4" />
                START QUIZ
              </Button>
              <Button 
                onClick={() => startQuiz(true)} 
                variant="outline" 
                className="w-full"
              >
                <Clock className="mr-2 h-4 w-4" />
                CHALLENGE MODE (30s per question)
              </Button>
              <Dialog open={showScoreboard} onOpenChange={setShowScoreboard}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Trophy className="mr-2 h-4 w-4" />
                    HALL OF FAME
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-primary">🏆 HALL OF FAME</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 max-h-96 overflow-y-auto">
                    {/* Normal Mode Scoreboard */}
                    <div>
                      <h3 className="text-accent font-semibold mb-3 flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Normal Mode
                      </h3>
                      <div className="space-y-2">
                        {(scoreboard || []).filter(entry => (entry.mode || 'normal') === 'normal').length === 0 ? (
                          <p className="text-muted-foreground text-center py-2 text-sm">
                            No scores yet
                          </p>
                        ) : (
                          (scoreboard || [])
                            .filter(entry => (entry.mode || 'normal') === 'normal')
                            .sort((a, b) => b.score - a.score)
                            .slice(0, 5)
                            .map((entry, index) => (
                              <div key={`normal-${index}`} className="flex items-center justify-between p-2 bg-card/50 rounded">
                                <div className="flex items-center gap-2">
                                  <span className="text-accent font-mono">#{index + 1}</span>
                                  <span className="font-medium">{entry.name}</span>
                                </div>
                                <div className="text-right text-sm">
                                  <div className="text-primary font-bold">{entry.score}</div>
                                  <div className="text-muted-foreground">{entry.questionsAnswered} questions</div>
                                </div>
                              </div>
                            ))
                        )}
                      </div>
                    </div>

                    {/* Challenge Mode Scoreboard */}
                    <div>
                      <h3 className="text-accent font-semibold mb-3 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Challenge Mode
                      </h3>
                      <div className="space-y-2">
                        {(scoreboard || []).filter(entry => entry.mode === 'challenge').length === 0 ? (
                          <p className="text-muted-foreground text-center py-2 text-sm">
                            No scores yet
                          </p>
                        ) : (
                          (scoreboard || [])
                            .filter(entry => entry.mode === 'challenge')
                            .sort((a, b) => b.score - a.score)
                            .slice(0, 5)
                            .map((entry, index) => (
                              <div key={`challenge-${index}`} className="flex items-center justify-between p-2 bg-card/50 rounded">
                                <div className="flex items-center gap-2">
                                  <span className="text-accent font-mono">#{index + 1}</span>
                                  <span className="font-medium">{entry.name}</span>
                                </div>
                                <div className="text-right text-sm">
                                  <div className="text-primary font-bold">{entry.score}</div>
                                  <div className="text-muted-foreground">{entry.questionsAnswered} questions</div>
                                </div>
                              </div>
                            ))
                        )}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Name Dialog */}
        <Dialog open={showNameDialog} onOpenChange={setShowNameDialog}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle className="text-primary">Enter Hall of Fame</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{score}</div>
                <div className="text-sm text-muted-foreground">
                  {questionsAnswered} questions answered
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="playerName">Your Name</Label>
                <Input
                  id="playerName"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Enter your name..."
                  maxLength={20}
                  onKeyPress={(e) => e.key === 'Enter' && addToScoreboard()}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={addToScoreboard} className="flex-1" disabled={!playerName.trim()}>
                  Add to Hall of Fame
                </Button>
                <Button variant="outline" onClick={() => setShowNameDialog(false)}>
                  Skip
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  if (quizCompleted) {
    const finalScore = score
    const percentage = questionsAnswered > 0 ? Math.round((questionsAnswered - wrongAnswers) / questionsAnswered * 100) : 0
    
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center border-2 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">GAME OVER</CardTitle>
            <div className="flex items-center justify-center gap-2">
              <Badge className="bg-destructive text-destructive-foreground">
                {wrongAnswers >= 3 ? '3 wrong answers reached' : 'Game aborted'}
              </Badge>
              <Badge variant="outline" className="capitalize">
                {quizMode} mode
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">{finalScore}</div>
              <div className="text-sm text-muted-foreground">
                {percentage}% accuracy • {questionsAnswered} questions answered
              </div>
              {timerEnabled && (
                <div className="text-xs text-muted-foreground">
                  Total time: {Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}
                </div>
              )}
            </div>
            
            <div className="text-left space-y-2">
              <div className="text-sm font-medium">Performance Analysis:</div>
              <div className="text-xs text-muted-foreground space-y-1">
                {percentage >= 80 && <p>→ Elite threat hunter status</p>}
                {percentage >= 60 && percentage < 80 && <p>→ Solid cybersecurity foundation</p>}
                {percentage < 60 && <p>→ Additional training recommended</p>}
                <p>→ Questions survived: {questionsAnswered}</p>
                <p>→ Wrong answers: {wrongAnswers}/3</p>
              </div>
            </div>

            <div className="space-y-2">
              <Button onClick={resetQuiz} className="w-full">
                <ArrowClockwise className="mr-2 h-4 w-4" />
                TRY AGAIN
              </Button>
              <Button onClick={() => setShowScoreboard(true)} variant="outline" className="w-full">
                <Trophy className="mr-2 h-4 w-4" />
                VIEW HALL OF FAME
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Name Dialog for Game Over */}
        <Dialog open={showNameDialog} onOpenChange={setShowNameDialog}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle className="text-primary">Enter Hall of Fame</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{score}</div>
                <div className="text-sm text-muted-foreground">
                  {questionsAnswered} questions answered • {quizMode} mode
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="playerName">Your Name</Label>
                <Input
                  id="playerName"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Enter your name..."
                  maxLength={20}
                  onKeyPress={(e) => e.key === 'Enter' && addToScoreboard()}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={addToScoreboard} className="flex-1" disabled={!playerName.trim()}>
                  Add to Hall of Fame
                </Button>
                <Button variant="outline" onClick={() => { setShowNameDialog(false); resetQuiz(); }}>
                  Skip
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <img 
              src={cyberShieldLogo} 
              alt="Cyber Quiz Logo" 
              className="w-6 h-6"
              style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(15%) saturate(300%) hue-rotate(120deg) brightness(95%) contrast(90%)' }}
            />
            <div className="text-primary font-mono">CYBER_QUIZ.exe</div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline">
              Question #{questionsAnswered + 1}
            </Badge>
            <Badge className="bg-accent text-accent-foreground">
              Score: {score}
            </Badge>
            <Badge variant={wrongAnswers >= 2 ? "destructive" : "outline"}>
              <X className="mr-1 h-3 w-3" />
              {wrongAnswers}/3
            </Badge>
            {timerEnabled && (
              <Badge variant={timeLeft <= 10 ? "destructive" : "outline"}>
                <Clock className="mr-1 h-3 w-3" />
                {timeLeft}s
              </Badge>
            )}
          </div>
        </div>

        {/* Question Card */}
        <Card className="border-2 border-primary/30">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-mono">
              {question.threat}
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {question.description}
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-foreground mb-4">
              Select the most accurate definition or tactic:
            </div>
            
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={
                  showFeedback 
                    ? index === question.correctAnswer 
                      ? "default" 
                      : selectedAnswer === index 
                        ? "destructive" 
                        : "outline"
                    : selectedAnswer === index 
                      ? "secondary"
                      : "outline"
                }
                className={`w-full text-left justify-start p-4 h-auto whitespace-normal ${
                  showFeedback && index === question.correctAnswer 
                    ? "border-accent bg-accent/10" 
                    : ""
                }`}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                <span className="font-mono mr-2 text-xs opacity-60">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </Button>
            ))}

            {showFeedback && (
              <div className="mt-4 p-4 bg-card/50 border border-border rounded-md">
                <div className="text-sm font-medium mb-2 text-primary">
                  {selectedAnswer === question.correctAnswer ? "✓ CORRECT" : "✗ INCORRECT"}
                </div>
                <div className="text-xs text-muted-foreground">
                  {question.explanation}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex gap-2 text-xs">
          <Button variant="ghost" size="sm" onClick={abortQuiz}>
            <ArrowClockwise className="mr-1 h-3 w-3" />
            ABORT
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App