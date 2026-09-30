import type { DemoObject } from './types'

export type ClaimStatus = 'pending' | 'information' | 'approved' | 'rejected' | 'returned'
export type ClaimEvent = { title: string; detail: string }
export type DemoClaim = {
  id: string; objectId: string | null; description: string; proof: string; email: string
  status: ClaimStatus; message: string; history: ClaimEvent[]
}
export type SearchFilters = {
  description: string; category: DemoObject['category'] | 'all'
  place: 'all' | 'bus' | 'tram'; from: string; to: string
}
export const statusLabels: Record<ClaimStatus, string> = {
  pending: 'En cours d’examen', information: 'Précision attendue', approved: 'Retrait autorisé',
  rejected: 'Demande non confirmée', returned: 'Objet remis',
}
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
export function isSensitiveSearch(filters: SearchFilters) {
  return filters.category === 'sensitive' || /identite|bancaire|passeport/.test(normalize(filters.description))
}
export function objectUnavailable(claims: DemoClaim[], id: string, exceptClaim?: string) {
  return claims.some(claim => claim.id !== exceptClaim && claim.objectId === id && ['approved', 'returned'].includes(claim.status))
}
export function findDemoObjects(objects: DemoObject[], claims: DemoClaim[], filters: SearchFilters, manual: boolean) {
  if (isSensitiveSearch(filters)) return []
  const text = normalize(filters.description)
  const inferred = /ecouteur|airpod|casque/.test(text) ? 'audio' : /sac/.test(text) ? 'bag' : /cle/.test(text) ? 'keys' : null
  const category = filters.category !== 'all' ? filters.category : manual ? null : inferred
  if (!manual && !category) return []
  return objects.filter(object => object.category !== 'sensitive'
    && !objectUnavailable(claims, object.id)
    && (!category || object.category === category)
    && (filters.place === 'all' || object.transport === filters.place)
    && (!filters.from || object.foundOn >= filters.from)
    && (!filters.to || object.foundOn <= filters.to))
}

/** Les transitions de la démo restent locales ; ce n’est pas un contrôle d’accès de production. */
export function changeClaim(
  claims: DemoClaim[], objects: DemoObject[], id: string,
  action: ClaimStatus, message: string, checked = false,
): DemoClaim[] {
  const claim = claims.find(item => item.id === id)
  if (!claim) throw new Error('Cette demande est introuvable.')
  const object = objects.find(item => item.id === claim.objectId)
  const closed = ['rejected', 'returned'].includes(claim.status)
  if (closed) throw new Error('Cette demande est déjà terminée.')
  let detail = message.trim()
  if (action === 'pending') {
    if (claim.status !== 'information' || detail.length < 10) throw new Error('Ajoutez une précision d’au moins 10 caractères.')
  } else if (action === 'returned') {
    if (claim.status !== 'approved' || !checked || !object || objectUnavailable(claims, object.id, id)) throw new Error('Confirmez le contrôle au guichet avant la remise.')
    detail = 'Le contrôle au guichet est terminé. L’objet a été remis à son propriétaire.'
  } else {
    if (!['pending', 'information'].includes(claim.status)) throw new Error('Cette demande a déjà été autorisée.')
    if (action === 'approved') {
      if (!checked || !object || object.category === 'sensitive' || objectUnavailable(claims, object.id, id)) throw new Error('Vérifiez les indices et choisissez un objet encore disponible.')
      detail = 'Les indices ont été vérifiés par un agent. Vous pouvez préparer votre venue au guichet.'
    } else if (detail.length < 5) throw new Error('Expliquez la précision attendue ou la raison du refus.')
  }
  return claims.map(item => item.id !== id ? item : {
    ...item, status: action,
    proof: action === 'pending' ? `${item.proof}\nPrécision : ${detail}` : item.proof,
    message: action === 'pending' ? '' : detail,
    history: [...item.history, { title: action === 'pending' ? 'Précision transmise' : statusLabels[action], detail }],
  })
}
