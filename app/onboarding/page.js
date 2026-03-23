'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BackButton from '@/components/BackButton'

const NEEDS = [
  { emoji: '😰', label: 'Căng thẳng' },
  { emoji: '😴', label: 'Mất ngủ' },
  { emoji: '🤯', label: 'Quá tải' },
  { emoji: '😟', label: 'Lo âu' },
  { emoji: '😩', label: 'Mệt mỏi' },
  { emoji: '🕊️', label: 'Tìm bình yên' },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [selected, setSelected] = useState(new Set())

  /** @param {string} label */
  const toggle = (label) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
  }

  return (
    <>
      <div className="screen-header">
        <BackButton href="/" />
        <span className="step-indicator">Bước 1/3</span>
      </div>
      <div className="onboarding-content">
        <h2 className="onboarding-title">Bạn đang cần gì?</h2>
        <p className="onboarding-desc">Hãy chọn những gì đang phản ánh bạn lúc này. Chúng tôi sẽ gợi ý trải nghiệm phù hợp.</p>
        <div className="chip-grid">
          {NEEDS.map(({ emoji, label }) => (
            <button
              key={label}
              className={`chip ${selected.has(label) ? 'selected' : ''}`}
              onClick={() => toggle(label)}
            >
              <span className="chip-emoji">{emoji}</span> {label}
            </button>
          ))}
        </div>
        <button className="btn btn-primary btn-full" onClick={() => router.push('/guide')}>
          Tiếp tục
        </button>
      </div>
    </>
  )
}
