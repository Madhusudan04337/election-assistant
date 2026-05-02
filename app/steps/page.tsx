import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { StepProgress } from '@/components/StepProgress'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StepsListClient } from '@/components/StepsListClient'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'The 12 Steps of Voting | Voter Education Guide',
  description: 'Learn the complete voting process in 12 easy steps. From eligibility check to casting your vote.',
}

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
            <StepsListClient />
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
