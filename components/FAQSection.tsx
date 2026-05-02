import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  category: string
  question: string
  answer: string
}

export function FAQSection({ items, limit }: { items?: FAQItem[]; limit?: number }) {
  const defaultFAQ: FAQItem[] = [
    {
      category: 'Eligibility',
      question: 'Who is eligible to vote in Indian elections?',
      answer:
        'You must be an Indian citizen, at least 18 years old, and a registered voter. You should not be disqualified under the law (such as being of unsound mind or convicted of certain crimes).',
    },
    {
      category: 'Registration',
      question: 'How do I register as a voter?',
      answer:
        'You can register online on the Election Commission website, or visit your local voter registration office with proof of citizenship and identity. Registration is usually free.',
    },
    {
      category: 'Voting Day',
      question: 'What should I bring to the polling booth?',
      answer:
        'Bring any valid ID proof like Aadhar, PAN card, or passport. You should also know your constituency number. Bring a pen for any form filling.',
    },
    {
      category: 'Voting Day',
      question: 'What time can I vote?',
      answer:
        'Polling booths are typically open from 7 AM to 6 PM, though timings may vary by region. Check your polling booth details for exact timing.',
    },
    {
      category: 'Process',
      question: 'How does the voting process work?',
      answer:
        'After identity verification and marking your finger with indelible ink, you enter the voting booth. Mark your choice on the ballot or EVM machine, and your vote is recorded.',
    },
    {
      category: 'Other',
      question: "Can I vote if I'm out of station?",
      answer:
        'Yes, you can apply for postal/absentee voting. You need to apply well before the election date with proper documentation.',
    },
  ]

  const faqItems = items || defaultFAQ
  const displayItems = limit ? faqItems.slice(0, limit) : faqItems

  const categories = Array.from(new Set(displayItems.map((item) => item.category)))

  return (
    <div className="w-full">
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-bold text-primary mb-4">{category}</h3>
          <Accordion type="single" collapsible className="w-full">
            {displayItems
              .filter((item) => item.category === category)
              .map((item, index) => (
                <AccordionItem key={index} value={`${category}-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}
