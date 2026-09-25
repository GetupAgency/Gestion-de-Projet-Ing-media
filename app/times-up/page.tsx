import type { Metadata } from 'next'
import TimesUpLexique from '@/components/TimesUpLexique'

export const metadata: Metadata = { title: 'Time’s Up du lexique' }

export default function TimesUpPage() {
  return <TimesUpLexique />
}
