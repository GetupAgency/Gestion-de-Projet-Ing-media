'use client'

import Link from 'next/link'
import { ArrowLeft, Heart, Wrench, Users, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'

export default function CompetencesPage() {
  const softSkills = [
    { skill: 'Communication claire', description: 'Savoir expliquer simplement des concepts complexes' },
    { skill: 'Écoute active', description: 'Comprendre les vrais besoins derrière les demandes' },
    { skill: 'Gestion du stress', description: 'Rester calme sous pression et dans l\'urgence' },
    { skill: 'Organisation', description: 'Structurer son travail et celui de l\'équipe' },
    { skill: 'Diplomatie', description: 'Gérer les conflits sans brusquer' },
    { skill: 'Leadership positif', description: 'Motiver sans autoritarisme' },
    { skill: 'Arbitrage sans conflit', description: 'Prendre des décisions équilibrées' },
    { skill: 'Pédagogie client', description: 'Former et accompagner le client' },
    { skill: 'Capacité à dire non', description: 'Refuser avec tact quand nécessaire' },
    { skill: 'Curiosité', description: 'S\'intéresser aux nouvelles technologies et méthodes' },
    { skill: 'Adaptabilité', description: 'S\'ajuster aux changements et imprévus' },
    { skill: 'Sens de la priorisation', description: 'Identifier ce qui est vraiment important' },
    { skill: 'Prise de décision', description: 'Décider rapidement avec les informations disponibles' }
  ]

  const hardSkills = [
    'Comprendre les technologies web (HTML, CSS, JavaScript, PHP, etc.)',
    'Lire un cahier des charges technique',
    'Rédiger un cahier des charges fonctionnel',
    'Créer un planning (Gantt, Kanban)',
    'Animer une réunion efficacement',
    'Rédiger un compte rendu structuré',
    'Construire des user stories',
    'Maîtriser les outils (Figma, Notion, Trello, Slack, GitHub)',
    'Faire une estimation budgétaire',
    'Bases en SEO (référencement)',
    'Bases en UX (expérience utilisateur)',
    'Gestion des risques projet',
    'Organisation de recette client',
    'Bonnes pratiques de maintenance',
    'Comprendre les métriques (KPI, analytics)'
  ]

  const savoirEtre = [
    {
      principe: 'Être le facilitateur, pas le chef autoritaire',
      description: 'Votre rôle est d\'aider l\'équipe à avancer, pas d\'imposer'
    },
    {
      principe: 'Rester factuel même dans le conflit',
      description: 'Les faits, pas les émotions, même quand c\'est tendu'
    },
    {
      principe: 'Protéger l\'équipe des dérives du client',
      description: 'Dire non aux demandes irréalistes ou hors scope'
    },
    {
      principe: 'Protéger le client des dérives techniques',
      description: 'Éviter la sur-ingénierie et rester pragmatique'
    },
    {
      principe: 'Communiquer avant que les problèmes n\'arrivent',
      description: 'Anticiper et prévenir plutôt que gérer la crise'
    },
    {
      principe: 'Incarner la fiabilité : on dit, on fait',
      description: 'Vos engagements sont votre crédibilité'
    },
    {
      principe: 'Expliquer sans jargon',
      description: 'Le client n\'est pas technique, adaptez votre discours'
    },
    {
      principe: 'Anticiper plutôt que réagir',
      description: 'Prévoir les risques et préparer des plans B'
    },
    {
      principe: 'Ne jamais surprendre le client',
      description: 'Mauvaise nouvelle = à annoncer le plus tôt possible'
    },
    {
      principe: 'Être stable, calme et structuré',
      description: 'Vous êtes le roc de l\'équipe, surtout dans la tempête'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-ingemedia-blue to-primary-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-ingemedia-cyan mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Compétences du Chef de Projet
              </h1>
              <p className="text-ingemedia-cyan mt-1">
                Les compétences essentielles pour réussir
              </p>
            </div>
            <Users className="w-12 h-12 text-ingemedia-cyan" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-lg p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-4">Le chef de projet : un profil hybride</h2>
          <p className="text-teal-50 text-lg">
            Le chef de projet web doit jongler entre compétences techniques, managériales et relationnelles. 
            C'est un rôle d'interface qui demande autant de hard skills que de soft skills.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Soft Skills</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Les compétences humaines et relationnelles, essentielles pour travailler en équipe et avec les clients.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900 mb-2">{item.skill}</h3>
                <p className="text-sm text-pink-800">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Wrench className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Hard Skills</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Les compétences techniques et méthodologiques que vous devez maîtriser.
          </p>
          
          <div className="grid md:grid-cols-2 gap-3">
            {hardSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Savoir-être */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Savoir-être du Chef de Projet</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Les principes et attitudes qui font la différence dans votre posture professionnelle.
          </p>
          
          <div className="space-y-4">
            {savoirEtre.map((item, index) => (
              <div key={index} className="p-5 rounded-lg bg-teal-50 border-l-4 border-teal-500">
                <h3 className="font-bold text-teal-900 mb-2 text-lg">
                  {index + 1}. {item.principe}
                </h3>
                <p className="text-teal-800">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Citation */}
        <div className="mt-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg shadow-lg p-8 text-center">
          <p className="text-2xl font-bold text-white italic mb-4">
            "Un bon chef de projet n'est pas celui qui sait tout faire, mais celui qui sait faire faire et créer les conditions de la réussite."
          </p>
          <p className="text-amber-100">— Principe de la gestion de projet</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

