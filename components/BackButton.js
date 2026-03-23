import Link from 'next/link'

/**
 * @param {{ children: React.ReactNode, href: string }} props
 * @returns {JSX.Element}
 */
export default function BackButton({ href }) {
  return (
    <Link href={href} className="back-btn" aria-label="Go back">
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </Link>
  )
}
