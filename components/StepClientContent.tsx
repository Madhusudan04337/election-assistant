'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StepProgress } from '@/components/StepProgress'
import { InteractiveQuiz } from '@/components/InteractiveQuiz'
import { StepContent } from '@/lib/steps-data'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, CheckCircle2, Lock, PartyPopper } from 'lucide-react'
import { useProgress } from '@/hooks/use-progress'
import { useToast } from '@/hooks/use-toast'

interface StepClientContentProps {
  step: StepContent
  previousStep: StepContent | null
  nextStep: StepContent | null
}

export function StepClientContent({ step, previousStep, nextStep }: StepClientContentProps) {
  const router = useRouter()
  const { toast } = useToast()
  const { isStepLocked, unlockNextStep, isLoading, maxUnlockedStep } = useProgress()

  useEffect(() => {
    if (!isLoading && isStepLocked(step.id)) {
      router.push(`/step/${maxUnlockedStep}`)
    } else if (!isLoading) {
      // Auto-scroll to quiz when clicking a step, as requested
      const timer = setTimeout(() => {
        const quizElement = document.getElementById('step-quiz-section')
        if (quizElement) {
          quizElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isLoading, isStepLocked, step.id, maxUnlockedStep, router])

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (isStepLocked(step.id)) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-muted/20 rounded-2xl border-2 border-dashed border-border/50">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center shadow-inner">
            <Lock className="w-10 h-10 text-muted-foreground/50" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
            <Lock className="w-4 h-4" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-3">This Step is Locked</h2>
        <p className="text-lg text-muted-foreground max-w-md mb-8">
          To access <span className="font-semibold text-foreground">"{step.title}"</span>, 
          you first need to complete all previous steps and their quizzes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg"
            variant="default"
            onClick={() => router.push(`/step/${maxUnlockedStep}`)}
            className="px-8 shadow-md"
          >
            Go to My Current Step ({maxUnlockedStep})
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => router.push('/')}
          >
            Back to Overview
          </Button>
        </div>
      </div>
    )
  }

  const handleQuizComplete = () => {
    const isActuallyNewUnlock = nextStep && isStepLocked(nextStep.id)
    unlockNextStep(step.id)
    
    if (isActuallyNewUnlock && nextStep) {
      toast({
        title: "Awesome Progress! 🎯",
        description: `Step ${nextStep.id}: ${nextStep.shortTitle} is now unlocked and ready for you.`,
        variant: "default",
        className: "bg-primary text-primary-foreground border-none",
      })
      
      setTimeout(() => {
        document.getElementById('next-step-button')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 500)
    }
  }

  const progressPercentage = (maxUnlockedStep / 12) * 100

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <div className="sticky top-20 space-y-6">
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Overall Progress</span>
              <span className="text-xs font-bold text-primary">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-out" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <StepProgress currentStep={step.id} vertical={true} />
        </div>
      </aside>

      <main className="lg:col-span-3">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-xl ring-4 ring-primary/10">
              {step.id}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">Step {step.id} of 12</span>
                {maxUnlockedStep > step.id && (
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Completed
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                {step.title}
              </h1>
            </div>
          </div>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
            {step.description}
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {step.sections.map((section, index) => (
            <Card key={index} className="border-border/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              <div className="w-full h-1 bg-muted group-hover:bg-primary/20 transition-colors" />
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                  {section.content}
                </p>
                {section.points && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-muted/50 transition-all">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                        <span className="text-foreground/90 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="step-quiz-section" className="mb-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          <div className="relative z-10 bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50">
            <InteractiveQuiz 
              questions={step.quiz} 
              stepTitle={`Step ${step.id} Assessment`} 
              onComplete={handleQuizComplete}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          {previousStep ? (
            <Link href={`/step/${previousStep.id}`} className="flex-1">
              <Button variant="outline" className="w-full py-8 text-lg border-2 hover:bg-muted/50 font-bold group">
                <ChevronLeft className="w-6 h-6 mr-3 transition-transform group-hover:-translate-x-1" />
                Previous Step
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          
          {nextStep ? (
            <div className="flex-1" id="next-step-button">
              <Button 
                className={`w-full py-8 text-xl font-black group transition-all duration-500 relative overflow-hidden shadow-lg ${
                  !isStepLocked(nextStep.id) 
                    ? 'bg-green-600 hover:bg-green-700 text-white scale-[1.02] shadow-green-200' 
                    : 'bg-muted border-2 border-border text-muted-foreground'
                }`}
                disabled={isStepLocked(nextStep.id)}
                asChild={!isStepLocked(nextStep.id)}
              >
                {!isStepLocked(nextStep.id) ? (
                  <Link href={`/step/${nextStep.id}`}>
                    Continue to Step {nextStep.id}
                    <ChevronRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    Step {nextStep.id} Locked
                    <Lock className="w-5 h-5 opacity-40" />
                  </span>
                )}
              </Button>
              {isStepLocked(nextStep.id) && (
                <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/60">
                  <PartyPopper className="w-4 h-4 animate-bounce" />
                  <span className="text-xs font-bold uppercase tracking-widest">Complete the quiz to advance</span>
                </div>
              )}
            </div>
          ) : (
            <Link href="/" className="flex-1">
              <Button className="w-full bg-green-600 hover:bg-green-700 py-8 text-xl font-black shadow-xl shadow-green-100">
                Finish Learning Journey
                <PartyPopper className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}
