'use client'

import { useEffect, useState } from 'react'

/** @returns {JSX.Element} */
export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('loive-theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  /** @returns {void} */
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('loive-theme', next)
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
