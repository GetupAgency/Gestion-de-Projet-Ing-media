'use client'

import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Backpack, Check, CheckCircle2, Headphones, KeyRound, LockKeyhole, MapPin, Plus, Search, ShieldCheck, Wallet } from 'lucide-react'
import type { DemoObject } from '@/lib/perduDeVue/types'

type Status = 'pending' | 'information' | 'approved' | 'rejected' | 'returned'
type Claim = { id: string; objectId: string | null; description: string; proof: string; email: string; status: Status; message: string }
const statusLabels: Record<Status, string> = { pending: 'En cours d’examen', information: 'Précision demandée', approved: 'Retrait autorisé', rejected: 'Demande non confirmée', returned: 'Objet remis' }

function ObjectPicture({ category }: { category: DemoObject['category'] }) {
  const Icon = category === 'audio' ? Headphones : category === 'bag' ? Backpack : category === 'keys' ? KeyRound : Wallet
  return <div className={`pdvp-object-picture pdvp-object-${category}`}><Icon size={44} strokeWidth={1.25} aria-hidden="true" /></div>
}

export default function ServicePrototype({ initialObjects }: { initialObjects: DemoObject[] }) {
  const [objects, setObjects] = useState(initialObjects)
  const [claims, setClaims] = useState<Claim[]>([])
  const [role, setRole] = useState<'citizen' | 'agent'>('citizen')
  const [screen, setScreen] = useState<'search' | 'results' | 'claim' | 'tracking'>('search')
  const [scenario, setScenario] = useState('match')
  const [query, setQuery] = useState('Des écouteurs blancs perdus dans le tram')
  const [category, setCategory] = useState<DemoObject['category']>('audio')
  const [manual, setManual] = useState(false)
  const [chosenId, setChosenId] = useState<string | null>(null)
  const [proof, setProof] = useState('')
  const [email, setEmail] = useState('lea@example.test')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [reviewId, setReviewId] = useState<string | null>(null)
  const [agentView, setAgentView] = useState<'requests' | 'inventory'>('requests')
  const [error, setError] = useState('')
  const [agentMessage, setAgentMessage] = useState('')
  const [evidenceChecked, setEvidenceChecked] = useState(false)
  const [handoverChecked, setHandoverChecked] = useState(false)
  const [adding, setAdding] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newPrivate, setNewPrivate] = useState('')
  const [newCategory, setNewCategory] = useState<DemoObject['category']>('keys')
  const [notice, setNotice] = useState('')
  const sequence = useRef(0)
  const chosen = objects.find(object => object.id === chosenId)
  const active = claims.find(claim => claim.id === activeId)
  const review = claims.find(claim => claim.id === reviewId)
  const reviewedObject = objects.find(object => object.id === review?.objectId)
  const normalizedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const sensitive = category === 'sensitive' || scenario === 'sensitive' || /identite|bancaire|passeport/.test(normalizedQuery)
  const unavailable = scenario === 'offline' && !manual
  const returnedIds = claims.filter(claim => claim.status === 'returned').map(claim => claim.objectId)
  const desiredCategory = manual ? category : /ecouteur|airpod|casque/.test(normalizedQuery) ? 'audio' : /sac/.test(normalizedQuery) ? 'bag' : /cle/.test(normalizedQuery) ? 'keys' : null
  const results = scenario === 'none' || sensitive || unavailable ? [] : objects.filter(object => object.category !== 'sensitive' && object.category === desiredCategory && !returnedIds.includes(object.id))

  function chooseScenario(value: string) {
    setScenario(value); setCategory(value === 'sensitive' ? 'sensitive' : 'audio'); setManual(false); setScreen('search'); setError(''); setNotice('')
    setQuery(value === 'none' ? 'Un chapeau vert perdu dans le bus' : value === 'sensitive' ? 'Ma carte d’identité' : 'Des écouteurs blancs perdus dans le tram')
  }
  function startClaim(id: string | null) { setChosenId(id); setProof(''); setError(''); setScreen('claim') }
  function openReview(id: string) { setReviewId(id); setAgentMessage(''); setEvidenceChecked(false); setHandoverChecked(false); setError(''); setNotice('') }
  function updateClaim(id: string, patch: Partial<Claim>) { setClaims(current => current.map(claim => claim.id === id ? { ...claim, ...patch } : claim)) }
  function submitClaim(event: React.FormEvent) {
    event.preventDefault()
    if (proof.trim().length < 10) { setError('Décrivez un détail de votre objet en au moins 10 caractères.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Indiquez une adresse de courriel valide. Utilisez une adresse fictive pour la démonstration.'); return }
    const id = `D-${String(++sequence.current).padStart(3, '0')}`
    setClaims(current => [...current, { id, objectId: chosenId, description: query, proof: proof.trim(), email, status: 'pending', message: '' }])
    setProof(''); setActiveId(id); setReviewId(id); setScreen('tracking'); setError(''); setEvidenceChecked(false); setHandoverChecked(false)
  }
  function decide(status: Status) {
    if (!review) return
    if (status === 'approved' && (!evidenceChecked || !review.objectId || returnedIds.includes(review.objectId))) { setError('Comparez les éléments avec un objet disponible et confirmez votre vérification.'); return }
    if ((status === 'rejected' || status === 'information') && agentMessage.trim().length < 5) { setError('Rédigez un message pour expliquer la décision ou la précision attendue.'); return }
    if (status === 'returned' && (!handoverChecked || review.status !== 'approved' || returnedIds.includes(review.objectId))) { setError('Le contrôle au guichet doit être confirmé avant la remise.'); return }
    updateClaim(review.id, { status, message: status === 'approved' ? 'Les éléments ont été examinés. Présentez-vous au guichet avec la référence de votre demande pour le contrôle final.' : status === 'returned' ? 'La remise a été enregistrée par le service.' : agentMessage.trim() })
    setError(''); setNotice(status === 'returned' ? 'La remise est enregistrée. L’objet ne sera plus proposé dans la recherche.' : 'La décision apparaît maintenant dans le suivi habitant.')
  }
  function addObject(event: React.FormEvent) {
    event.preventDefault()
    if (newTitle.trim().length < 3 || newPrivate.trim().length < 5) { setError('Renseignez un nom et un détail interne pour enregistrer la fiche.'); return }
    const id = `PDV-N${++sequence.current}`
    setObjects(current => [...current, { id, category: newCategory, title: newTitle.trim(), place: 'Bureau central', date: 'Aujourd’hui · démo', publicDescription: newCategory === 'sensitive' ? '' : newTitle.trim(), privateDescription: newPrivate.trim(), storage: 'Emplacement à attribuer' }])
    setAdding(false); setNewTitle(''); setNewPrivate(''); setError(''); setNotice(newCategory === 'sensitive' ? 'Fiche enregistrée dans le circuit interne. Elle ne sera pas publiée.' : 'Fiche enregistrée. Elle est disponible dans la recherche par catégorie.')
  }

  return <div className="pdvp-demo">
    <div className="pdvp-demo-controls pdvc-no-print">
      <div className="pdvp-role-switch" aria-label="Vue de la démonstration">
        <button type="button" aria-pressed={role === 'citizen'} onClick={() => { setRole('citizen'); setError(''); setNotice('') }}>Côté habitant</button>
        <button type="button" aria-pressed={role === 'agent'} onClick={() => { setRole('agent'); setError(''); setNotice('') }}>Côté agent <span>{claims.filter(claim => claim.status === 'pending').length}</span></button>
      </div>
      {role === 'citizen' && <label>Situation à essayer<select aria-label="Situation à essayer" value={scenario} onChange={event => chooseScenario(event.target.value)}><option value="match">Objets ressemblants</option><option value="none">Aucun résultat</option><option value="offline">IA indisponible</option><option value="sensitive">Objet sensible</option></select></label>}
    </div>
    <p className="pdvp-demo-caption">Prototype interactif · objets fictifs · données conservées uniquement pendant cette démonstration · aucun envoi</p>
    <div className="pdvp-app">
      <header className="pdvp-header"><div className="pdvp-brand"><Search size={24} aria-hidden="true" /><strong>perdu de vue<span>Le bureau des objets trouvés</span></strong></div><span className="pdvp-service-label">{role === 'agent' ? 'Espace agent · simulation' : 'Un service de la Métropole'}</span></header>
      {role === 'citizen' ? <div className="pdvp-citizen">
        <nav className="pdvp-citizen-nav" aria-label="Parcours habitant"><button type="button" onClick={() => { setScreen('search'); setError('') }}>Chercher un objet</button>{active && <button type="button" onClick={() => { setScreen('tracking'); setError('') }}>Suivre ma demande <span className="num">{active.id}</span></button>}</nav>
        {screen === 'search' && <div className="pdvp-search-layout">
          <div className="pdvp-search-intro"><span className="pdvp-tag">Bus & tram</span><h3>Vos affaires ont peut-être été retrouvées.</h3><p>Décrivez ce que vous avez perdu. Nous vous aidons à chercher parmi les objets reçus par le service.</p><p className="pdvp-reassurance"><ShieldCheck size={19} aria-hidden="true" />Un agent vérifie chaque demande avant le retrait.</p></div>
          <form noValidate className="pdvp-form" onSubmit={event => { event.preventDefault(); if (query.trim().length < 3) { setError('Décrivez l’objet que vous avez perdu.'); return } setError(''); setScreen('results') }}>
            <label htmlFor="lost-description">Qu’avez-vous perdu ?</label><textarea id="lost-description" maxLength={600} value={query} onChange={event => setQuery(event.target.value)} rows={4} aria-describedby={error ? 'pdvp-error' : undefined} />
            <label htmlFor="lost-category">Catégorie</label><select id="lost-category" value={category} onChange={event => { setCategory(event.target.value as DemoObject['category']); setManual(true) }}><option value="audio">Écouteurs / audio</option><option value="bag">Sac</option><option value="keys">Clés</option><option value="sensitive">Document sensible</option></select>
            <p className="pdvp-help">Ne mettez pas ici de numéro de série complet ni de document d’identité.</p>
            <button className="pdvp-primary" type="submit">Chercher mon objet <ArrowRight size={17} aria-hidden="true" /></button>
          </form>
        </div>}
        {screen === 'results' && <div className="pdvp-results">
          <button type="button" className="pdvp-back" onClick={() => { setScreen('search'); setError('') }}><ArrowLeft size={16} aria-hidden="true" />Modifier ma recherche</button>
          {sensitive ? <div className="pdvp-empty"><LockKeyhole size={35} aria-hidden="true" /><h3>Votre document suit un circuit particulier.</h3><p>Les documents d’identité et cartes bancaires ne sont pas affichés ici. Le bureau vous indiquera la démarche adaptée.</p><details><summary>Comment contacter le service</summary><p>Présentez-vous au guichet pendant ses horaires d’ouverture. Dans le service final, le numéro et les horaires validés par la Métropole apparaîtront ici.</p></details></div> : unavailable ? <div className="pdvp-empty"><h3>L’aide à la recherche est momentanément indisponible.</h3><p>Vous pouvez continuer à chercher par catégorie. Vos informations restent dans le formulaire.</p><button type="button" className="pdvp-primary" onClick={() => setManual(true)}>Rechercher par catégorie</button></div> : results.length === 0 ? <div className="pdvp-empty"><Search size={35} aria-hidden="true" /><h3>Aucun objet correspondant pour le moment.</h3><p>Votre objet n’a peut-être pas encore été transmis au service. Vous pouvez laisser une déclaration aux agents.</p><button type="button" className="pdvp-primary" onClick={() => startClaim(null)}>Laisser ma déclaration</button></div> : <>
            <h3>{results.length} objet{results.length > 1 ? 's' : ''} à regarder</h3><p className="pdvp-result-note">Une ressemblance ne confirme pas qu’il s’agit de votre objet. Les détails seront vérifiés par un agent.</p>
            <div className="pdvp-results-grid">{results.map(object => <article className="pdvp-object" key={object.id}><ObjectPicture category={object.category} /><div className="pdvp-object-body"><span className="pdvp-tag">Ressemblance à vérifier</span><h4>{object.title}</h4><p>{object.publicDescription}</p><p className="pdvp-object-location"><MapPin size={15} aria-hidden="true" />{object.place}</p><p className="pdvp-help">Reçu : {object.date}</p><button type="button" className="pdvp-primary" onClick={() => startClaim(object.id)}>Cet objet pourrait être le mien</button></div></article>)}</div>
          </>}
        </div>}
        {screen === 'claim' && <div className="pdvp-claim-layout">
          <div><button type="button" className="pdvp-back" onClick={() => setScreen('results')}><ArrowLeft size={16} aria-hidden="true" />Retour aux résultats</button><h3>{chosen ? 'Aidez-nous à vérifier.' : 'Décrivez votre objet aux agents.'}</h3><p>{chosen ? chosen.title : query}</p><p>Indiquez un détail que vous connaissez : une marque particulière, un accessoire ou une partie d’un numéro. Ces informations sont réservées aux agents.</p><p className="pdvp-help">Ne joignez aucun document personnel à cette démonstration.</p></div>
          <form noValidate className="pdvp-form" onSubmit={submitClaim}><label htmlFor="claim-proof">Votre détail distinctif</label><textarea id="claim-proof" value={proof} maxLength={1000} onChange={event => setProof(event.target.value)} rows={4} aria-describedby={error ? 'pdvp-error' : undefined} /><label htmlFor="claim-email">Votre courriel · fictif dans cette démo</label><input id="claim-email" type="email" value={email} maxLength={150} onChange={event => setEmail(event.target.value)} /><p className="pdvp-help">Le service utilisera ce contact pour le suivi de votre demande.</p><button type="submit" className="pdvp-primary">Transmettre ma demande</button></form>
        </div>}
        {screen === 'tracking' && active && <div className="pdvp-tracking"><div className="pdvp-tracking-heading"><CheckCircle2 size={32} aria-hidden="true" /><div><span className="num">{active.id}</span><h3>{statusLabels[active.status]}</h3></div></div><p>{active.description}</p><p>{active.message || 'Votre demande est enregistrée. Un agent doit maintenant examiner les informations. Aucun objet ne vous a encore été attribué.'}</p><p className="pdvp-help">Dans le service final, un lien individuel est envoyé à votre adresse. Aucun courriel n’est envoyé ici.</p>{active.status === 'information' && <form className="pdvp-form" onSubmit={event => { event.preventDefault(); if (proof.trim().length < 10) { setError('Ajoutez une précision de 10 caractères minimum.'); return } updateClaim(active.id, { proof: `${active.proof}\nPrécision : ${proof.trim()}`, status: 'pending', message: '' }); setProof(''); setError('') }}><label htmlFor="claim-addition">Ajouter une précision</label><textarea id="claim-addition" value={proof} maxLength={1000} onChange={event => setProof(event.target.value)} /><button className="pdvp-primary">Envoyer la précision</button></form>}{active.status === 'approved' && <div className="pdvp-next-step"><strong>Prochaine étape : le guichet</strong><p>Conservez votre référence. La remise de l’objet est confirmée sur place après le dernier contrôle.</p></div>}<button type="button" className="pdvp-secondary pdvc-no-print" onClick={() => { setRole('agent'); setAgentView('requests'); openReview(active.id) }}>Voir le traitement côté agent <ArrowRight size={16} aria-hidden="true" /></button></div>}
      </div> : <div className="pdvp-agent">
        <nav className="pdvp-agent-nav" aria-label="Outils de l’agent"><button type="button" aria-pressed={agentView === 'requests'} onClick={() => { setAgentView('requests'); setError(''); setNotice('') }}>Demandes <span>{claims.length}</span></button><button type="button" aria-pressed={agentView === 'inventory'} onClick={() => { setAgentView('inventory'); setError(''); setNotice('') }}>Inventaire <span>{objects.length}</span></button></nav>
        {agentView === 'requests' ? <div className="pdvp-review-layout"><aside className="pdvp-request-list"><h3>Demandes reçues</h3>{claims.length === 0 ? <p>Aucune demande. Commencez côté habitant pour en déposer une.</p> : claims.map(claim => <button type="button" key={claim.id} className={review?.id === claim.id ? 'is-selected' : ''} onClick={() => openReview(claim.id)}><span className="num">{claim.id}</span><strong>{claim.description}</strong><span className="pdvp-status">{statusLabels[claim.status]}</span></button>)}</aside><div className="pdvp-review">
          {!review ? <div className="pdvp-empty"><h3>Sélectionnez une demande</h3><p>Comparez les informations du demandeur avec la fiche privée de l’objet.</p></div> : <><div className="pdvp-review-heading"><h3>Examiner <span className="num">{review.id}</span></h3><span className="pdvp-tag">{statusLabels[review.status]}</span></div><div className="pdvp-comparison"><section><h4>Ce que la personne indique</h4><p>{review.proof}</p><p className="pdvp-help">Contact fictif : {review.email}</p></section><section><h4><LockKeyhole size={15} aria-hidden="true" />Fiche interne</h4>{reviewedObject ? <><p>{reviewedObject.privateDescription}</p><p className="pdvp-help">{reviewedObject.id} · {reviewedObject.storage}</p></> : <><p>Aucun objet associé.</p><label>Associer un objet disponible<select aria-label="Associer un objet disponible" value="" onChange={event => { updateClaim(review.id, { objectId: event.target.value }); setEvidenceChecked(false) }}><option value="">Choisir un objet</option>{objects.filter(object => object.category !== 'sensitive' && !returnedIds.includes(object.id)).map(object => <option key={object.id} value={object.id}>{object.id} · {object.title}</option>)}</select></label></>}</section></div>
          {(review.status === 'pending' || review.status === 'information') && <div className="pdvp-decision"><label htmlFor="agent-message">Message pour l’habitant</label><textarea id="agent-message" value={agentMessage} maxLength={1000} onChange={event => setAgentMessage(event.target.value)} placeholder="Précision attendue ou raison du refus" /><div className="pdvp-actions"><button type="button" className="pdvp-secondary" onClick={() => decide('information')}>Demander une précision</button><button type="button" className="pdvp-secondary" onClick={() => decide('rejected')}>Refuser la demande</button></div><label className="pdvc-check"><input type="checkbox" checked={evidenceChecked} onChange={event => setEvidenceChecked(event.target.checked)} />J’ai comparé les éléments et ils sont suffisants pour autoriser un retrait.</label><button type="button" className="pdvp-primary" disabled={!evidenceChecked || !reviewedObject || returnedIds.includes(review.objectId)} onClick={() => decide('approved')}><ShieldCheck size={17} aria-hidden="true" />Autoriser le retrait</button></div>}
          {review.status === 'approved' && <div className="pdvp-decision"><h4>La personne se présente au guichet</h4><p>L’autorisation en ligne ne vaut pas encore remise de l’objet.</p><label className="pdvc-check"><input type="checkbox" checked={handoverChecked} onChange={event => setHandoverChecked(event.target.checked)} />Le contrôle au guichet est effectué.</label><button type="button" className="pdvp-primary" disabled={!handoverChecked} onClick={() => decide('returned')}><Check size={17} aria-hidden="true" />Enregistrer la remise</button></div>}
          {review.status === 'returned' && <div className="pdvp-next-step"><strong>Objet remis</strong><p>La fiche est conservée dans l’historique et l’objet a été retiré de la recherche publique.</p></div>}{review.status === 'rejected' && <div className="pdvp-next-step"><strong>Demande non confirmée</strong><p>{review.message}</p><p>L’objet reste disponible pour l’examen d’autres demandes.</p></div>}
          </>}
        </div></div> : <div className="pdvp-inventory"><div className="pdvp-inventory-heading"><div><h3>Inventaire du bureau</h3><p>Les détails internes ne sont jamais affichés dans la recherche habitant.</p></div><button type="button" className="pdvp-primary" onClick={() => { setAdding(value => !value); setError(''); setNotice('') }}><Plus size={17} aria-hidden="true" />{adding ? 'Fermer la saisie' : 'Enregistrer un objet'}</button></div>{adding && <form className="pdvp-form pdvp-add-object" noValidate onSubmit={addObject}><label htmlFor="object-title">Nom public de l’objet</label><input id="object-title" maxLength={100} value={newTitle} onChange={event => setNewTitle(event.target.value)} /><label htmlFor="object-category">Catégorie</label><select id="object-category" value={newCategory} onChange={event => setNewCategory(event.target.value as DemoObject['category'])}><option value="keys">Clés</option><option value="audio">Audio</option><option value="bag">Sac</option><option value="sensitive">Objet sensible · circuit interne</option></select><label htmlFor="object-private">Détail réservé aux agents</label><textarea id="object-private" value={newPrivate} maxLength={500} onChange={event => setNewPrivate(event.target.value)} /><p className="pdvp-help">Une photo pourra être ajoutée dans le service final ; la démonstration utilise des pictogrammes.</p><button className="pdvp-primary" type="submit">Enregistrer la fiche</button></form>}<div className="pdvc-table-scroll"><table className="pdvc-table"><thead><tr><th>Objet</th><th>Référence</th><th>Emplacement</th><th>Visibilité</th></tr></thead><tbody>{objects.map(object => <tr key={object.id}><th scope="row">{object.title}<small>{object.privateDescription}</small></th><td className="num">{object.id}</td><td>{object.storage}</td><td>{returnedIds.includes(object.id) ? 'Remis · historique' : object.category === 'sensitive' ? 'Interne uniquement' : 'Disponible dans la recherche'}</td></tr>)}</tbody></table></div></div>}
      </div>}
      {error && <p id="pdvp-error" className="pdvp-error" role="alert">{error}</p>}
      {notice && <p className="pdvp-notice" role="status">{notice}</p>}
      <footer className="pdvp-footer">Votre demande est examinée par une personne. Les correspondances proposées servent à orienter la recherche.</footer>
    </div>
  </div>
}
