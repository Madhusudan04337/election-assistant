import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { StepProgress } from '@/components/StepProgress'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'The 12 Steps of Voting | Voter Education Guide',
  description: 'Learn the complete voting process in 12 easy steps. From eligibility check to casting your vote.',
}

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

export default function StepsPage() {
  return (
    <>
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary/5 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The 12 Steps of Voting
            </h1>
            <p className="text-xl text-foreground/70">
              A complete guide to understanding the voting process from start to finish
            </p>
          </div>
        </section>

        {/* Visual Progress */}
        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StepProgress />
          </div>
        </section>

        {/* Step Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STEP_SUMMARIES.map((step) => (
                <Link key={step.id} href={`/step/${step.id}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
                          {step.id}
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">{step.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Begin with Step 1: Eligibility Check and work through the complete voting journey.
            </p>
            <Link href="/step/1">
              <Button size="lg" variant="secondary">
                Start with Step 1
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">How to Use This Guide</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Go at Your Own Pace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    You can complete all steps at once or revisit them whenever you need. Each step is
                    independent and can be accessed from the progress tracker on the left.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interactive Quizzes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    Each step includes a quiz to test your understanding. Use these quizzes to reinforce
                    what you've learned.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ask Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    If you have questions not covered in this guide, visit our{' '}
                    <Link href="/faq" className="text-primary font-semibold hover:underline">
                      FAQ page
                    </Link>{' '}
                    or{' '}
                    <Link href="/contact" className="text-primary font-semibold hover:underline">
                      contact us
                    </Link>
                    .
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
