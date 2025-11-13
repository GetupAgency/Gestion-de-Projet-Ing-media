'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Clock, CheckSquare, Lightbulb, MessageSquare } from 'lucide-react'
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
              <h1 className="text-3xl font-bold text-white">Évaluation Finale</h1>
              <p className="text-ingemedia-cyan mt-1">
                Préparez votre présentation orale de 10-15 minutes
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
            <h2 className="text-2xl font-bold text-gray-900">Format de l'évaluation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-orange-900 mb-3">⏱️ Durée</h3>
              <p className="text-orange-800">10-15 minutes par étudiant</p>
              <ul className="mt-3 space-y-1 text-sm text-orange-700">
                <li>• 8-10 min : Présentation</li>
                <li>• 3-5 min : Questions/Réponses</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-orange-900 mb-3">📋 Support</h3>
              <p className="text-orange-800">Présentation libre</p>
              <ul className="mt-3 space-y-1 text-sm text-orange-700">
                <li>• Slides recommandées</li>
                <li>• Votre cahier des charges</li>
                <li>• Maquettes/wireframes (optionnel)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Structure de la présentation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Structure de la présentation</h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                1. Introduction (1-2 minutes)
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Présentez-vous brièvement</li>
                <li>• Annoncez le plan de votre présentation</li>
                <li>• Contexte rapide du projet choisi</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                2. Présentation du projet (2-3 minutes)
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Nom et type de projet</li>
                <li>• Client / Commanditaire</li>
                <li>• Problématique et contexte</li>
                <li>• Objectifs principaux (2-3 objectifs SMART)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                3. Analyse et cibles (1-2 minutes)
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Personas principaux (2 maximum)</li>
                <li>• Besoins identifiés</li>
                <li>• Analyse concurrentielle (points clés)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                4. Solution proposée (3-4 minutes)
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Fonctionnalités principales (TOP 5)</li>
                <li>• Justification de vos choix</li>
                <li>• Parcours utilisateur clé</li>
                <li>• Maquettes ou wireframes si disponibles</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                5. Spécifications techniques (1-2 minutes)
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Stack technique recommandée</li>
                <li>• Contraintes techniques majeures</li>
                <li>• Hébergement et infrastructure</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                6. Planning et budget (1-2 minutes)
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Grandes phases du projet</li>
                <li>• Jalons principaux</li>
                <li>• Budget global et répartition</li>
                <li>• Équipe nécessaire</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                7. Conclusion (1 minute)
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Critères de succès</li>
                <li>• Récapitulatif des points clés</li>
                <li>• Ouverture sur l'après-projet</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Critères d'évaluation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <CheckSquare className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Critères d'évaluation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📊 Qualité du cahier des charges (40%)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Complétude des sections</li>
                  <li>• Pertinence des choix</li>
                  <li>• Réalisme du projet</li>
                  <li>• Qualité de la rédaction</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">🎤 Qualité de la présentation (30%)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Clarté et structure</li>
                  <li>• Respect du timing</li>
                  <li>• Qualité des supports</li>
                  <li>• Expression orale</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">💡 Pertinence technique (20%)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Choix technologiques justifiés</li>
                  <li>• Faisabilité technique</li>
                  <li>• Anticipation des risques</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">❓ Questions/Réponses (10%)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Compréhension du sujet</li>
                  <li>• Capacité d'argumentation</li>
                  <li>• Réactivité et pertinence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Conseils */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-center mb-6">
            <Lightbulb className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Conseils pour réussir</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">✅ À faire</h3>
              <ul className="space-y-2 text-orange-50">
                <li>• Répétez votre présentation plusieurs fois</li>
                <li>• Chronométrez-vous</li>
                <li>• Préparez des slides claires et visuelles</li>
                <li>• Anticipez les questions possibles</li>
                <li>• Soyez concret avec des exemples</li>
                <li>• Montrez votre compréhension globale</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">❌ À éviter</h3>
              <ul className="space-y-2 text-orange-50">
                <li>• Lire vos notes mot à mot</li>
                <li>• Dépasser le temps imparti</li>
                <li>• Négliger l'introduction et la conclusion</li>
                <li>• Rester trop vague ou théorique</li>
                <li>• Surcharger vos slides</li>
                <li>• Oublier de justifier vos choix</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <Link
            href="/mission"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 shadow-lg text-lg font-semibold"
          >
            Créer mon cahier des charges
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

