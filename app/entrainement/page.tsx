import type { Metadata } from 'next'
import EntrainementClient from '@/components/EntrainementClient'

export const metadata: Metadata = { title: 'Terrain d’entraînement' }

export default function EntrainementPage() {
  return <EntrainementClient />
}
