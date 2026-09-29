import Link from 'next/link'
import type { ReactNode } from 'react'

/** Les liens directs vers les ateliers de l’an dernier restent consultables. */
export default function SprintArchiveLayout({ children }: { children: ReactNode }) {
  return <>
    <aside className="border-b border-ink bg-paper-2 px-4 py-4 text-sm sm:px-6" aria-label="Ancienne édition">
      <div className="mx-auto max-w-page flex flex-wrap items-center justify-between gap-3">
        <p><strong>Archive · RoadTrip Squad.</strong> Ce support appartient à la session précédente.</p>
        <Link href="/mission" className="underline font-semibold py-2">Ouvrir la mission Perdu de vue</Link>
      </div>
    </aside>
    {children}
  </>
}
