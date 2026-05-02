'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Building2, FileText } from 'lucide-react'
import Link from 'next/link'

export function Step2Content() {
  const documents = [
    'Aadhar Card',
    'PAN Card',
    'Passport',
    'Driving License',
    'Utility Bills',
    'College ID',
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Voter Registration: How to Register</h1>
        <p className="text-xl text-muted-foreground">
          Voter registration is the official process of adding your name to the voter list so you can vote in elections.
        </p>
      </div>

      {/* Two Method Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Online Registration */}
        <Card className="p-6 space-y-4 border-2 border-accent">
          <div className="flex items-center gap-3">
            <Smartphone className="w-8 h-8 text-accent" />
            <h2 className="text-2xl font-bold">📱 Register Online</h2>
          </div>
          <Badge className="w-fit bg-accent text-white">Recommended - Fastest Way</Badge>
          <p className="text-sm text-muted-foreground font-semibold">Takes just 5-10 minutes</p>

          <ol className="space-y-2 list-decimal list-inside text-foreground">
            <li>Visit Election Commission of India website</li>
            <li>Click on "Register to Vote" or "Voter Registration"</li>
            <li>Fill the online form with your details</li>
            <li>Upload proof document (Aadhar, PAN, etc.)</li>
            <li>Submit the application</li>
            <li>Get confirmation via email or SMS</li>
          </ol>

          <Link href="#" className="block">
            <Button className="w-full bg-accent hover:bg-accent/90">
              Register Online Now →
            </Button>
          </Link>
        </Card>

        {/* Offline Registration */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold">🏛️ Register In-Person</h2>
          </div>
          <Badge variant="outline" className="w-fit">
            If You Prefer Face-to-Face
          </Badge>
          <p className="text-sm text-muted-foreground font-semibold">Offline registration steps</p>

          <ol className="space-y-2 list-decimal list-inside text-foreground">
            <li>Find your nearest Voter Registration Office (VRO)</li>
            <li>Collect Form 6 (registration form)</li>
            <li>Fill it with your details and sign</li>
            <li>Attach proof of citizenship and residence</li>
            <li>Submit to the VRO officer</li>
            <li>Keep the receipt for tracking</li>
          </ol>

          <Button variant="outline" className="w-full">
            Find VRO Office Near You →
          </Button>
        </Card>
      </div>

      {/* Documents Section */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold">📄 Documents You Can Use</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {documents.map((doc) => (
            <Badge key={doc} variant="secondary" className="px-4 py-2 text-center justify-center">
              {doc}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
          <strong>📌 Pick any ONE document from the list above.</strong> Aadhar is the easiest and fastest option!
        </p>
      </Card>

      {/* Tip Box */}
      <Card className="p-6 bg-secondary/10 border-l-4 border-l-secondary">
        <div className="flex gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-bold text-lg mb-2">First-Timer Tip:</h3>
            <p className="text-foreground">
              The <strong>online method is fastest and easiest</strong> — you can do it in 5-10 minutes from your phone! Do it from home, and you'll get confirmation via SMS. No waiting in lines!
            </p>
          </div>
        </div>
      </Card>

      {/* FAQ Box */}
      <Card className="p-6 bg-muted/50">
        <h3 className="font-bold text-lg mb-3">❓ Common Question</h3>
        <div className="space-y-3">
          <p className="font-semibold text-foreground">
            My name is already on the voter list. Do I need to register again?
          </p>
          <p className="text-muted-foreground">
            No! If your name is already on the voter list, you don't need to register again. You can skip this step and go to Step 3 to find your voter ID. But if your name is NOT on the list and you're eligible, follow the registration steps above to register now.
          </p>
        </div>
      </Card>

      {/* Important Info Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h4 className="font-bold mb-2">⏰ Processing Time</h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>Online: 1-2 weeks</li>
            <li>Offline: 3-4 weeks</li>
          </ul>
        </Card>
        <Card className="p-4">
          <h4 className="font-bold mb-2">📝 When to Register</h4>
          <p className="text-sm text-muted-foreground">
            You can register anytime, year-round! The Election Commission accepts registrations 365 days a year.
          </p>
        </Card>
      </div>

      {/* Next Action */}
      <div className="space-y-4 bg-primary/5 p-6 rounded-lg">
        <h3 className="font-bold text-lg">What to do next?</h3>
        <p className="text-foreground">
          Choose the method that's easiest for you—online or offline. Fill in your details correctly and upload/attach your documents. You'll get confirmation via email or SMS once your registration is approved!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/step/3" className="flex-1">
            <Button size="lg" className="w-full">
              Registration Done - Next Step →
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
