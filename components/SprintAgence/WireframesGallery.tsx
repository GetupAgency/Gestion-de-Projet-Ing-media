'use client'

import { ReactNode, useState } from 'react'
import { Smartphone, Monitor } from 'lucide-react'

// =====================================================================
// Primitives
// =====================================================================

function PhoneFrame({ children, label, hint }: { children: ReactNode; label: string; hint?: string }) {
  return (
    <figure className="wf-phone-figure">
      <div className="wf-phone">
        <div className="wf-phone-notch" />
        <div className="wf-phone-screen">{children}</div>
      </div>
      <figcaption>
        <strong>{label}</strong>
        {hint && <span>{hint}</span>}
      </figcaption>
    </figure>
  )
}

function DesktopFrame({ children, label, hint }: { children: ReactNode; label: string; hint?: string }) {
  return (
    <figure className="wf-desktop-figure">
      <div className="wf-desktop">
        <div className="wf-desktop-bar">
          <span className="wf-dot" />
          <span className="wf-dot" />
          <span className="wf-dot" />
          <div className="wf-desktop-url">studio-boreal.cloud / admin</div>
        </div>
        <div className="wf-desktop-screen">{children}</div>
      </div>
      <figcaption>
        <strong>{label}</strong>
        {hint && <span>{hint}</span>}
      </figcaption>
    </figure>
  )
}

function StatusBar() {
  return (
    <div className="wf-status">
      <span>9:41</span>
      <span className="wf-status-icons">●●●● 4G ●●●</span>
    </div>
  )
}

function H({ children }: { children: ReactNode }) {
  return <div className="wf-screen-header">{children}</div>
}

function Title({ children }: { children: ReactNode }) {
  return <div className="wf-title">{children}</div>
}

function Lead({ children }: { children: ReactNode }) {
  return <div className="wf-lead">{children}</div>
}

function Bar({ w = 100, h = 8 }: { w?: number; h?: number }) {
  return <div className="wf-bar" style={{ width: `${w}%`, height: `${h}px` }} />
}

function Block({
  children,
  pad = false,
  height,
  className = '',
}: {
  children?: ReactNode
  pad?: boolean
  height?: number
  className?: string
}) {
  return (
    <div
      className={`wf-block ${pad ? 'is-pad' : ''} ${className}`}
      style={height ? { height: `${height}px` } : undefined}
    >
      {children}
    </div>
  )
}

function Btn({ children, primary }: { children: ReactNode; primary?: boolean }) {
  return <div className={`wf-btn ${primary ? 'is-primary' : ''}`}>{children}</div>
}

function Pill({ children, color = 'neutral' }: { children: ReactNode; color?: 'neutral' | 'amber' | 'blue' | 'green' }) {
  return <span className={`wf-pill is-${color}`}>{children}</span>
}

function Row({ children, gap = 8, className = '' }: { children: ReactNode; gap?: number; className?: string }) {
  return (
    <div className={`wf-row ${className}`} style={{ gap: `${gap}px` }}>
      {children}
    </div>
  )
}

function Stack({ children, gap = 8, className = '' }: { children: ReactNode; gap?: number; className?: string }) {
  return (
    <div className={`wf-stack ${className}`} style={{ gap: `${gap}px` }}>
      {children}
    </div>
  )
}

function Avatar({ children, color = '#cfc8b3' }: { children?: ReactNode; color?: string }) {
  return <div className="wf-avatar" style={{ background: color }}>{children}</div>
}

function TabBar({ active }: { active: number }) {
  const tabs = ['Squads', 'Trips', 'Carte', 'Profil']
  return (
    <div className="wf-tabbar">
      {tabs.map((t, i) => (
        <div key={t} className={`wf-tab ${i === active ? 'is-active' : ''}`}>
          <div className="wf-tab-dot" />
          <span>{t}</span>
        </div>
      ))}
    </div>
  )
}

// =====================================================================
// Mobile screens
// =====================================================================

function ScreenOnboarding() {
  return (
    <>
      <StatusBar />
      <div className="wf-screen wf-onboarding">
        <Block height={140} className="wf-illu">
          <span>Illustration</span>
        </Block>
        <div className="wf-onb-content">
          <Title>Bienvenue dans RoadTrip Squad</Title>
          <Lead>Planifiez vos road trips, suivez vos dépenses et racontez vos virées, tout dans une seule app.</Lead>
          <div className="wf-dots">
            <span className="wf-dot is-active" /><span className="wf-dot" /><span className="wf-dot" />
          </div>
          <Stack gap={10}>
            <Btn primary>Continuer avec Apple</Btn>
            <Btn>Continuer avec Google</Btn>
            <Btn>Email et mot de passe</Btn>
          </Stack>
        </div>
      </div>
    </>
  )
}

function ScreenSquads() {
  return (
    <>
      <StatusBar />
      <div className="wf-screen">
        <H>
          <Title>Mes squads</Title>
          <div className="wf-h-action">+</div>
        </H>
        <Stack gap={12}>
          <div className="wf-card">
            <Row gap={12} className="wf-card-row">
              <Avatar color="#fcd34d">G</Avatar>
              <Stack gap={4} className="wf-card-stack">
                <Bar w={60} h={10} />
                <Bar w={40} h={6} />
              </Stack>
              <Pill color="amber">3 trips</Pill>
            </Row>
          </div>
          <div className="wf-card">
            <Row gap={12} className="wf-card-row">
              <Avatar color="#7dd3fc">B</Avatar>
              <Stack gap={4} className="wf-card-stack">
                <Bar w={70} h={10} />
                <Bar w={35} h={6} />
              </Stack>
              <Pill color="blue">1 trip</Pill>
            </Row>
          </div>
          <div className="wf-card wf-card-muted">
            <Row gap={12} className="wf-card-row">
              <Avatar color="#cfc8b3">+</Avatar>
              <Stack gap={4} className="wf-card-stack">
                <Bar w={50} h={10} />
                <Bar w={30} h={6} />
              </Stack>
            </Row>
          </div>
        </Stack>
      </div>
      <TabBar active={0} />
    </>
  )
}

function ScreenTripDetail() {
  return (
    <>
      <StatusBar />
      <div className="wf-screen">
        <H>
          <div className="wf-back">‹</div>
          <Title>Albanie · juillet</Title>
          <div className="wf-h-action">⋯</div>
        </H>
        <Block height={90} className="wf-cover">
          <span>Image de couverture</span>
        </Block>
        <Stack gap={6}>
          <Row gap={6}>
            <Pill color="amber">12 jours</Pill>
            <Pill color="blue">5 membres</Pill>
            <Pill color="green">8 étapes</Pill>
          </Row>
          <Bar w={80} h={6} />
          <Bar w={60} h={6} />
        </Stack>
        <div className="wf-section-label">Étapes proposées</div>
        <Stack gap={8}>
          {[
            ['Tirana', 'Validée', 'green'],
            ['Krujë', 'En vote 3/5', 'amber'],
            ['Berat', 'Validée', 'green'],
            ['Sarandë', 'Proposée', 'neutral'],
          ].map(([name, status, color], i) => (
            <Row key={i} gap={10} className="wf-step-row">
              <div className="wf-step-num">{i + 1}</div>
              <Stack gap={4} className="wf-card-stack">
                <Bar w={50} h={10} />
                <span className="wf-tiny">{name}</span>
              </Stack>
              <Pill color={color as any}>{status}</Pill>
            </Row>
          ))}
        </Stack>
      </div>
      <TabBar active={1} />
    </>
  )
}

function ScreenItinerary() {
  return (
    <>
      <StatusBar />
      <div className="wf-screen wf-screen-map">
        <H>
          <div className="wf-back">‹</div>
          <Title>Itinéraire</Title>
          <div className="wf-h-action">⌕</div>
        </H>
        <div className="wf-map">
          <span className="wf-map-label">Carte MapLibre + tuiles OSM</span>
          <span className="wf-pin" style={{ top: '20%', left: '30%' }}>1</span>
          <span className="wf-pin" style={{ top: '35%', left: '50%' }}>2</span>
          <span className="wf-pin" style={{ top: '55%', left: '40%' }}>3</span>
          <span className="wf-pin" style={{ top: '70%', left: '60%' }}>4</span>
          <svg className="wf-map-route" viewBox="0 0 200 320" preserveAspectRatio="none">
            <path d="M60,64 L100,112 L80,176 L120,224" stroke="#b45309" strokeWidth="2" strokeDasharray="4 3" fill="none" />
          </svg>
        </div>
        <div className="wf-map-card">
          <Row gap={10} className="wf-card-row">
            <div className="wf-step-num">2</div>
            <Stack gap={4} className="wf-card-stack">
              <Bar w={60} h={10} />
              <Bar w={40} h={6} />
            </Stack>
            <div className="wf-h-action">›</div>
          </Row>
        </div>
      </div>
      <TabBar active={2} />
    </>
  )
}

function ScreenAddStep() {
  return (
    <>
      <StatusBar />
      <div className="wf-screen">
        <H>
          <div className="wf-back">×</div>
          <Title>Proposer une étape</Title>
          <div className="wf-h-action wf-text-action">OK</div>
        </H>
        <Stack gap={14}>
          <div>
            <div className="wf-field-label">Nom de l'étape</div>
            <Block height={36} pad>
              <Bar w={60} h={8} />
            </Block>
          </div>
          <div>
            <div className="wf-field-label">Localisation</div>
            <Block height={36} pad>
              <Bar w={45} h={8} />
            </Block>
          </div>
          <div>
            <div className="wf-field-label">Durée prévue</div>
            <Row gap={8}>
              <Pill color="blue">1 nuit</Pill>
              <Pill>2 nuits</Pill>
              <Pill>3 nuits</Pill>
            </Row>
          </div>
          <div>
            <div className="wf-field-label">Note ou anecdote</div>
            <Block height={70} pad>
              <Bar w={70} h={8} />
              <Bar w={60} h={8} />
            </Block>
          </div>
          <Btn primary>Soumettre au vote du groupe</Btn>
        </Stack>
      </div>
    </>
  )
}

function ScreenSplit() {
  return (
    <>
      <StatusBar />
      <div className="wf-screen">
        <H>
          <div className="wf-back">‹</div>
          <Title>Dépenses · Albanie</Title>
          <div className="wf-h-action">+</div>
        </H>
        <Stack gap={14}>
          <div className="wf-card wf-balance">
            <span className="wf-balance-label">Solde global</span>
            <span className="wf-balance-amount">+ 47,20 €</span>
            <span className="wf-balance-sub">on te doit 47 € au total</span>
          </div>

          <div className="wf-section-label">Dépenses récentes</div>
          <Stack gap={8}>
            {[
              ['Carburant Berat', 'Marie', '52 €', 'amber'],
              ['Airbnb Krujë', 'Toi', '180 €', 'green'],
              ['Restaurant Tirana', 'Pierre', '64 €', 'neutral'],
              ['Courses', 'Sophie', '28 €', 'neutral'],
            ].map(([title, by, amount, color], i) => (
              <Row key={i} gap={10} className="wf-step-row">
                <Avatar color="#cfc8b3" />
                <Stack gap={4} className="wf-card-stack">
                  <span className="wf-tiny-strong">{title}</span>
                  <span className="wf-tiny">payé par {by}</span>
                </Stack>
                <Pill color={color as any}>{amount}</Pill>
              </Row>
            ))}
          </Stack>

          <Btn primary>Régler les soldes</Btn>
        </Stack>
      </div>
      <TabBar active={1} />
    </>
  )
}

function ScreenJournal() {
  return (
    <>
      <StatusBar />
      <div className="wf-screen">
        <H>
          <div className="wf-back">‹</div>
          <Title>Journal de bord</Title>
          <div className="wf-h-action">+</div>
        </H>
        <Stack gap={14}>
          {[
            { day: 'Jour 3 · Berat', who: 'Marie' },
            { day: 'Jour 2 · Krujë', who: 'Toi' },
            { day: 'Jour 1 · Tirana', who: 'Pierre' },
          ].map((entry, i) => (
            <div key={i} className="wf-card wf-journal-card">
              <Row gap={8}>
                <Avatar color="#fcd34d" />
                <Stack gap={2} className="wf-card-stack">
                  <span className="wf-tiny-strong">{entry.day}</span>
                  <span className="wf-tiny">posté par {entry.who}</span>
                </Stack>
              </Row>
              <Block height={120} className="wf-photo">
                <span>Photo</span>
              </Block>
              <Stack gap={4}>
                <Bar w={80} h={6} />
                <Bar w={70} h={6} />
                <Bar w={50} h={6} />
              </Stack>
            </div>
          ))}
        </Stack>
      </div>
      <TabBar active={1} />
    </>
  )
}

// =====================================================================
// Back office screens
// =====================================================================

function BoSidebar({ active }: { active: string }) {
  const items = [
    'Dashboard',
    'Utilisateurs',
    'Squads & trips',
    'Modération',
    'Signalements',
    'Analytics',
    'Paramètres',
  ]
  return (
    <aside className="wf-bo-sidebar">
      <div className="wf-bo-brand">
        <div className="wf-bo-brand-mark">RTS</div>
        <span>Admin · Studio Boréal</span>
      </div>
      <Stack gap={2} className="wf-bo-nav">
        {items.map(it => (
          <div key={it} className={`wf-bo-nav-item ${it === active ? 'is-active' : ''}`}>
            <span className="wf-bo-nav-dot" />
            <span>{it}</span>
          </div>
        ))}
      </Stack>
    </aside>
  )
}

function BoDashboard() {
  return (
    <>
      <BoSidebar active="Dashboard" />
      <main className="wf-bo-main">
        <div className="wf-bo-header">
          <Stack gap={4}>
            <span className="wf-bo-eyebrow">Mardi 7 octobre</span>
            <Title>Tableau de bord</Title>
          </Stack>
          <Row gap={8}>
            <Pill>30 derniers jours</Pill>
            <Btn>Exporter</Btn>
          </Row>
        </div>

        <div className="wf-bo-kpis">
          {[
            ['Inscrits actifs', '1 248', '+12%'],
            ['Trips créés', '342', '+8%'],
            ['Squads actives', '512', '+5%'],
            ['Dépenses tracées', '14,3 K€', '+22%'],
          ].map(([l, v, d], i) => (
            <div key={i} className="wf-bo-kpi">
              <span className="wf-bo-kpi-label">{l}</span>
              <span className="wf-bo-kpi-value">{v}</span>
              <span className="wf-bo-kpi-delta">{d}</span>
            </div>
          ))}
        </div>

        <div className="wf-bo-grid">
          <div className="wf-bo-panel wf-bo-panel-large">
            <div className="wf-bo-panel-head">
              <strong>Inscriptions par semaine</strong>
              <Pill>S40 · S43</Pill>
            </div>
            <div className="wf-bo-chart">
              {[40, 65, 50, 80, 90, 70, 95, 110, 85, 100, 120, 105].map((h, i) => (
                <span key={i} className="wf-bo-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="wf-bo-panel">
            <div className="wf-bo-panel-head">
              <strong>Activité récente</strong>
            </div>
            <Stack gap={10} className="wf-bo-list">
              {[
                'Nouveau signalement · trip "Maroc 2026"',
                'Nouvelle squad · "Les Sardines"',
                'Pic de traffic · 132 sessions / 5min',
                'Build mobile v1.0.4 publié',
              ].map((t, i) => (
                <Row key={i} gap={8}>
                  <span className="wf-bo-list-dot" />
                  <span className="wf-tiny">{t}</span>
                </Row>
              ))}
            </Stack>
          </div>
        </div>
      </main>
    </>
  )
}

function BoUsers() {
  return (
    <>
      <BoSidebar active="Utilisateurs" />
      <main className="wf-bo-main">
        <div className="wf-bo-header">
          <Title>Utilisateurs</Title>
          <Row gap={8}>
            <Block height={32} pad className="wf-bo-search"><span className="wf-tiny">⌕ Rechercher un utilisateur</span></Block>
            <Btn>Filtres</Btn>
          </Row>
        </div>
        <div className="wf-bo-panel">
          <table className="wf-bo-table">
            <thead>
              <tr>
                <th>Utilisateur</th>
                <th>Email</th>
                <th>Inscrit</th>
                <th>Squads</th>
                <th>Trips</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Marie L.', 'marie.l@gmail.com', '02/10/2026', '3', '5', 'active'],
                ['Pierre R.', 'pierre.r@yahoo.fr', '28/09/2026', '1', '2', 'active'],
                ['Sophie B.', 'sophie@protonmail.com', '20/09/2026', '4', '8', 'active'],
                ['Lucas T.', 'lucas@orange.fr', '15/09/2026', '0', '0', 'inactive'],
                ['Emma D.', 'emma.d@gmail.com', '10/09/2026', '2', '3', 'flagged'],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{j === 5 ? <Pill color={cell === 'active' ? 'green' : cell === 'flagged' ? 'amber' : 'neutral'}>{cell}</Pill> : cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

function BoModeration() {
  return (
    <>
      <BoSidebar active="Modération" />
      <main className="wf-bo-main">
        <div className="wf-bo-header">
          <Stack gap={4}>
            <Title>Modération</Title>
            <span className="wf-bo-eyebrow">3 contenus en attente · délai cible 48h</span>
          </Stack>
        </div>

        <Stack gap={12}>
          {[
            { type: 'Trip public', name: '"Maroc 2026" · Lucas T.', reason: 'Photo signalée par 2 utilisateurs', date: 'il y a 4h' },
            { type: 'Anecdote journal', name: 'Trip "Albanie" · Marie L.', reason: 'Signalement automatique mots-clés', date: 'il y a 1j' },
            { type: 'Photo profil', name: 'Sophie B.', reason: 'Modération préventive', date: 'il y a 2j' },
          ].map((m, i) => (
            <div key={i} className="wf-bo-panel wf-bo-mod-card">
              <Row gap={16} className="wf-bo-mod-row">
                <Block height={84} className="wf-bo-mod-thumb">
                  <span>Aperçu</span>
                </Block>
                <Stack gap={6} className="wf-bo-mod-content">
                  <Row gap={8}>
                    <Pill color="amber">{m.type}</Pill>
                    <span className="wf-tiny-muted">{m.date}</span>
                  </Row>
                  <span className="wf-tiny-strong">{m.name}</span>
                  <span className="wf-tiny">{m.reason}</span>
                </Stack>
                <Stack gap={6} className="wf-bo-mod-actions">
                  <Btn primary>Valider</Btn>
                  <Btn>Masquer</Btn>
                  <Btn>Bannir</Btn>
                </Stack>
              </Row>
            </div>
          ))}
        </Stack>
      </main>
    </>
  )
}

// =====================================================================
// Gallery
// =====================================================================

const TABS = [
  { id: 'mobile', label: 'Application mobile', icon: Smartphone },
  { id: 'backoffice', label: 'Back office', icon: Monitor },
] as const

type TabId = (typeof TABS)[number]['id']

export default function WireframesGallery() {
  const [tab, setTab] = useState<TabId>('mobile')

  return (
    <div className="wf-root">
      <header className="wf-header">
        <div>
          <span className="wf-eyebrow">Wireframes basse-fi · V1</span>
          <h2>Aperçu des écrans</h2>
          <p>
            Sept écrans côté app mobile, trois écrans côté back office. Niveau "low-fi" volontaire : on travaille la structure et le parcours, pas le pixel.
          </p>
        </div>

        <nav className="wf-tabs">
          {TABS.map(t => {
            const Icon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`wf-tab-btn ${tab === t.id ? 'is-active' : ''}`}
                type="button"
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            )
          })}
        </nav>
      </header>

      {tab === 'mobile' && (
        <div className="wf-mobile-grid">
          <PhoneFrame label="01 · Onboarding" hint="Découverte produit, choix méthode d'auth.">
            <ScreenOnboarding />
          </PhoneFrame>
          <PhoneFrame label="02 · Mes squads" hint="Liste des groupes de l'utilisateur.">
            <ScreenSquads />
          </PhoneFrame>
          <PhoneFrame label="03 · Détail trip" hint="Vue principale d'un trip, étapes en cours de vote.">
            <ScreenTripDetail />
          </PhoneFrame>
          <PhoneFrame label="04 · Itinéraire carto" hint="Carte MapLibre, étapes numérotées, route prévue.">
            <ScreenItinerary />
          </PhoneFrame>
          <PhoneFrame label="05 · Proposer une étape" hint="Formulaire de soumission, vote groupe.">
            <ScreenAddStep />
          </PhoneFrame>
          <PhoneFrame label="06 · Split des dépenses" hint="Solde global, dépenses récentes, règlement.">
            <ScreenSplit />
          </PhoneFrame>
          <PhoneFrame label="07 · Journal de bord" hint="Timeline du trip, photos + textes courts.">
            <ScreenJournal />
          </PhoneFrame>
        </div>
      )}

      {tab === 'backoffice' && (
        <div className="wf-desktop-grid">
          <DesktopFrame label="01 · Dashboard" hint="Vue d'ensemble pour Gaspard et Studio Boréal.">
            <BoDashboard />
          </DesktopFrame>
          <DesktopFrame label="02 · Utilisateurs" hint="Recherche, filtres, suspension de comptes.">
            <BoUsers />
          </DesktopFrame>
          <DesktopFrame label="03 · Modération" hint="Triage des signalements, actions rapides.">
            <BoModeration />
          </DesktopFrame>
        </div>
      )}
    </div>
  )
}
