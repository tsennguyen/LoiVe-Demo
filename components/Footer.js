/** @returns {JSX.Element} */
export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-brand">🌿 LỐI VỀ</div>
      <p className="footer-project">
        Tên giải pháp: LỐI VỀ – Ứng dụng nhập môn &amp; đặt lịch Sông Mây
      </p>
      <p className="footer-project">
        Dự án: Khắc phục tình trạng thiếu thông tin và khó đặt chỗ trong hành trình trải nghiệm 49H của khách hàng tại Sông Mây Home
      </p>
      <div className="footer-divider" />
      <p>Học phần: ĐỔI MỚI SÁNG TẠO &amp; TƯ DUY KHỞI NGHIỆP</p>
      <p>Nhóm 05 — Lớp N11</p>
      <p>GVHD: ThS. Đỗ Quang Đông</p>
      <div className="footer-divider" />
      <p style={{ fontSize: '0.68rem', marginBottom: '2px' }}><strong>Thành viên nhóm:</strong></p>
      <p style={{ fontSize: '0.65rem' }}>Nguyễn Việt Thành (Nhóm trưởng)</p>
      <p style={{ fontSize: '0.65rem' }}>Phan Thanh Trúc Linh · Hồ Đức Tiến</p>
      <p style={{ fontSize: '0.65rem' }}>Nguyễn Quang Thiện · Phạm Gia Ân</p>
      <p style={{ fontSize: '0.65rem' }}>Trần Gia Thịnh</p>
      <div className="footer-divider" />
      <p className="footer-credits">
        Developed by <a href="#">Nguyễn Việt Thành (Tsen Nguyen)</a>
      </p>
      <p style={{ marginTop: '4px', fontSize: '0.65rem' }}>© 2026 Nhóm 05 — All rights reserved</p>
    </footer>
  )
}
