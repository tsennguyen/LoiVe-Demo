'use client'

import { useState } from 'react'
import Link from 'next/link'
import BackButton from '@/components/BackButton'

const SESSIONS = [
  { id: 12, name: 'Đợt 12', date: '11 - 13 Tháng 4, 2025', spots: 8, status: 'open', month: 4, img: '/session-12.png' },
  { id: 13, name: 'Đợt 13', date: '25 - 27 Tháng 4, 2025', spots: 0, status: 'full', month: 4, img: '/session-13.png' },
  { id: 14, name: 'Đợt 14', date: '9 - 11 Tháng 5, 2025', spots: 15, status: 'open', month: 5, img: '/session-14.png' },
  { id: 15, name: 'Đợt 15', date: '23 - 25 Tháng 5, 2025', spots: 20, status: 'soon', month: 5, img: '/session-15.png' },
]

const FILTERS = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Tháng 4', value: 4 },
  { label: 'Tháng 5', value: 5 },
]

const STATUS_MAP = { open: 'MỞ ĐĂNG KÝ', full: 'HẾT CHỖ', soon: 'SẮP MỞ' }

export default function SchedulePage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? SESSIONS : SESSIONS.filter(s => s.month === filter)

  return (
    <>
      <div className="screen-header">
        <BackButton href="/" />
        <h2 className="screen-title">Các đợt sắp tới</h2>
      </div>
      <div className="schedule-filters">
        {FILTERS.map(f => (
          <button key={f.value} className={`filter-chip ${filter === f.value ? 'active' : ''}`} onClick={() => setFilter(f.value)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="schedule-list">
        {filtered.map(session => (
          <Link
            key={session.id}
            href={session.status === 'full' ? '/waitlist' : `/booking?session=${session.id}`}
            className="schedule-card"
          >
            <img src={session.img} alt={session.name} className="schedule-card-img" />
            <div className="schedule-card-body">
              <div className="schedule-card-header">
                <span className="schedule-date">{session.date}</span>
                <span className={`status-badge status-${session.status}`}>{STATUS_MAP[session.status]}</span>
              </div>
              <h3>{session.name} — Hành trình 49h</h3>
              <p className="schedule-meta">{session.spots > 0 ? `Còn ${session.spots} chỗ` : 'Đã hết chỗ'} · 3N2Đ · Song May Home</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
