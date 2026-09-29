'use client'

import { useState } from 'react'

export default function TeacherAccess() {
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  return <form className="pdvc-login" onSubmit={async event => {
    event.preventDefault(); setBusy(true); setError('')
    try {
      const response = await fetch('/api/teacher/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) })
      if (!response.ok) { setError('Le mot de passe n’a pas été reconnu. Réessayez.'); setBusy(false); return }
      window.location.reload()
    } catch { setError('La connexion au serveur a échoué. Réessayez.'); setBusy(false) }
  }}>
    <label htmlFor="correction-password">Mot de passe enseignant</label>
    <input id="correction-password" type="password" value={password} onChange={event => setPassword(event.target.value)} autoComplete="current-password" required aria-describedby={error ? 'correction-login-error' : undefined} />
    <button type="submit" className="btn btn--primary" disabled={busy}>{busy ? 'Vérification…' : 'Ouvrir la correction'}</button>
    {error && <p role="alert" id="correction-login-error">{error}</p>}
  </form>
}
