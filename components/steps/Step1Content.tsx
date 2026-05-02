'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, XCircle } from 'lucide-react'
import Link from 'next/link'

export function Step1Content() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Are You Eligible to Vote?</h1>
        <p className="text-xl text-muted-foreground">
          Before you can vote, you need to check if you meet the requirements to be a voter in India.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Can Vote Card */}
        <Card className="p-6 border-l-4 border-l-accent">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-8 h-8 text-accent" />
            <h2 className="text-2xl font-bold text-accent">You CAN Vote If:</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-accent text-xl font-bold">✓</span>
              <span className="text-foreground">You are a citizen of India</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent text-xl font-bold">✓</span>
              <span className="text-foreground">You are at least 18 years old</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent text-xl font-bold">✓</span>
              <span className="text-foreground">You are a resident of the area where you want to vote</span>
            </li>
          </ul>
        </Card>

        {/* Cannot Vote Card */}
        <Card className="p-6 border-l-4 border-l-destructive">
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-8 h-8 text-destructive" />
            <h2 className="text-2xl font-bold text-destructive">You CANNOT Vote If:</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-destructive text-xl font-bold">✗</span>
              <span className="text-foreground">You are not an Indian citizen</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive text-xl font-bold">✗</span>
              <span className="text-foreground">You are under 18 years old</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive text-xl font-bold">✗</span>
              <span className="text-foreground">You have been convicted of certain crimes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive text-xl font-bold">✗</span>
              <span className="text-foreground">You are not a resident of the area</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive text-xl font-bold">✗</span>
              <span className="text-foreground">You have been legally disqualified from voting</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Tip Box */}
      <Card className="p-6 bg-secondary/10 border-l-4 border-l-secondary">
        <div className="flex gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-bold text-lg mb-2">First-Timer Tip:</h3>
            <p className="text-foreground">
              You don't need to own property, have a job, or be rich to vote! Age, citizenship, and living in the area are the only things that matter. If you're 18 and an Indian citizen, you can vote!
            </p>
          </div>
        </div>
      </Card>

      {/* FAQ Box */}
      <Card className="p-6 bg-muted/50">
        <h3 className="font-bold text-lg mb-3">❓ Frequently Asked</h3>
        <div className="space-y-2">
          <p className="font-semibold text-foreground">
            Do I need to own property in the area to vote there?
          </p>
          <p className="text-muted-foreground">
            No! You only need to live (reside) in the area. You don't need to own a house or any property. If you rent a room, stay in a hostel, or live with family, that counts as residence. The Election Commission just wants to make sure you have a connection to the area.
          </p>
        </div>
      </Card>

      {/* Next Action */}
      <div className="space-y-4 bg-primary/5 p-6 rounded-lg">
        <h3 className="font-bold text-lg">What to do next?</h3>
        <p className="text-foreground">
          Check the requirements above. If you meet all of them, you're ready! Move to the next step to learn how to register as a voter.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/step/2" className="flex-1">
            <Button size="lg" className="w-full">
              I'm Eligible - Let's Register →
            </Button>
          </Link>
          <Link href="/steps" className="flex-1">
            <Button variant="outline" size="lg" className="w-full">
              View All Steps
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
