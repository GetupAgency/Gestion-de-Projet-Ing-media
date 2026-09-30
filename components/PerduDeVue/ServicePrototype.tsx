'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Backpack, Check, CheckCircle2, ClipboardList, Clock3, Headphones, KeyRound, LockKeyhole, MapPin, Plus, Search, ShieldCheck, SlidersHorizontal, UserRound, Wallet } from 'lucide-react'
import type { DemoObject } from '@/lib/perduDeVue/types'
import { changeClaim, findDemoObjects, isSensitiveSearch, objectUnavailable, statusLabels } from '@/lib/perduDeVue/prototype'
import type { ClaimStatus, DemoClaim, SearchFilters } from '@/lib/perduDeVue/prototype'
import './prototype.css'

type Screen = 'search' | 'results' | 'object' | 'claim' | 'tracking'
type Errors = Record<string, string | undefined>
const screenNames: Record<Screen, string> = { search: 'H1 · Recherche', results: 'H2 · Résultats', object: 'H3 · Fiche objet', claim: 'H4 · Demande de restitution', tracking: 'H5 · Suivi de la demande' }
const defaultFilters: SearchFilters = { description: 'Des écouteurs blancs perdus dans le tram', category: 'all', place: 'all', from: '', to: '' }

function ObjectPicture({ category, compact = false }: { category: DemoObject['category']; compact?: boolean }) {
  const Icon = category === 'audio' ? Headphones : category === 'bag' ? Backpack : category === 'keys' ? KeyRound : Wallet
  return <div className={`pdvp-object-picture pdvp-object-${category} ${compact ? 'is-compact' : ''}`}><Icon size={compact ? 32 : 78} strokeWidth={1.1} aria-hidden="true" /></div>
}
function Status({ value }: { value: ClaimStatus }) { return <span className={`pdvp-status-tag is-${value}`}><span aria-hidden="true" />{statusLabels[value]}</span> }
function FieldError({ name, errors }: { name: string; errors: Errors }) { return errors[name] ? <p id={`pdvp-error-${name}`} className="pdvp-field-error" role="alert">{errors[name]}</p> : null }
function History({ claim }: { claim: DemoClaim }) {
  return <ol className="pdvp-history" aria-label="Historique de la demande">{claim.history.map((event, index) => <li key={index}><span aria-hidden="true">{index + 1}</span><div><strong>{event.title}</strong><p>{event.detail}</p></div></li>)}</ol>
}

export default function ServicePrototype({ initialObjects }: { initialObjects: DemoObject[] }) {
  const [objects, setObjects] = useState(initialObjects)
  const [claims, setClaims] = useState<DemoClaim[]>([])
  const [role, setRole] = useState<'citizen' | 'agent'>('citizen')
  const [screen, setScreen] = useState<Screen>('search')
  const [scenario, setScenario] = useState('match')
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters)
  const [manual, setManual] = useState(false)
  const [chosenId, setChosenId] = useState<string | null>(null)
  const [proof, setProof] = useState('')
  const [addition, setAddition] = useState('')
  const [email, setEmail] = useState('lea@example.test')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [reviewId, setReviewId] = useState<string | null>(null)
  const [agentView, setAgentView] = useState<'requests' | 'inventory'>('requests')
  const [requestFilter, setRequestFilter] = useState('all')
  const [errors, setErrors] = useState<Errors>({})
  const [agentMessage, setAgentMessage] = useState('')
  const [evidenceChecked, setEvidenceChecked] = useState(false)
  const [handoverChecked, setHandoverChecked] = useState(false)
  const [adding, setAdding] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newPublic, setNewPublic] = useState('')
  const [newPrivate, setNewPrivate] = useState('')
  const [newStorage, setNewStorage] = useState('')
  const [newCategory, setNewCategory] = useState<DemoObject['category']>('keys')
  const [newTransport, setNewTransport] = useState<DemoObject['transport']>('bus')
  const [newDate, setNewDate] = useState(initialObjects.map(object => object.foundOn).sort().at(-1) ?? '2026-10-07')
  const [inventoryQuery, setInventoryQuery] = useState('')
  const [notice, setNotice] = useState('')
  const sequence = useRef(0)
  const panel = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current) panel.current?.focus({ preventScroll: true })
    mounted.current = true
  }, [role, screen, agentView, reviewId, adding])

  const chosen = objects.find(object => object.id === chosenId)
  const active = claims.find(claim => claim.id === activeId)
  const review = claims.find(claim => claim.id === reviewId)
  const reviewedObject = objects.find(object => object.id === review?.objectId)
  const sensitive = isSensitiveSearch(filters)
  const unavailable = scenario === 'offline' && !manual
  const results = scenario === 'none' || unavailable ? [] : findDemoObjects(objects, claims, filters, manual)
  const pendingCount = claims.filter(claim => claim.status === 'pending').length
  const availableObjects = objects.filter(object => object.category !== 'sensitive' && !objectUnavailable(claims, object.id, review?.id))
  const reviewConflict = !!reviewedObject && objectUnavailable(claims, reviewedObject.id, review?.id)
  const currentScreen = role === 'citizen' ? screenNames[screen] : agentView === 'inventory' ? adding ? 'A6 · Nouvel objet' : 'A5 · Inventaire' : !review ? 'A1 · Demandes reçues' : review.status === 'approved' ? 'A3 · Retrait autorisé' : review.status === 'returned' ? 'A4 · Remise enregistrée' : 'A2 · Examen des indices'
  const filteredClaims = claims.filter(claim => requestFilter === 'all' || claim.status === requestFilter)
  const filteredInventory = objects.filter(object => `${object.id} ${object.title}`.toLocaleLowerCase('fr').includes(inventoryQuery.toLocaleLowerCase('fr')))

  function clearMessages() { setErrors({}); setNotice('') }
  function go(next: Screen) { setScreen(next); clearMessages() }
  function switchRole(next: 'citizen' | 'agent') { setRole(next); clearMessages() }
  function chooseScenario(value: string) {
    setScenario(value); setManual(false); go('search')
    setFilters({ ...defaultFilters, description: value === 'none' ? 'Un chapeau vert perdu dans le bus' : value === 'sensitive' ? 'Ma carte d’identité' : defaultFilters.description, category: value === 'sensitive' ? 'sensitive' : 'all' })
  }
  function startClaim(id: string | null) { setChosenId(id); setProof(''); go('claim') }
  function openReview(id: string) { setReviewId(id); setAgentMessage(''); setEvidenceChecked(false); setHandoverChecked(false); clearMessages() }
  function openTracking(id: string) { setActiveId(id); setAddition(''); go('tracking') }
  function search(event: React.FormEvent) {
    event.preventDefault()
    const next: Errors = {}
    if (!manual && filters.description.trim().length < 3) next.description = 'Décrivez votre objet en quelques mots.'
    if (filters.from && filters.to && filters.from > filters.to) next.dates = 'La fin de la période doit se situer après son début.'
    if (Object.keys(next).length) { setErrors(next); return }
    go('results')
  }
  function submitClaim(event: React.FormEvent) {
    event.preventDefault()
    const next: Errors = {}
    if (proof.trim().length < 10) next.proof = 'Donnez un détail distinctif d’au moins 10 caractères.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Indiquez une adresse de courriel valide, fictive pour cet essai.'
    if (chosenId && objectUnavailable(claims, chosenId)) next.general = 'Cet objet n’est plus disponible. Revenez aux résultats.'
    if (Object.keys(next).length) { setErrors(next); return }
    const id = `D-${String(++sequence.current).padStart(3, '0')}`
    const claim: DemoClaim = { id, objectId: chosenId, description: filters.description.trim() || 'Recherche par filtres', proof: proof.trim(), email: email.trim(), status: 'pending', message: '', history: [{ title: 'Demande reçue', detail: 'Vos indices ont été transmis au bureau. Un agent doit les examiner.' }] }
    setClaims(current => [...current, claim]); setActiveId(id); setReviewId(null); setProof(''); go('tracking')
  }
  function decide(status: ClaimStatus) {
    if (!review) return
    try {
      const next = changeClaim(claims, objects, review.id, status, agentMessage, status === 'returned' ? handoverChecked : evidenceChecked)
      setClaims(next); setEvidenceChecked(false); setHandoverChecked(false); setErrors({})
      setNotice(status === 'returned' ? 'Remise enregistrée. L’objet reste dans l’historique et n’apparaît plus dans la recherche.' : 'Le suivi de l’habitant est à jour.')
    } catch (error) { setErrors({ [status === 'information' || status === 'rejected' ? 'message' : 'general']: (error as Error).message }) }
  }
  function loadExample() {
    const object = objects.find(item => item.category === 'audio' && !objectUnavailable(claims, item.id))
    if (!object) { setNotice('Les objets d’exemple sont déjà attribués. Réinitialisez la démo pour recommencer.'); return }
    const id = `D-${String(++sequence.current).padStart(3, '0')}`
    setClaims(current => [...current, { id, objectId: object.id, description: 'Des écouteurs blancs perdus dans le tram', proof: object.privateDescription, email: 'lea@example.test', status: 'pending', message: '', history: [{ title: 'Demande reçue', detail: 'Exemple fictif prêt à examiner.' }] }])
    setActiveId(id); setRole('agent'); setAgentView('requests'); setRequestFilter('all'); openReview(id)
  }
  function addObject(event: React.FormEvent) {
    event.preventDefault()
    const next: Errors = {}
    if (newTitle.trim().length < 3) next.newTitle = 'Donnez un nom à cet objet.'
    if (newCategory !== 'sensitive' && newPublic.trim().length < 5) next.newPublic = 'Décrivez l’objet sans dévoiler ses signes distinctifs.'
    if (newPrivate.trim().length < 5) next.newPrivate = 'Ajoutez un indice réservé aux agents.'
    if (!newStorage.trim()) next.newStorage = 'Précisez où l’objet est rangé.'
    if (!newDate) next.newDate = 'Indiquez la date de réception.'
    if (Object.keys(next).length) { setErrors(next); return }
    const id = `PDV-N${++sequence.current}`
    setObjects(current => [...current, { id, category: newCategory, title: newTitle.trim(), place: newTransport === 'tram' ? 'Tram · bureau central' : newTransport === 'bus' ? 'Bus · bureau central' : 'Bureau central', transport: newTransport, foundOn: newDate, date: new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${newDate}T12:00:00Z`)), publicDescription: newCategory === 'sensitive' ? '' : newPublic.trim(), privateDescription: newPrivate.trim(), storage: newStorage.trim() }])
    setAdding(false); setNewTitle(''); setNewPublic(''); setNewPrivate(''); setNewStorage(''); setInventoryQuery(''); setErrors({})
    setNotice(newCategory === 'sensitive' ? 'Objet enregistré dans le circuit interne. Aucune fiche publique n’est créée.' : 'Fiche enregistrée. L’objet peut maintenant être trouvé par la recherche.')
  }
  function fieldProps(name: string) { return { 'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `pdvp-error-${name}` : undefined } }

  return <div className="pdvp-demo">
    <div className="pdvp-demo-controls pdvc-no-print">
      <div className="pdvp-role-switch" aria-label="Vue de la démonstration">
        <button type="button" aria-pressed={role === 'citizen'} onClick={() => switchRole('citizen')}><UserRound size={17} aria-hidden="true" />Côté habitant</button>
        <button type="button" aria-pressed={role === 'agent'} onClick={() => switchRole('agent')}><ClipboardList size={17} aria-hidden="true" />Côté agent <span>{pendingCount}</span></button>
      </div>
      <div className="pdvp-demo-options">
        {role === 'citizen' && <label>Situation<select value={scenario} onChange={event => chooseScenario(event.target.value)}><option value="match">Objets ressemblants</option><option value="none">Aucun résultat</option><option value="offline">IA indisponible</option><option value="sensitive">Objet sensible</option></select></label>}
        <button type="button" className="pdvp-text-button" onClick={loadExample}>Charger un exemple côté agent <ArrowRight size={15} aria-hidden="true" /></button>
      </div>
    </div>
    <div className="pdvp-demo-caption"><span>Prototype · données fictives · aucun envoi</span><span aria-live="polite">{currentScreen}</span></div>
    <div className="pdvp-app">
      <header className="pdvp-header">
        <div className="pdvp-brand"><span className="pdvp-brand-mark"><Search size={24} aria-hidden="true" /></span><strong>perdu de vue<span>Le bureau des objets trouvés</span></strong></div>
        <span className="pdvp-service-label">{role === 'agent' ? <><LockKeyhole size={15} aria-hidden="true" />Espace agent · simulation</> : 'Métropole · Bus & tram'}</span>
      </header>
      <div ref={panel} tabIndex={-1} className="pdvp-screen-region" aria-label={currentScreen}>
      {role === 'citizen' ? <div className="pdvp-citizen">
        <nav className="pdvp-citizen-nav" aria-label="Parcours habitant"><button type="button" aria-current={screen !== 'tracking' ? 'page' : undefined} onClick={() => go('search')}>Retrouver un objet</button><button type="button" aria-current={screen === 'tracking' ? 'page' : undefined} onClick={() => go('tracking')}>Mes demandes <span>{claims.length}</span></button></nav>
        {screen !== 'tracking' && <ol className="pdvp-steps" aria-label="Étapes du parcours">{[['search', 'Décrire'], ['results', 'Comparer'], ['claim', 'Demander']].map(([id, label], index) => <li key={id} aria-current={screen === id || (screen === 'object' && id === 'results') ? 'step' : undefined}><span>{index + 1}</span>{label}</li>)}</ol>}

        {screen === 'search' && <div className="pdvp-search-layout">
          <div className="pdvp-search-intro"><h3>On a peut-être<br />ce que vous cherchez.</h3><p>Un trajet, une distraction, un objet oublié. Décrivez-le : le bureau vous aide à retrouver sa trace.</p><div className="pdvp-search-objects" aria-hidden="true"><Headphones size={37} strokeWidth={1.25} /><KeyRound size={37} strokeWidth={1.25} /><Backpack size={37} strokeWidth={1.25} /></div><p className="pdvp-reassurance"><ShieldCheck size={20} aria-hidden="true" />Vous seul connaissez certains détails. Gardez-les pour l’agent qui vérifiera votre demande.</p><p className="pdvp-help">Dans cet exemple, les objets ont été reçus les 6 et 7 octobre 2026.</p></div>
          <form noValidate className="pdvp-form pdvp-search-form" onSubmit={search}>
            <label htmlFor="lost-description">Qu’avez-vous perdu ?</label><textarea id="lost-description" maxLength={600} value={filters.description} onChange={event => setFilters(current => ({ ...current, description: event.target.value }))} rows={3} {...fieldProps('description')} /><FieldError name="description" errors={errors} />
            <div className="pdvp-field-pair"><div><label htmlFor="lost-category">Type d’objet</label><select id="lost-category" value={filters.category} onChange={event => setFilters(current => ({ ...current, category: event.target.value as SearchFilters['category'] }))}><option value="all">Tous les types</option><option value="audio">Écouteurs / audio</option><option value="bag">Sac</option><option value="keys">Clés</option><option value="sensitive">Document sensible</option></select></div><div><label htmlFor="lost-place">Où l’avez-vous perdu ?</label><select id="lost-place" value={filters.place} onChange={event => setFilters(current => ({ ...current, place: event.target.value as SearchFilters['place'] }))}><option value="all">Bus ou tram</option><option value="tram">Dans le tram</option><option value="bus">Dans le bus</option></select></div></div>
            <details className="pdvp-date-filter"><summary><SlidersHorizontal size={15} aria-hidden="true" />Préciser la période de réception</summary><div className="pdvp-field-pair"><div><label htmlFor="lost-from">Reçu à partir du</label><input id="lost-from" type="date" value={filters.from} onChange={event => setFilters(current => ({ ...current, from: event.target.value }))} {...fieldProps('dates')} /></div><div><label htmlFor="lost-to">Jusqu’au</label><input id="lost-to" type="date" value={filters.to} onChange={event => setFilters(current => ({ ...current, to: event.target.value }))} {...fieldProps('dates')} /></div></div></details><FieldError name="dates" errors={errors} />
            <button className="pdvp-primary" type="submit"><Search size={18} aria-hidden="true" />Chercher mon objet<ArrowRight size={17} aria-hidden="true" /></button><p className="pdvp-help">La recherche propose des ressemblances. Un agent confirme chaque restitution.</p>
          </form>
        </div>}

        {screen === 'results' && <div className="pdvp-results">
          <button type="button" className="pdvp-back" onClick={() => go('search')}><ArrowLeft size={16} aria-hidden="true" />Modifier ma recherche</button>
          {sensitive ? <div className="pdvp-empty"><LockKeyhole size={34} aria-hidden="true" /><h3>Votre document suit un circuit particulier.</h3><p>Les documents d’identité et cartes bancaires ne sont jamais affichés dans la recherche. Le bureau vous indiquera la démarche adaptée.</p><details><summary>Comment contacter le service</summary><p>Rendez-vous au bureau central pendant ses permanences. Les coordonnées et horaires seront fournis par la Métropole dans le service final.</p></details></div>
          : unavailable ? <div className="pdvp-empty"><Search size={34} aria-hidden="true" /><h3>L’aide à la recherche est indisponible.</h3><p>Continuez avec le type d’objet, le lieu et la période déjà renseignés. Vous pourrez consulter les fiches sans l’aide de l’IA.</p><button type="button" className="pdvp-primary" onClick={() => setManual(true)}>Rechercher avec mes filtres<ArrowRight size={16} aria-hidden="true" /></button></div>
          : <><div className="pdvp-results-heading"><div><h3>{results.length ? `${results.length} objet${results.length > 1 ? 's' : ''} à regarder.` : 'Aucun objet pour le moment.'}</h3><p>{manual ? 'Recherche par filtres, sans aide de l’IA.' : 'Des ressemblances à vérifier, jamais une preuve de propriété.'}</p></div><span className="pdvp-search-summary">{filters.place === 'all' ? 'Bus & tram' : filters.place === 'tram' ? 'Tram' : 'Bus'}{(filters.from || filters.to) && ' · période précisée'}</span></div>
            {results.length ? <><div className="pdvp-results-grid">{results.map(object => <article key={object.id} className="pdvp-object"><ObjectPicture category={object.category} /><div className="pdvp-object-body"><span className="pdvp-object-reference num">{object.id}</span><h4>{object.title}</h4><p>{object.publicDescription}</p><p className="pdvp-object-location"><MapPin size={15} aria-hidden="true" />{object.place}</p><p className="pdvp-help">Reçu le {object.date.toLocaleLowerCase('fr')}</p><button type="button" className="pdvp-secondary" onClick={() => { setChosenId(object.id); go('object') }} aria-label={`Voir la fiche ${object.id}`}>Voir la fiche<ArrowRight size={16} aria-hidden="true" /></button></div></article>)}</div><div className="pdvp-results-bottom"><p>Aucun de ces objets ne vous correspond ?</p><button type="button" className="pdvp-text-button" onClick={() => startClaim(null)}>Laisser une déclaration<ArrowRight size={15} aria-hidden="true" /></button></div></>
            : <div className="pdvp-empty"><Search size={32} aria-hidden="true" /><p>Votre objet n’a peut-être pas encore été transmis. Vérifiez vos filtres ou laissez une déclaration pour que les agents disposent de vos indices.</p><button type="button" className="pdvp-primary" onClick={() => startClaim(null)}>Laisser une déclaration<ArrowRight size={16} aria-hidden="true" /></button></div>}
          </>}
        </div>}

        {screen === 'object' && chosen && <><button type="button" className="pdvp-back" onClick={() => go('results')}><ArrowLeft size={16} aria-hidden="true" />Retour aux résultats</button><div className="pdvp-object-detail"><ObjectPicture category={chosen.category} /><div><span className="pdvp-object-reference num">{chosen.id}</span><h3>{chosen.title}</h3><p>{chosen.publicDescription}</p><dl className="pdvp-object-facts"><div><dt>Lieu de collecte</dt><dd>{chosen.place}</dd></div><div><dt>Réception au bureau</dt><dd>{chosen.date}</dd></div><div><dt>Retrait</dt><dd>Au guichet, après vérification</dd></div></dl><p className="pdvp-reassurance"><LockKeyhole size={19} aria-hidden="true" />Certains détails restent privés pour reconnaître le propriétaire.</p><button type="button" className="pdvp-primary" onClick={() => startClaim(chosen.id)}>Cet objet pourrait être le mien<ArrowRight size={17} aria-hidden="true" /></button></div></div></>}

        {screen === 'claim' && <><button type="button" className="pdvp-back" onClick={() => go(chosen ? 'object' : 'results')}><ArrowLeft size={16} aria-hidden="true" />{chosen ? 'Retour à la fiche' : 'Retour aux résultats'}</button><div className="pdvp-claim-layout"><div><h3>{chosen ? 'Ce qui le rend reconnaissable.' : 'Laissons une trace de votre perte.'}</h3><p>{chosen ? 'Une inscription, un accessoire, une marque particulière… Un détail que vous seul connaissez aidera l’agent à vérifier.' : 'Décrivez les détails de votre objet. Votre déclaration restera disponible pour le travail des agents.'}</p>{chosen && <div className="pdvp-selected-object"><ObjectPicture category={chosen.category} compact /><div><strong>{chosen.title}</strong><span className="num">{chosen.id}</span></div></div>}<p className="pdvp-reassurance"><LockKeyhole size={19} aria-hidden="true" />Vos indices et votre courriel sont réservés au bureau.</p></div><form noValidate className="pdvp-form" onSubmit={submitClaim}><label htmlFor="claim-proof">Votre détail distinctif</label><textarea id="claim-proof" rows={4} value={proof} maxLength={1000} onChange={event => setProof(event.target.value)} placeholder="Une inscription, le contenu du sac, une marque particulière…" {...fieldProps('proof')} /><FieldError name="proof" errors={errors} /><label htmlFor="claim-email">Votre courriel</label><input id="claim-email" type="email" value={email} maxLength={254} onChange={event => setEmail(event.target.value)} {...fieldProps('email')} /><FieldError name="email" errors={errors} /><p className="pdvp-help">Utilisez une adresse fictive pour cet essai. Aucun courriel ni document personnel n’est envoyé.</p><button className="pdvp-primary" type="submit">Transmettre ma demande<ArrowRight size={17} aria-hidden="true" /></button></form></div></>}

        {screen === 'tracking' && <div className="pdvp-tracking-layout"><aside className="pdvp-my-claims"><h3>Mes demandes</h3>{claims.length ? claims.map(claim => <button type="button" key={claim.id} aria-pressed={activeId === claim.id} onClick={() => openTracking(claim.id)}><span className="num">{claim.id}</span><strong>{claim.description}</strong><Status value={claim.status} /></button>) : <p>Aucune demande pour le moment. Commencez par chercher votre objet.</p>}</aside><div className="pdvp-tracking">
          {!active ? <div className="pdvp-empty"><ClipboardList size={32} aria-hidden="true" /><h3>Vos démarches, au même endroit.</h3><p>{claims.length ? 'Sélectionnez une demande pour lire la réponse du bureau.' : 'Vous retrouverez ici les réponses et les prochaines étapes.'}</p><button type="button" className="pdvp-primary" onClick={() => go('search')}>Chercher un objet<ArrowRight size={16} aria-hidden="true" /></button></div>
          : <><div className="pdvp-tracking-heading"><span className="pdvp-status-icon">{active.status === 'returned' ? <CheckCircle2 size={27} aria-hidden="true" /> : <Clock3 size={27} aria-hidden="true" />}</span><div><span className="num">{active.id}</span><h3>{statusLabels[active.status]}</h3></div></div><p>{active.description}</p><div className="pdvp-tracking-message"><strong>{active.status === 'pending' ? 'Le bureau a reçu votre demande.' : 'La réponse du bureau'}</strong><p>{active.message || 'Un agent va comparer vos indices à sa fiche interne. La recherche seule ne permet pas d’attribuer un objet.'}</p></div>
            {active.status === 'information' && <form noValidate className="pdvp-form" onSubmit={event => { event.preventDefault(); try { setClaims(changeClaim(claims, objects, active.id, 'pending', addition)); setAddition(''); setErrors({}); setNotice('Votre précision a été transmise à l’agent.') } catch (error) { setErrors({ addition: (error as Error).message }) } }}><label htmlFor="claim-addition">Ajouter une précision</label><textarea id="claim-addition" rows={3} value={addition} maxLength={1000} onChange={event => setAddition(event.target.value)} {...fieldProps('addition')} /><FieldError name="addition" errors={errors} /><button className="pdvp-primary" type="submit">Envoyer la précision<ArrowRight size={16} aria-hidden="true" /></button></form>}
            {active.status === 'approved' && <div className="pdvp-next-step"><h4>Préparer votre venue</h4><p>Conservez la référence <strong>{active.id}</strong>. Le bureau central effectue le dernier contrôle au guichet avant la remise.</p><p>Les horaires et pièces à présenter seront précisés par le service dans la version finale.</p></div>}
            {active.status === 'rejected' && <button type="button" className="pdvp-secondary" onClick={() => go('search')}>Reprendre ma recherche<ArrowRight size={16} aria-hidden="true" /></button>}
            <details className="pdvp-history-disclosure" open><summary>Historique de la demande</summary><History claim={active} /></details><p className="pdvp-help">Dans le service final, ce suivi est accessible depuis un lien individuel envoyé par courriel.</p><button type="button" className="pdvp-text-button pdvc-no-print" onClick={() => { setRole('agent'); setAgentView('requests'); setRequestFilter('all'); openReview(active.id) }}>Passer côté agent pour cette demande<ArrowRight size={15} aria-hidden="true" /></button>
          </>}
        </div></div>}
      </div> : <div className="pdvp-agent">
        <nav className="pdvp-agent-nav" aria-label="Outils de l’agent"><button type="button" aria-pressed={agentView === 'requests'} onClick={() => { setAgentView('requests'); clearMessages() }}><ClipboardList size={17} aria-hidden="true" />Demandes <span>{claims.length}</span></button><button type="button" aria-pressed={agentView === 'inventory'} onClick={() => { setAgentView('inventory'); clearMessages() }}><Backpack size={17} aria-hidden="true" />Inventaire <span>{objects.length}</span></button></nav>
        {agentView === 'requests' ? <div className="pdvp-review-layout"><aside className="pdvp-request-list"><h3>Demandes reçues</h3><label className="pdvp-filter-label" htmlFor="request-status">Afficher</label><select id="request-status" value={requestFilter} onChange={event => { setRequestFilter(event.target.value); setReviewId(null); clearMessages() }}><option value="all">Toutes les demandes</option>{(Object.keys(statusLabels) as ClaimStatus[]).map(status => <option value={status} key={status}>{statusLabels[status]}</option>)}</select>{filteredClaims.length ? filteredClaims.map(claim => <button type="button" key={claim.id} aria-pressed={review?.id === claim.id} onClick={() => openReview(claim.id)}><span className="num">{claim.id}</span><strong>{claim.description}</strong><Status value={claim.status} /></button>) : <p className="pdvp-list-empty">{claims.length ? 'Aucune demande avec ce statut.' : 'Les demandes apparaîtront ici après leur dépôt côté habitant.'}</p>}</aside><div className="pdvp-review">
          {!review ? <div className="pdvp-empty"><ClipboardList size={36} aria-hidden="true" /><h3>{claims.length ? 'Choisissez une demande.' : 'Le bureau est prêt.'}</h3><p>Vous pourrez comparer les indices privés, échanger avec la personne puis autoriser le retrait.</p>{!claims.length && <button type="button" className="pdvp-secondary" onClick={loadExample}>Charger une demande d’exemple<ArrowRight size={16} aria-hidden="true" /></button>}</div>
          : <><div className="pdvp-review-heading"><div><span className="num">{review.id}</span><h3>Examiner les indices.</h3></div><Status value={review.status} /></div><div className="pdvp-comparison"><section><h4><UserRound size={16} aria-hidden="true" />Ce que la personne indique</h4><p>{review.proof}</p><p className="pdvp-help">Contact fictif : {review.email}</p></section><section><h4><LockKeyhole size={16} aria-hidden="true" />Fiche réservée aux agents</h4>{reviewedObject ? <><p>{reviewedObject.privateDescription}</p><p className="pdvp-help">{reviewedObject.id} · {reviewedObject.storage}</p></> : <p>Aucun objet associé à cette déclaration.</p>}{['pending', 'information'].includes(review.status) && <label htmlFor="review-object">{reviewedObject ? 'Objet à comparer' : 'Associer un objet disponible'}<select id="review-object" value={review.objectId ?? ''} onChange={event => { setClaims(current => current.map(claim => claim.id === review.id ? { ...claim, objectId: event.target.value || null } : claim)); setEvidenceChecked(false); clearMessages() }}><option value="">Choisir un objet</option>{reviewedObject && reviewConflict && <option value={reviewedObject.id}>{reviewedObject.id} · Indisponible</option>}{availableObjects.map(object => <option key={object.id} value={object.id}>{object.id} · {object.title}</option>)}</select></label>}</section></div>
            {reviewConflict && <p className="pdvp-inline-warning" role="status">Cet objet est réservé ou a déjà été remis pour une autre demande. Il ne peut pas être attribué une seconde fois.</p>}
            {['pending', 'information'].includes(review.status) && <div className="pdvp-decision"><h4>Quelle suite donner ?</h4><p>Si un indice manque, demandez-le avant de confirmer.</p><label htmlFor="agent-message">Message pour l’habitant</label><textarea id="agent-message" value={agentMessage} maxLength={1000} rows={2} onChange={event => setAgentMessage(event.target.value)} placeholder="Expliquez ce qu’il manque ou pourquoi la demande ne peut pas être confirmée." {...fieldProps('message')} /><FieldError name="message" errors={errors} /><div className="pdvp-actions"><button type="button" className="pdvp-secondary" onClick={() => decide('information')}>Demander une précision</button><button type="button" className="pdvp-text-button" onClick={() => decide('rejected')}>Refuser en expliquant</button></div><div className="pdvp-approval"><label className="pdvc-check"><input type="checkbox" checked={evidenceChecked} onChange={event => setEvidenceChecked(event.target.checked)} />J’ai comparé les indices. Ils sont suffisants pour autoriser le retrait.</label><button type="button" className="pdvp-primary" disabled={!evidenceChecked || !reviewedObject || reviewConflict} onClick={() => decide('approved')}><ShieldCheck size={17} aria-hidden="true" />Autoriser le retrait</button></div></div>}
            {review.status === 'approved' && <div className="pdvp-decision"><h4>Dernier contrôle, au guichet.</h4><p>La personne présente sa référence. Vérifiez l’objet et les éléments prévus par la procédure du bureau avant de le remettre.</p><div className="pdvp-approval"><label className="pdvc-check"><input type="checkbox" checked={handoverChecked} onChange={event => setHandoverChecked(event.target.checked)} />Le contrôle au guichet est effectué pour la demande {review.id}.</label><button type="button" className="pdvp-primary" disabled={!handoverChecked || reviewConflict} onClick={() => decide('returned')}><Check size={17} aria-hidden="true" />Enregistrer la remise</button></div></div>}
            {review.status === 'returned' && <div className="pdvp-next-step"><CheckCircle2 size={24} aria-hidden="true" /><h4>L’objet a retrouvé son propriétaire.</h4><p>La remise est enregistrée. La fiche est conservée dans l’historique et retirée des résultats.</p></div>}
            {review.status === 'rejected' && <div className="pdvp-next-step"><h4>Demande non confirmée</h4><p>{review.message}</p><p>L’objet reste disponible pour les autres demandes.</p></div>}
            <details className="pdvp-history-disclosure"><summary>Consulter l’historique</summary><History claim={review} /></details><button type="button" className="pdvp-text-button pdvc-no-print" onClick={() => { setRole('citizen'); openTracking(review.id) }}>Voir la réponse côté habitant<ArrowRight size={15} aria-hidden="true" /></button>
          </>}
        </div></div> : <div className="pdvp-inventory"><div className="pdvp-inventory-heading"><div><h3>{adding ? 'Enregistrer un objet.' : 'Les objets du bureau.'}</h3><p>Une description pour la recherche. Des indices et un emplacement réservés aux agents.</p></div><button type="button" className={adding ? 'pdvp-secondary' : 'pdvp-primary'} onClick={() => { setAdding(value => !value); clearMessages() }}>{adding ? <ArrowLeft size={17} aria-hidden="true" /> : <Plus size={17} aria-hidden="true" />}{adding ? 'Retour à l’inventaire' : 'Enregistrer un objet'}</button></div>
          {adding ? <form noValidate className="pdvp-form pdvp-add-object" onSubmit={addObject}><div className="pdvp-field-pair"><div><label htmlFor="object-title">Nom de l’objet</label><input id="object-title" maxLength={100} value={newTitle} onChange={event => setNewTitle(event.target.value)} {...fieldProps('newTitle')} /><FieldError name="newTitle" errors={errors} /></div><div><label htmlFor="object-category">Catégorie</label><select id="object-category" value={newCategory} onChange={event => setNewCategory(event.target.value as DemoObject['category'])}><option value="keys">Clés</option><option value="audio">Audio</option><option value="bag">Sac</option><option value="sensitive">Document sensible · circuit interne</option></select></div></div>
            {newCategory !== 'sensitive' ? <><label htmlFor="object-public">Description visible dans la recherche</label><textarea id="object-public" value={newPublic} maxLength={400} rows={2} onChange={event => setNewPublic(event.target.value)} {...fieldProps('newPublic')} /><FieldError name="newPublic" errors={errors} /></> : <p className="pdvp-inline-warning"><LockKeyhole size={17} aria-hidden="true" />Cette fiche restera interne, sans publication dans la recherche.</p>}
            <div className="pdvp-field-pair"><div><label htmlFor="object-place">Collecté dans</label><select id="object-place" value={newTransport} onChange={event => setNewTransport(event.target.value as DemoObject['transport'])}><option value="bus">Un bus</option><option value="tram">Un tram</option><option value="central">Le bureau central</option></select></div><div><label htmlFor="object-date">Reçu le</label><input id="object-date" type="date" value={newDate} onChange={event => setNewDate(event.target.value)} {...fieldProps('newDate')} /><FieldError name="newDate" errors={errors} /></div></div>
            <fieldset className="pdvp-private-fields"><legend><LockKeyhole size={16} aria-hidden="true" />Réservé aux agents</legend><label htmlFor="object-private">Détail distinctif ou consigne interne</label><textarea id="object-private" value={newPrivate} maxLength={500} rows={2} onChange={event => setNewPrivate(event.target.value)} {...fieldProps('newPrivate')} /><FieldError name="newPrivate" errors={errors} /><label htmlFor="object-storage">Emplacement de rangement</label><input id="object-storage" value={newStorage} maxLength={100} onChange={event => setNewStorage(event.target.value)} placeholder="Ex. Armoire A · bac 14" {...fieldProps('newStorage')} /><FieldError name="newStorage" errors={errors} /></fieldset><p className="pdvp-help">Le prototype utilise des pictogrammes. L’ajout de photos fait partie du service à réaliser.</p><button className="pdvp-primary" type="submit">Enregistrer la fiche<Check size={17} aria-hidden="true" /></button></form>
          : <><label className="pdvp-inventory-search">Rechercher dans l’inventaire<input type="search" value={inventoryQuery} onChange={event => setInventoryQuery(event.target.value)} placeholder="Nom ou référence" /></label><div className="pdvc-table-scroll"><table className="pdvc-table pdvp-inventory-table"><thead><tr><th>Objet et indices internes</th><th>Référence</th><th>Rangement</th><th>Statut</th></tr></thead><tbody>{filteredInventory.map(object => <tr key={object.id}><th scope="row"><div className="pdvp-inventory-object"><ObjectPicture category={object.category} compact /><div>{object.title}<small>{object.privateDescription}</small></div></div></th><td className="num">{object.id}</td><td>{object.storage}</td><td>{claims.some(claim => claim.objectId === object.id && claim.status === 'returned') ? 'Remis · historique' : objectUnavailable(claims, object.id) ? 'Retrait autorisé · réservé' : object.category === 'sensitive' ? 'Interne uniquement' : 'Disponible'}</td></tr>)}</tbody></table></div>{!filteredInventory.length && <p className="pdvp-list-empty">Aucun objet avec ce nom ou cette référence.</p>}</>}
        </div>}
      </div>}
      {errors.general && <p className="pdvp-error" role="alert">{errors.general}</p>}
      {notice && <p className="pdvp-notice" role="status">{notice}</p>}
      </div>
      <footer className="pdvp-footer"><ShieldCheck size={16} aria-hidden="true" /><span>La recherche vous oriente. Un agent vérifie. La remise se fait au guichet.</span></footer>
    </div>
  </div>
}
