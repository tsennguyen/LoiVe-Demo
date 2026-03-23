'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import BackButton from '@/components/BackButton'

function BookingForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session') || '12'
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  /** @param {React.FormEvent} e */
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!agreed) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-msg">
        <div className="success-icon">🎉</div>
        <h3>Đăng ký thành công!</h3>
        <p>Chúng tôi sẽ liên hệ bạn trong 24h để xác nhận.</p>
        <button className="btn btn-primary" onClick={() => router.push('/')}>Về trang chủ</button>
      </div>
    )
  }

  return (
    <div className="form-content">
      <div className="booking-session-info">
        <span className="booking-badge">Đợt {sessionId} — Hành trình 49h</span>
        <p>3 ngày 2 đêm tại Song May Home, Đồng Nai</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="booking-name">Họ và tên</label>
          <input type="text" id="booking-name" placeholder="Nguyễn Văn A" required />
        </div>
        <div className="form-group">
          <label htmlFor="booking-phone">Số điện thoại</label>
          <input type="tel" id="booking-phone" placeholder="0901 234 567" required />
        </div>
        <div className="form-group">
          <label htmlFor="booking-email">Email</label>
          <input type="email" id="booking-email" placeholder="email@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="booking-note">Ghi chú</label>
          <textarea id="booking-note" rows={3} placeholder="Yêu cầu đặc biệt (nếu có)" />
        </div>
        <label className="checkbox-label">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
          <span>Tôi đồng ý với điều khoản tham gia và chính sách hủy/đổi lịch</span>
        </label>
        <button type="submit" className="btn btn-primary btn-full" disabled={!agreed}>Xác nhận đăng ký</button>
      </form>
    </div>
  )
}

export default function BookingPage() {
  return (
    <>
      <div className="screen-header">
        <BackButton href="/schedule" />
        <h2 className="screen-title">Thông tin đăng ký</h2>
      </div>
      <Suspense fallback={<div className="form-content"><p>Loading...</p></div>}>
        <BookingForm />
      </Suspense>
    </>
  )
}
