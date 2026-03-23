'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/', label: 'Trang chủ', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10' },
  { href: '/schedule', label: 'Lịch trình', icon: 'M3 6h18v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6z M16 2v4 M8 2v4 M3 10h18' },
  { href: '/guide', label: 'Hành trình', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2' },
  { href: '/faq', label: 'FAQ', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3 M12 17h.01' },
]

/** @returns {JSX.Element} */
export default function BottomNav() {
  const pathname = usePathname()

  if (pathname === '/admin') return null

  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map(({ href, label, icon }) => (
        <Link
          key={href}
          href={href}
          className={`nav-item ${pathname === href ? 'active' : ''}`}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d={icon} />
          </svg>
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  )
}
