import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <div className="home-hero">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2YjhGcT7prdyv6r6hc0hKSR7SQ6TiL6OTERPydaaBBVLU_emN9WX9d1hs_WA3f2Q4qdyRKJpoEGu1oXIjmYqPg-bmnqGa8AqqCU--tbJs2RNcCtmSGKMfYkfwuAVbja60ACuwLsP9RE3Az4GEcwIhox9DioX1bsUbQKMaBjMj5D5F-p8XWOXtdB0EvUDCpSQ2PFBNH3a5lH6U2HGkpBRFSM2ah62YiACD0-mX-Et08R-sG336avBllWWef28oaYOhhwiQphqaSQIS" alt="Song May Home" className="home-hero-img" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <div className="home-badge">🌿 Song May Home</div>
          <h1 className="home-title">Một lối về<br />nhẹ nhàng</h1>
          <p className="home-subtitle">Trải nghiệm 49 giờ nghỉ dưỡng &amp; thiền định tại không gian xanh giữa lòng Đồng Nai</p>
          <div className="home-cta-group">
            <Link href="/onboarding" className="btn btn-primary">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Bắt đầu 3 phút
            </Link>
            <Link href="/schedule" className="btn btn-outline">Xem lịch trình</Link>
          </div>
        </div>
      </div>
      <div className="home-features">
        <Link href="/guide" className="feature-card">
          <div className="feature-icon">🧘</div>
          <div className="feature-text"><h3>Hành trình 49h</h3><p>3 ngày 2 đêm trọn vẹn</p></div>
          <svg className="feature-arrow" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </Link>
        <Link href="/checklist" className="feature-card">
          <div className="feature-icon">🎒</div>
          <div className="feature-text"><h3>Chuẩn bị lên đường</h3><p>Checklist đồ dùng cần thiết</p></div>
          <svg className="feature-arrow" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </Link>
        <Link href="/faq" className="feature-card">
          <div className="feature-icon">💬</div>
          <div className="feature-text"><h3>Những điều cần biết</h3><p>FAQ &amp; thông tin liên hệ</p></div>
          <svg className="feature-arrow" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </Link>
      </div>
    </>
  )
}
