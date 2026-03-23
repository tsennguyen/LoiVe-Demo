import Link from 'next/link'
import BackButton from '@/components/BackButton'

export default function GuidePage() {
  return (
    <>
      <div className="screen-header">
        <BackButton href="/" />
        <h2 className="screen-title">Hành trình 49h</h2>
      </div>
      <div className="guide-hero">
        <img src="/guide-day1.png" alt="Song May Home" className="guide-hero-img" />
        <div className="guide-hero-overlay" />
        <div className="guide-hero-text"><p className="guide-subtitle">3 ngày 2 đêm tại Song May Home</p></div>
      </div>
      <div className="timeline">
        <div className="timeline-day">
          <div className="timeline-marker active"><div className="timeline-dot" /><div className="timeline-line" /></div>
          <div className="timeline-content">
            <div className="day-badge">Ngày 1</div>
            <h3>🚪 Chạm ngõ</h3>
            <img src="/guide-day1.png" alt="Ngày 1 — Chạm ngõ" className="timeline-img" />
            <ul className="timeline-items">
              <li>14:00 — Check-in &amp; nhận phòng</li>
              <li>15:00 — Trà chào mừng &amp; giới thiệu không gian</li>
              <li>16:30 — Thiền hành trong vườn</li>
              <li>18:00 — Bữa tối thanh đạm</li>
              <li>19:30 — Thiền buông thư trước khi ngủ</li>
            </ul>
          </div>
        </div>
        <div className="timeline-day">
          <div className="timeline-marker"><div className="timeline-dot" /><div className="timeline-line" /></div>
          <div className="timeline-content">
            <div className="day-badge">Ngày 2</div>
            <h3>🧘 Tĩnh tại</h3>
            <img src="/guide-day2.png" alt="Ngày 2 — Tĩnh tại" className="timeline-img" />
            <ul className="timeline-items">
              <li>06:00 — Thiền sáng &amp; yoga nhẹ</li>
              <li>07:30 — Điểm tâm cùng nắng sớm</li>
              <li>09:00 — Workshop: Lắng nghe bản thân</li>
              <li>12:00 — Bữa trưa tĩnh lặng</li>
              <li>14:00 — Tự do: đọc sách, tản bộ, vẽ</li>
              <li>16:00 — Trà chiều &amp; chia sẻ nhóm</li>
              <li>19:00 — Thiền nến ban đêm</li>
            </ul>
          </div>
        </div>
        <div className="timeline-day">
          <div className="timeline-marker"><div className="timeline-dot" /></div>
          <div className="timeline-content">
            <div className="day-badge">Ngày 3</div>
            <h3>🌅 Lối về</h3>
            <img src="/guide-day3.png" alt="Ngày 3 — Lối về" className="timeline-img" />
            <ul className="timeline-items">
              <li>06:00 — Thiền bình minh</li>
              <li>07:30 — Bữa sáng chia tay</li>
              <li>09:00 — Vòng tròn cảm ơn</li>
              <li>10:00 — Check-out &amp; lưu giữ kỷ niệm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="guide-cta">
        <Link href="/schedule" className="btn btn-primary btn-full">Xem lịch các đợt</Link>
      </div>
    </>
  )
}
