'use client'

import { Printer } from 'lucide-react'

export default function MissionPrint() {
  return (
    <button type="button" className="btn pdv-print-button" onClick={() => window.print()}>
      <Printer className="h-4 w-4" aria-hidden="true" />
      Imprimer le dossier
    </button>
  )
}
