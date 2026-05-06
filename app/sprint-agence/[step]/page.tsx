import { notFound } from 'next/navigation'
import { sprintSteps } from '@/data/sprintAgence'
import StepHeader from '@/components/SprintAgence/StepHeader'
import StudentSection from '@/components/SprintAgence/StudentSection'
import TeacherBlocks from '@/components/SprintAgence/TeacherBlocks'
import StepNav from '@/components/SprintAgence/StepNav'
import Footer from '@/components/Footer'

interface StepPageProps {
  params: { step: string }
}

export function generateStaticParams() {
  return sprintSteps.map(s => ({ step: s.slug }))
}

export function generateMetadata({ params }: StepPageProps) {
  const step = sprintSteps.find(s => s.slug === params.step)
  if (!step) return { title: 'Sprint Agence' }
  return {
    title: `${step.title} · Sprint Agence`,
    description: step.pitch,
  }
}

export default function StepPage({ params }: StepPageProps) {
  const step = sprintSteps.find(s => s.slug === params.step)
  if (!step) notFound()

  const idx = sprintSteps.findIndex(s => s.slug === step.slug)
  const prev = idx > 0 ? sprintSteps[idx - 1] : undefined
  const next = idx < sprintSteps.length - 1 ? sprintSteps[idx + 1] : undefined

  return (
    <div className="sa-page">
      <StepHeader step={step} />

      <main className="sa-step-main">
        <div className="sa-step-stack">
          {step.studentSections.map(section => (
            <StudentSection key={section.id} section={section} />
          ))}
        </div>

        {step.teacherBlocks && step.teacherBlocks.length > 0 && (
          <TeacherBlocks blocks={step.teacherBlocks} />
        )}

        <StepNav current={step} prev={prev} next={next} />
      </main>

      <Footer />
    </div>
  )
}
