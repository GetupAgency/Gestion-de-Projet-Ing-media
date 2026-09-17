import type { CSSProperties, ReactNode } from 'react'

type Tone = 'todo' | 'progress' | 'done' | 'red' | 'ink' | 'pink'
type Size = 'sm' | 'lg' | 'xl'

interface StampProps {
  children: ReactNode
  tone?: Tone
  size?: Size
  tilt?: number
  press?: boolean
  className?: string
  title?: string
}

/** Tampon encreur : l'état est une matière, jamais une pastille. */
export default function Stamp({ children, tone = 'ink', size = 'sm', tilt = -5, press = false, className = '', title }: StampProps) {
  const style = { '--tilt': `${tilt}deg` } as CSSProperties
  return (
    <span
      className={`stamp stamp--${tone} ${size !== 'sm' ? `stamp--${size}` : ''} ${press ? 'stamp--press' : ''} ${className}`}
      style={style}
      title={title}
    >
      {children}
    </span>
  )
}
