'use client'

import { useState } from 'react'
import BackButton from '@/components/BackButton'

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <>
        <div className="screen-header">
          <BackButton href="/schedule" />
          <h2 className="screen-title">Danh sách chờ</h2>
        </div>
        <div className="success-msg">
          <div className="success-icon">📋</div>
          <h3>Đã ghi nhận!</h3>
          <p>Bạn sẽ nhận thông báo ngay khi có chỗ trống.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="screen-header">
        <BackButton href="/schedule" />
        <h2 className="screen-title">Danh sách chờ</h2>
      </div>
      <div className="waitlist-hero">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQi4z-AmS1qcpqyVrXRZSaamypR4nIaSN2YDbK92wC4zpwuq7U1nijEs186hKzD4Ffx72l8FhrZQ6kVz_GQNbn25H3xDK9_WMhaDp0q1IJMmIEP4zpZ0XwUnN2872Od7z-tbAmKqh60cBtmdajyOXn6UxUCfyqf4WsVlOnmhVULmJcg-L_2Oec3mjk4IDjUD9-w4RHe3gYcxUo9SGaqSK0KrsAwRCrc-SHzgrOFUI0UMLXS-fUdCNL1TQmHLOKL7ye9QlOaGDhi1Ib" alt="Song May Home" className="waitlist-hero-img" />
        <div className="waitlist-hero-overlay" />
      </div>
      <div className="waitlist-content">
        <div className="waitlist-notice">
          <div className="notice-icon">⏳</div>
          <h3>Đợt này đã hết chỗ</h3>
          <p>Đăng ký vào danh sách chờ để nhận thông báo ngay khi có chỗ trống hoặc khi đợt mới mở.</p>
        </div>
        <form className="form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div className="form-group">
            <label htmlFor="wl-name">Họ và tên</label>
            <input type="text" id="wl-name" placeholder="Nguyễn Văn A" required />
          </div>
          <div className="form-group">
            <label htmlFor="wl-phone">Số điện thoại</label>
            <input type="tel" id="wl-phone" placeholder="0901 234 567" required />
          </div>
          <button type="submit" className="btn btn-primary btn-full">Đăng ký chờ</button>
        </form>
      </div>
    </>
  )
}
