import { allModules, bonusQuizQuestions, lexiqueQuizQuestions, extendedLexiqueQuizQuestions, competencesQuizQuestions, diverseQuizQuestions } from '../data/allModules'
import { newQuestions } from '../data/newQuestions'
const banks = { bonus: bonusQuizQuestions, lexique: lexiqueQuizQuestions, extLexique: extendedLexiqueQuizQuestions, competences: competencesQuizQuestions, diverse: diverseQuizQuestions, newQuestions }
const qs = [...allModules.flatMap(m => m.sections.flatMap(s => (s.quiz ?? []).map(q => ({ ...q, where: m.id + '/' + s.id })))), ...Object.entries(banks).flatMap(([k, v]) => v.map(q => ({ ...q, where: k })))]
const stats: Record<string, { n: number; longest: number }> = {}
for (const q of qs) {
  const lens = q.options.map((o) => o.length)
  const isLongest = lens.indexOf(Math.max(...lens)) === q.correctAnswer
  const k = q.where.includes('/') ? 'modules' : q.where
  stats[k] ??= { n: 0, longest: 0 }
  stats[k].n++
  if (isLongest) stats[k].longest++
  if (process.argv[2] === 'dump') {
    console.log(`\n### ${q.id} [${q.where}] ${q.type ?? ''} ${isLongest ? 'LONGEST' : 'ok'}\nQ: ${q.question}`)
    q.options.forEach((o, i) => console.log(`${i === q.correctAnswer ? '*' : ' '} ${i} (${o.length}) ${o}`))
  }
}
console.error(JSON.stringify(stats))
