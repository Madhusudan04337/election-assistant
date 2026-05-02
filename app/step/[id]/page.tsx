import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { StepProgress } from '@/components/StepProgress'
import { InteractiveQuiz } from '@/components/InteractiveQuiz'
import { STEPS_DATA } from '@/lib/steps-data'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

interface StepPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return STEPS_DATA.map((step) => ({
    id: step.id.toString(),
  }))
}

export async function generateMetadata(props: StepPageProps) {
  const params = await props.params
  const stepId = parseInt(params.id)
  const step = STEPS_DATA.find((s) => s.id === stepId)

  if (!step) {
    return {
      title: 'Step Not Found',
      description: "The voting step you're looking for does not exist.",
    }
  }

  return {
    title: `Step ${step.id}: ${step.title} | Voter Education Guide`,
    description: step.description,
  }
}

export default async function StepPage(props: StepPageProps) {
  const params = await props.params
  const stepId = parseInt(params.id)
  const step = STEPS_DATA.find((s) => s.id === stepId)

  if (!step) {
    notFound()
  }

  const previousStep = stepId > 1 ? STEPS_DATA.find((s) => s.id === stepId - 1) : null
  const nextStep = stepId < 12 ? STEPS_DATA.find((s) => s.id === stepId + 1) : null

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-primary">
              Step {step.id} of 12
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((step.id / 12) * 100)}% Complete
            </span>
          </div>
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${(step.id / 12) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <StepProgress currentStep={step.id} vertical={true} />
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold">
                  {step.id}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {step.title}
                  </h1>
                  <p className="text-lg text-foreground/70">{step.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              {step.sections.map((section, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">{section.content}</p>
                    {section.points && (
                      <ul className="space-y-3">
                        {section.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex gap-3 items-start">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <InteractiveQuiz questions={step.quiz} stepTitle={`Step ${step.id} Quiz`} />
            </div>

            <div className="flex gap-4 mb-8">
              {previousStep ? (
                <Link href={`/step/${previousStep.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous: {previousStep.shortTitle}
                  </Button>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextStep ? (
                <Link href={`/step/${nextStep.id}`} className="flex-1">
                  <Button className="w-full">
                    Next: {nextStep.shortTitle}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              ) : (
                <Link href="/" className="flex-1">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Back to Home
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}