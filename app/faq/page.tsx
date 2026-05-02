import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { FAQSection } from '@/components/FAQSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | Voter Education Guide',
  description: 'Find answers to common questions about voting, eligibility, registration, and the election process.',
}

const ALL_FAQs = [
  {
    category: 'Eligibility',
    question: 'Who is eligible to vote in Indian elections?',
    answer:
      'You must be an Indian citizen, at least 18 years old, and a registered voter. You should not be disqualified under the law (such as being of unsound mind or convicted of certain crimes).',
  },
  {
    category: 'Eligibility',
    question: 'Can I vote if I&apos;m not 18 yet?',
    answer:
      'No, you must be at least 18 years old to vote. However, you can register as a voter before you turn 18, and your registration will become active once you turn 18.',
  },
  {
    category: 'Eligibility',
    question: 'Can non-citizens vote in Indian elections?',
    answer:
      'No, only Indian citizens can vote. If you have dual citizenship or are a permanent resident, you must have Indian citizenship to vote.',
  },
  {
    category: 'Registration',
    question: 'How do I register as a voter?',
    answer:
      'You can register online on the Election Commission website, or visit your local voter registration office with proof of citizenship and identity. Registration is usually free.',
  },
  {
    category: 'Registration',
    question: 'What documents do I need to register?',
    answer:
      'You&apos;ll need proof of citizenship (like Aadhar Card, PAN Card, or Passport) and proof of residence (like utility bills or rental agreement). Check the Election Commission website for a complete list.',
  },
  {
    category: 'Registration',
    question: 'How long does the registration process take?',
    answer:
      'Online registration can be completed in a few minutes. Offline registration at the VRO office takes longer. Once submitted, verification can take up to a few weeks.',
  },
  {
    category: 'Voter Details',
    question: 'How do I find my voter ID?',
    answer:
      'Visit the Election Commission website, enter your name and constituency, and your voter ID will be displayed. You can also call the helpline 1800-234-1155 or visit your local VRO.',
  },
  {
    category: 'Voter Details',
    question: 'What if my name is not on the voter list?',
    answer:
      'If you&apos;re eligible and registered, you can search again using different details. If you still can&apos;t find it, contact your local VRO or apply for a fresh registration.',
  },
  {
    category: 'Voter Details',
    question: 'Can I change my name in the voter list?',
    answer:
      'Yes, you can use Form 8 to update your name or other details. Submit it to your local VRO with supporting documents.',
  },
  {
    category: 'Voting Day',
    question: 'What should I bring to the polling booth?',
    answer:
      'Bring any valid ID proof like Aadhar, PAN card, or passport. While voter card is ideal, any government-issued ID with your photo is acceptable.',
  },
  {
    category: 'Voting Day',
    question: 'What time can I vote?',
    answer:
      'Polling booths are typically open from 7 AM to 6 PM, though timings may vary by region and election. Check your polling booth details for exact timing.',
  },
  {
    category: 'Voting Day',
    question: 'Can I vote if I don&apos;t have an ID?',
    answer:
      'It&apos;s recommended to have ID, but if you don&apos;t, inform the poll officers. Some alternative verification methods may be used.',
  },
  {
    category: 'Process',
    question: 'How does the voting process work?',
    answer:
      'After identity verification and marking your finger with indelible ink, you enter the voting booth. Mark your choice on the ballot or EVM machine, and your vote is recorded.',
  },
  {
    category: 'Process',
    question: 'Is my vote kept secret?',
    answer:
      'Yes, your vote is completely secret. While your participation is recorded, your choice of candidate is never revealed to anyone.',
  },
  {
    category: 'Process',
    question: 'Can I vote for multiple candidates?',
    answer:
      'No, you can vote for only ONE candidate. Voting for multiple candidates makes your vote invalid.',
  },
  {
    category: 'Accessibility',
    question: 'Are polling booths accessible for people with disabilities?',
    answer:
      'Yes, polling booths have ramps and accessible routes. People with disabilities get priority and can bring a companion if needed.',
  },
  {
    category: 'Accessibility',
    question: 'Can I vote if I&apos;m unable to visit the polling booth?',
    answer:
      'Yes, you can apply for postal/absentee voting. You need to apply well before the election date with proper documentation.',
  },
  {
    category: 'Other',
    question: 'What is indelible ink and is it safe?',
    answer:
      'Indelible ink is used to prevent double voting. It&apos;s safe and non-toxic. The mark lasts for several days and serves as proof of voting.',
  },
  {
    category: 'Other',
    question: 'How are election results calculated?',
    answer:
      'The candidate with the most votes in a constituency wins. Results are counted transparently with representatives from all candidates watching the process.',
  },
  {
    category: 'Other',
    question: 'Can I change my vote after casting it?',
    answer:
      'No, once you&apos;ve cast your vote, it cannot be changed. Vote carefully before casting.',
  },
  {
    category: 'Guidance',
    question: 'What if I need help understanding the voting process?',
    answer:
      'This website provides step-by-step guidance. You can also call the Election Commission helpline at 1800-234-1155 for assistance.',
  },
  {
    category: 'Guidance',
    question: 'Where can I learn more about candidates?',
    answer:
      'The Election Commission website provides information about candidates, their backgrounds, and election manifestos. Local news sources also provide coverage.',
  },
  {
    category: 'Guidance',
    question: 'How do I find my polling booth?',
    answer:
      'Visit the Election Commission website and enter your name and constituency details. Your polling booth address and location will be displayed.',
  },
]

export default function FAQPage() {
  return (
    <>
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-primary/5 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-foreground/70">
              Find answers to common questions about voting and elections
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                className="pl-10"
                aria-label="Search frequently asked questions"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSection items={ALL_FAQs} />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Didn&apos;t find your answer?
            </h2>
            <p className="text-foreground/70 mb-6">
              Contact us for help or visit the official Election Commission website
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:help@voterguide.in" className="text-primary font-semibold hover:underline">
                Email us
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="tel:18002341155" className="text-primary font-semibold hover:underline">
                Call 1800-234-1155
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
