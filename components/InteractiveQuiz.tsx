'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react'

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface InteractiveQuizProps {
  questions: QuizQuestion[]
  stepTitle?: string
}

export function InteractiveQuiz({ questions, stepTitle = 'Quick Quiz' }: InteractiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  const handleSelectAnswer = (index: number) => {
    if (!showExplanation) {
      setSelectedAnswer(index)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    if (isCorrect) {
      setScore(score + 1)
    }
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <Card className="w-full bg-gradient-to-br from-green-50 to-accent/10 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle2 className="w-6 h-6" />
            Quiz Completed!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700 mb-2">{percentage}%</div>
            <p className="text-lg font-semibold text-green-700">
              You got {score} out of {questions.length} correct!
            </p>
            <p className="text-green-600 mt-2">
              {percentage === 100
                ? "Perfect score! You're a voting expert!"
                : percentage >= 70
                  ? "Great job! You're well-prepared."
                  : 'Good effort! Review the content to strengthen your knowledge.'}
            </p>
          </div>
          <Button onClick={handleRestart} className="w-full bg-green-600 hover:bg-green-700">
            Retake Quiz
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{stepTitle}</CardTitle>
            <CardDescription>
              Question {currentQuestion + 1} of {questions.length}
            </CardDescription>
          </div>
          <div className="text-sm font-semibold text-primary">
            Score: {score}/{questions.length}
          </div>
        </div>
        <div className="mt-4 h-2 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-4">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isTheCorrectAnswer = index === question.correctAnswer

              let buttonClass =
                'w-full p-4 text-left rounded-lg border-2 transition-all font-medium '
              if (showExplanation) {
                if (isTheCorrectAnswer) {
                  buttonClass +=
                    'border-green-500 bg-green-50 text-green-900 cursor-default'
                } else if (isSelected && !isCorrect) {
                  buttonClass +=
                    'border-red-500 bg-red-50 text-red-900 cursor-default'
                } else {
                  buttonClass += 'border-border bg-muted text-muted-foreground cursor-default'
                }
              } else {
                buttonClass += isSelected
                  ? 'border-primary bg-primary/10 text-primary cursor-pointer'
                  : 'border-border bg-card text-foreground cursor-pointer hover:border-primary'
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showExplanation && isTheCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                    {showExplanation && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {showExplanation && (
          <div
            className={`p-4 rounded-lg border-l-4 ${
              isCorrect
                ? 'border-green-500 bg-green-50 text-green-900'
                : 'border-red-500 bg-red-50 text-red-900'
            }`}
          >
            <div className="flex gap-2">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-semibold mb-1">
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                <p className="text-sm">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          {!showExplanation ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="w-full"
            >
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="w-full bg-green-600 hover:bg-green-700">
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
