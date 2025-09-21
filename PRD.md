# Planning Guide

A cybersecurity quiz application that tests advanced threat knowledge for experienced professionals through an engaging terminal-inspired interface.

**Experience Qualities**: 
1. **Professional** - Clean, focused interface that respects the user's expertise level
2. **Challenging** - Advanced content that pushes knowledge boundaries without frustration
3. **Terminal-authentic** - Monochrome aesthetic that feels like a security professional's workspace

**Complexity Level**: Light Application (multiple features with basic state)
- Single-page quiz with interactive cards, scoring, and multiple game modes without requiring complex state management or user accounts

## Essential Features

**Start Screen with Branding**
- Functionality: Display app title, tagline, and entry point
- Purpose: Set professional tone and provide clear entry point
- Trigger: Page load
- Progression: Load app → Display "Cyber Quiz" title → Show tagline "Sharpen Your Edge in Seconds" → Present "Start Quiz" button
- Success criteria: Users immediately understand the app's purpose and can initiate the quiz

**Advanced Threat Card Quiz**
- Functionality: Present 5 cybersecurity threats with multiple choice answers
- Purpose: Test and reinforce advanced cybersecurity knowledge
- Trigger: "Start Quiz" button click
- Progression: Start quiz → Display threat name card → Show 4 definition options → User selects answer → Show instant feedback → Update score → Next card → Complete after 5 questions
- Success criteria: Users can progress through all questions with immediate feedback and accurate scoring

**Real-time Scoring and Feedback**
- Functionality: Track correct answers and provide immediate response validation
- Purpose: Maintain engagement and provide learning reinforcement
- Trigger: Answer selection
- Progression: User selects answer → Validate correctness → Display feedback (correct/incorrect with explanation) → Update running score display → Continue to next question
- Success criteria: Score accurately reflects performance and feedback helps learning

**Game Control Options**
- Functionality: Retry quiz and shuffle question order
- Purpose: Enable repeated practice and varied experience
- Trigger: "Retry" or "Shuffle" button clicks
- Progression: Complete quiz → Show final score → Present "Retry" and "Shuffle" options → Reset quiz state → Randomize questions (if shuffle) → Return to first question
- Success criteria: Users can seamlessly restart or vary the quiz experience

**Optional Challenge Timer**
- Functionality: Add time pressure for advanced difficulty
- Purpose: Simulate real-world decision-making pressure
- Trigger: Timer mode toggle before starting
- Progression: Enable timer → Start quiz → Display countdown per question → Auto-advance on timeout → Include timing in final score
- Success criteria: Timer adds challenge without breaking core quiz flow

## Edge Case Handling

- **No Selection Timeout**: Auto-advance to next question with incorrect marking if timer expires
- **Rapid Clicking**: Debounce answer selections to prevent double-submission
- **Browser Refresh**: Maintain quiz state using localStorage for session persistence
- **Empty State**: Graceful handling if question data is missing or corrupted

## Design Direction

The design should feel like a professional security analyst's terminal environment - serious, focused, and uncluttered with high contrast elements that demand attention and respect the user's expertise level.

## Color Selection

Monochrome palette (analogous grayscale with terminal green accents) to create an authentic command-line interface feeling that cybersecurity professionals associate with their daily tools.

- **Primary Color**: Terminal Green (oklch(0.7 0.15 142)) - Communicates active systems and successful operations
- **Secondary Colors**: Charcoal Gray (oklch(0.2 0 0)) for backgrounds, Light Gray (oklch(0.8 0 0)) for secondary text
- **Accent Color**: Bright Green (oklch(0.8 0.2 142)) for CTAs and success states, creating urgency and action
- **Foreground/Background Pairings**: 
  - Background (Dark Charcoal #1a1a1a): Light Green text (oklch(0.85 0.1 142)) - Ratio 12.1:1 ✓
  - Card (Medium Gray #2a2a2a): White text (oklch(1 0 0)) - Ratio 9.8:1 ✓
  - Primary (Terminal Green): Black text (oklch(0 0 0)) - Ratio 8.2:1 ✓
  - Accent (Bright Green): Black text (oklch(0 0 0)) - Ratio 10.1:1 ✓

## Font Selection

Monospace typography to reinforce the terminal aesthetic while maintaining excellent readability for technical content that cybersecurity professionals work with daily.

- **Typographic Hierarchy**: 
  - H1 (App Title): JetBrains Mono Bold/32px/tight letter spacing
  - H2 (Question Headers): JetBrains Mono Medium/20px/normal spacing  
  - Body (Questions/Answers): JetBrains Mono Regular/16px/relaxed line height
  - Small (Score/Timer): JetBrains Mono Regular/14px/tight spacing

## Animations

Subtle, functional animations that mimic terminal responsiveness - quick state changes and smooth transitions that feel like a professional tool rather than flashy effects.

- **Purposeful Meaning**: Animations should feel like terminal operations - quick, precise, and purposeful
- **Hierarchy of Movement**: Focus on state transitions (card flips, score updates) and feedback animations (correct/incorrect indicators)

## Component Selection

- **Components**: Card for quiz questions, Button for primary actions, Badge for scoring, Alert for feedback, Progress for quiz advancement
- **Customizations**: Terminal-style borders, monospace typography override, green accent colors on interactive elements
- **States**: Buttons have distinct hover states with green highlights, cards have selected/unselected visual feedback, progress shows completion
- **Icon Selection**: Terminal-style icons - play arrow for start, refresh for retry, shuffle for randomize, clock for timer
- **Spacing**: Consistent 4/8/16px grid using Tailwind spacing, generous padding for readability
- **Mobile**: Stack cards vertically, full-width buttons, preserve terminal aesthetic with smaller text sizes