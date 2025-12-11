'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, Play, Square, Save, ChevronDown, ChevronRight } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import { supabase } from '@/lib/supabase'
import Footer from '@/components/Footer'

interface OralData {
  id: string
  student_name: string
  passage_order: number
  project_chosen: string | null
  comments: string | null
  note_comprehension: number | null
  note_technique: number | null
  note_justification: number | null
  note_presentation: number | null
  oral_started_at: string | null
  oral_ended_at: string | null
  duration_minutes: number | null
}

const QUESTIONS_POOL = [
  {
    category: 'Analyse du Brief',
    questions: [
      "Quelle est selon vous la principale problématique qu'Eventeo cherche à résoudre ?",
      "Si vous deviez résumer ce projet en une phrase, que diriez-vous ?",
      "Quel est le risque le plus critique de ce projet et comment le gérer ?",
      "Pourquoi ce client a-t-il besoin d'une solution custom plutôt que d'acheter un outil existant ?",
      "Quelle est la différence entre les besoins exprimés et les besoins réels selon vous ?"
    ]
  },
  {
    category: 'Architecture et Choix Techniques',
    questions: [
      "Pourquoi avez-vous choisi cette stack technique spécifiquement ?",
      "React Native vs développement natif : argumentez votre choix pour ce projet.",
      "Comment votre architecture gère-t-elle 5000 utilisateurs simultanés ?",
      "Expliquez-moi en 1 minute comment fonctionne le système de temps réel.",
      "Si je vous supprime PostgreSQL de votre stack, que proposez-vous à la place et pourquoi ?",
      "Quelle est la partie la plus complexe techniquement dans votre architecture ?"
    ]
  },
  {
    category: 'Planning et Méthodologie',
    questions: [
      "Pourquoi avoir choisi des sprints de 2 semaines plutôt que 1 ou 3 ?",
      "Qu'est-ce qu'un MVP et pourquoi c'est pertinent pour ce projet ?",
      "Le client vous demande de livrer en 4 mois au lieu de 6. Que répondez-vous ?",
      "Décrivez-moi une journée type pendant un sprint de développement.",
      "Comment gérez-vous les changements de périmètre en cours de projet ?",
      "Quelle est la différence entre un jalon et un sprint ?"
    ]
  },
  {
    category: 'Budget et Chiffrage',
    questions: [
      "Comment avez-vous calculé votre budget ? Détaillez votre méthode.",
      "Votre budget est à 105k€, le client en a 120k€. Que faites-vous des 15k€ ?",
      "Un TJM de développeur senior à 600€, c'est cher ou pas ? Justifiez.",
      "Si le projet prend 2 mois de retard, combien ça coûte ?",
      "Pourquoi proposer un paiement échelonné plutôt que tout à la fin ?",
      "Quelle est la différence entre budget et devis ?"
    ]
  },
  {
    category: 'UX et Wireframes',
    questions: [
      "Montrez-moi votre écran le plus important et expliquez pourquoi.",
      "Comment avez-vous pensé l'expérience pour un utilisateur de 60 ans ?",
      "Combien de clics pour qu'un participant contacte quelqu'un ? C'est optimal ?",
      "Qu'est-ce qui se passe si l'utilisateur n'a pas de connexion internet ?",
      "Avez-vous prévu les états d'erreur dans vos wireframes ?",
      "Quelle est la différence entre un wireframe et une maquette ?"
    ]
  },
  {
    category: 'Gestion de Projet (Acquis Formation)',
    questions: [
      "C'est quoi la différence entre Scrum et la méthode en cascade ?",
      "Expliquez-moi le rôle d'un Product Owner en 30 secondes.",
      "Qu'est-ce qu'une user story et donnez-moi un exemple pour ce projet.",
      "C'est quoi un persona et pourquoi c'est important ?",
      "Quelle est la différence entre un projet et une opération ?",
      "Citez-moi 3 outils de gestion de projet que vous utiliseriez."
    ]
  },
  {
    category: 'Réflexion et Esprit Critique',
    questions: [
      "Si vous pouviez changer une chose dans votre proposition, ce serait quoi ?",
      "Quelle est la partie où vous êtes le moins confiant et pourquoi ?",
      "Vous êtes le client : pourquoi vous choisiriez VOTRE agence ?",
      "Si le projet échoue dans 6 mois, quelle en serait la raison probable ?",
      "Que feriez-vous différemment si vous recommenciez cet exercice ?",
      "Qu'avez-vous appris sur la gestion de projet en faisant cet exercice ?"
    ]
  },
  {
    category: 'Mise en Situation',
    questions: [
      "Le client vous appelle : 'Je veux ajouter un système de paiement en cryptomonnaie'. Votre réaction ?",
      "Votre développeur principal démissionne au sprint 4. Que faites-vous ?",
      "Les tests de charge montrent que ça rame à partir de 2000 utilisateurs. Actions ?",
      "Le design est validé mais le client change d'avis 2 semaines après. Comment gérez-vous ?",
      "Vous êtes à J-7 du lancement et vous découvrez un bug critique. Plan d'action ?"
    ]
  },
  {
    category: 'Questions Générales - Formation',
    questions: [
      "Qu'est-ce qu'un projet ? Donnez-moi une définition simple.",
      "Quelle est la différence entre un projet et une opération récurrente ?",
      "Citez-moi les 5 phases principales d'un projet web.",
      "C'est quoi un cahier des charges et à quoi ça sert ?",
      "Pourquoi faire des tests utilisateurs avant de développer ?",
      "Quelle est la différence entre un site vitrine et une application SaaS ?",
      "C'est quoi le SEO et pourquoi c'est important ?",
      "Expliquez-moi ce qu'est un sprint en méthode Agile.",
      "Quelle est la différence entre frontend et backend ?",
      "C'est quoi une API et donnez-moi un exemple concret.",
      "Pourquoi découper un gros projet en plusieurs phases ?",
      "Qu'est-ce qu'un livrable ? Donnez 3 exemples.",
      "C'est quoi la différence entre un bug et une feature ?",
      "Pourquoi le RGPD est important pour un projet web ?",
      "Qu'est-ce qu'un KPI ? Donnez un exemple pour Eventeo."
    ]
  },
  {
    category: 'Réflexion Personnelle',
    questions: [
      "Qu'est-ce qui vous a le plus surpris en travaillant sur ce projet ?",
      "Si vous deviez refaire cet exercice, que changeriez-vous dans votre approche ?",
      "Quelle partie vous a semblé la plus difficile et pourquoi ?",
      "Avez-vous appris quelque chose qui vous servira dans votre futur métier ?",
      "Entre travailler en agence ou en freelance pour ce type de projet, que préféreriez-vous ?",
      "Comment vous êtes-vous organisé en équipe pour répartir le travail ?",
      "Qu'est-ce qui fait un bon chef de projet selon vous maintenant ?",
      "Si on vous proposait de vraiment réaliser ce projet, vous sentiriez-vous capable ?",
      "Quel conseil donneriez-vous à un étudiant qui commence cet exercice ?",
      "Sur une échelle de 1 à 10, à quel point vous sentez-vous à l'aise avec la gestion de projet maintenant ?"
    ]
  }
]

export default function OrauxPage() {
  const [isTeacher, setIsTeacher] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [students, setStudents] = useState<OralData[]>([])
  const [currentStudent, setCurrentStudent] = useState<OralData | null>(null)
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [showQuestions, setShowQuestions] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  useEffect(() => {
    setMounted(true)
    setIsTeacher(isTeacherMode())
  }, [])

  useEffect(() => {
    if (mounted && isTeacher) {
      loadStudents()
    }
  }, [mounted, isTeacher])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const loadStudents = async () => {
    if (!supabase) return
    
    const { data, error } = await supabase
      .from('oraux')
      .select('*')
      .order('passage_order')
    
    if (data) {
      setStudents(data)
    }
  }

  const startOral = async (student: OralData) => {
    setCurrentStudent(student)
    setTimer(0)
    setIsRunning(true)
    
    if (supabase) {
      await supabase
        .from('oraux')
        .update({ oral_started_at: new Date().toISOString() })
        .eq('id', student.id)
    }
  }

  const stopOral = async () => {
    if (!currentStudent || !supabase) return
    
    setIsRunning(false)
    
    await supabase
      .from('oraux')
      .update({ 
        oral_ended_at: new Date().toISOString(),
        duration_minutes: Math.floor(timer / 60)
      })
      .eq('id', currentStudent.id)
    
    loadStudents()
  }

  const saveComments = async (studentId: string, comments: string, notes: any) => {
    if (!supabase) return
    
    await supabase
      .from('oraux')
      .update({ 
        comments,
        ...notes,
        updated_at: new Date().toISOString()
      })
      .eq('id', studentId)
    
    loadStudents()
  }

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  if (!mounted) return <div>Chargement...</div>

  if (!isTeacher) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Réservée</h1>
          <p className="text-gray-600 mb-6">Cette page est réservée aux enseignants.</p>
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-purple-200 mb-3 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Oraux Individuels - Mission Projet</h1>
              <p className="text-purple-100 text-sm mt-1">
                16 étudiants • 10 minutes par oral
              </p>
            </div>
            
            <button
              onClick={() => setShowQuestions(!showQuestions)}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
            >
              {showQuestions ? 'Masquer' : 'Voir'} les questions
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Liste des étudiants */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Ordre de Passage</h2>
              
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {students.map((student) => {
                  const isDone = student.oral_ended_at !== null
                  const isCurrent = currentStudent?.id === student.id
                  
                  return (
                    <button
                      key={student.id}
                      onClick={() => {
                        setCurrentStudent(student)
                        setTimer(0)
                        setIsRunning(false)
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        isCurrent
                          ? 'bg-purple-600 text-white'
                          : isDone
                          ? 'bg-green-50 text-green-900 border border-green-300'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold">#{student.passage_order}</span>
                          <span className="ml-2">{student.student_name}</span>
                        </div>
                        {isDone && <span className="text-xs">✓</span>}
                      </div>
                      {student.duration_minutes && (
                        <p className="text-xs mt-1 opacity-75">
                          Durée : {student.duration_minutes} min
                        </p>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Panel principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Timer et contrôles */}
            {currentStudent && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentStudent.student_name}
                  </h2>
                  <div className="text-right">
                    <div className={`text-4xl font-bold ${
                      timer > 600 ? 'text-red-600' : timer > 540 ? 'text-orange-600' : 'text-purple-600'
                    }`}>
                      {formatTime(timer)}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {timer > 600 ? 'Temps dépassé' : `${10 - Math.floor(timer / 60)} min restantes`}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  {!isRunning ? (
                    <button
                      onClick={() => startOral(currentStudent)}
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
                    >
                      <Play className="w-5 h-5" />
                      Démarrer l'oral
                    </button>
                  ) : (
                    <button
                      onClick={stopOral}
                      className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
                    >
                      <Square className="w-5 h-5" />
                      Terminer
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Grille d'évaluation */}
            {currentStudent && (
              <StudentEvaluation
                student={currentStudent}
                onSave={(comments, notes) => saveComments(currentStudent.id, comments, notes)}
              />
            )}
          </div>
        </div>

        {/* Questions disponibles */}
        {showQuestions && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowQuestions(false)}>
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Banque de Questions</h2>
                  <button
                    onClick={() => setShowQuestions(false)}
                    className="text-white hover:bg-white/20 rounded-full p-2"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-purple-100 text-sm mt-1">
                  Questions ouvertes pour l'oral • Adaptez selon les réponses
                </p>
              </div>

              <div className="p-6 space-y-4">
                {QUESTIONS_POOL.map((category, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleCategory(category.category)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-bold text-gray-900">{category.category}</h3>
                      {expandedCategories.includes(category.category) ? (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    
                    {expandedCategories.includes(category.category) && (
                      <div className="p-4 space-y-2 bg-white">
                        {category.questions.map((q, qIdx) => (
                          <div key={qIdx} className="flex items-start gap-2 p-2 hover:bg-purple-50 rounded">
                            <span className="text-purple-600 font-bold text-sm mt-0.5">{qIdx + 1}.</span>
                            <p className="text-sm text-gray-800">{q}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

function StudentEvaluation({ 
  student, 
  onSave 
}: { 
  student: OralData
  onSave: (comments: string, notes: any) => void 
}) {
  const [comments, setComments] = useState(student.comments || '')
  const [noteComprehension, setNoteComprehension] = useState(student.note_comprehension || 0)
  const [noteTechnique, setNoteTechnique] = useState(student.note_technique || 0)
  const [noteJustification, setNoteJustification] = useState(student.note_justification || 0)
  const [notePresentation, setNotePresentation] = useState(student.note_presentation || 0)
  const [project, setProject] = useState(student.project_chosen || '')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    onSave(comments, {
      note_comprehension: noteComprehension,
      note_technique: noteTechnique,
      note_justification: noteJustification,
      note_presentation: notePresentation,
      project_chosen: project
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const totalNote = noteComprehension + noteTechnique + noteJustification + notePresentation
  const moyenne = totalNote / 4

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Projet choisi
        </label>
        <select
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
        >
          <option value="">-- Sélectionner --</option>
          <option value="eventeo">Eventeo</option>
          <option value="mediconnect">MediConnect</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Compréhension /20
          </label>
          <input
            type="number"
            min="0"
            max="20"
            value={noteComprehension}
            onChange={(e) => setNoteComprehension(Number(e.target.value))}
            className="w-full px-3 py-2 border-2 border-blue-300 rounded-lg text-center font-bold text-lg text-gray-900 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Technique /20
          </label>
          <input
            type="number"
            min="0"
            max="20"
            value={noteTechnique}
            onChange={(e) => setNoteTechnique(Number(e.target.value))}
            className="w-full px-3 py-2 border-2 border-green-300 rounded-lg text-center font-bold text-lg text-gray-900 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Justification /20
          </label>
          <input
            type="number"
            min="0"
            max="20"
            value={noteJustification}
            onChange={(e) => setNoteJustification(Number(e.target.value))}
            className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg text-center font-bold text-lg text-gray-900 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Présentation /20
          </label>
          <input
            type="number"
            min="0"
            max="20"
            value={notePresentation}
            onChange={(e) => setNotePresentation(Number(e.target.value))}
            className="w-full px-3 py-2 border-2 border-orange-300 rounded-lg text-center font-bold text-lg text-gray-900 bg-white"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">Moyenne :</span>
          <span className={`text-3xl font-bold ${
            moyenne >= 16 ? 'text-green-600' :
            moyenne >= 12 ? 'text-blue-600' :
            moyenne >= 10 ? 'text-orange-600' :
            'text-red-600'
          }`}>
            {moyenne.toFixed(1)}/20
          </span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Commentaires et observations
        </label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          rows={8}
          placeholder="Points forts, axes d'amélioration, remarques..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none text-gray-900 bg-white placeholder-gray-400"
        />
      </div>

      <button
        onClick={handleSave}
        className={`w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
          saved
            ? 'bg-green-600 text-white'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
        }`}
      >
        <Save className="w-5 h-5" />
        {saved ? 'Sauvegardé !' : 'Sauvegarder l\'évaluation'}
      </button>
    </div>
  )
}

