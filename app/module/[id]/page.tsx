import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getModuleIds, getPublicModule } from '@/lib/content'
import ModuleClient from '@/components/ModuleClient'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return getModuleIds().map((id) => ({ id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const mod = getPublicModule(params.id)
  if (!mod) return { title: 'Module introuvable' }
  return { title: mod.title, description: mod.description }
}

export default function ModulePage({ params }: Props) {
  const mod = getPublicModule(params.id)
  if (!mod) notFound()
  const ids = getModuleIds()
  const index = ids.indexOf(params.id)
  const next = index >= 0 && index < ids.length - 1 ? getPublicModule(ids[index + 1]) : null
  return (
    <ModuleClient
      key={mod.id}
      module={mod}
      index={index}
      total={ids.length}
      next={next ? { id: next.id, title: next.title } : null}
    />
  )
}
