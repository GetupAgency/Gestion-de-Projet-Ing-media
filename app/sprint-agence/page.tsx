import { redirect } from 'next/navigation'

/** L’entrée de l’ancien sprint mène désormais à la mission de cette année. */
export default function SprintAgencePage() {
  redirect('/mission')
}
