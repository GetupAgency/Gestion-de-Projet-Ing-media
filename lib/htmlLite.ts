/**
 * Convertit un texte "Markdown léger" (gras **x**, listes "- ", sauts de ligne)
 * en HTML minimal. Sert aux énoncés historiques rédigés en Markdown et injectés
 * tels quels ; un contenu déjà en HTML est renvoyé sans modification.
 */
export function toHtml(text: string): string {
  if (!text) return ''
  if (/<\/?[a-z][\s\S]*>/i.test(text)) return text

  const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const inline = (s: string) =>
    escape(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')

  const lines = text.split(/\r?\n/)
  const out: string[] = []
  let list: string[] = []
  let para: string[] = []

  const flushList = () => {
    if (list.length) {
      out.push(`<ul>${list.map((l) => `<li>${l}</li>`).join('')}</ul>`)
      list = []
    }
  }
  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${para.join('<br>')}</p>`)
      para = []
    }
  }

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      flushList()
      flushPara()
      continue
    }
    const h = line.match(/^(#{1,4})\s+(.*)$/)
    if (h) {
      flushList()
      flushPara()
      const level = Math.min(h[1].length + 1, 4)
      out.push(`<h${level}>${inline(h[2])}</h${level}>`)
      continue
    }
    const li = line.match(/^[-*•]\s+(.*)$/)
    if (li) {
      flushPara()
      list.push(inline(li[1]))
      continue
    }
    const ol = line.match(/^\d+[.)]\s+(.*)$/)
    if (ol) {
      flushPara()
      list.push(inline(ol[1]))
      continue
    }
    flushList()
    para.push(inline(line))
  }
  flushList()
  flushPara()
  return out.join('\n')
}
