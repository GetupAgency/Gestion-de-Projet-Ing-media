'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Clock, CheckSquare, Lightbulb, MessageSquare, BookOpen, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'

export default function EvaluationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-ingemedia-blue to-primary-900 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-ingemedia-cyan mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Évaluation Orale</h1>
              <p className="text-ingemedia-cyan mt-1">
                Entretien individuel de 10-15 minutes
              </p>
            </div>
            <Users className="w-12 h-12 text-ingemedia-cyan" />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Format de l'évaluation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Clock className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-ingemedia-blue">Format de l'évaluation</h2>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-orange-900 mb-3 text-xl">Entretien oral individuel</h3>
            <p className="text-orange-800 text-lg mb-4">
              L'évaluation prend la forme d'un entretien de 10-15 minutes en face à face avec l'enseignant.
            </p>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Déroulement :</p>
              <ul className="space-y-2 text-gray-800">
                <li>• <strong>10-15 minutes</strong> d'entretien par étudiant</li>
                <li>• <strong>Questions aléatoires</strong> posées par l'enseignant</li>
                <li>• <strong>Thèmes variés</strong> couvrant toute la formation</li>
                <li>• <strong>Pas de présentation préparée</strong> - réponses spontanées attendues</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-900 mb-3">📚 Sources des questions</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Questions tirées des <strong>quiz des modules</strong></li>
                <li>• Termes issus du <strong>lexique</strong></li>
                <li>• Concepts de <strong>gestion de projet</strong></li>
                <li>• Questions de <strong>compréhension pratique</strong></li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-900 mb-3">🎯 Ce qui est attendu</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• <strong>Insights</strong> et réflexions personnelles</li>
                <li>• <strong>Exemples concrets</strong> si possible</li>
                <li>• <strong>Compréhension</strong> des concepts clés</li>
                <li>• <strong>Capacité d'argumentation</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thèmes abordés */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-ingemedia-blue">Thèmes qui pourront être abordés</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Les questions seront sélectionnées aléatoirement parmi les thèmes suivants :
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-blue-900 mb-3">📝 Concepts fondamentaux</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Différences entre types de projets web</li>
                <li>• Notion de valeur client</li>
                <li>• Livrables clés d'un projet</li>
                <li>• Phases d'un projet web</li>
                <li>• ROI, conversion, KPI</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-green-900 mb-3">📋 Cahier des charges & Cadrage</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Rôle et structure d'un CDC</li>
                <li>• User stories et personas</li>
                <li>• Cartographie de l'existant</li>
                <li>• Étude des cibles</li>
                <li>• Constitution d'équipe projet</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-purple-900 mb-3">📊 Planification & Budget</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Méthodes de planification (Gantt, Agile)</li>
                <li>• Jalons et dépendances</li>
                <li>• Estimation budgétaire</li>
                <li>• Gestion des risques</li>
                <li>• Scope creep et arbitrages</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-orange-900 mb-3">💻 Technologies & CMS</h3>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li>• Frontend, Backend, API</li>
                <li>• CMS (WordPress, Shopify, etc.)</li>
                <li>• Choix de stack technique</li>
                <li>• CMS vs développement sur mesure</li>
                <li>• Hébergement et infrastructure</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-red-900 mb-3">🧪 Tests & Recette</h3>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Types de tests</li>
                <li>• Recette client et PV</li>
                <li>• Classification des bugs</li>
                <li>• Outils de test (Lighthouse, Cypress...)</li>
                <li>• Gestion des anomalies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-teal-900 mb-3">🚀 Déploiement & Maintenance</h3>
              <ul className="space-y-2 text-teal-800 text-sm">
                <li>• Stratégies de déploiement</li>
                <li>• SSL, HTTPS, DNS</li>
                <li>• Rollback et plan B</li>
                <li>• Maintenance corrective vs évolutive</li>
                <li>• Bilan de projet</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-indigo-900 mb-3">♿ SEO, Accessibilité & Éco</h3>
              <ul className="space-y-2 text-indigo-800 text-sm">
                <li>• SEO et référencement</li>
                <li>• RGAA et accessibilité</li>
                <li>• Écoconception web</li>
                <li>• Performance et optimisation</li>
                <li>• Bonnes pratiques</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-pink-900 mb-3">👨‍💼 Compétences & Lexique</h3>
              <ul className="space-y-2 text-pink-800 text-sm">
                <li>• Soft skills du chef de projet</li>
                <li>• Savoir-être professionnel</li>
                <li>• Définitions de termes techniques</li>
                <li>• Outils de gestion (Git, Figma, Trello...)</li>
                <li>• Vocabulaire métier</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Critères d'évaluation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <CheckSquare className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-ingemedia-blue">Critères d'évaluation</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">📚 Connaissances théoriques (40%)</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Maîtrise des concepts fondamentaux</li>
                <li>• Compréhension du vocabulaire technique</li>
                <li>• Connaissance des méthodologies et outils</li>
                <li>• Capacité à définir les termes du lexique</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-900 mb-3 text-lg">💡 Compréhension pratique (35%)</h3>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• Capacité à donner des exemples concrets</li>
                <li>• Réflexion sur l'application des concepts</li>
                <li>• Insights personnels et analyse critique</li>
                <li>• Liens entre théorie et pratique</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">🗣️ Expression et argumentation (25%)</h3>
              <ul className="text-sm text-purple-800 space-y-2">
                <li>• Clarté des explications</li>
                <li>• Capacité d'argumentation</li>
                <li>• Structuration de la pensée</li>
                <li>• Réactivité aux questions</li>
                <li>• Aptitude à expliquer sans jargon excessif</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
            <p className="text-yellow-900">
              <strong>Note importante :</strong> L'évaluation porte sur votre compréhension globale de la gestion de projet web, 
              pas sur la mémorisation parfaite. L'objectif est de démontrer que vous avez assimilé les concepts et que vous 
              pouvez les expliquer avec vos propres mots.
            </p>
          </div>
        </div>

        {/* Conseils de préparation */}
        <div className="bg-gradient-to-r from-ingemedia-blue to-primary-900 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-center mb-6">
            <Lightbulb className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Comment se préparer ?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-ingemedia-cyan">✅ À faire</h3>
              <ul className="space-y-2 text-blue-50">
                <li>• <strong>Faites tous les quiz</strong> des modules</li>
                <li>• <strong>Relisez le lexique</strong> régulièrement</li>
                <li>• <strong>Révisez les concepts clés</strong> de chaque module</li>
                <li>• <strong>Soyez attentif</strong> pendant les cours</li>
                <li>• <strong>Préparez des exemples</strong> pour illustrer vos réponses</li>
                <li>• <strong>Testez-vous</strong> en vous posant les questions du quiz</li>
                <li>• <strong>Comprenez plutôt que mémorisez</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-ingemedia-cyan">❌ À éviter</h3>
              <ul className="space-y-2 text-blue-50">
                <li>• Apprendre par cœur sans comprendre</li>
                <li>• Ignorer les quiz et le lexique</li>
                <li>• Rester vague dans vos réponses</li>
                <li>• Dire "je ne sais pas" sans réfléchir</li>
                <li>• Utiliser du jargon sans l'expliquer</li>
                <li>• Paniquer si vous ne savez pas tout</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white/10 rounded-lg p-5">
            <p className="text-white font-semibold mb-2">💡 Astuce principale :</p>
            <p className="text-blue-100">
              Refaites le quiz global plusieurs fois ! Les questions changent à chaque fois (pool de 110+ questions). 
              C'est le meilleur moyen de vous préparer car ce sont ces mêmes questions qui pourront être posées à l'oral.
            </p>
          </div>
        </div>

        {/* Ressources de révision */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-ingemedia-blue">Ressources pour réviser</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/quiz" className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-xl transition-all hover:scale-105">
              <CheckCircle className="w-10 h-10 mb-3" />
              <h3 className="font-bold text-lg mb-2">Quiz Global</h3>
              <p className="text-green-100 text-sm">
                Entraînez-vous avec 20 questions aléatoires
              </p>
            </Link>

            <Link href="/lexique" className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white hover:shadow-xl transition-all hover:scale-105">
              <BookOpen className="w-10 h-10 mb-3" />
              <h3 className="font-bold text-lg mb-2">Lexique</h3>
              <p className="text-indigo-100 text-sm">
                250+ termes à connaître
              </p>
            </Link>

            <Link href="/competences" className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-white hover:shadow-xl transition-all hover:scale-105">
              <Users className="w-10 h-10 mb-3" />
              <h3 className="font-bold text-lg mb-2">Compétences</h3>
              <p className="text-teal-100 text-sm">
                Skills du chef de projet
              </p>
            </Link>
          </div>

          <div className="mt-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-6 text-center">
            <p className="text-white font-bold text-xl mb-3">
              🎯 Conseil de dernière minute
            </p>
            <p className="text-white">
              La veille de l'oral, refaites le quiz global 2-3 fois et parcourez le lexique. 
              Concentrez-vous sur les termes marqués comme "essentiels" (3 étoiles).
            </p>
          </div>
        </div>

        {/* Exemples de questions */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-ingemedia-blue">Exemples de questions possibles</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-semibold mb-2">Question type 1 : Définition</p>
              <p className="text-blue-800 italic">"Qu'est-ce qu'un backlog ?"</p>
              <p className="text-blue-800 italic">"Pouvez-vous m'expliquer ce qu'est une user story ?"</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-green-900 font-semibold mb-2">Question type 2 : Comparaison</p>
              <p className="text-green-800 italic">"Quelle est la différence entre un site vitrine et un e-commerce ?"</p>
              <p className="text-green-800 italic">"WordPress ou développement sur mesure pour un site de 20 pages ?"</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-purple-900 font-semibold mb-2">Question type 3 : Situation pratique</p>
              <p className="text-purple-800 italic">"Vous découvrez un bug bloquant en recette, que faites-vous ?"</p>
              <p className="text-purple-800 italic">"Comment gérez-vous un client qui demande une fonctionnalité hors scope ?"</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-orange-900 font-semibold mb-2">Question type 4 : Méthodologie</p>
              <p className="text-orange-800 italic">"Combien de phases compte un projet web complet ?"</p>
              <p className="text-orange-800 italic">"Quelle est la durée typique d'un sprint en Scrum ?"</p>
            </div>

            <div className="bg-pink-50 rounded-lg p-4">
              <p className="text-pink-900 font-semibold mb-2">Question type 5 : Soft skills</p>
              <p className="text-pink-800 italic">"Quelles sont les qualités essentielles d'un chef de projet ?"</p>
              <p className="text-pink-800 italic">"Comment gérez-vous le stress et les imprévus ?"</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

