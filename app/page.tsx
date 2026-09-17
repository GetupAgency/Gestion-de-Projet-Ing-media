import type { Metadata } from 'next'
import { getModuleSummaries } from '@/lib/content'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Dossier de formation',
}

export default function Home() {
  const modules = getModuleSummaries()
  return <HomeClient modules={modules} />
}
