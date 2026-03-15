'use client'

import { useState } from 'react'
import { faqs } from '@/content/faqs'

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq-list" role="list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`} role="listitem">
          <button
            className="faq-q"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-btn-${i}`}
          >
            {faq.question}
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div
            className="faq-a"
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            aria-hidden={openIndex !== i}
          >
            <div className="faq-a-inner">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
