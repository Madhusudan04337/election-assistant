'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Check, Lock } from 'lucide-react'
import { useProgress } from '@/hooks/use-progress'

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
  const { isStepLocked, isLoading, maxUnlockedStep, resetProgress } = useProgress()

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
          const isCompleted = step.id < maxUnlockedStep
          const isCurrent = step.id === currentStep
          const isLocked = !isLoading && isStepLocked(step.id)

          const content = (
            <div
              className={`p-3 rounded-lg border transition-all duration-300 ${
                isCurrent
                  ? 'bg-primary text-white border-primary shadow-md scale-[1.02]'
                  : isCompleted
                    ? 'bg-green-50 border-green-200 text-green-900 hover:bg-green-100'
                    : isLocked
                      ? 'bg-muted/40 border-border/50 text-muted-foreground/40 cursor-not-allowed opacity-60'
                      : 'bg-card border-border text-foreground hover:border-primary/50 hover:bg-accent/5 cursor-pointer'
              } ${!isCurrent ? 'hidden lg:block' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black shadow-sm ${
                    isCurrent
                      ? 'bg-white text-primary'
                      : isCompleted
                        ? 'bg-green-600 text-white'
                        : isLocked
                          ? 'bg-border/50 text-muted-foreground/30'
                          : 'bg-primary/10 text-primary'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" strokeWidth={3} />
                  ) : isLocked ? (
                    <Lock className="w-3.5 h-3.5" />
                  ) : (
                    step.id
                  )}
                </div>
                <div className="flex flex-col">
                  <span className={`font-bold text-sm tracking-tight ${isLocked ? 'opacity-40' : ''}`}>
                    {step.shortTitle}
                  </span>
                  {!isCurrent && isCompleted && <span className="text-[9px] font-black uppercase opacity-60">Completed</span>}
                  {isCurrent && <span className="text-[9px] font-black uppercase opacity-80">Active Step</span>}
                </div>
                {isLocked && <Lock className="w-3.5 h-3.5 ml-auto opacity-20" />}
                {isCurrent && (
                   <div className="ml-auto flex items-center gap-1 lg:hidden">
                      <span className="text-[10px] font-black bg-white/20 px-2 py-0.5 rounded uppercase">Step {step.id}/12</span>
                   </div>
                )}
              </div>
            </div>
          )

          if (isLocked) {
            return <div key={step.id} className={!isCurrent ? 'hidden lg:block' : ''}>{content}</div>
          }

          return (
            <Link key={step.id} href={`/step/${step.id}`} className={!isCurrent ? 'hidden lg:block' : ''}>
              {content}
            </Link>
          )
        })}
        
        <div className="pt-4 border-t border-border/50 mt-4">
          <button
            onClick={() => {
              if (confirm('Are you sure you want to reset all your progress? This will lock all steps again.')) {
                resetProgress()
                window.location.href = '/step/1'
              }
            }}
            className="w-full py-2 px-4 rounded-lg text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 hover:text-red-500 hover:bg-red-50 transition-all border border-transparent hover:border-red-100"
          >
            Reset All Progress
          </button>
        </div>
      </div>
    )
  }

  // Horizontal progress for homepage
  return (
    <div className="w-full bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-black text-foreground tracking-tight">Voter Journey Progress</h3>
        {!isLoading && (
          <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
            {Math.round((maxUnlockedStep / 12) * 100)}% Complete
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
        {STEPS.map((step) => {
          const isCompleted = step.id < maxUnlockedStep
          const isCurrent = step.id === currentStep
          const isLocked = !isLoading && isStepLocked(step.id)

          const content = (
            <div
              className={`aspect-square rounded-xl border-2 flex items-center justify-center font-black text-sm transition-all duration-300 ${
                isCurrent
                  ? 'bg-primary border-primary text-white shadow-lg scale-110'
                  : isCompleted
                    ? 'bg-green-100 border-green-500 text-green-900 hover:scale-105'
                    : isLocked
                      ? 'bg-muted/30 border-border/50 text-muted-foreground/30 cursor-not-allowed'
                      : 'bg-card border-border text-foreground hover:border-primary hover:scale-105 cursor-pointer'
              }`}
            >
              {isCompleted ? (
                <Check className="w-5 h-5" strokeWidth={3} />
              ) : isLocked ? (
                <Lock className="w-4 h-4" />
              ) : (
                <span>{step.id}</span>
              )}
            </div>
          )

          if (isLocked) {
            return (
              <div key={step.id} title={isLocked ? `${step.title} (Locked)` : step.title}>
                {content}
              </div>
            )
          }

          return (
            <Link key={step.id} href={`/step/${step.id}`} title={step.title}>
              {content}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
