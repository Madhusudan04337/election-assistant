'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Check } from 'lucide-react'

interface StepProgressProps {
  currentStep?: number
  vertical?: boolean
}

const STEPS = [
  { id: 1, title: 'Eligibility Check', shortTitle: 'Eligibility' },
  { id: 2, title: 'Voter Registration', shortTitle: 'Registration' },
  { id: 3, title: 'Voter Details Check', shortTitle: 'Voter Details' },
  { id: 4, title: 'Election Timeline', shortTitle: 'Timeline' },
  { id: 5, title: 'Polling Day Prep', shortTitle: 'Day Prep' },
  { id: 6, title: 'Polling Booth', shortTitle: 'Booth' },
  { id: 7, title: 'Identity Check', shortTitle: 'ID Check' },
  { id: 8, title: 'Finger Inking', shortTitle: 'Inking' },
  { id: 9, title: 'Voter Register', shortTitle: 'Register' },
  { id: 10, title: 'Voting Area', shortTitle: 'Area' },
  { id: 11, title: 'Cast Your Vote', shortTitle: 'Vote' },
  { id: 12, title: 'Results', shortTitle: 'Results' },
]

export function StepProgress({ currentStep, vertical = false }: StepProgressProps) {
  const pathname = usePathname()

  // Extract current step from pathname if not provided
  if (!currentStep && pathname.startsWith('/step/')) {
    const stepNum = parseInt(pathname.match(/\d+/)?.[0] || '0')
    if (stepNum > 0) {
      currentStep = stepNum
    }
  }

  if (vertical) {
    return (
      <div className="space-y-2 w-full">
        {STEPS.map((step) => {
          const isCompleted = currentStep && step.id < currentStep
          const isCurrent = step.id === currentStep
          const isUpcoming = currentStep && step.id > currentStep

          return (
            <Link key={step.id} href={`/step/${step.id}`}>
              <div
                className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                  isCurrent
                    ? 'bg-primary text-white border-primary'
                    : isCompleted
                      ? 'bg-green-50 border-green-200 text-green-900'
                      : isUpcoming
                        ? 'bg-muted border-border text-muted-foreground'
                        : 'bg-card border-border text-foreground hover:border-primary hover:bg-accent hover:bg-opacity-10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                      isCurrent
                        ? 'bg-white text-primary'
                        : isCompleted
                          ? 'bg-green-600 text-white'
                          : 'bg-border'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  <span className="font-medium text-sm">{step.shortTitle}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }

  // Horizontal progress for homepage
  return (
    <div className="w-full bg-white rounded-lg border border-border p-4">
      <h3 className="text-sm font-semibold text-foreground mb-4">The 12 Steps of Voting</h3>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
        {STEPS.map((step, index) => {
          const isCompleted = currentStep && step.id < currentStep
          const isCurrent = step.id === currentStep

          return (
            <Link key={step.id} href={`/step/${step.id}`} title={step.title}>
              <div
                className={`aspect-square rounded-lg border-2 flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-primary border-primary text-white shadow-lg'
                    : isCompleted
                      ? 'bg-green-100 border-green-500 text-green-900'
                      : 'bg-card border-border text-foreground hover:border-primary'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
