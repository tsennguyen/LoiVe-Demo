'use client'

import { useState } from 'react'
import BackButton from '@/components/BackButton'

const FAQS = [
  { q: 'Song May Home ở đâu?', a: 'Tọa lạc tại Đồng Nai, cách TP.HCM khoảng 70km, nằm giữa thiên nhiên xanh mát với không gian yên bình.' },
  { q: 'Chi phí cho hành trình 49h bao nhiêu?', a: 'Chi phí từ 3.900.000đ/người bao gồm chỗ ở, các bữa ăn, hoạt động thiền và workshop. Giá có thể thay đổi theo đợt.' },
  { q: 'Cần chuẩn bị gì trước khi đến?', a: 'Mang theo quần áo thoải mái, đồ vệ sinh cá nhân, và tâm thế mở. Xem checklist chi tiết tại mục "Chuẩn bị lên đường".' },
  { q: 'Có thể hủy hoặc đổi lịch không?', a: 'Có thể đổi lịch miễn phí trước 7 ngày. Hủy trước 3 ngày hoàn 80% phí.' },
  { q: 'Ai phù hợp tham gia?', a: 'Bất kỳ ai muốn tìm lại sự bình yên, giảm stress, hoặc đơn giản là cần một khoảng lặng trong cuộc sống.' },
]

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(-1)

  return (
    <>
      <div className="screen-header">
        <BackButton href="/" />
        <h2 className="screen-title">Những điều cần biết</h2>
      </div>
      <div className="faq-content">
        {FAQS.map((faq, i) => (
          <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`} onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
            <div className="faq-question">
              <span>{faq.q}</span>
              <svg className="faq-chevron" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </div>
            <div className="faq-answer">{faq.a}</div>
          </div>
        ))}
      </div>
      <div className="faq-map">
        <img src="/faq-location.png" alt="Song May Home" className="faq-map-img" />
      </div>
      <div className="faq-contact">
        <p>📧 Email: <a href="mailto:lienhe@songmayhome.com" className="link">lienhe@songmayhome.com</a></p>
        <p>📞 Hotline: <a href="tel:+84938269378" className="link">(+84) 938 269 378</a></p>
        <p>📍 Số 767, đường 756, Sông Mây, Trảng Bom, Đồng Nai</p>
      </div>
    </>
  )
}
