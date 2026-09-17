import type { Metadata } from 'next'
import { Archivo, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import AppNav from '@/components/AppNav'
import TeacherSwitch from '@/components/TeacherSwitch'
import InkFilter from '@/components/InkFilter'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gestion de projet web · Ingémedia',
    template: '%s · Gestion de projet web',
  },
  description:
    'Support de cours interactif en gestion de projet web pour les étudiants de l’UFR Ingémedia : modules, quiz, cas pratiques, mission et préparation des oraux.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-paper text-ink font-sans">
        <InkFilter />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:text-sm"
        >
          Aller au contenu
        </a>
        <AppNav />
        <div id="contenu">{children}</div>
        <TeacherSwitch />
      </body>
    </html>
  )
}
