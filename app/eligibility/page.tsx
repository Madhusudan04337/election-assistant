'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

interface EligibilityQuestion {
  id: string
  question: string
  options: { label: string; value: boolean }[]
}

const ELIGIBILITY_QUESTIONS: EligibilityQuestion[] = [
  {
    id: 'citizenship',
    question: 'Are you an Indian citizen?',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  {
    id: 'age',
    question: 'Are you at least 18 years old?',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  {
    id: 'soundMind',
    question: 'Are you of sound mind?',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  {
    id: 'crime',
    question: 'Have you NOT been convicted of any disqualifying crime?',
    options: [
      { label: 'Yes (Not convicted)', value: true },
      { label: 'No (Convicted)', value: false },
    ],
  },
  {
    id: 'resident',
    question: 'Do you reside in the constituency where you want to vote?',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
]

interface EligibilityResult {
  eligible: boolean
  reasons: string[]
}

export default function EligibilityPage() {
  const [responses, setResponses] = useState<Record<string, boolean | null>>({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<EligibilityResult | null>(null)

  const handleChange = (questionId: string, value: boolean) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const calculateEligibility = () => {
    const reasons: string[] = []
    let eligible = true

    if (responses.citizenship === false) {
      reasons.push('You must be an Indian citizen to vote.')
      eligible = false
    }

    if (responses.age === false) {
      reasons.push('You must be at least 18 years old to vote.')
      eligible = false
    }

    if (responses.soundMind === false) {
      reasons.push('You must be of sound mind to vote.')
      eligible = false
    }

    if (responses.crime === false) {
      reasons.push('You may be disqualified from voting due to criminal convictions.')
      eligible = false
    }

    if (responses.resident === false) {
      reasons.push('You must reside in the constituency where you want to vote.')
      eligible = false
    }

    return { eligible, reasons }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const calculatedResult = calculateEligibility()
    setResult(calculatedResult)
    setSubmitted(true)
  }

  const isFormComplete = ELIGIBILITY_QUESTIONS.every(
    (q) => responses[q.id] !== undefined && responses[q.id] !== null
  )

  const resetForm = () => {
    setResponses({})
    setSubmitted(false)
    setResult(null)
  }

  return (
    <>
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary/5 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Check Your Eligibility to Vote
            </h1>
            <p className="text-xl text-foreground/70">
              Answer a few simple questions to find out if you're eligible to vote in Indian elections
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!submitted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Quiz</CardTitle>
                  <CardDescription>
                    Answer all questions to check your voting eligibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {ELIGIBILITY_QUESTIONS.map((question, index) => (
                      <div key={question.id} className="space-y-3">
                        <Label className="text-base font-semibold text-foreground">
                          {index + 1}. {question.question}
                        </Label>
                        <RadioGroup value={responses[question.id]?.toString() || ''}>
                          {question.options.map((option) => (
                            <div
                              key={`${question.id}-${option.value}`}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={option.value.toString()}
                                id={`${question.id}-${option.value}`}
                                onClick={() => handleChange(question.id, option.value)}
                              />
                              <Label
                                htmlFor={`${question.id}-${option.value}`}
                                className="font-normal cursor-pointer"
                              >
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}

                    <div className="flex gap-4 pt-6">
                      <Button
                        type="submit"
                        disabled={!isFormComplete}
                        size="lg"
                        className="w-full md:w-auto"
                      >
                        Check Eligibility
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : result ? (
              <Card
                className={`border-l-4 ${
                  result.eligible
                    ? 'border-l-green-500 bg-green-50'
                    : 'border-l-red-500 bg-red-50'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {result.eligible ? (
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    ) : (
                      <AlertCircle className="w-8 h-8 text-red-600" />
                    )}
                    <div>
                      <CardTitle
                        className={result.eligible ? 'text-green-900' : 'text-red-900'}
                      >
                        {result.eligible
                          ? 'You Are Eligible to Vote!'
                          : 'You Are Not Eligible to Vote'}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {result.eligible ? (
                    <div className="space-y-4">
                      <p className="text-green-900 font-medium">
                        Great news! You meet all the requirements to vote. Here's what you can do next:
                      </p>
                      <ul className="space-y-2 text-green-900">
                        <li className="flex gap-2 items-start">
                          <span className="font-bold">1.</span>
                          <span>
                            <strong>Check Your Voter Status:</strong> Verify if you're already registered
                            or if you need to register.
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="font-bold">2.</span>
                          <span>
                            <strong>Register to Vote:</strong> If not registered, apply online or at your
                            local VRO office.
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="font-bold">3.</span>
                          <span>
                            <strong>Learn About Voting:</strong> Go through our 12-step voting guide to
                            prepare.
                          </span>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-red-900 font-medium">
                        Based on your answers, you may not be eligible to vote. Here's why:
                      </p>
                      <ul className="space-y-2">
                        {result.reasons.map((reason, index) => (
                          <li key={index} className="flex gap-2 items-start text-red-900">
                            <span className="text-red-600 font-bold flex-shrink-0">•</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 p-4 bg-yellow-100 text-yellow-900 rounded-lg border border-yellow-300">
                        <p className="font-medium mb-2">Need Help?</p>
                        <p className="text-sm">
                          If you believe you should be eligible, contact your local Voter Registration Office
                          or call the Election Commission helpline at 1800-234-1155 for assistance.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-6">
                    <Button onClick={resetForm} variant="outline" className="flex-1">
                      Retake Quiz
                    </Button>
                    {result.eligible && (
                      <Button
                        onClick={() => (window.location.href = '/step/1')}
                        className="flex-1"
                      >
                        Start Learning
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility Criteria Explained</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Citizenship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    You must be a citizen of India. Dual citizenship or permanent residence status does not
                    qualify you to vote unless you hold Indian citizenship.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Age Requirement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    You must be at least 18 years old on the qualifying date. You can register before
                    turning 18, and your registration becomes active once you turn 18.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sound Mind</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    You must not be disqualified as a person &quot;of unsound mind&quot; under Indian law.
                    This is determined by legal and medical standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Criminal Disqualification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    Certain criminal convictions can disqualify you from voting. The nature of the crime and
                    sentence determine the disqualification period.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Residency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    You must be ordinarily resident in the constituency where you want to vote. Residency is
                    determined by where you currently live and have resided.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
