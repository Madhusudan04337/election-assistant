import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Election Timeline - Voter Education Guide',
  description: 'Understand the major stages of an election.',
}

export default function ElectionTimelinePage() {
  redirect('/step/4')
}
