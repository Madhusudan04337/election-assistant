'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Lock, CheckCircle2 } from 'lucide-react'
import { useProgress } from '@/hooks/use-progress'

const STEP_SUMMARIES = [
  {
    id: 1,
    title: 'Eligibility Check',
    description: 'Am I eligible to vote? Learn the requirements to qualify.',
  },
  {
    id: 2,
    title: 'Voter Registration',
    description: 'How to register as a voter online or offline.',
  },
  {
    id: 3,
    title: 'Check Voter Details',
    description: 'Find your voter ID and verify your information.',
  },
  {
    id: 4,
    title: 'Election Timeline',
    description: 'Important dates and schedule for the election.',
  },
  {
    id: 5,
    title: 'Polling Day Prep',
    description: 'Get ready for election day with helpful tips.',
  },
  {
    id: 6,
    title: 'Polling Booth',
    description: 'What you will find at the polling booth.',
  },
  {
    id: 7,
    title: 'Identity Verification',
    description: 'Understanding the ID verification process.',
  },
  {
    id: 8,
    title: 'Finger Inking',
    description: 'Learn about the indelible ink marking process.',
  },
  {
    id: 9,
    title: 'Voter Register Entry',
    description: 'How your voting is recorded in the register.',
  },
  {
    id: 10,
    title: 'Voting Area',
    description: 'The private voting booth setup.',
  },
  {
    id: 11,
    title: 'Cast Your Vote',
    description: 'How to actually vote on election day.',
  },
  {
    id: 12,
    title: 'Results',
    description: 'Counting votes and election results.',
  },
]

export function StepsListClient() {
  const { isStepLocked, isLoading, maxUnlockedStep } = useProgress()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {STEP_SUMMARIES.map((step) => {
        const isLocked = !isLoading && isStepLocked(step.id)
        const isCompleted = step.id < maxUnlockedStep
        const isCurrent = step.id === maxUnlockedStep

        const content = (
          <Card className={`h-full transition-all duration-300 group border-border/60 shadow-sm relative overflow-hidden ${
            isLocked 
              ? 'opacity-70 grayscale bg-muted/20' 
              : 'hover:shadow-xl hover:border-primary/50 cursor-pointer hover:-translate-y-1'
          } ${isCompleted ? 'bg-green-50/10 border-green-200' : ''}`}>
            {isCurrent && (
              <div className="absolute top-0 right-0 p-2">
                <div className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded-bl-lg uppercase tracking-tighter animate-pulse">
                  Current
                </div>
              </div>
            )}
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black shadow-lg transition-transform group-hover:scale-110 ${
                  isCurrent
                    ? 'bg-primary text-white'
                    : isCompleted
                      ? 'bg-green-600 text-white'
                      : isLocked
                        ? 'bg-muted text-muted-foreground/40'
                        : 'bg-primary/10 text-primary'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-7 h-7" /> : step.id}
                </div>
                {isLocked ? (
                  <Lock className="w-6 h-6 text-muted-foreground/30" />
                ) : (
                  <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${
                    isCompleted ? 'text-green-600' : 'text-muted-foreground/50 group-hover:text-primary'
                  }`} />
                )}
              </div>
              <CardTitle className={`text-xl font-bold tracking-tight ${isLocked ? 'text-muted-foreground opacity-50' : 'text-foreground'}`}>
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm leading-relaxed ${isLocked ? 'text-muted-foreground/40 italic' : 'text-foreground/60'}`}>
                {isLocked ? `Finish Step ${step.id - 1} to unlock this module.` : step.description}
              </p>
              {isCompleted && (
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3" /> Step Completed
                </div>
              )}
            </CardContent>
          </Card>
        )

        if (isLocked) {
          return <div key={step.id}>{content}</div>
        }

        return (
          <Link key={step.id} href={`/step/${step.id}`}>
            {content}
          </Link>
        )
      })}
    </div>
  )
}
