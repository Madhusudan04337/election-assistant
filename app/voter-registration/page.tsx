import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Voter Registration - Voter Education Guide',
  description: 'Learn how to register as a voter in India.',
}

export default function VoterRegistrationPage() {
  redirect('/step/2')
}
