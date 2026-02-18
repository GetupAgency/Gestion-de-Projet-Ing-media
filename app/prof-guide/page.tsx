'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import Footer from '@/components/Footer'

export default function ProfGuidePage() {
  const [isTeacher, setIsTeacher] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  useEffect(() => {
    setMounted(true)
    setIsTeacher(isTeacherMode())
  }, [])

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

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-purple-200 mb-3 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Link>
          
          <div>
            <h1 className="text-2xl font-bold text-white">Corrections Détaillées - Eventeo</h1>
            <p className="text-purple-100 text-sm mt-1">
              Propositions de réponses pour guider vos étudiants
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        
        <CorrectionSection
          id="agence"
          title="1. Présentation de l'Agence"
          isExpanded={expandedSections.includes('agence')}
          onToggle={() => toggleSection('agence')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Quelle est votre valeur ajoutée par rapport à une autre agence ?</li>
                <li>Pourquoi un client vous choisirait plutôt qu'un concurrent ?</li>
                <li>Combien de projets similaires avez-vous réalisés ?</li>
                <li>Quelles sont les compétences clés de votre équipe pour CE projet spécifiquement ?</li>
                <li>Comment organisez-vous la communication avec le client pendant le projet ?</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Exemple de réponse attendue :</h4>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-600">
              <p className="mb-3"><strong>Digital Solutions Agency</strong></p>
              <p className="mb-3">
                Fondée en 2018, notre agence s'est spécialisée dans la conception et le développement 
                de solutions SaaS pour le secteur événementiel et les plateformes collaboratives.
              </p>
              <p className="mb-3">
                <strong>Notre expertise :</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>8 plateformes SaaS développées et déployées</li>
                <li>Expérience spécifique en applications mobiles natives (iOS/Android)</li>
                <li>Maîtrise des architectures scalables (5000+ utilisateurs simultanés)</li>
                <li>Méthodologie Agile/Scrum avec sprints de 2 semaines</li>
              </ul>
              <p className="mb-3">
                <strong>Différenciation :</strong> Nous accompagnons nos clients au-delà du simple développement 
                technique. Formation des équipes, stratégie produit, et support post-lancement sont inclus 
                dans notre approche globale.
              </p>
            </div>

            <h4 className="font-semibold text-gray-900 mt-6 mb-2">Composition de l'équipe projet :</h4>
            <div className="bg-gray-50 p-4 rounded">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Marie Dubois - Chef de Projet Senior</p>
                  <p className="text-gray-700">12 ans d'expérience en gestion de projets SaaS, certifiée Scrum Master et Product Owner. Allocation : 50% sur 8 mois.</p>
                </div>
                <div>
                  <p className="font-semibold">Thomas Chen - Lead Developer Backend</p>
                  <p className="text-gray-700">9 ans Node.js/Python, expert architecture microservices et APIs REST. Spécialiste scalabilité. Allocation : 80%.</p>
                </div>
                <div>
                  <p className="font-semibold">Sophie Martin - Developer Frontend/Mobile</p>
                  <p className="text-gray-700">6 ans React/React Native, expérience apps événementielles (Festival App 2023). Allocation : 80%.</p>
                </div>
                <div>
                  <p className="font-semibold">Alexandre Rousseau - UX/UI Designer</p>
                  <p className="text-gray-700">8 ans design produit, expert Figma, portfolio applications mobiles grand public. Allocation : 40%.</p>
                </div>
                <div>
                  <p className="font-semibold">Lucas Bernard - DevOps</p>
                  <p className="text-gray-700">5 ans AWS, expert CI/CD et monitoring. Allocation : 25%.</p>
                </div>
              </div>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="analyse"
          title="2. Analyse du Brief et Questions Complémentaires"
          isExpanded={expandedSections.includes('analyse')}
          onToggle={() => toggleSection('analyse')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Quel est le vrai problème que cherche à résoudre Eventeo ?</li>
                <li>Pourquoi les solutions actuelles ne fonctionnent pas ?</li>
                <li>Quels sont les 3 principaux risques de ce projet ?</li>
                <li>Si vous aviez un jeton "Question Expert", que demanderiez-vous au client en priorité ?</li>
                <li>Comment allez-vous vérifier que vous avez bien compris le besoin ?</li>
                <li>Quelles sont les questions ESSENTIELLES à poser avant de chiffrer ?</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Notre compréhension du projet :</h4>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p className="mb-3">
                Eventeo souhaite se positionner comme l'alternative aux solutions fragmentées actuelles 
                du marché événementiel. Le besoin central est de créer un écosystème complet et intégré 
                qui simplifie radicalement la vie des organisateurs tout en améliorant l'expérience 
                des participants.
              </p>
              <p className="mb-3">
                <strong>Enjeux identifiés :</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Marché très concurrentiel (Eventbrite, Bizzabo, etc.)</li>
                <li>Nécessité d'une double excellence : backoffice puissant ET app mobile intuitive</li>
                <li>Challenge technique majeur : temps réel et scalabilité (5000 participants)</li>
                <li>Adoption critique : les deux côtés (organisateurs ET participants) doivent adopter la solution</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">20 Questions complémentaires à poser :</h4>
            <div className="bg-gray-50 p-4 rounded">
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Avez-vous identifié vos 3-5 premiers clients pilotes pour la phase beta ?</li>
                <li>Quel est votre business model exact ? (Commission, abonnement, freemium...)</li>
                <li>Avez-vous déjà un design system ou une charte graphique ?</li>
                <li>Quels sont les 3 concurrents principaux et leurs points faibles à exploiter ?</li>
                <li>Disposez-vous d'une base de données d'événements ou partez-vous de zéro ?</li>
                <li>Le matching des participants : quels critères (secteur, poste, centres d'intérêt) ?</li>
                <li>Souhaitez-vous une API publique pour que d'autres développent des intégrations ?</li>
                <li>Quel niveau de personnalisation white-label pour les organisateurs ?</li>
                <li>Gestion des paiements : commission sur billetterie ou forfait organisateur ?</li>
                <li>Fonctionnalités premium vs gratuites : quelle stratégie de monétisation ?</li>
                <li>Support multi-devises et multi-langues nécessaire dès le MVP ?</li>
                <li>Intégrations tierces prioritaires ? (Mailchimp, Salesforce, Zoom...)</li>
                <li>Statistiques temps réel : quels KPIs sont critiques pour les organisateurs ?</li>
                <li>Modération du contenu : comment gérer les messages inappropriés ?</li>
                <li>RGPD : consentement pour la mise en relation entre participants ?</li>
                <li>Plan B si un événement dépasse 5000 participants ?</li>
                <li>Notifications push : fréquence maximum acceptable pour ne pas spammer ?</li>
                <li>Accessibilité : niveau WCAG requis ?</li>
                <li>Tests utilisateurs : budget et timeline prévus ?</li>
                <li>Post-MVP : quelle est votre vision à 12-24 mois ?</li>
              </ol>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="wireframes"
          title="3. Wireframes et Parcours Utilisateurs"
          isExpanded={expandedSections.includes('wireframes')}
          onToggle={() => toggleSection('wireframes')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Quels sont les 3 écrans les plus importants pour un organisateur ? Pourquoi ?</li>
                <li>Quelle action un participant fait le plus souvent dans l'app ?</li>
                <li>Comment un utilisateur de 65 ans utiliserait votre interface ?</li>
                <li>Avez-vous pensé aux états d'erreur (pas de connexion, événement complet...) ?</li>
                <li>Combien de clics pour qu'un participant contacte quelqu'un ? (Moins = mieux)</li>
                <li>Comment l'organisateur peut annuler un événement ? C'est où dans vos wireframes ?</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Écrans prioritaires (15 minimum) :</h4>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p className="font-semibold mb-2">Plateforme Web Organisateur :</p>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
                <li>Dashboard principal (vue d'ensemble événement)</li>
                <li>Création d'événement (formulaire multi-étapes)</li>
                <li>Gestion agenda / Programme</li>
                <li>Liste des inscrits (tableau avec filtres)</li>
                <li>Configuration billetterie (tarifs, early bird)</li>
                <li>Gestion des exposants/stands</li>
                <li>Envoi de communications (email builder)</li>
                <li>Analytics et reporting</li>
              </ul>

              <p className="font-semibold mb-2">Application Mobile Participant :</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Onboarding / Login</li>
                <li>Feed événement (programme personnalisé)</li>
                <li>Profil utilisateur (centres d'intérêt)</li>
                <li>Matching/Networking (swipe ou liste)</li>
                <li>Scan QR code badge</li>
                <li>Messagerie intégrée</li>
                <li>Plan interactif du lieu</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Parcours clé à détailler :</h4>
            <div className="bg-gray-50 p-4 rounded text-sm">
              <p className="font-semibold mb-2">Parcours Organisateur - Création événement :</p>
              <p className="text-gray-700">
                Dashboard → Nouveau événement → Infos de base (nom, date, lieu) → Upload logo → 
                Création agenda (+ conférences/ateliers) → Configuration billetterie → 
                Paramétrage networking → Preview → Publication
              </p>

              <p className="font-semibold mt-4 mb-2">Parcours Participant - Networking :</p>
              <p className="text-gray-700">
                Login app → Compléter profil (poste, secteur, intérêts) → 
                Consulter suggestions de matching → Envoyer demande de contact → 
                Chat si accepté → Planifier rendez-vous sur place
              </p>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="technique"
          title="4. Architecture Technique"
          isExpanded={expandedSections.includes('technique')}
          onToggle={() => toggleSection('technique')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Pourquoi choisir React plutôt que Vue ou Angular ?</li>
                <li>PostgreSQL vs MongoDB : lequel et pourquoi pour CE projet ?</li>
                <li>Comment gérez-vous 5000 utilisateurs simultanés sans ralentissement ?</li>
                <li>Si le serveur tombe à 14h le jour J d'un événement, que se passe-t-il ?</li>
                <li>L'app mobile doit fonctionner sans réseau : comment faites-vous techniquement ?</li>
                <li>Combien coûte l'hébergement AWS par mois estimé ? Avez-vous prévu ce budget récurrent ?</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Stack recommandée :</h4>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Frontend Web (Plateforme Organisateur)</p>
                  <p className="text-gray-700">
                    <strong>React 18 + Next.js 14</strong><br/>
                    Justification : SSR pour SEO, App Router pour navigation optimale, API routes intégrées, 
                    écosystème mature avec nombreuses librairies (charts, email builder, etc.)
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Mobile (Application Participant)</p>
                  <p className="text-gray-700">
                    <strong>React Native avec Expo</strong><br/>
                    Justification : Code partagé iOS/Android (budget optimisé), cohérence avec le frontend React, 
                    support offline natif, push notifications intégrées, développement rapide avec hot reload
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Backend / API</p>
                  <p className="text-gray-700">
                    <strong>Node.js + Express + TypeScript</strong><br/>
                    Justification : Cohérence full-stack JavaScript, asynchrone (essentiel pour temps réel), 
                    écosystème npm riche, performance éprouvée, facilité de recrutement
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Base de Données</p>
                  <p className="text-gray-700">
                    <strong>PostgreSQL 15 + Redis</strong><br/>
                    PostgreSQL : Données relationnelles (événements, participants, inscriptions), ACID, fiable, 
                    JSON support pour métadonnées flexibles<br/>
                    Redis : Cache haute performance, sessions, queues de jobs, pub/sub pour temps réel
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Temps Réel</p>
                  <p className="text-gray-700">
                    <strong>Socket.io</strong><br/>
                    Justification : WebSockets pour sync instantanée web-mobile, fallback automatique, 
                    rooms pour isoler les événements, heartbeat natif
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Infrastructure</p>
                  <p className="text-gray-700">
                    <strong>AWS (EC2 + RDS + S3 + CloudFront)</strong><br/>
                    EC2 : Serveurs applicatifs avec auto-scaling<br/>
                    RDS PostgreSQL : Base managée avec backups automatiques<br/>
                    S3 : Stockage médias (photos événements, documents)<br/>
                    CloudFront : CDN pour assets statiques<br/>
                    ElastiCache : Redis managé
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Paiement</p>
                  <p className="text-gray-700">
                    <strong>Stripe Connect</strong><br/>
                    Justification : Solution complète pour marketplace, gestion multi-vendeurs (organisateurs), 
                    conformité PCI-DSS native, webhooks fiables, support 135+ devises
                  </p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Schéma d'architecture :</h4>
            <div className="bg-gray-50 p-4 rounded text-sm">
              <pre className="text-xs whitespace-pre-wrap">
{`┌─────────────┐         ┌──────────────┐
│ Web Browser │◄───────►│  CloudFront  │
│  (React)    │         │     (CDN)    │
└─────────────┘         └──────────────┘
       │                        │
       ▼                        ▼
┌─────────────────────────────────────┐
│       Load Balancer (AWS ELB)       │
└─────────────────────────────────────┘
       │
       ▼
┌──────────────────┐    ┌─────────────┐
│  API Gateway     │◄──►│   Redis     │
│  (Node.js/Express│    │   (Cache)   │
└──────────────────┘    └─────────────┘
       │
       ▼
┌──────────────────┐    ┌─────────────┐
│   PostgreSQL     │    │   Stripe    │
│   (RDS)          │    │   API       │
└──────────────────┘    └─────────────┘

┌─────────────┐
│ Mobile App  │───────► Socket.io Server
│(React Native)         (Temps réel)
└─────────────┘`}
              </pre>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="planning"
          title="5. Planning Détaillé"
          isExpanded={expandedSections.includes('planning')}
          onToggle={() => toggleSection('planning')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Pourquoi ne pas tout développer d'un coup ? Quel est l'avantage des sprints ?</li>
                <li>Que se passe-t-il si vous prenez 2 mois de retard sur le développement ?</li>
                <li>À quel moment le client voit-il quelque chose de concret ?</li>
                <li>Combien de sprints prévoyez-vous ? Comment avez-vous calculé ?</li>
                <li>Qu'est-ce qu'un jalon et pourquoi c'est important ?</li>
                <li>Si le client demande une nouvelle feature en plein développement, comment gérez-vous ?</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Découpage en phases (7 mois) :</h4>
            <div className="bg-gray-50 p-4 rounded">
              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-purple-600 pl-3">
                  <p className="font-semibold">MOIS 1 - Cadrage et Discovery</p>
                  <p className="text-gray-700 mb-1">Durée : 4 semaines</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Ateliers métier avec les 3 co-fondateurs (3 sessions)</li>
                    <li>Interviews utilisateurs cibles (10 organisateurs, 15 participants)</li>
                    <li>Création de 4 personas détaillés</li>
                    <li>Cartographie des parcours utilisateurs</li>
                    <li>Benchmark concurrentiel approfondi</li>
                    <li>Validation du périmètre fonctionnel MVP</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">Livrable : Document de cadrage validé (30 pages)</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-3">
                  <p className="font-semibold">MOIS 2 - Design et Prototypage</p>
                  <p className="text-gray-700 mb-1">Durée : 4 semaines</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Wireframes basse fidélité (20 écrans) - Semaine 1</li>
                    <li>Tests utilisateurs wireframes (2 sessions) - Semaine 2</li>
                    <li>Maquettes haute fidélité (Figma) - Semaines 2-3</li>
                    <li>Design system complet - Semaine 3</li>
                    <li>Prototype interactif (InVision) - Semaine 4</li>
                    <li>Validation client finale</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">Livrable : Design system + Maquettes validées</p>
                </div>

                <div className="border-l-4 border-green-600 pl-3">
                  <p className="font-semibold">MOIS 3-6 - Développement (16 semaines / 8 sprints)</p>
                  <p className="text-gray-700 mb-1">Sprints de 2 semaines</p>
                  
                  <div className="ml-4 mt-2 space-y-2">
                    <div>
                      <p className="font-medium">Sprint 1-2 (Mois 3) : Fondations</p>
                      <p className="text-gray-600">Architecture backend, authentification, BDD, setup infra AWS</p>
                    </div>
                    <div>
                      <p className="font-medium">Sprint 3-4 (Mois 4) : Core Features Organisateur</p>
                      <p className="text-gray-600">Création événement, gestion agenda, billetterie basique</p>
                    </div>
                    <div>
                      <p className="font-medium">Sprint 5-6 (Mois 5) : App Mobile Base</p>
                      <p className="text-gray-600">Login, feed événement, profil, QR scan</p>
                    </div>
                    <div>
                      <p className="font-medium">Sprint 7-8 (Mois 6) : Networking & Temps Réel</p>
                      <p className="text-gray-600">Matching algorithme, messagerie, Socket.io, notifications push</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">Livrable : MVP fonctionnel complet</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-3">
                  <p className="font-semibold">MOIS 7 - Tests et Recette</p>
                  <p className="text-gray-700 mb-1">Durée : 3 semaines</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Tests fonctionnels (QA team)</li>
                    <li>Tests de charge (simulation 5000 users avec K6)</li>
                    <li>Beta privée avec 2 événements pilotes réels</li>
                    <li>Corrections de bugs critiques</li>
                    <li>Recette client</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-600 pl-3">
                  <p className="font-semibold">MOIS 8 - Déploiement et Formation</p>
                  <p className="text-gray-700 mb-1">Durée : 1 semaine</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Mise en production progressive</li>
                    <li>Formation équipe Eventeo (2 jours)</li>
                    <li>Documentation technique et utilisateur</li>
                    <li>Support lancement (1 mois inclus)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="budget"
          title="6. Budget Détaillé"
          isExpanded={expandedSections.includes('budget')}
          onToggle={() => toggleSection('budget')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Comment avez-vous calculé ce budget ? Montrez-moi le détail.</li>
                <li>Un développeur senior coûte combien par jour selon vous ?</li>
                <li>Pourquoi la conception représente 15% et pas 30% ?</li>
                <li>Avez-vous prévu une marge pour les imprévus ? Combien ?</li>
                <li>Le client a un budget de 120k€. Votre budget est à 105k€. Que faites-vous des 15k€ restants ?</li>
                <li>Si le développement prend 1 mois de plus, combien ça coûte en plus ?</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-3">Budget Total : 105 000€</h4>
              
              <table className="w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-left p-2">Phase / Métier</th>
                    <th className="text-right p-2">Jours</th>
                    <th className="text-right p-2">TJM</th>
                    <th className="text-right p-2">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-purple-50">
                    <td className="p-2 font-semibold" colSpan={4}>PHASE 1 - Conception (15%)</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">UX/UI Designer</td>
                    <td className="text-right p-2">25j</td>
                    <td className="text-right p-2">550€</td>
                    <td className="text-right p-2 font-semibold">13 750€</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Chef de projet (cadrage)</td>
                    <td className="text-right p-2">5j</td>
                    <td className="text-right p-2">650€</td>
                    <td className="text-right p-2 font-semibold">3 250€</td>
                  </tr>
                  
                  <tr className="bg-blue-50">
                    <td className="p-2 font-semibold" colSpan={4}>PHASE 2 - Développement (55%)</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Lead Dev Backend</td>
                    <td className="text-right p-2">70j</td>
                    <td className="text-right p-2">600€</td>
                    <td className="text-right p-2 font-semibold">42 000€</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Dev Frontend</td>
                    <td className="text-right p-2">50j</td>
                    <td className="text-right p-2">550€</td>
                    <td className="text-right p-2 font-semibold">27 500€</td>
                  </tr>
                  
                  <tr className="bg-green-50">
                    <td className="p-2 font-semibold" colSpan={4}>PHASE 3 - Gestion & Tests (20%)</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Chef de projet (8 mois)</td>
                    <td className="text-right p-2">20j</td>
                    <td className="text-right p-2">650€</td>
                    <td className="text-right p-2 font-semibold">13 000€</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">QA / Tests</td>
                    <td className="text-right p-2">10j</td>
                    <td className="text-right p-2">450€</td>
                    <td className="text-right p-2 font-semibold">4 500€</td>
                  </tr>
                  
                  <tr className="bg-orange-50">
                    <td className="p-2 font-semibold" colSpan={4}>PHASE 4 - Infrastructure (10%)</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">DevOps (setup + CI/CD)</td>
                    <td className="text-right p-2">8j</td>
                    <td className="text-right p-2">700€</td>
                    <td className="text-right p-2 font-semibold">5 600€</td>
                  </tr>
                  
                  <tr className="bg-gray-100">
                    <td className="p-2 font-bold" colSpan={3}>TOTAL HT</td>
                    <td className="text-right p-2 font-bold text-lg">109 600€</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4" colSpan={3}>Remise commerciale (-5%)</td>
                    <td className="text-right p-2 text-red-600">-5 480€</td>
                  </tr>
                  <tr className="bg-purple-100">
                    <td className="p-2 font-bold text-lg" colSpan={3}>TOTAL FINAL</td>
                    <td className="text-right p-2 font-bold text-purple-600 text-lg">104 120€</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 p-3 bg-blue-50 rounded text-xs">
                <p className="font-semibold mb-2">Modalités de paiement recommandées :</p>
                <ul className="space-y-1">
                  <li>30% à la signature (31 236€) - Engagement mutuel</li>
                  <li>30% à validation design (31 236€) - Fin mois 2</li>
                  <li>30% à livraison MVP (31 236€) - Fin mois 6</li>
                  <li>10% après recette (10 412€) - Fin mois 7</li>
                </ul>
              </div>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="smart"
          title="7. Objectifs SMART du Projet"
          isExpanded={expandedSections.includes('smart')}
          onToggle={() => toggleSection('smart')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Rappel : Méthode SMART</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>S</strong>pécifique : Objectif clair et précis</p>
                <p><strong>M</strong>esurable : Chiffrable, quantifiable</p>
                <p><strong>A</strong>ccepté : Partagé par toutes les parties prenantes</p>
                <p><strong>R</strong>éaliste : Atteignable avec les ressources disponibles</p>
                <p><strong>T</strong>emporellement défini : Deadline claire</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Donnez-moi un objectif SMART pour le projet Eventeo.</li>
                <li>L'objectif "Améliorer l'expérience utilisateur" est-il SMART ? Pourquoi ?</li>
                <li>Comment rendez-vous mesurable l'objectif "Satisfaire les organisateurs" ?</li>
                <li>Transformez "Avoir beaucoup de participants" en objectif SMART.</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Exemples d'Objectifs SMART pour Eventeo :</h4>
            <div className="bg-gray-50 p-4 rounded space-y-4">
              <div className="border-l-4 border-green-600 pl-3 py-2">
                <p className="font-semibold text-gray-900 mb-2">Objectif 1 : Adoption de l'App Mobile</p>
                <p className="text-sm text-gray-700 mb-2">
                  "Atteindre un taux d'utilisation de l'application mobile de 70% des participants inscrits 
                  sur les 3 premiers événements pilotes d'ici la fin du mois de beta (mois 7)."
                </p>
                <div className="text-xs space-y-1 text-gray-600">
                  <p><strong>S</strong> : Taux d'utilisation app mobile</p>
                  <p><strong>M</strong> : 70% mesurable via analytics</p>
                  <p><strong>A</strong> : Validé avec client et équipe dev</p>
                  <p><strong>R</strong> : Benchmark montre 60-80% possible avec bon onboarding</p>
                  <p><strong>T</strong> : Fin mois 7 (fin beta)</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-3 py-2">
                <p className="font-semibold text-gray-900 mb-2">Objectif 2 : Performance Technique</p>
                <p className="text-sm text-gray-700 mb-2">
                  "Garantir un temps de chargement inférieur à 2 secondes pour l'app mobile 
                  et la plateforme web sur 99% des requêtes, mesuré lors des tests de charge 
                  avec 5000 utilisateurs simultanés avant la mise en production (fin mois 7)."
                </p>
                <div className="text-xs space-y-1 text-gray-600">
                  <p><strong>S</strong> : Temps de chargement</p>
                  <p><strong>M</strong> : &lt; 2s sur 99% requêtes</p>
                  <p><strong>A</strong> : Critère validé dans le CDC</p>
                  <p><strong>R</strong> : Architecture optimisée + CDN</p>
                  <p><strong>T</strong> : Validation avant prod (mois 7)</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-3 py-2">
                <p className="font-semibold text-gray-900 mb-2">Objectif 3 : Satisfaction Client</p>
                <p className="text-sm text-gray-700 mb-2">
                  "Obtenir un NPS (Net Promoter Score) supérieur à 50 auprès des organisateurs 
                  ayant utilisé la plateforme pour au moins 2 événements, mesuré via enquête 
                  à la fin de la période beta (mois 7)."
                </p>
                <div className="text-xs space-y-1 text-gray-600">
                  <p><strong>S</strong> : NPS organisateurs</p>
                  <p><strong>M</strong> : &gt; 50 (enquête standardisée)</p>
                  <p><strong>A</strong> : Critère succès partagé</p>
                  <p><strong>R</strong> : Produits similaires ont NPS 40-60</p>
                  <p><strong>T</strong> : Fin beta (mois 7)</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-3 py-2">
                <p className="font-semibold text-gray-900 mb-2">Objectif 4 : Networking Efficace</p>
                <p className="text-sm text-gray-700 mb-2">
                  "Générer au minimum 3 mises en relation (matches) par participant actif 
                  en moyenne lors des événements beta, avec un taux de conversion contact → rendez-vous de 40%, 
                  mesuré via analytics de l'app."
                </p>
                <div className="text-xs space-y-1 text-gray-600">
                  <p><strong>S</strong> : Nombre de mises en relation</p>
                  <p><strong>M</strong> : 3 matches/participant + 40% conversion</p>
                  <p><strong>A</strong> : KPI prioritaire validé</p>
                  <p><strong>R</strong> : Algo de matching testé</p>
                  <p><strong>T</strong> : Pendant phase beta</p>
                </div>
              </div>

              <div className="border-l-4 border-pink-600 pl-3 py-2">
                <p className="font-semibold text-gray-900 mb-2">Objectif 5 : Livraison MVP</p>
                <p className="text-sm text-gray-700 mb-2">
                  "Livrer un MVP fonctionnel comprenant les 6 features core (création événement, billetterie, 
                  app mobile, networking, analytics basiques, QR scan) avec 0 bug bloquant, 
                  validé en recette client avant le 15 juillet 2024."
                </p>
                <div className="text-xs space-y-1 text-gray-600">
                  <p><strong>S</strong> : MVP avec 6 features core</p>
                  <p><strong>M</strong> : 0 bug bloquant en recette</p>
                  <p><strong>A</strong> : Périmètre MVP validé mois 1</p>
                  <p><strong>R</strong> : Planning de 7 mois</p>
                  <p><strong>T</strong> : 15 juillet 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded mt-4">
              <h4 className="font-semibold text-green-900 mb-2">Pourquoi SMART est crucial ?</h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li>
                  <strong>Évite les malentendus :</strong> "Améliorer l'UX" vs "Réduire le temps de création 
                  d'événement de 15 à 5 minutes pour 80% des cas d'ici fin mois 6" → Le 2ème est vérifiable.
                </li>
                <li>
                  <strong>Permet de mesurer le succès :</strong> À la fin, on sait si l'objectif est atteint ou pas. 
                  Pas de débat subjectif.
                </li>
                <li>
                  <strong>Motive l'équipe :</strong> Objectifs clairs = équipe sait où aller. 
                  Objectifs flous = démotivation.
                </li>
                <li>
                  <strong>Facilite la gestion :</strong> Si on n'atteint pas 70% mais 55%, 
                  on sait qu'il faut améliorer l'onboarding. Actionnable.
                </li>
              </ul>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="business"
          title="8. Business Model et Monétisation"
          isExpanded={expandedSections.includes('business')}
          onToggle={() => toggleSection('business')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Pourquoi c'est important pour les étudiants ?</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>Comprendre que la technique doit servir un modèle économique viable</li>
                <li>Influencer l'architecture (ex: si freemium → multi-tenant nécessaire)</li>
                <li>Prioriser les features selon leur impact business</li>
                <li>Calculer le ROI du projet pour le client</li>
                <li>Anticiper les coûts récurrents (hébergement, support...)</li>
                <li>Comprendre la notion de scalabilité économique, pas que technique</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Comment Eventeo va gagner de l'argent concrètement ?</li>
                <li>Combien d'événements faut-il pour être rentable selon vous ?</li>
                <li>Si vous étiez le CEO d'Eventeo, features gratuites vs payantes : comment décidez-vous ?</li>
                <li>L'hébergement AWS va coûter combien par mois estimé ? Qui paie ?</li>
                <li>Comment convaincre les premiers organisateurs d'utiliser votre plateforme ?</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Modèle de Revenus Recommandé :</h4>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Option 1 : Commission sur Billetterie (Recommandé)</p>
                  <p className="text-gray-700 mb-2">
                    Eventeo prend 8-12% de commission sur chaque billet vendu. 
                    Modèle aligné avec le succès des organisateurs.
                  </p>
                  <div className="bg-white p-3 rounded text-xs">
                    <p className="font-medium mb-1">Exemple :</p>
                    <p>Événement de 500 personnes × 50€/billet = 25 000€ de billetterie</p>
                    <p>Commission 10% = 2 500€ pour Eventeo</p>
                    <p>Si 50 événements/mois = 125 000€/mois de revenus</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">Option 2 : Abonnement Organisateur</p>
                  <p className="text-gray-700 mb-2">
                    Freemium : Gratuit jusqu'à 100 participants, puis 99€/mois (500 participants) ou 299€/mois (illimité).
                  </p>
                  <div className="bg-white p-3 rounded text-xs">
                    <p className="font-medium mb-1">Projections :</p>
                    <p>100 organisateurs payants × 150€/mois moyen = 15 000€ MRR</p>
                    <p>Objectif : 500 organisateurs payants en 18 mois = 75 000€ MRR</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">Option 3 : Mixte (Plus Robuste)</p>
                  <p className="text-gray-700">
                    Gratuit pour petits événements (&lt;100 personnes) + Commission réduite (5%) sur billetterie + 
                    Features premium (analytics avancés, white-label, support prioritaire) en abonnement.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Coûts Récurrents (Opex) :</h4>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <table className="w-full text-sm">
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2">Hébergement AWS (scaled)</td>
                    <td className="text-right py-2 font-semibold">2 000-5 000€/mois</td>
                  </tr>
                  <tr>
                    <td className="py-2">Services tiers (Stripe, Twilio, SendGrid)</td>
                    <td className="text-right py-2 font-semibold">500-1 000€/mois</td>
                  </tr>
                  <tr>
                    <td className="py-2">Support client (1 personne mi-temps)</td>
                    <td className="text-right py-2 font-semibold">2 000€/mois</td>
                  </tr>
                  <tr>
                    <td className="py-2">Maintenance dev (bugs, petites évolutions)</td>
                    <td className="text-right py-2 font-semibold">3 000€/mois</td>
                  </tr>
                  <tr className="bg-purple-50 font-bold">
                    <td className="py-2">TOTAL Opex mensuel</td>
                    <td className="text-right py-2 text-purple-600">7 500-11 000€/mois</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-3">
                Seuil de rentabilité : ~50-60 événements/mois avec commission 10%
              </p>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Stratégie Go-to-Market :</h4>
            <div className="bg-gray-50 p-4 rounded mb-4 text-sm">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Phase 1 : Validation (Mois 1-3)</p>
                  <p className="text-gray-700">
                    3-5 organisateurs pilotes (early adopters). Gratuit en échange de feedback. 
                    Objectif : valider product-market fit.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phase 2 : Croissance Initiale (Mois 4-12)</p>
                  <p className="text-gray-700">
                    Acquisition directe : démarchage agences événementielles, centres de congrès. 
                    Offre de lancement : 3 premiers mois gratuits. 
                    Objectif : 50 organisateurs actifs.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phase 3 : Scale (Mois 12-24)</p>
                  <p className="text-gray-700">
                    Marketing digital (SEO, Google Ads sur "logiciel gestion événement"), 
                    partenariats avec salles de conférence. 
                    Objectif : 200-300 organisateurs.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Features vs Business Model :</h4>
            <div className="bg-gray-50 p-4 rounded text-sm">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-left p-2">Feature</th>
                    <th className="text-center p-2">Gratuit</th>
                    <th className="text-center p-2">Premium</th>
                    <th className="text-left p-2">Impact Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2">Création événement</td>
                    <td className="text-center p-2">✓</td>
                    <td className="text-center p-2">✓</td>
                    <td className="p-2 text-gray-600">Acquisition</td>
                  </tr>
                  <tr>
                    <td className="p-2">Billetterie basique</td>
                    <td className="text-center p-2">✓</td>
                    <td className="text-center p-2">✓</td>
                    <td className="p-2 text-gray-600">Hook principal</td>
                  </tr>
                  <tr>
                    <td className="p-2">App mobile participants</td>
                    <td className="text-center p-2">✓</td>
                    <td className="text-center p-2">✓</td>
                    <td className="p-2 text-gray-600">Différenciation</td>
                  </tr>
                  <tr>
                    <td className="p-2">Analytics avancés</td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">✓</td>
                    <td className="p-2 text-purple-600 font-semibold">Monétisation</td>
                  </tr>
                  <tr>
                    <td className="p-2">White-label personnalisé</td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">✓</td>
                    <td className="p-2 text-purple-600 font-semibold">Monétisation</td>
                  </tr>
                  <tr>
                    <td className="p-2">Support prioritaire</td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">✓</td>
                    <td className="p-2 text-purple-600 font-semibold">Rétention</td>
                  </tr>
                  <tr>
                    <td className="p-2">API ouverte</td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">✓</td>
                    <td className="p-2 text-purple-600 font-semibold">Lock-in</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded mt-4">
              <h4 className="font-semibold text-green-900 mb-2">Pourquoi inclure le business model dans leur réponse ?</h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li>
                  <strong>Crédibilité :</strong> Montre qu'ils comprennent le métier du client, 
                  pas juste la technique. Une agence doit être business partner, pas juste prestataire.
                </li>
                <li>
                  <strong>Priorisation :</strong> Aide à justifier pourquoi certaines features sont dans le MVP 
                  (celles qui génèrent du revenu) et d'autres en V2.
                </li>
                <li>
                  <strong>Architecture :</strong> Influence les choix techniques (ex: multi-tenant pour le SaaS, 
                  système de quotas pour le freemium, analytics pour la data).
                </li>
                <li>
                  <strong>ROI :</strong> Le client investit 100k€. Quand sera-t-il rentable ? 
                  Combien d'événements faut-il ? Cette analyse rassure le client.
                </li>
                <li>
                  <strong>Différenciation :</strong> Beaucoup d'agences oublient le business. 
                  En parler les distingue comme partenaire stratégique.
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded mt-4">
              <h4 className="font-semibold text-orange-900 mb-2">Ce qu'ils devraient mentionner dans leur réponse :</h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>1. Modèle de revenus proposé (commission recommandée à 10%)</li>
                <li>2. Estimation revenus : "Avec 50 événements/mois × 2000€ commission = 100k€ MRR"</li>
                <li>3. Coûts récurrents : "~10k€/mois d'Opex à prévoir"</li>
                <li>4. Seuil de rentabilité : "Rentable à partir de ~60 événements/mois"</li>
                <li>5. Stratégie freemium : "Gratuit jusqu'à 100 participants pour l'acquisition"</li>
                <li>6. Impact sur l'archi : "Architecture multi-tenant pour gérer les quotas"</li>
              </ul>
              <p className="text-xs text-orange-700 mt-3 italic">
                Même 2-3 phrases sur le business model dans leur réponse montrent une maturité exceptionnelle.
              </p>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">Projection Financière Simplifiée (à partager) :</h4>
            <div className="bg-gray-50 p-4 rounded">
              <table className="w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-left p-2">Période</th>
                    <th className="text-right p-2">Événements/mois</th>
                    <th className="text-right p-2">Revenus/mois</th>
                    <th className="text-right p-2">Coûts/mois</th>
                    <th className="text-right p-2">Marge</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2">Mois 1-3 (Beta)</td>
                    <td className="text-right p-2">5</td>
                    <td className="text-right p-2">0€</td>
                    <td className="text-right p-2">8 000€</td>
                    <td className="text-right p-2 text-red-600">-8 000€</td>
                  </tr>
                  <tr>
                    <td className="p-2">Mois 4-6</td>
                    <td className="text-right p-2">20</td>
                    <td className="text-right p-2">40 000€</td>
                    <td className="text-right p-2">10 000€</td>
                    <td className="text-right p-2 text-green-600">+30 000€</td>
                  </tr>
                  <tr>
                    <td className="p-2">Mois 7-12</td>
                    <td className="text-right p-2">50</td>
                    <td className="text-right p-2">100 000€</td>
                    <td className="text-right p-2">12 000€</td>
                    <td className="text-right p-2 text-green-600">+88 000€</td>
                  </tr>
                  <tr>
                    <td className="p-2">Mois 12-24</td>
                    <td className="text-right p-2">150</td>
                    <td className="text-right p-2">300 000€</td>
                    <td className="text-right p-2">20 000€</td>
                    <td className="text-right p-2 text-green-600">+280 000€</td>
                  </tr>
                  <tr className="bg-purple-50 font-bold">
                    <td className="p-2">ROI Client</td>
                    <td className="text-right p-2" colSpan={3}>Investissement initial : 100k€</td>
                    <td className="text-right p-2 text-purple-600">Rentable mois 6-7</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-3">
                Hypothèses : 2000€ commission moyenne par événement (500 participants × 50€ × 8%)
              </p>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="risques"
          title="9. Analyse des Risques"
          isExpanded={expandedSections.includes('risques')}
          onToggle={() => toggleSection('risques')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Questions à leur poser :</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>Quels sont les 5 principaux risques de ce projet selon vous ?</li>
                <li>Quel est le risque qui pourrait faire échouer complètement le projet ?</li>
                <li>Pour chaque risque, avez-vous une solution de mitigation ?</li>
                <li>Que faites-vous si le développeur principal tombe malade 3 mois ?</li>
                <li>Comment gérez-vous le risque que les participants n'utilisent pas l'app ?</li>
              </ul>
            </div>

            <div className="space-y-4">
              {[
                {
                  risque: 'Scalabilité sous-estimée',
                  impact: 'Haut',
                  probabilite: 'Moyenne',
                  mitigation: 'Tests de charge dès le sprint 6. Architecture cloud native avec auto-scaling. Budget cloud élastique prévu. Plan B : limitation temporaire à 3000 participants si besoin.'
                },
                {
                  risque: 'Adoption double-sided marketplace',
                  impact: 'Critique',
                  probabilite: 'Haute',
                  mitigation: 'Stratégie go-to-market en 2 temps : 1) Convaincre organisateurs avec valeur claire, 2) Participants suivront si l\'événement est sur la plateforme. Focus marketing sur organisateurs d\'abord.'
                },
                {
                  risque: 'Complexité algorithme matching',
                  impact: 'Moyen',
                  probabilite: 'Moyenne',
                  mitigation: 'V1 simple (matching par tags/secteur), amélioration progressive en post-MVP. ML/AI en V2 seulement.'
                },
                {
                  risque: 'Dérive du périmètre fonctionnel',
                  impact: 'Haut',
                  probabilite: 'Haute',
                  mitigation: 'Product Owner dédié. Backlog priorisé avec MoSCoW (Must/Should/Could/Won\'t). Revues de sprint strictes. Clause contractuelle sur le périmètre MVP.'
                }
              ].map((r, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded border-l-4 border-orange-500">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold text-gray-900">{r.risque}</p>
                    <div className="flex gap-2 text-xs">
                      <span className={`px-2 py-1 rounded ${
                        r.impact === 'Critique' ? 'bg-red-100 text-red-700' :
                        r.impact === 'Haut' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        Impact: {r.impact}
                      </span>
                      <span className="px-2 py-1 rounded bg-blue-100 text-blue-700">
                        Proba: {r.probabilite}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700"><strong>Mitigation :</strong> {r.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="exercices"
          title="10. Exercices et Activités de Déblocage"
          isExpanded={expandedSections.includes('exercices')}
          onToggle={() => toggleSection('exercices')}
        >
          <div className="prose prose-sm max-w-none">
            <h4 className="font-semibold text-gray-900 mb-3">Activités pour débloquer ou faire souffler</h4>
            
            <div className="space-y-6">
              {/* Exercice Architecture */}
              <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg">
                <h5 className="font-bold text-blue-900 mb-2">Exercice 1 : Architecture en 5 Minutes (Papier/Crayon)</h5>
                <p className="text-sm text-blue-800 mb-3">
                  <strong>Consigne :</strong> "Fermez vos ordis. Prenez une feuille. Dessinez en 5 minutes 
                  les différentes parties du système : où sont les utilisateurs ? Où sont les serveurs ? 
                  Où est la base de données ? Comment ça communique ?"
                </p>
                <p className="text-xs text-blue-700">
                  Objectif : Les forcer à visualiser l'architecture sans copier-coller. 
                  Puis comparer entre équipes et discuter.
                </p>
              </div>

              {/* Exercice Budget */}
              <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
                <h5 className="font-bold text-green-900 mb-2">Exercice 2 : Poker Planning Budget (10 min)</h5>
                <p className="text-sm text-green-800 mb-3">
                  <strong>Consigne :</strong> "Listez 10 tâches du projet (ex: Créer le login, Faire les wireframes, etc.). 
                  Pour chaque tâche, votez en équipe : combien de jours ? (1, 2, 3, 5, 8, 13). 
                  Si désaccord, discutez 2 min puis revotez."
                </p>
                <p className="text-xs text-green-700">
                  Objectif : Méthode agile du poker planning. Les fait réfléchir à la complexité réelle.
                </p>
              </div>

              {/* Pause Créative */}
              <div className="bg-purple-50 border-2 border-purple-300 p-4 rounded-lg">
                <h5 className="font-bold text-purple-900 mb-2">Pause 3 : Jeu des Personas (5 min)</h5>
                <p className="text-sm text-purple-800 mb-3">
                  <strong>Consigne :</strong> "Chacun votre tour, incarnez un persona pendant 2 minutes. 
                  Les autres posent des questions. Sophie, comment utiliserais-tu l'app ? 
                  Qu'est-ce qui te ferait abandonner ?"
                </p>
                <p className="text-xs text-purple-700">
                  Objectif : Pause ludique qui fait réfléchir aux vrais besoins utilisateurs.
                </p>
              </div>

              {/* Challenge Wireframes */}
              <div className="bg-orange-50 border-2 border-orange-300 p-4 rounded-lg">
                <h5 className="font-bold text-orange-900 mb-2">Challenge 4 : Redesign Rapide (7 min)</h5>
                <p className="text-sm text-orange-800 mb-3">
                  <strong>Consigne :</strong> "Prenez le wireframe d'une autre équipe. 
                  Trouvez 3 améliorations possibles. Dessinez votre version améliorée. 
                  Présentez en 1 min pourquoi c'est mieux."
                </p>
                <p className="text-xs text-orange-700">
                  Objectif : Regard croisé entre équipes. Critique constructive. Ouverture d'esprit.
                </p>
              </div>

              {/* Brainstorm Risques */}
              <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
                <h5 className="font-bold text-red-900 mb-2">Exercice 5 : Brainstorm Catastrophe (8 min)</h5>
                <p className="text-sm text-red-800 mb-3">
                  <strong>Consigne :</strong> "Imaginez que TOUT va mal. 
                  Listez 15 catastrophes possibles en 5 minutes (dev qui part, serveur qui crash, client qui change tout...). 
                  Puis pour chacune : quelle solution ?"
                </p>
                <p className="text-xs text-red-700">
                  Objectif : Identification proactive des risques. Préparation mentale. Résilience.
                </p>
              </div>

              {/* Jeu Priorités */}
              <div className="bg-pink-50 border-2 border-pink-300 p-4 rounded-lg">
                <h5 className="font-bold text-pink-900 mb-2">Jeu 6 : MoSCoW Rapide (6 min)</h5>
                <p className="text-sm text-pink-800 mb-3">
                  <strong>Consigne :</strong> "Prenez toutes vos fonctionnalités listées. 
                  Classez-les : Must have (obligatoire MVP), Should have (important mais pas MVP), 
                  Could have (bonus), Won't have (pas du tout). 
                  Règle : Maximum 5 en Must have !"
                </p>
                <p className="text-xs text-pink-700">
                  Objectif : Priorisation. Distinguer l'essentiel du superflu. Scope réaliste.
                </p>
              </div>

              {/* Échange Équipes */}
              <div className="bg-cyan-50 border-2 border-cyan-300 p-4 rounded-lg">
                <h5 className="font-bold text-cyan-900 mb-2">Pause 7 : Speed Review (10 min)</h5>
                <p className="text-sm text-cyan-800 mb-3">
                  <strong>Consigne :</strong> "Échangez vos documents avec l'équipe d'à côté. 
                  Vous avez 5 minutes pour lire leur proposition. 
                  Donnez 3 points positifs et 2 suggestions d'amélioration. 
                  Puis inversez."
                </p>
                <p className="text-xs text-cyan-700">
                  Objectif : Peer review. Apprendre des autres. Critique constructive. Pause collaborative.
                </p>
              </div>

              {/* Pitch Express */}
              <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
                <h5 className="font-bold text-yellow-900 mb-2">Challenge 8 : Pitch Express (3 min/équipe)</h5>
                <p className="text-sm text-yellow-800 mb-3">
                  <strong>Consigne :</strong> "Chaque équipe présente sa proposition en 2 minutes. 
                  Règles : Pas de slides, juste oral. Les autres posent 1 question. 
                  Tour de table rapide."
                </p>
                <p className="text-xs text-yellow-700">
                  Objectif : Clarifier sa pensée. S'exprimer à l'oral. Apprendre à synthétiser.
                </p>
              </div>

              {/* Calcul Mental */}
              <div className="bg-indigo-50 border-2 border-indigo-300 p-4 rounded-lg">
                <h5 className="font-bold text-indigo-900 mb-2">Pause 9 : Calcul Mental Budget (4 min)</h5>
                <p className="text-sm text-indigo-800 mb-3">
                  <strong>Consigne :</strong> "Sans calculatrice ni ordi : 
                  Un dev à 600€/jour pendant 3 mois (60 jours travaillés) = combien ? 
                  Un designer à 550€/jour, 30% de son temps sur 4 mois = combien de jours ? Combien en euros ?"
                </p>
                <p className="text-xs text-indigo-700">
                  Objectif : Agilité mentale. Calculs rapides. Vérifier cohérence de leurs chiffrages.
                </p>
              </div>

              {/* User Stories */}
              <div className="bg-teal-50 border-2 border-teal-300 p-4 rounded-lg">
                <h5 className="font-bold text-teal-900 mb-2">Exercice 10 : User Stories Battle (8 min)</h5>
                <p className="text-sm text-teal-800 mb-3">
                  <strong>Consigne :</strong> "Écrivez 5 user stories pour votre projet. 
                  Format : 'En tant que [utilisateur], je veux [action] afin de [bénéfice]'. 
                  La meilleure user story gagne 50 points bonus !"
                </p>
                <p className="text-xs text-teal-700">
                  Objectif : Centrage utilisateur. Format pro des user stories. Compétition saine.
                </p>
              </div>
            </div>
          </div>
        </CorrectionSection>

        <CorrectionSection
          id="conseils"
          title="11. Conseils d'Accompagnement"
          isExpanded={expandedSections.includes('conseils')}
          onToggle={() => toggleSection('conseils')}
        >
          <div className="prose prose-sm max-w-none">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-900 mb-2">Si une équipe bloque sur...</h4>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Le chiffrage :</p>
                    <p className="text-gray-700">Guidez-les : "Listez toutes les features. Pour chaque feature, estimez combien de jours de dev. Exemple : Login = 2j, Dashboard = 5j, etc. Total × TJM moyen."</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">L'architecture :</p>
                    <p className="text-gray-700">Rappelez les 3 couches : Frontend (ce que l'utilisateur voit), Backend/API (logique métier), BDD (stockage). Ajoutez infra (serveurs) et services tiers (paiement, email).</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">Les wireframes :</p>
                    <p className="text-gray-700">Commencez papier ! Dessinez les 5 écrans principaux au crayon. Ensuite Figma. L'important n'est pas la beauté mais la logique du parcours.</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">Le planning :</p>
                    <p className="text-gray-700">Méthode simple : Total jours estimés ÷ nombre de devs = durée. Ajoutez 20% de marge. Découpez en phases logiques : Design → Dev → Tests.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-900 mb-2">Valorisez ces points</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-green-900">
                  <li>Justification de chaque choix technique (pas de "parce que c'est bien")</li>
                  <li>Prise en compte des contraintes réelles (budget, délai, compétences disponibles)</li>
                  <li>Identification des risques ET solutions</li>
                  <li>Approche itérative (MVP puis évolutions)</li>
                  <li>Wireframes annotés et parcours utilisateurs clairs</li>
                  <li>Chiffrage transparent et détaillé</li>
                </ul>
              </div>
            </div>
          </div>
        </CorrectionSection>
      </main>

      <Footer />
    </div>
  )
}

function CorrectionSection({ 
  id, 
  title, 
  children, 
  isExpanded, 
  onToggle 
}: { 
  id: string
  title: string
  children: React.ReactNode
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-6 py-4 border-t">
          {children}
        </div>
      )}
    </div>
  )
}
