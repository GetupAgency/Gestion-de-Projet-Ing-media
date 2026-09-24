/** Contrôle anti-pattern des QCM : la bonne réponse ne doit pas être reconnaissable à sa longueur. `npx tsx scripts/quiz-stats.ts` */
import { allModules, bonusQuizQuestions, lexiqueQuizQuestions, extendedLexiqueQuizQuestions, competencesQuizQuestions, diverseQuizQuestions } from '../data/allModules'
import { newQuestions } from '../data/newQuestions'
const banks = { bonus: bonusQuizQuestions, lexique: lexiqueQuizQuestions, extLexique: extendedLexiqueQuizQuestions, competences: competencesQuizQuestions, diverse: diverseQuizQuestions, newQuestions }
const qs = [...allModules.flatMap(m => m.sections.flatMap(s => (s.quiz ?? []).map(q => ({ ...q, where: 'modules' })))), ...Object.entries(banks).flatMap(([k, v]) => v.map(q => ({ ...q, where: k })))]
const mcq = qs.filter(q => q.options.length > 2)
let longest = 0, shortest = 0, tie = 0
const byBank: Record<string, [number, number]> = {}
const offenders: string[] = []
for (const q of mcq) {
  const lens = q.options.map(o => o.length)
  const c = lens[q.correctAnswer]
  const max = Math.max(...lens), min = Math.min(...lens)
  const isLongest = c === max && lens.filter(l => l === max).length === 1
  const isShortest = c === min && lens.filter(l => l === min).length === 1
  if (isLongest) { longest++; offenders.push(`${q.id} ${lens.join('/')}`) }
  if (isShortest) shortest++
  if (lens.filter(l => l === c).length > 1) tie++
  byBank[q.where] ??= [0, 0]; byBank[q.where][0]++; if (isLongest) byBank[q.where][1]++
}
console.log(`QCM à 3+ options : ${mcq.length} · bonne réponse strictement la plus longue : ${longest} (${Math.round(100 * longest / mcq.length)} %) · strictement la plus courte : ${shortest} (${Math.round(100 * shortest / mcq.length)} %) · ex æquo : ${tie}`)
console.log('par banque [total, plus longue] :', JSON.stringify(byBank))
if (process.argv[2] === 'list') console.log(offenders.join('\n'))
