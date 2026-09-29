'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { KeyRound } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'

export default function TeacherLink() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(isTeacherMode()) }, [])
  if (!visible) return null
  return <Link href="/mission/correction" className="btn bg-copy-pink text-copy-pink-ink pdv-print-button"><KeyRound size={15} aria-hidden="true" />Correction enseignant</Link>
}
