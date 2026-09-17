import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'

interface MetaItem {
  label: string
  value: ReactNode
}

interface CartoucheProps {
  title: string
  lead?: string
  meta?: MetaItem[]
  back?: { href: string; label: string }
  aside?: ReactNode
  tone?: 'paper' | 'yellow' | 'pink'
}

/**
 * Cartouche de dossier : bloc titre à gauche, champs de référence à droite,
 * réglés comme l'en-tête d'un devis.
 */
export default function Cartouche({ title, lead, meta = [], back, aside, tone = 'paper' }: CartoucheProps) {
  const toneClass = tone === 'yellow' ? 'bg-copy-yellow' : tone === 'pink' ? 'bg-copy-pink' : 'bg-paper'
  return (
    <section className={`border-b-2 border-ink ${toneClass}`} aria-labelledby="page-title">
      <div className="mx-auto grid max-w-page grid-cols-1 lg:grid-cols-[1fr_auto]">
        <div className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          {back && (
            <Link href={back.href} className="label mb-5 inline-flex items-center gap-2 text-ink no-underline hover:text-stamp">
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              {back.label}
            </Link>
          )}
          <h1 id="page-title" className="display text-[clamp(2rem,1.4rem+2.4vw,3.4rem)]">
            {title}
          </h1>
          {lead && <p className="mt-4 max-w-measure text-[1.05rem] leading-relaxed text-ink-2">{lead}</p>}
          {aside && <div className="mt-6">{aside}</div>}
        </div>

        {meta.length > 0 && (
          <dl className="grid grid-cols-2 border-t border-ink lg:min-w-[22rem] lg:grid-cols-1 lg:border-l lg:border-t-0">
            {meta.map((m, i) => (
              <div
                key={m.label}
                className={`px-4 py-4 sm:px-6 lg:px-6 ${i % 2 === 0 ? 'border-r border-rule lg:border-r-0' : ''} ${
                  i < meta.length - 1 ? 'lg:border-b lg:border-rule' : ''
                } ${i >= 2 ? 'border-t border-rule lg:border-t-0' : ''}`}
              >
                <dt className="label">{m.label}</dt>
                <dd className="num mt-1.5 text-[0.95rem] font-semibold leading-snug">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
