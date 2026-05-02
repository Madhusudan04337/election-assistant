import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Find Your Polling Booth - Voter Education Guide',
  description: 'Learn how to find your polling booth location and what to expect.',
}

export default function PollingBoothPage() {
  redirect('/step/6')
}
