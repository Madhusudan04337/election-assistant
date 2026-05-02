import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { QuickLinks } from '@/components/QuickLinks'
import { StepProgress } from '@/components/StepProgress'
import { FAQSection } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2, Users, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Voter Education Guide - Learn How to Vote in India',
  description:
    'A comprehensive guide for first-time voters in India. Learn about voter eligibility, registration, polling booths, and the complete voting process in 12 easy steps.',
}

export default function Home() {
  const homepageFAQ = [
    {
      category: 'Getting Started',
      question: 'What is this website about?',
      answer:
        'This is a comprehensive voter education guide for first-time voters in India. We break down the entire voting process into 12 easy-to-understand steps.',
    },
    {
      category: 'Getting Started',
      question: 'Who should use this guide?',
      answer:
        'This guide is ideal for first-time voters, but anyone wanting to refresh their knowledge about the voting process can benefit from it.',
    },
    {
      category: 'Features',
      question: 'What features does this guide have?',
      answer:
        'We offer step-by-step guides, eligibility checks, polling booth finder, quizzes to test your knowledge, FAQs, and helpful resources.',
    },
  ]

  return (
    <>
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  Your Guide to Voting in India
                </h1>
                <p className="text-xl text-foreground/80 mb-8 text-balance">
                  A simple, step-by-step guide for first-time voters. Learn everything you need to know
                  about the voting process, from eligibility to casting your vote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/step/1">
                    <Button size="lg" className="w-full sm:w-auto">
                      Start Learning
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/eligibility">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Check Eligibility
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hero Image - Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Steps to Voting</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Free & Open</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">Simple</div>
                  <p className="text-sm text-muted-foreground">Easy Language</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Fast</div>
                  <p className="text-sm text-muted-foreground">Quick Learning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quick Actions</h2>
              <p className="text-lg text-foreground/70">
                Find what you need in seconds
              </p>
            </div>
            <QuickLinks />
          </div>
        </section>

        {/* The 12 Steps Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Voting Journey</h2>
              <p className="text-lg text-foreground/70">
                12 simple steps to understand the complete voting process
              </p>
            </div>
            <StepProgress currentStep={1} vertical={true} />
            <div className="mt-8 text-center">
              <Link href="/step/1">
                <Button size="lg">
                  Start with Step 1: Eligibility Check
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Vote Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why Your Vote Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Your Voice Counts</h3>
                <p className="text-foreground/70">
                  Your vote is your democratic right. Every vote contributes to shaping the future
                  of our nation and your community.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Be Informed</h3>
                <p className="text-foreground/70">
                  Understanding the voting process helps you participate confidently and make informed
                  decisions about your country's future.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Make a Difference</h3>
                <p className="text-foreground/70">
                  When more people vote, democracy becomes stronger. Your participation encourages
                  others to vote too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground/70">
                Quick answers to common questions
              </p>
            </div>
            <FAQSection items={homepageFAQ} />
            <div className="mt-8 text-center">
              <Link href="/faq">
                <Button variant="outline" size="lg">
                  View All FAQs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Become a Voter?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your 12-step voting journey today and learn everything you need to know.
            </p>
            <Link href="/step/1">
              <Button size="lg" variant="secondary">
                Begin the Learning Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
