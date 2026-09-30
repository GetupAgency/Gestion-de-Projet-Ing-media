'use client'

import { useEffect, useId, useState } from 'react'
import { Check, Copy, Download, Minus, Plus, RotateCcw } from 'lucide-react'
import './screen-flow.css'

let renderer: Promise<typeof import('mermaid')['default']> | undefined
function loadRenderer() {
  renderer ??= import('mermaid').then(({ default: mermaid }) => {
    mermaid.initialize({
      startOnLoad: false, securityLevel: 'strict', theme: 'base',
      fontFamily: 'Arial, sans-serif',
      themeVariables: { primaryColor: '#eaf2ef', primaryTextColor: '#173e39', primaryBorderColor: '#173e39', lineColor: '#59645f', secondaryColor: '#f0f1f5', tertiaryColor: '#ffffff', clusterBkg: '#ffffff', clusterBorder: '#c7d5d0', edgeLabelBackground: '#ffffff', fontSize: '15px' },
      flowchart: { htmlLabels: false, curve: 'linear', nodeSpacing: 24, rankSpacing: 42, padding: 14, useMaxWidth: true },
    })
    return mermaid
  }).catch(error => { renderer = undefined; throw error })
  return renderer
}

export default function ScreenFlow({ flows }: { flows: { title: string; description: string; source: string }[] }) {
  const [selected, setSelected] = useState(0)
  const { source, description } = flows[selected]
  const id = `pdv-flow-${useId().replace(/:/g, '')}`
  const [svg, setSvg] = useState('')
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [zoom, setZoom] = useState(100)
  const [copyStatus, setCopyStatus] = useState('')
  useEffect(() => {
    let cancelled = false
    setFailed(false)
    setSvg('')
    async function render() {
      try {
        const mermaid = await loadRenderer()
        await document.fonts.ready
        const result = await mermaid.render(id, source)
        if (!cancelled) setSvg(result.svg)
      } catch {
        if (!cancelled) setFailed(true)
      }
    }
    void render()
    return () => { cancelled = true }
  }, [id, source, attempt])

  async function copy() {
    try { await navigator.clipboard.writeText(source); setCopyStatus('Code Mermaid copié.') }
    catch { setCopyStatus('Sélectionnez le code ci-dessous pour le copier.') }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }))
    const link = document.createElement('a'); link.href = url; link.download = `perdu-de-vue-parcours-${selected + 1}.svg`; link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return <section className="pdvf-flow" aria-labelledby={`${id}-title`}>
    <div className="pdvf-heading"><div><h3 id={`${id}-title`}>L’enchaînement des écrans</h3><p>{description}</p></div><button type="button" className="btn pdvc-no-print" disabled={!svg} onClick={download}><Download size={16} aria-hidden="true" />Exporter le schéma</button></div>
    <div className="pdvf-views pdvc-no-print" aria-label="Parcours représenté">{flows.map((flow, index) => <button key={flow.title} type="button" aria-pressed={selected === index} onClick={() => { setSelected(index); setZoom(100); setCopyStatus('') }}>{flow.title}</button>)}</div>
    <div className="pdvf-toolbar"><div className="pdvf-legend"><span><i className="citizen" />Habitant</span><span><i className="agent" />Agent</span><span><i className="alternate" />Cas particulier</span></div><div className="pdvf-zoom pdvc-no-print" aria-label="Taille du schéma"><button type="button" aria-label="Réduire le schéma" disabled={zoom === 100} onClick={() => setZoom(value => Math.max(100, value - 25))}><Minus size={17} aria-hidden="true" /></button><output aria-live="polite">{zoom} %</output><button type="button" aria-label="Agrandir le schéma" disabled={zoom === 200} onClick={() => setZoom(value => Math.min(200, value + 25))}><Plus size={17} aria-hidden="true" /></button><button type="button" aria-label="Ajuster le schéma à la largeur" onClick={() => setZoom(100)}><RotateCcw size={16} aria-hidden="true" /></button></div></div>
    <div className="pdvf-canvas" role="region" aria-label="Schéma Mermaid des parcours, défilement horizontal possible" tabIndex={0}>
      {svg ? <div className="pdvf-svg" style={{ width: `${zoom}%`, maxWidth: 1100 * zoom / 100 }} dangerouslySetInnerHTML={{ __html: svg }} /> : failed ? <div className="pdvf-loading" role="alert"><p>Le schéma n’a pas pu s’afficher. Son code reste disponible ci-dessous.</p><button type="button" className="btn" onClick={() => setAttempt(value => value + 1)}>Réessayer</button></div> : <p className="pdvf-loading" role="status">Préparation du schéma…</p>}
    </div>
    <p className="pdvf-caption">L’autorisation de retrait et la remise sont deux étapes distinctes. Une demande de précision revient à l’habitant, puis à l’agent pour un nouvel examen.</p>
    <details className="pdvc-details pdvc-no-print"><summary>Voir et copier le code Mermaid</summary><div className="pdvc-details-body"><pre className="pdvc-prompt">{source}</pre><button type="button" className="btn" onClick={copy}>{copyStatus === 'Code Mermaid copié.' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}Copier le code</button><p role="status" className="pdvc-note">{copyStatus}</p></div></details>
  </section>
}
