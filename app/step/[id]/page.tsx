import { notFound } from 'next/navigation'
import { StepClientContent } from '@/components/StepClientContent'
import { STEPS_DATA } from '@/lib/steps-data'

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
        <StepClientContent 
          step={step} 
          previousStep={previousStep || null} 
          nextStep={nextStep || null} 
        />
      </div>
    </div>
  )
}