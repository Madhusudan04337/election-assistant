import Link from 'next/link'
import {
  CheckCircle,
  FileText,
  MapPin,
  Calendar,
  HelpCircle,
  MessageSquare,
} from 'lucide-react'

interface QuickLink {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  color: string
}

export function QuickLinks() {
  const links: QuickLink[] = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Check Eligibility',
      description: 'Am I eligible to vote?',
      href: '/step/1',
      color: 'bg-blue-50 text-primary border-blue-200',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Register as Voter',
      description: 'How to register online',
      href: '/step/2',
      color: 'bg-green-50 text-accent border-green-200',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Find Polling Booth',
      description: 'Locate your polling station',
      href: '/step/6',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Election Timeline',
      description: 'Important dates and schedule',
      href: '/step/4',
      color: 'bg-orange-50 text-orange-600 border-orange-200',
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: 'FAQs',
      description: 'Common questions answered',
      href: '/faq',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Need Help?',
      description: 'Get support and contact us',
      href: '/contact',
      color: 'bg-red-50 text-red-600 border-red-200',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <div
            className={`h-full p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:border-primary ${link.color}`}
          >
            <div className="mb-3">{link.icon}</div>
            <h3 className="font-bold text-lg mb-1">{link.title}</h3>
            <p className="text-sm opacity-75">{link.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
