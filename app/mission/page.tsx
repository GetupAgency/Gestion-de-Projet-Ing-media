'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Download, Save, FileText, CheckCircle2 } from 'lucide-react'
import Footer from '@/components/Footer'

export default function MissionPage() {
  const [formData, setFormData] = useState({
    projectName: '',
    clientName: '',
    context: '',
    objectives: '',
    targetAudience: '',
    features: '',
    technicalConstraints: '',
    budget: '',
    timeline: '',
    competitors: '',
    success: '',
    team: '',
  })

  const [completedSections, setCompletedSections] = useState<string[]>([])

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    
    if (value.trim() && !completedSections.includes(field)) {
      setCompletedSections([...completedSections, field])
    } else if (!value.trim() && completedSections.includes(field)) {
      setCompletedSections(completedSections.filter(s => s !== field))
    }
  }

  const handleSave = () => {
    localStorage.setItem('missionData', JSON.stringify(formData))
    alert('Votre travail a été sauvegardé !')
  }

  const handleDownload = () => {
    const content = generateDocument()
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cahier-des-charges.md'
    a.click()
  }

  const generateDocument = () => {
    return `# Cahier des Charges - ${formData.projectName}

**Client:** ${formData.clientName}
**Date:** ${new Date().toLocaleDateString('fr-FR')}

---

## 1. Contexte du projet

${formData.context}

## 2. Objectifs du projet

${formData.objectives}

## 3. Cibles et personas

${formData.targetAudience}

## 4. Fonctionnalités principales

${formData.features}

## 5. Contraintes techniques

${formData.technicalConstraints}

## 6. Budget et ressources

${formData.budget}

## 7. Planning et jalons

${formData.timeline}

## 8. Analyse de la concurrence

${formData.competitors}

## 9. Critères de succès

${formData.success}

## 10. Équipe projet

${formData.team}

---

*Document généré par l'application de Formation en Gestion de Projet Web*
`
  }

  const progressPercent = (completedSections.length / Object.keys(formData).length) * 100

  const sections = [
    {
      id: 'projectName',
      label: 'Nom du projet',
      placeholder: 'Ex: Refonte du site e-commerce XYZ',
      type: 'input',
      help: 'Donnez un nom clair et identifiable au projet'
    },
    {
      id: 'clientName',
      label: 'Client / Commanditaire',
      placeholder: 'Ex: Entreprise ABC, Service Marketing',
      type: 'input',
      help: 'Qui est le client ou le commanditaire du projet ?'
    },
    {
      id: 'context',
      label: '1. Contexte du projet',
      placeholder: 'Décrivez le contexte : pourquoi ce projet ? Quel est le problème à résoudre ?',
      type: 'textarea',
      help: 'Expliquez la situation actuelle, les problèmes identifiés, les opportunités...'
    },
    {
      id: 'objectives',
      label: '2. Objectifs du projet',
      placeholder: 'Listez les objectifs principaux du projet (SMART : Spécifiques, Mesurables, Atteignables, Réalistes, Temporels)',
      type: 'textarea',
      help: 'Définissez 3 à 5 objectifs clairs et mesurables'
    },
    {
      id: 'targetAudience',
      label: '3. Cibles et personas',
      placeholder: 'Décrivez les utilisateurs cibles, créez des personas...',
      type: 'textarea',
      help: 'Qui sont les utilisateurs finaux ? Créez 2-3 personas détaillés'
    },
    {
      id: 'features',
      label: '4. Fonctionnalités principales',
      placeholder: 'Listez les fonctionnalités essentielles du projet...',
      type: 'textarea',
      help: 'Décrivez les fonctionnalités en détail. Utilisez des user stories si possible'
    },
    {
      id: 'technicalConstraints',
      label: '5. Contraintes techniques',
      placeholder: 'Technologies imposées, compatibilité, performance, sécurité...',
      type: 'textarea',
      help: 'Stack technique, contraintes de performance, sécurité, RGPD, accessibilité...'
    },
    {
      id: 'budget',
      label: '6. Budget et ressources',
      placeholder: 'Budget disponible, ressources humaines, matérielles...',
      type: 'textarea',
      help: 'Quel est le budget total ? Quelles ressources sont disponibles ?'
    },
    {
      id: 'timeline',
      label: '7. Planning et jalons',
      placeholder: 'Phases du projet, dates clés, jalons importants...',
      type: 'textarea',
      help: 'Définissez les grandes phases et les dates de livraison'
    },
    {
      id: 'competitors',
      label: '8. Analyse de la concurrence',
      placeholder: 'Sites/applications similaires, points forts/faibles...',
      type: 'textarea',
      help: 'Analysez 3-5 concurrents ou projets similaires'
    },
    {
      id: 'success',
      label: '9. Critères de succès',
      placeholder: 'Comment mesurer le succès du projet ? KPIs...',
      type: 'textarea',
      help: 'Définissez des indicateurs mesurables de succès'
    },
    {
      id: 'team',
      label: '10. Équipe projet',
      placeholder: 'Composition de l\'équipe, rôles, responsabilités...',
      type: 'textarea',
      help: 'Qui fait partie de l\'équipe ? Quels sont les rôles de chacun ?'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-ingemedia-blue to-primary-900 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-ingemedia-cyan mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Mission Projet</h1>
              <p className="text-ingemedia-cyan mt-1">
                Élaborez un cahier des charges complet pour votre projet
              </p>
            </div>
            <FileText className="w-12 h-12 text-ingemedia-cyan" />
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progression</span>
              <span>{Math.round(progressPercent)}% complété</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-purple-600 h-3 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Instructions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white mb-8">
          <h2 className="text-2xl font-bold mb-3">📋 Instructions</h2>
          <div className="space-y-2 text-purple-50">
            <p>• Cette mission simule un projet réel d'élaboration de cahier des charges</p>
            <p>• Choisissez un type de projet (e-commerce, site vitrine, application web, etc.)</p>
            <p>• Remplissez toutes les sections avec le maximum de détails</p>
            <p>• Pensez à un client réel ou fictif pour rendre l'exercice concret</p>
            <p>• Durée estimée : 1 journée</p>
            <p>• À la fin, vous présenterez votre CDC lors d'un oral de 10-15 minutes</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <label className="block text-lg font-semibold text-gray-900 mb-1">
                    {section.label}
                  </label>
                  <p className="text-sm text-gray-600">{section.help}</p>
                </div>
                {completedSections.includes(section.id) && (
                  <CheckCircle2 className="w-6 h-6 text-green-600 ml-4 flex-shrink-0" />
                )}
              </div>

              {section.type === 'input' ? (
                <input
                  type="text"
                  value={formData[section.id as keyof typeof formData]}
                  onChange={(e) => handleChange(section.id, e.target.value)}
                  placeholder={section.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              ) : (
                <textarea
                  value={formData[section.id as keyof typeof formData]}
                  onChange={(e) => handleChange(section.id, e.target.value)}
                  placeholder={section.placeholder}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={handleSave}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg"
          >
            <Save className="w-5 h-5 mr-2" />
            Sauvegarder mon travail
          </button>
          
          <button
            onClick={handleDownload}
            disabled={completedSections.length === 0}
            className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5 mr-2" />
            Télécharger le CDC
          </button>
        </div>

        {/* Oral preparation */}
        <div className="mt-12 bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
          <h3 className="text-xl font-bold text-orange-900 mb-3">
            🎤 Préparation de l'oral (10-15 minutes)
          </h3>
          <p className="text-orange-800 mb-4">
            Vous devrez présenter votre cahier des charges à l'oral. Préparez-vous à :
          </p>
          <ul className="list-disc list-inside space-y-2 text-orange-900">
            <li>Présenter brièvement le contexte et les objectifs (2-3 min)</li>
            <li>Détailler les fonctionnalités principales (3-4 min)</li>
            <li>Expliquer vos choix techniques (2-3 min)</li>
            <li>Présenter le planning et le budget (2 min)</li>
            <li>Répondre aux questions (3-5 min)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

