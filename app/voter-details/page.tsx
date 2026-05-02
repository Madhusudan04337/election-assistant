import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Check Voter Details - Voter Education Guide',
  description: 'Learn how to verify your voter details and polling booth location.',
}

export default function VoterDetailsPage() {
  redirect('/step/3')
}
