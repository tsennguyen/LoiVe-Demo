'use client'

import { useState } from 'react'
import Link from 'next/link'
import BackButton from '@/components/BackButton'

const SESSIONS = [
  { id: 12, name: 'Đợt 12', date: '11 - 13 Tháng 4, 2025', spots: 8, status: 'open', month: 4, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK-kVCnFQz_hJCZoIeU-GaA3T-ggLWEVKJtqLi5OKXGFbEbL-6lC0y3QeVrIB-kgLR3hZlqj8d0qS3zALjVkqaJwY9q4tCh2ZPSm4-HS84XwV-i1AqPg2KvIW3sO3xJpLQBwLaWg3EHN3uCmGxFCOMeNZ8lxfqJZs-ThnV9M5cG3RQKYlHqklF9BaywH_3FJTyaE4pC2X-3iCjxSzqGo0CZMpMvQ63F85VDiw-kH68TfJ7POSqKjSBOWprdkC_3VrP-dslrXuMJE' },
  { id: 13, name: 'Đợt 13', date: '25 - 27 Tháng 4, 2025', spots: 0, status: 'full', month: 4, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQi4z-AmS1qcpqyVrXRZSaamypR4nIaSN2YDbK92wC4zpwuq7U1nijEs186hKzD4Ffx72l8FhrZQ6kVz_GQNbn25H3xDK9_WMhaDp0q1IJMmIEP4zpZ0XwUnN2872Od7z-tbAmKqh60cBtmdajyOXn6UxUCfyqf4WsVlOnmhVULmJcg-L_2Oec3mjk4IDjUD9-w4RHe3gYcxUo9SGaqSK0KrsAwRCrc-SHzgrOFUI0UMLXS-fUdCNL1TQmHLOKL7ye9QlOaGDhi1Ib' },
  { id: 14, name: 'Đợt 14', date: '9 - 11 Tháng 5, 2025', spots: 15, status: 'open', month: 5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2YjhGcT7prdyv6r6hc0hKSR7SQ6TiL6OTERPydaaBBVLU_emN9WX9d1hs_WA3f2Q4qdyRKJpoEGu1oXIjmYqPg-bmnqGa8AqqCU--tbJs2RNcCtmSGKMfYkfwuAVbja60ACuwLsP9RE3Az4GEcwIhox9DioX1bsUbQKMaBjMj5D5F-p8XWOXtdB0EvUDCpSQ2PFBNH3a5lH6U2HGkpBRFSM2ah62YiACD0-mX-Et08R-sG336avBllWWef28oaYOhhwiQphqaSQIS' },
  { id: 15, name: 'Đợt 15', date: '23 - 25 Tháng 5, 2025', spots: 20, status: 'soon', month: 5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQi4z-AmS1qcpqyVrXRZSaamypR4nIaSN2YDbK92wC4zpwuq7U1nijEs186hKzD4Ffx72l8FhrZQ6kVz_GQNbn25H3xDK9_WMhaDp0q1IJMmIEP4zpZ0XwUnN2872Od7z-tbAmKqh60cBtmdajyOXn6UxUCfyqf4WsVlOnmhVULmJcg-L_2Oec3mjk4IDjUD9-w4RHe3gYcxUo9SGaqSK0KrsAwRCrc-SHzgrOFUI0UMLXS-fUdCNL1TQmHLOKL7ye9QlOaGDhi1Ib' },
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
