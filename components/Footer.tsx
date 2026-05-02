import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-primary text-sm font-bold">
                V
              </div>
              Voter Guide
            </h3>
            <p className="text-sm opacity-90">
              Empowering first-time voters in India with clear, accessible information about the voting process.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/steps" className="opacity-90 hover:opacity-100">
                  The 12 Steps
                </Link>
              </li>
              <li>
                <Link href="/step/1" className="opacity-90 hover:opacity-100">
                  Check Eligibility
                </Link>
              </li>
              <li>
                <Link href="/step/2" className="opacity-90 hover:opacity-100">
                  Voter Registration
                </Link>
              </li>
              <li>
                <Link href="/faq" className="opacity-90 hover:opacity-100">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/step/3" className="opacity-90 hover:opacity-100">
                  Check Voter Details
                </Link>
              </li>
              <li>
                <Link href="/step/4" className="opacity-90 hover:opacity-100">
                  Election Timeline
                </Link>
              </li>
              <li>
                <Link href="/step/6" className="opacity-90 hover:opacity-100">
                  Find Polling Booth
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get Help</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:help@voterguide.in" className="opacity-90 hover:opacity-100">
                  help@voterguide.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:18002341155" className="opacity-90 hover:opacity-100">
                  1800-234-1155
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Link href="/contact" className="opacity-90 hover:opacity-100 flex gap-2">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; 2024 Voter Education Guide. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:opacity-100">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-100">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
