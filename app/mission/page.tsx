'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, Target, AlertCircle, Palette, Cpu, Calendar, DollarSign, Shield, CheckCircle2, BookOpen, Lightbulb, AlertTriangle } from 'lucide-react'
import Footer from '@/components/Footer'
import { missionProjects, MissionProject } from '@/data/missionProjects'
import { MarkdownText } from '@/lib/markdownUtils'
import { isTeacherMode } from '@/lib/teacherMode'
import GamePanel from '@/components/GamePanel'
import Leaderboard from '@/components/Leaderboard'
import TeamSetup from '@/components/TeamSetup'
import { initEasterEggListeners, awardBadge, addPoints, getTeamData } from '@/lib/gameSystem'

export default function MissionPage() {
  const [selectedProject, setSelectedProject] = useState<MissionProject | null>(null)
  const [showProjectSelection, setShowProjectSelection] = useState(true)
  const [currentTab, setCurrentTab] = useState<string>('brief')
  const [teacherModeActive, setTeacherModeActive] = useState(false)
  const [showTeamSetup, setShowTeamSetup] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProject = localStorage.getItem('selectedMissionProject')
      
      if (savedProject) {
        const project = missionProjects.find(p => p.id === savedProject)
        if (project) {
          setSelectedProject(project)
          setShowProjectSelection(false)
        }
      }

      // Vérifier le mode enseignant
      setTeacherModeActive(isTeacherMode())
      
      // Vérifier si équipe existe
      const team = getTeamData()
      if (!team && !showProjectSelection) {
        setShowTeamSetup(true)
      }
      
      // Initialiser les easter eggs techniques
      initEasterEggListeners()
      
      // Message console : un clin d'œil, sans points automatiques (les points venaient à tout le monde)
      if (!localStorage.getItem('console-triggered')) {
        console.log('%cTiens, quelqu\'un sait ouvrir la console... Bravo pour ta curiosité.', 'color: #2b41e5; font-weight: bold; font-size: 16px;')
        localStorage.setItem('console-triggered', 'true')
      }
      
      // Easter egg: triple clic sur le logo
      let logoClickCount = 0
      let logoClickTimeout: NodeJS.Timeout
      
      const handleLogoClick = () => {
        logoClickCount++
        clearTimeout(logoClickTimeout)
        
        if (logoClickCount === 3) {
          addPoints(30, 'Triple clic découvert', 'triple-click-logo')
          alert('Secret débloqué !\n\nVous avez l\'œil. Les détails comptent en gestion de projet.\n\nIndice : Pensez aux durées standard en méthode Agile.')
          logoClickCount = 0
        } else {
          logoClickTimeout = setTimeout(() => {
            logoClickCount = 0
          }, 500)
        }
      }
      
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        if (target.closest('h1') || target.closest('[data-logo]')) {
          handleLogoClick()
        }
      })
    }
  }, [])

  const handleProjectSelect = (project: MissionProject) => {
    setSelectedProject(project)
    localStorage.setItem('selectedMissionProject', project.id)
    
    // Vérifier si équipe existe
    const team = getTeamData()
    if (!team) {
      // Pas d'équipe : afficher le setup
      setShowProjectSelection(false)
      setShowTeamSetup(true)
    } else {
      // Équipe existe : aller directement au contenu
      setShowProjectSelection(false)
    }
  }

  const handleReset = () => {
    if (confirm('Voulez-vous changer de projet ?')) {
      localStorage.removeItem('selectedMissionProject')
      setSelectedProject(null)
      setShowProjectSelection(true)
    }
  }

  const tabs = [
    { id: 'brief', label: 'Brief', icon: FileText },
    { id: 'analyse', label: 'Analyse', icon: AlertCircle },
    { id: 'agence', label: 'Agence', icon: Target },
    { id: 'wireframes', label: 'Wireframes', icon: Palette },
    { id: 'technique', label: 'Technique', icon: Cpu },
    { id: 'planning', label: 'Planning', icon: Calendar },
    { id: 'budget', label: 'Budget', icon: DollarSign },
    { id: 'strategie', label: 'Stratégie', icon: Shield },
    { id: 'evaluation', label: 'Évaluation', icon: CheckCircle2 }
  ]

  // Composant pour afficher les valeurs en mode enseignant
  const T = ({ children }: { children: React.ReactNode }) => {
    return <>{teacherModeActive ? children : '??'}</>
  }

  if (showProjectSelection) {
    return (
      <div className="min-h-screen bg-paper">
        <header className="bg-ink text-paper border border-ink">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link href="/" className="inline-flex items-center text-white hover:text-paper/70 mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white">Mission Individuelle</h1>
                <p className="text-paper/70 mt-2 text-lg">
                  Répondez à un appel d'offres professionnel
                </p>
              </div>
              <Target className="w-16 h-16 text-paper/70" />
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div 
            className="bg-white  border border-ink p-8 mb-12 hover: "
            onDoubleClick={() => {
              addPoints(30, 'Double-clic secret', 'double-click-objectif')
              alert('Double-clic secret découvert !\n\nLes meilleurs projets naissent de l\'attention aux détails.\n+30 points')
            }}
          >
            <h2 className="text-3xl font-bold text-ink mb-6">Objectif de la mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-ink-2 leading-relaxed mb-4">
                Vous allez répondre à un appel d'offres complet pour un projet SaaS relativement complexe. 
                Cette mission simule une situation professionnelle réelle où une agence web ou 
                un freelance doit convaincre un client de lui confier un projet.
              </p>
              <div className="bg-paper-2 border border-ink p-6  my-6">
                <h3 className="font-bold text-blue-900 mb-3">Livrables attendus</h3>
                <ul className="space-y-2 text-blue-900">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Document de réponse complet (30-40 pages PDF)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Wireframes des écrans principaux (Figma/équivalent)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Planning détaillé (Gantt ou équivalent)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Budget chiffré et justifié</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Présentation orale (15-20 minutes)</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>

          <h2 className="text-3xl font-bold text-ink mb-8">Choisissez votre projet</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {missionProjects.map((project) => (
              <div key={project.id} className="bg-white  border border-ink overflow-hidden hover: transition-all">
                <div className="bg-ink text-paper p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-paper/70 text-sm">{project.type}</p>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Contexte</h4>
                    <div className="text-sm line-clamp-4">
                      <MarkdownText>{project.context}</MarkdownText>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-ink mb-2">Budget</h4>
                    <div className="text-sm">
                      <MarkdownText>{project.budget.split('\n')[0]}</MarkdownText>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-ink mb-2">Délai</h4>
                    <div className="text-sm">
                      <MarkdownText>{project.timeline.split('\n')[0]}</MarkdownText>
                    </div>
                  </div>

                  

                  <button
                    onClick={() => handleProjectSelect(project)}
                    className="w-full mt-4 px-6 py-3 bg-ink text-paper  hover:bg-stamp font-semibold border border-ink transition-all"
                  >
                    Choisir ce projet →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  if (!selectedProject) return null

  // Afficher le setup d'équipe si nécessaire
  if (showTeamSetup) {
    return <TeamSetup onComplete={() => {
      setShowTeamSetup(false)
      setShowProjectSelection(false)
    }} />
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="bg-ink text-paper border border-ink sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={handleReset}
              className="inline-flex items-center text-white hover:text-paper/70 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Changer de projet
            </button>
            {teacherModeActive && (
              <div className="bg-copy-yellow text-ink border border-ink px-3 py-1  text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600  animate-pulse"></span>
                Mode Enseignant Actif
              </div>
            )}
          </div>

          <h1 className="text-2xl font-bold text-white" data-logo>{selectedProject.title}</h1>
          <p className="text-paper/70 text-sm mt-1">Guide de réponse à l'appel d'offres</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-[108px] z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  currentTab === tab.id
                    ? 'border-purple-600 text-ink'
                    : 'border-transparent text-ink-2 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Brief Tab */}
        {currentTab === 'brief' && (
          <div className="space-y-6">
            <div 
              className="bg-white  border border-ink p-6  "
              onContextMenu={(e) => {
                e.preventDefault()
                addPoints(20, 'Clic droit sur le brief', 'right-click-brief')
                alert('Clic droit sur le brief !\n\nTu cherches à tout analyser. +20 points')
              }}
            >
              <h2 className="text-2xl font-bold text-ink mb-4">Brief de l'appel d'offres</h2>
              
              <div className="space-y-6">
                <div 
                  className="bg-paper-2 border-l-4 border-purple-600 p-6  cursor-pointer hover:bg-purple-100 transition-colors"
                  onClick={() => {
                    if (Math.random() > 0.7) {
                      addPoints(10, 'Clic chanceux', 'lucky-click-contexte')
                      alert('Clic chanceux ! +10 points')
                    }
                  }}
                >
                  <h3 className="font-bold text-lg text-ink mb-2">Contexte</h3>
                  <MarkdownText>{selectedProject.context}</MarkdownText>
                </div>

                <div className="bg-paper-2 border border-ink p-6 ">
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Client</h3>
                  <MarkdownText>{selectedProject.clientDescription}</MarkdownText>
                </div>

                <div 
                  className="bg-stamp-soft border border-stamp p-6  hover:border-green-700 transition-all cursor-help"
                  title="Les besoins sont la clé du projet..."
                  onClick={() => {
                    const needs = selectedProject.mainNeeds.length
                    if (needs >= 6) {
                      addPoints(30, 'Projet complexe identifié', 'complex-project-click')
                      alert(`Ce projet a ${needs} besoins majeurs. C'est un gros projet !\n\n+30 points pour avoir remarqué la complexité.`)
                    }
                  }}
                >
                  <h3 className="font-bold text-lg text-green-900 mb-3">Besoins principaux</h3>
                  <ul className="space-y-3">
                    {selectedProject.mainNeeds.map((need, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <MarkdownText>{need}</MarkdownText>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-copy-yellow border-l-4 border-orange-600 p-6 ">
                  <h3 className="font-bold text-lg text-orange-900 mb-3">Contraintes spécifiques</h3>
                  <ul className="space-y-2">
                    {selectedProject.specificConstraints.map((constraint, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <MarkdownText>{constraint}</MarkdownText>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-paper-2 border-l-4 border-cyan-600 p-6 ">
                  <h3 className="font-bold text-lg text-cyan-900 mb-2">Cibles</h3>
                  <MarkdownText>{selectedProject.targetAudience}</MarkdownText>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-copy-pink border-l-4 border-pink-600 p-6 ">
                    <h3 className="font-bold text-lg text-pink-900 mb-2">Budget</h3>
                    <div className="text-sm">
                      <MarkdownText>{selectedProject.budget}</MarkdownText>
                    </div>
                  </div>

                  <div className="bg-paper-2 border-l-4 border-indigo-600 p-6 ">
                    <h3 className="font-bold text-lg text-indigo-900 mb-2">Timeline</h3>
                    <div className="text-sm">
                      <MarkdownText>{selectedProject.timeline}</MarkdownText>
                    </div>
                  </div>
                </div>

                <div className="bg-ink text-paper p-6 ">
                  <h3 className="font-bold text-lg mb-3">Grille d'évaluation</h3>
                  <div className="space-y-3">
                    {selectedProject.evaluationCriteria.map((criteria, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-white text-ink  w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {criteria.weight}%
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{criteria.category}</h4>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            {criteria.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analyse Tab */}
        {currentTab === 'analyse' && (
          <div className="space-y-6">
            <GuideSection
              title="Analyse approfondie du brief"
              icon={<AlertCircle className="w-8 h-8 text-ink" />}
            >
              <ConseillSection
                title="Reformuler et synthétiser"
                type="conseil"
              >
                <p className="text-ink-2 mb-3">
                  Commencez par reformuler le besoin du client avec vos propres mots. Cela montre que vous avez vraiment compris.
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li>Résumez le contexte métier du client</li>
                  <li>Identifiez le problème principal qu'il cherche à résoudre</li>
                  <li>Reformulez les objectifs stratégiques</li>
                  <li>Mettez en avant les enjeux business (ROI, croissance, compétitivité)</li>
                </ul>
              </ConseillSection>

              <ConseillSection
                title="Questions complémentaires à poser"
                type="conseil"
              >
                <p className="text-ink-2 mb-4 leading-relaxed">
                  Dans un contexte réel d'appel d'offres, il est essentiel d'organiser des réunions préalables avec le client pour clarifier les zones d'ombre et affiner votre compréhension du projet.
                </p>
                <div className="bg-paper-2 border border-rule p-5 ">
                  <p className="text-blue-900 font-semibold mb-2">
                    💡 Sollicitez votre enseignant
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    Votre enseignant est à votre disposition pour répondre à vos questions et jouer le rôle du client. 
                    N'hésitez pas à le solliciter pour rentrer dans le détail de chaque projet. 
                    Ce type de réunions préalables à la réponse au projet sont précieuses et font partie intégrante 
                    d'une démarche professionnelle.
                  </p>
                </div>
                <p className="text-ink-2 mt-4 text-sm italic">
                  Préparez vos questions en amont pour maximiser l'efficacité de ces échanges. 
                  Pensez aux aspects fonctionnels, techniques, organisationnels et budgétaires.
                </p>
              </ConseillSection>

              <ConseillSection
                title="Analyse des risques"
                type="attention"
              >
                <p className="text-ink-2 mb-3">
                  Identifiez les risques potentiels et proposez des solutions :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li><strong>Risques techniques :</strong> Complexité, scalabilité, sécurité</li>
                  <li><strong>Risques fonctionnels :</strong> Périmètre flou, évolutions en cours de route</li>
                  <li><strong>Risques organisationnels :</strong> Disponibilité client, décisions tardives</li>
                  <li><strong>Risques budgétaires :</strong> Sous-estimation, dérive des coûts</li>
                </ul>
                <p className="text-ink-2 mt-3">
                  Pour chaque risque identifié, anticipez les impacts et proposez des solutions.
                </p>
              </ConseillSection>
            </GuideSection>
          </div>
        )}

        {/* Agence Tab */}
        {currentTab === 'agence' && (
          <div className="space-y-6">
            <GuideSection
              title="Présentation de votre agence"
              icon={<Target className="w-8 h-8 text-ink" />}
            >
              <ConseillSection title="Présenter votre agence" type="conseil">
                <p className="text-ink-2 mb-3">
                  Créez une agence fictive crédible ou présentez votre profil en tant que freelance.
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li>Nom de l'agence et baseline</li>
                  <li>Année de création et expérience</li>
                  <li>Domaines d'expertise (SaaS, e-commerce, e-santé...)</li>
                  <li>Valeurs et différenciation (ce qui vous rend unique)</li>
                  <li>Nombre de projets réalisés</li>
                </ul>
              </ConseillSection>

              <ConseillSection title="Composer l'équipe projet" type="exemple">
                <p className="text-ink-2 mb-3">
                  Détaillez la composition de l'équipe qui travaillera sur le projet :
                </p>
                <div className="bg-paper-2 p-4  space-y-3">
                  <div>
                    <p className="font-semibold text-ink">Chef de projet</p>
                    <p className="text-sm text-ink-2"><T>10 ans d'expérience, certifié Scrum Master, 50% sur le projet</T></p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Lead Developer Backend</p>
                    <p className="text-sm text-ink-2"><T>8 ans d'expérience Node.js/Python, expert API REST, 80% sur le projet</T></p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Developer Frontend</p>
                    <p className="text-sm text-ink-2"><T>5 ans React/Next.js, spécialiste UX, 80% sur le projet</T></p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">UX/UI Designer</p>
                    <p className="text-sm text-ink-2"><T>6 ans design produit, expert Figma, 40% sur le projet</T></p>
                  </div>
                </div>
              </ConseillSection>

              <ConseillSection title="Références et projets similaires" type="conseil">
                <p className="text-ink-2 mb-3">
                  Listez 3-5 projets similaires que vous avez réalisés (même fictifs mais crédibles) :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li>Nom du projet et client (anonymisé si nécessaire)</li>
                  <li>Problématique et solution apportée</li>
                  <li>Technologies utilisées</li>
                  <li>Résultats mesurables (trafic, conversion, satisfaction...)</li>
                </ul>
              </ConseillSection>
            </GuideSection>
          </div>
        )}

        {/* Wireframes Tab */}
        {currentTab === 'wireframes' && (
          <div className="space-y-6">
            <GuideSection
              title="Wireframes et UX Design"
              icon={<Palette className="w-8 h-8 text-ink" />}
            >
              <ConseillSection title="Définir les parcours utilisateurs" type="conseil">
                <p className="text-ink-2 mb-3">
                  Avant de dessiner les écrans, cartographiez les parcours clés :
                </p>
                <div className="bg-paper-2 p-4  space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-ink">Parcours 1 - Inscription</p>
                    <p className="text-ink-2"><T>Landing → Formulaire → Confirmation email → Onboarding</T></p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Parcours 2 - Utilisation principale</p>
                    <p className="text-ink-2"><T>Dashboard → Action clé → Résultat → Feedback</T></p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Parcours 3 - Support</p>
                    <p className="text-ink-2"><T>Problème → FAQ → Contact support → Résolution</T></p>
                  </div>
                </div>
              </ConseillSection>

              <ConseillSection title="Créer les wireframes" type="outil">
                <p className="text-ink-2 mb-3">
                  Outils recommandés pour vos wireframes :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li><strong>Figma</strong> - Gratuit, collaboratif, complet</li>
                  <li><strong>Balsamiq</strong> - Rapide, style croquis, efficace</li>
                  <li><strong>Adobe XD</strong> - Professionnel, prototypage avancé</li>
                  <li><strong>Sketch</strong> - Mac uniquement, très répandu</li>
                  <li><strong>Papier + scan</strong> - Parfaitement acceptable pour un wireframe</li>
                </ul>
                <p className="text-ink-2 mt-3">
                  <strong>Minimum attendu :</strong> <T>10-15 écrans</T> clés avec annotations expliquant les interactions.
                </p>
              </ConseillSection>

              <ConseillSection title="Bonnes pratiques wireframing" type="conseil">
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li>Commencez par les écrans principaux (dashboard, actions clés)</li>
                  <li>Annotez chaque élément important (interactions, états, règles)</li>
                  <li
                    className="cursor-pointer hover:text-ink transition-colors"
                    onClick={() => {
                      addPoints(15, 'Secret wireframe', 'wireframe-error-states')
                      alert('Tu as cliqué sur le bon conseil ! Les états d\'erreur sont cruciaux.\n+15 points')
                    }}
                  >
                    Pensez aux états d'erreur et cas limites
                  </li>
                  <li>Gardez une cohérence visuelle (grille, espacements)</li>
                  <li>Incluez les éléments de navigation</li>
                  <li>Pensez mobile ET desktop si nécessaire</li>
                </ul>
              </ConseillSection>
            </GuideSection>
          </div>
        )}

        {/* Technique Tab */}
        {currentTab === 'technique' && (
          <div className="space-y-6">
            <GuideSection
              title="Architecture Technique"
              icon={<Cpu className="w-8 h-8 text-ink" />}
            >
              <ConseillSection title="Choisir la stack technologique" type="conseil">
                <p className="text-ink-2 mb-3">
                  Chaque choix technique doit être justifié par rapport aux besoins du projet :
                </p>
                <div className="bg-paper-2 p-4  space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-ink">Frontend</p>
                    <p className="text-ink-2"><T>React + Next.js → SSR pour le SEO, performance, écosystème mature</T></p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Backend</p>
                    <p className="text-ink-2"><T>Node.js + Express → Cohérence JS full-stack, asynchrone, scalable</T></p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Base de données</p>
                    <p className="text-ink-2"><T>PostgreSQL → Données relationnelles, ACID, fiabilité + Redis pour le cache</T></p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Infrastructure</p>
                    <p className="text-ink-2"><T>AWS / Vercel → Scalabilité automatique, monitoring intégré</T></p>
                  </div>
                </div>
              </ConseillSection>

              <ConseillSection title="Schéma d'architecture" type="exemple">
                <p className="text-ink-2 mb-3">
                  Créez un schéma qui montre :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li>Les différentes couches (Frontend, API, BDD, Services externes)</li>
                  <li>Les flux de données entre composants</li>
                  <li>Les systèmes de cache et CDN</li>
                  <li>Les mécanismes de sécurité (firewall, encryption)</li>
                  <li>Le monitoring et logging</li>
                </ul>
                <p className="text-ink-2 mt-3 text-sm italic">
                  Utilisez draw.io, Lucidchart ou même PowerPoint pour créer votre schéma.
                </p>
              </ConseillSection>

              <ConseillSection title="Sécurité" type="attention">
                <p className="text-ink-2 mb-3">
                  La sécurité doit être au cœur de votre architecture :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li
                    className="cursor-pointer hover:bg-red-soft p-1 -m-1  transition-colors"
                    onClick={() => {
                      addPoints(25, 'Expert sécurité', 'security-expert-click')
                      alert('La sécurité n\'est pas une option !\n\nBravo de t\'y intéresser. +25 points')
                    }}
                  >
                    <strong>Authentification :</strong> JWT, OAuth2, 2FA si données sensibles
                  </li>
                  <li><strong>Encryption :</strong> HTTPS obligatoire, données sensibles chiffrées en BDD</li>
                  <li><strong>Protection :</strong> Rate limiting, validation des entrées, protection CSRF</li>
                  <li><strong>Conformité :</strong> RGPD, hébergement HDS si santé, audit sécurité</li>
                </ul>
              </ConseillSection>

              <ConseillSection title="Scalabilité et performance" type="conseil">
                <p className="text-ink-2 mb-3">
                  Comment votre solution gère la montée en charge :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li>Load balancing pour distribuer la charge</li>
                  <li>Cache Redis pour réduire les requêtes BDD</li>
                  <li>CDN pour les ressources statiques</li>
                  <li>Auto-scaling selon le trafic</li>
                  <li>Optimisation des requêtes BDD (indexes, requêtes optimisées)</li>
                </ul>
              </ConseillSection>
            </GuideSection>
          </div>
        )}

        {/* Planning Tab */}
        {currentTab === 'planning' && (
          <div className="space-y-6">
            <GuideSection
              title="Planning et Méthodologie"
              icon={<Calendar className="w-8 h-8 text-ink" />}
            >
              <ConseillSection title="Méthodologie Agile" type="conseil">
                <p className="text-ink-2 mb-3">
                  Décrivez votre méthodologie de travail :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li><strong>Sprints :</strong> Cycles de <T>2 semaines</T> avec démos régulières</li>
                  <li><strong>Daily standup :</strong> Point quotidien de <T>15 min</T></li>
                  <li><strong>Sprint review :</strong> Démonstration au client en fin de sprint</li>
                  <li><strong>Rétrospective :</strong> Amélioration continue du process</li>
                  <li><strong>Outils :</strong> <T>Jira/Trello pour le suivi, Slack pour la communication</T></li>
                </ul>
              </ConseillSection>

              <ConseillSection title="Découpage en phases" type="exemple">
                <div className="bg-paper-2 p-4  space-y-4 text-sm">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-semibold text-ink">Phase 1 - Cadrage (<T>1 mois</T>)</p>
                    <p className="text-ink-2">Ateliers métier, personas, parcours utilisateurs, validation périmètre</p>
                  </div>
                  <div className="border border-ink pl-4">
                    <p className="font-semibold text-ink">Phase 2 - Design (<T>1 mois</T>)</p>
                    <p className="text-ink-2">Wireframes, maquettes, design system, prototypes, tests utilisateurs</p>
                  </div>
                  <div className="border border-stamp pl-4">
                    <p className="font-semibold text-ink">Phase 3 - Développement (<T>3-4 mois</T>)</p>
                    <p className="text-ink-2">Sprints de développement, intégrations continues, tests automatisés</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="font-semibold text-ink">Phase 4 - Tests (<T>3 semaines</T>)</p>
                    <p className="text-ink-2">Tests fonctionnels, tests de charge, recette client, corrections</p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4">
                    <p className="font-semibold text-ink">Phase 5 - Déploiement (<T>2 semaines</T>)</p>
                    <p className="text-ink-2">Migration données, mise en production, formation, support</p>
                  </div>
                </div>
              </ConseillSection>

              <ConseillSection title="Créer un Gantt" type="outil">
                <p className="text-ink-2 mb-3">
                  Créez un diagramme de Gantt avec :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li
                    className="cursor-help hover:bg-paper-2 p-1 -m-1  transition-colors"
                    title="Pssst... clique ici"
                    onClick={() => {
                      addPoints(20, 'Outil secret trouvé', 'ganttproject-click')
                      alert('GanttProject est gratuit et parfait pour débuter !\n\nTélécharge-le sur ganttproject.biz\n+20 points')
                    }}
                  >
                    <strong>GanttProject</strong> - Gratuit, open source
                  </li>
                  <li><strong>Excel/Google Sheets</strong> - Avec template Gantt</li>
                  <li><strong>Microsoft Project</strong> - Professionnel</li>
                  <li><strong>Monday.com / Asana</strong> - Outils en ligne</li>
                </ul>
                <p className="text-ink-2 mt-3">
                  Incluez les jalons clés, les dépendances entre tâches, et la timeline globale.
                </p>
              </ConseillSection>
            </GuideSection>
          </div>
        )}

        {/* Budget Tab */}
        {currentTab === 'budget' && (
          <div className="space-y-6">
            <GuideSection
              title="Chiffrage et Budget"
              icon={<DollarSign className="w-8 h-8 text-ink" />}
            >
              <ConseillSection title="Méthode de chiffrage" type="conseil">
                <p className="text-ink-2 mb-3">
                  Approche recommandée en 5 étapes :
                </p>
                <ol className="list-decimal list-inside space-y-2 text-ink-2">
                  <li>Décomposer le projet en tâches détaillées</li>
                  <li>Estimer le nombre de jours par tâche (Posez des questions à l'enseignant qui peut jouer le rôle du développeur sénior)</li>
                  <li>Appliquer les taux journaliers par profil</li>
                  <li>Ajouter 10-15% de marge pour les imprévus</li>
                  <li>Vérifier la cohérence avec le budget client (et oui, c'est important...)</li>
                </ol>
              </ConseillSection>

              <ConseillSection title="Taux journaliers moyens" type="exemple">
                <div className="bg-paper-2 p-4  space-y-2 text-sm">
                  <p><strong>Chef de projet :</strong> <T>600-800€/jour</T></p>
                  <p><strong>Développeur Senior :</strong> <T>500-700€/jour</T></p>
                  <p><strong>Développeur Junior :</strong> <T>300-450€/jour</T></p>
                  <p><strong>UX/UI Designer :</strong> <T>450-650€/jour</T></p>
                  <p><strong>DevOps :</strong> <T>600-800€/jour</T></p>
                  <p><strong>Expert sécurité :</strong> <T>700-1000€/jour</T></p>
                </div>
                <p className="text-ink-2 mt-3 text-sm italic">
                  Ces tarifs sont indicatifs et varient selon la région, l'expertise, et la complexité.
                </p>
              </ConseillSection>

              <ConseillSection title="Structure du budget" type="exemple">
                <div className="bg-paper-2 p-4  space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-ink">Conception (<T>15%</T>)</p>
                    <p className="text-ink-2">UX/UI Design, wireframes, maquettes, design system</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Développement Backend (<T>30%</T>)</p>
                    <p className="text-ink-2">API, base de données, authentification, intégrations</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Développement Frontend (<T>25%</T>)</p>
                    <p className="text-ink-2">Interfaces, responsive, interactions, intégration design</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Gestion de projet (<T>10%</T>)</p>
                    <p className="text-ink-2">Coordination, réunions, reporting, documentation</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Tests et recette (<T>10%</T>)</p>
                    <p className="text-ink-2">Tests fonctionnels, de charge, sécurité, recette client</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Infrastructure et déploiement (<T>5%</T>)</p>
                    <p className="text-ink-2">Setup serveurs, CI/CD, monitoring, mise en production</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Formation et support (<T>5%</T>)</p>
                    <p className="text-ink-2">Documentation, formation équipe client, accompagnement</p>
                  </div>
                </div>
              </ConseillSection>

              <ConseillSection title="Modalités de paiement" type="conseil">
                <p className="text-ink-2 mb-3">
                  Proposez un échelonnement rassurant pour le client :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li><strong><T>30%</T> à la signature</strong> - Engagement et démarrage</li>
                  <li><strong><T>30%</T> à mi-projet</strong> - Validation design et développement</li>
                  <li><strong><T>30%</T> à la recette</strong> - Avant mise en production</li>
                  <li><strong><T>10%</T> à J+30</strong> - Après validation stabilité production</li>
                </ul>
              </ConseillSection>
            </GuideSection>
          </div>
        )}

        {/* Stratégie Tab */}
        {currentTab === 'strategie' && (
          <div className="space-y-6">
            <GuideSection
              title="Stratégie de Tests, Déploiement et Support"
              icon={<Shield className="w-8 h-8 text-ink" />}
            >
              <ConseillSection title="Stratégie de tests" type="conseil">
                <p className="text-ink-2 mb-3">
                  Une stratégie de tests complète en <T>4 niveaux</T> :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li><strong>Tests unitaires :</strong> Chaque fonction testée individuellement (<T>Jest, PHPUnit</T>)</li>
                  <li><strong>Tests d'intégration :</strong> Interactions entre composants</li>
                  <li><strong>Tests E2E :</strong> Parcours utilisateurs complets (<T>Cypress, Playwright</T>)</li>
                  <li><strong>Tests de charge :</strong> Vérifier la scalabilité (<T>K6, JMeter</T>)</li>
                  <li><strong>Tests utilisateurs :</strong> <T>2 sessions</T> avec vrais utilisateurs</li>
                </ul>
              </ConseillSection>

              <ConseillSection title="Plan de déploiement" type="exemple">
                <div className="bg-paper-2 p-4  space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-ink">Environnements</p>
                    <p className="text-ink-2">Dev → Staging → Production (isolation complète)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">CI/CD</p>
                    <p className="text-ink-2">GitHub Actions / GitLab CI : tests auto, déploiement auto sur staging</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Stratégie de rollback</p>
                    <p className="text-ink-2">Déploiement blue/green ou canary pour retour arrière rapide</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Monitoring</p>
                    <p className="text-ink-2">Sentry pour erreurs, Datadog/New Relic pour performance</p>
                  </div>
                </div>
              </ConseillSection>

              <ConseillSection title="Formation et accompagnement" type="conseil">
                <p className="text-ink-2 mb-3">
                  L'adoption est clé pour le succès du projet :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li>Sessions de formation pour les utilisateurs clés (2-3h)</li>
                  <li>Documentation utilisateur complète (PDF + vidéos)</li>
                  <li>FAQ et base de connaissance</li>
                  <li>Support email pendant 3 mois</li>
                  <li>Hotline pendant 1 mois post-lancement</li>
                </ul>
              </ConseillSection>

              <ConseillSection title="Maintenance et support" type="conseil">
                <p className="text-ink-2 mb-3">
                  Proposez une offre de maintenance claire :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li><strong>Garantie <T>3 mois</T> :</strong> Corrections de bugs sans frais</li>
                  <li><strong>SLA <T>99.9%</T> :</strong> Disponibilité du service</li>
                  <li><strong>Support prioritaire :</strong> Réponse sous <T>4h</T> pour bugs bloquants</li>
                  <li><strong>Mises à jour :</strong> Sécurité et maintenance incluses</li>
                  <li><strong>Évolutions :</strong> Forfait jours ou régie selon besoins</li>
                </ul>
              </ConseillSection>
            </GuideSection>
          </div>
        )}

        {/* Évaluation Tab */}
        {currentTab === 'evaluation' && (
          <div className="space-y-6">
            <GuideSection
              title="Auto-évaluation et Indicateurs de succès"
              icon={<CheckCircle2 className="w-8 h-8 text-ink" />}
            >
              <div className="bg-ink text-paper p-6  mb-6">
                <h3 className="font-bold text-xl mb-4">Grille d'évaluation du projet</h3>
                <div className="space-y-4">
                  {selectedProject.evaluationCriteria.map((criteria, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur  p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-lg">{criteria.category}</h4>
                        <span className="bg-white text-ink px-3 py-1  font-bold">
                          {criteria.weight}%
                        </span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">
                        {criteria.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <ConseillSection title="Auto-évaluation" type="conseil">
                <p className="text-ink-2 mb-3">
                  Évaluez honnêtement votre réponse selon chaque critère :
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-2">
                  <li>Notez-vous de 0 à 10 sur chaque critère</li>
                  <li>Justifiez chaque note avec des éléments concrets</li>
                  <li>Identifiez vos points forts</li>
                  <li>Soyez lucide sur vos points d'amélioration</li>
                  <li>Proposez des pistes pour renforcer les points faibles</li>
                </ul>
              </ConseillSection>

              <div className="bg-stamp-soft border border-stamp p-6 ">
                <h4 className="font-bold text-green-900 mb-3">Indicateurs de succès du projet</h4>
                <ul className="space-y-2">
                  {selectedProject.successIndicators.map((indicator, index) => (
                    <li key={index} className="flex items-start text-green-800">
                      <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{indicator}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ink text-paper  p-8">
                <h3 className="text-2xl font-bold mb-4">Checklist finale</h3>
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span>Document complet (40-60 pages) relu et corrigé</span>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span>Wireframes créés et exportés (PDF ou lien Figma)</span>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span>Planning Gantt créé et lisible</span>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span>Budget chiffré avec détails par phase</span>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span>Présentation orale préparée (15-20 min)</span>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span>Auto-évaluation complétée honnêtement</span>
                  </label>
                </div>
              </div>
            </GuideSection>
          </div>
        )}
      </main>

      {/* Game Panel */}
      <GamePanel projectId={selectedProject.id} />

      {/* Leaderboard */}
      <Leaderboard />

      <Footer />
    </div>
  )
}

// Composants helpers
interface GuideSectionProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

function GuideSection({ title, icon, children }: GuideSectionProps) {
  return (
    <div className="bg-white  border border-ink p-8">
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h2 className="text-3xl font-bold text-ink">{title}</h2>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  )
}

interface ConseillSectionProps {
  title: string
  type: 'conseil' | 'exemple' | 'attention' | 'outil'
  children: React.ReactNode
}

function ConseillSection({ title, type, children }: ConseillSectionProps) {
  const colors = {
    conseil: { bg: 'bg-paper-2', border: 'border-blue-600', text: 'text-blue-900', icon: Lightbulb },
    exemple: { bg: 'bg-stamp-soft', border: 'border-green-600', text: 'text-green-900', icon: BookOpen },
    attention: { bg: 'bg-copy-yellow', border: 'border-orange-600', text: 'text-orange-900', icon: AlertTriangle },
    outil: { bg: 'bg-paper-2', border: 'border-purple-600', text: 'text-ink', icon: Target }
  }

  const { bg, border, text, icon: Icon } = colors[type]

  return (
    <div className={`${bg} border-l-4 ${border} p-6 `}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-5 h-5 ${text}`} />
        <h3 className={`font-bold text-lg ${text}`}>{title}</h3>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
