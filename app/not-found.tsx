import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle, Home, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <AlertCircle className="w-16 h-16 text-destructive opacity-80" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">Page Not Found</h2>
          <p className="text-muted-foreground text-lg">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Here are some helpful links to get you back on track:
            </p>
            <div className="space-y-3">
              <Link href="/" className="block">
                <Button className="w-full" size="lg">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/steps" className="block">
                <Button variant="outline" className="w-full" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View All Steps
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3 text-center text-sm">
          <p className="text-muted-foreground">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/eligibility">
              <Button variant="ghost" size="sm">Check Eligibility</Button>
            </Link>
            <Link href="/faq">
              <Button variant="ghost" size="sm">FAQs</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="sm">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
