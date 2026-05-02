import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Privacy Policy - Voter Education Guide',
  description: 'Our privacy policy and data protection practices.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Voter Education Guide is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We may collect the following information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (when you contact us)</li>
                  <li>Usage data and browser information</li>
                  <li>Pages visited and time spent on the site</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We use collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve our website and user experience</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Understand how visitors use our site</li>
                  <li>Provide educational content about voting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We use cookies to enhance your experience. These help us understand user behavior and improve our services. You can control cookie settings in your browser.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="space-y-2">
                  <li>Email: privacy@voterguide.in</li>
                  <li>Phone: 1800-234-1155</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
