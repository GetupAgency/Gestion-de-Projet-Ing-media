import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TeacherModeIndicator from '@/components/TeacherModeIndicator'
import TeacherModeButton from '@/components/TeacherModeButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestion de Projet Web - Formation Ingémedia',
  description: 'Application de formation à la gestion de projet web pour les étudiants Ingémedia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <TeacherModeIndicator />
        <TeacherModeButton />
      </body>
    </html>
  )
}

