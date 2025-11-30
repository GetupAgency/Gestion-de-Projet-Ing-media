import React from 'react'

/**
 * Convertit du texte simple avec markdown basique en JSX
 * Supporte: **gras**, *italique*, - listes, \n sauts de ligne
 */
export function parseMarkdown(text: string): React.ReactNode {
  if (!text) return null

  // Découper en lignes
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let listItems: string[] = []

  const processInlineMarkdown = (line: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    let key = 0

    // Parser **gras**
    const boldRegex = /\*\*(.+?)\*\*/g
    let lastIndex = 0
    let match

    while ((match = boldRegex.exec(line)) !== null) {
      // Texte avant le gras
      if (match.index > lastIndex) {
        const beforeText = line.substring(lastIndex, match.index)
        // Parser *italique* dans le texte avant
        parts.push(...parseItalic(beforeText, key++))
      }
      
      // Texte en gras (la couleur hérite du parent)
      parts.push(
        <strong key={`bold-${key++}`} className="font-bold">
          {match[1]}
        </strong>
      )
      
      lastIndex = match.index + match[0].length
    }

    // Texte restant après le dernier gras
    if (lastIndex < line.length) {
      const remainingText = line.substring(lastIndex)
      parts.push(...parseItalic(remainingText, key++))
    }

    return parts.length > 0 ? parts : [line]
  }

  const parseItalic = (text: string, startKey: number): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    const italicRegex = /\*(.+?)\*/g
    let lastIndex = 0
    let match
    let key = startKey

    while ((match = italicRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index))
      }
      parts.push(
        <em key={`italic-${key++}`} className="italic">
          {match[1]}
        </em>
      )
      lastIndex = match.index + match[0].length
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : [text]
  }

  lines.forEach((line, index) => {
    const trimmedLine = line.trim()

    // Liste à puces
    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('• ')) {
      listItems.push(trimmedLine.substring(2))
    } else {
      // Si on a des items de liste en attente, on les flush
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 my-3 ml-4">
            {listItems.map((item, i) => (
              <li key={i} className="text-gray-800">
                {processInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        )
        listItems = []
      }

      // Ligne vide = paragraphe
      if (trimmedLine === '') {
        elements.push(<div key={`space-${index}`} className="h-3" />)
      } else {
        // Texte normal
        elements.push(
          <p key={`p-${index}`} className="text-gray-800 leading-relaxed">
            {processInlineMarkdown(line)}
          </p>
        )
      }
    }
  })

  // Flush des items de liste restants
  if (listItems.length > 0) {
    elements.push(
      <ul key="list-final" className="list-disc list-inside space-y-2 my-3 ml-4">
        {listItems.map((item, i) => (
          <li key={i} className="text-gray-800">
            {processInlineMarkdown(item)}
          </li>
        ))}
      </ul>
    )
  }

  return <>{elements}</>
}

/**
 * Composant pour afficher du texte avec markdown
 */
interface MarkdownTextProps {
  children: string
  className?: string
}

export function MarkdownText({ children, className = '' }: MarkdownTextProps) {
  return (
    <div className={`markdown-content ${className}`}>
      {parseMarkdown(children)}
    </div>
  )
}

