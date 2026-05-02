'use client';

import { CheckCircle, AlertCircle, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Step3Content() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Check Your Voter Information
        </h1>
        <p className="text-lg text-muted-foreground">
          Make sure your name, address, and polling booth information are correct in the voter database before election day.
        </p>
      </div>

      {/* What to Check */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            What to Check
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <p className="font-medium">Your Full Name</p>
                <p className="text-sm text-muted-foreground">Check if it's spelled correctly and matches your ID documents</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <p className="font-medium">Your Address</p>
                <p className="text-sm text-muted-foreground">Current residential address, area/ward, constituency name</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <p className="font-medium">EPIC Number (Voter ID)</p>
                <p className="text-sm text-muted-foreground">10-digit unique number that will be on your voter card</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <p className="font-medium">Polling Booth Location</p>
                <p className="text-sm text-muted-foreground">Building name, street address, and booth number</p>
              </div>
            </li>
          </ul>
        </Card>

        {/* How to Verify */}
        <Card className="p-6 border-l-4 border-l-accent">
          <h3 className="font-semibold text-lg mb-4">How to Verify (2 Methods)</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-primary mb-2">Method 1: Online (Fastest)</h4>
              <ol className="text-sm space-y-1 ml-4 list-decimal text-muted-foreground">
                <li>Visit nvsp.in</li>
                <li>Click "Check Electoral Roll"</li>
                <li>Select your state and district</li>
                <li>Search by name or EPIC number</li>
                <li>Check all details carefully</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium text-primary mb-2">Method 2: Visit Election Office</h4>
              <ol className="text-sm space-y-1 ml-4 list-decimal text-muted-foreground">
                <li>Go to nearest Voter Registration Office</li>
                <li>Staff will help you find your name</li>
                <li>Takes 10-15 minutes</li>
                <li>Get a printout if needed</li>
              </ol>
            </div>
          </div>
        </Card>
      </div>

      {/* Common Mistakes */}
      <Card className="p-6 bg-destructive/5 border-destructive">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-destructive" />
          Common Mistakes to Avoid
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="pb-3 border-b">
              <p className="font-medium text-destructive mb-1">❌ Wrong Spelling</p>
              <p className="text-sm text-muted-foreground">Name spelled differently? Contact election office to correct it.</p>
            </div>
            <div>
              <p className="font-medium text-destructive mb-1">❌ Old Address</p>
              <p className="text-sm text-muted-foreground">Moved recently? File Form 8C to change your address.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="pb-3 border-b">
              <p className="font-medium text-destructive mb-1">❌ Name Not Found</p>
              <p className="text-sm text-muted-foreground">Not in voter list? Register immediately using Form 6 (takes 3-4 weeks).</p>
            </div>
            <div>
              <p className="font-medium text-destructive mb-1">❌ Wrong Booth Location</p>
              <p className="text-sm text-muted-foreground">Booth location might change. Always double-check before election day.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* First Timer Tip */}
      <Card className="p-6 bg-primary/5 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <Users className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-2">First-Timer Tip 💡</h4>
            <p className="text-sm text-muted-foreground">
              The government website is free and safe. Don't pay anyone to check your voter details—it's always free! Write down your polling booth location and keep it safe.
            </p>
          </div>
        </div>
      </Card>

      {/* CTA */}
      <div className="flex gap-3 pt-4">
        <Button size="lg" className="flex-1">
          Check My Details Online →
        </Button>
      </div>

      {/* FAQ */}
      <Card className="p-6 bg-muted/50">
        <h4 className="font-semibold mb-3">Frequently Asked</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-primary mb-1">Q: I can't find my name in the voter list. What should I do?</p>
            <p className="text-sm text-muted-foreground">
              Don't panic! You can register using Form 6 at the election office or online at NVSP.in. Even if the election has started, you might still register. Contact your nearest election office immediately.
            </p>
          </div>
        </div>
      </Card>

      {/* Quiz */}
      <Card className="p-6 bg-accent/5 border-l-4 border-l-accent">
        <h4 className="font-semibold mb-4">Quick Quiz</h4>
        <div className="space-y-3">
          <p className="font-medium">Your name appears as 'Aditya Kumar' in the voter list, but your ID says 'Aditya K.' What should you do?</p>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded border cursor-pointer hover:bg-muted">
              <input type="radio" name="q1" className="w-4 h-4" />
              <span className="text-sm">Ignore it, it doesn't matter</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded border cursor-pointer hover:bg-muted bg-accent/20 border-accent">
              <input type="radio" name="q1" defaultChecked className="w-4 h-4" />
              <span className="text-sm font-medium">Contact election office to correct it ✓</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded border cursor-pointer hover:bg-muted">
              <input type="radio" name="q1" className="w-4 h-4" />
              <span className="text-sm">Register again with correct name</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded border cursor-pointer hover:bg-muted">
              <input type="radio" name="q1" className="w-4 h-4" />
              <span className="text-sm">Write a letter to the election commission</span>
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}
