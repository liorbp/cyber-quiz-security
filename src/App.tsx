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

interface Question {
  id: string
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
}

const QUESTIONS: Question[] = [
  {
    id: '1',
    threat: 'Living off the Land (LotL)',
    description: 'Advanced persistent threat technique using legitimate system tools',
    options: [
      'Using custom malware to establish persistence',
      'Exploiting legitimate system binaries and scripts for malicious purposes',
      'Installing backdoors through software vulnerabilities',
      'Creating new administrative accounts for lateral movement'
    ],
    correctAnswer: 1,
    explanation: 'LotL attacks leverage trusted, built-in system tools like PowerShell, WMI, or certutil to avoid detection while performing malicious activities.'
  },
  {
    id: '2',
    threat: 'Fileless Malware',
    description: 'Memory-resident threats that avoid traditional detection',
    options: [
      'Malware that encrypts files on the victim system',
      'Malware that operates entirely in memory without writing to disk',
      'Malware that deletes itself after execution',
      'Malware that uses file compression to avoid detection'
    ],
    correctAnswer: 1,
    explanation: 'Fileless malware resides only in system memory, making it difficult to detect with traditional file-based security solutions.'
  },
  {
    id: '3',
    threat: 'Supply Chain Attack',
    description: 'Compromise targeting the software development lifecycle',
    options: [
      'Direct attack on an organization\'s primary infrastructure',
      'Phishing attack targeting supply chain vendors',
      'Injection of malicious code into legitimate software during development',
      'Physical theft of hardware components from suppliers'
    ],
    correctAnswer: 2,
    explanation: 'Supply chain attacks compromise legitimate software during development or distribution, affecting all downstream users of that software.'
  },
  {
    id: '4',
    threat: 'Adversarial AI',
    description: 'Machine learning model manipulation technique',
    options: [
      'Using AI to generate phishing emails',
      'Training AI models on stolen data',
      'Crafting inputs designed to fool AI classification systems',
      'Replacing legitimate AI models with malicious ones'
    ],
    correctAnswer: 2,
    explanation: 'Adversarial AI involves creating specially crafted inputs that cause AI systems to make incorrect classifications or decisions.'
  },
  {
    id: '5',
    threat: 'Golden Ticket Attack',
    description: 'Kerberos authentication bypass in Active Directory',
    options: [
      'Stealing password hashes from domain controllers',
      'Forging Kerberos TGTs using compromised KRBTGT account hash',
      'Brute forcing administrator passwords',
      'Exploiting unpatched domain controller vulnerabilities'
    ],
    correctAnswer: 1,
    explanation: 'Golden Ticket attacks use the compromised KRBTGT account hash to forge valid Kerberos Ticket Granting Tickets, providing domain-wide access.'
  },
  {
    id: '6',
    threat: 'UEFI Rootkit',
    description: 'Firmware-level persistent threat',
    options: [
      'Malware that infects USB boot devices',
      'Rootkit that modifies the Windows boot manager',
      'Malicious code embedded in the system firmware/BIOS',
      'Kernel-level rootkit using driver signing bypass'
    ],
    correctAnswer: 2,
    explanation: 'UEFI rootkits infect the system firmware, executing before the operating system loads and persisting through OS reinstalls.'
  },
  {
    id: '7',
    threat: 'DNS Tunneling',
    description: 'Covert channel data exfiltration technique',
    options: [
      'Redirecting DNS queries to malicious servers',
      'Encoding data within DNS query names and responses',
      'Poisoning DNS cache entries',
      'Using DNS over HTTPS to bypass filters'
    ],
    correctAnswer: 1,
    explanation: 'DNS tunneling embeds data within DNS queries and responses, creating a covert communication channel that often bypasses network security controls.'
  },
  {
    id: '8',
    threat: 'Process Hollowing',
    description: 'Steganographic code injection technique',
    options: [
      'Injecting code into existing running processes',
      'Creating a legitimate process and replacing its memory with malicious code',
      'Hiding malicious processes using rootkit techniques',
      'Terminating security processes to avoid detection'
    ],
    correctAnswer: 1,
    explanation: 'Process hollowing creates a legitimate process in suspended state, then replaces its memory contents with malicious code before resuming execution.'
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [usedQuestions, setUsedQuestions] = useState<string[]>([])
  const [timerEnabled, setTimerEnabled] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [totalTime, setTotalTime] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [playerName, setPlayerName] = useState('')
  const [showNameDialog, setShowNameDialog] = useState(false)
  const [showScoreboard, setShowScoreboard] = useState(false)
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
        setShowNameDialog(true)
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
      questionsAnswered: questionsAnswered
    }
    
    const updatedScoreboard = [...(scoreboard || []), newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10) // Keep only top 10
    
    setScoreboard(updatedScoreboard)
    
    if (score > (highScore || 0)) {
      setHighScore(score)
    }
    
    setShowNameDialog(false)
    setPlayerName('')
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
              <div className="space-y-2">
                <CardTitle className="text-3xl font-bold text-primary">CYBER QUIZ</CardTitle>
                <p className="text-muted-foreground text-sm">v3.0.0 // ENDLESS_MODE</p>
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
              <p>• Game over after 3 wrong answers</p>
              <p>• Hall of Fame leaderboard</p>
              <p>• Professional-grade content</p>
            </div>
            <div className="space-y-2">
              <Button 
                onClick={() => startQuiz(false)} 
                className="w-full" 
                size="lg"
              >
                <Play className="mr-2 h-4 w-4" />
                START ENDLESS QUIZ
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
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-primary">🏆 HALL OF FAME</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {(scoreboard || []).length === 0 ? (
                      <p className="text-muted-foreground text-center py-4">
                        No scores yet. Be the first!
                      </p>
                    ) : (
                      (scoreboard || []).map((entry, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-card/50 rounded">
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
            <Badge className="bg-destructive text-destructive-foreground">
              3 wrong answers reached
            </Badge>
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
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between text-sm">
          <div className="text-primary font-mono">CYBER_QUIZ.exe</div>
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
          <Button variant="ghost" size="sm" onClick={resetQuiz}>
            <ArrowClockwise className="mr-1 h-3 w-3" />
            ABORT
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App