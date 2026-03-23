import BackButton from '@/components/BackButton'

export default function AdminPage() {
  const now = new Date()
  const dateStr = `Hôm nay, ${now.getDate()} Tháng ${now.getMonth() + 1}, ${now.getFullYear()}`

  return (
    <>
      <div className="screen-header">
        <BackButton href="/" />
        <h2 className="screen-title">Quản lý hệ thống</h2>
      </div>
      <div className="admin-content">
        <div className="admin-greeting">
          <div className="admin-avatar">H</div>
          <div>
            <div className="admin-hello">Xin chào, Admin Huy</div>
            <div className="admin-date">{dateStr}</div>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card"><div className="stat-icon">👁️</div><div className="stat-value">1,247</div><div className="stat-label">Lượt xem</div><div className="stat-change positive">+12.5%</div></div>
          <div className="stat-card"><div className="stat-icon">📝</div><div className="stat-value">89</div><div className="stat-label">Đăng ký</div><div className="stat-change positive">+8.3%</div></div>
          <div className="stat-card"><div className="stat-icon">⏳</div><div className="stat-value">34</div><div className="stat-label">Chờ duyệt</div><div className="stat-change neutral">—</div></div>
          <div className="stat-card"><div className="stat-icon">💰</div><div className="stat-value">67.2M</div><div className="stat-label">Doanh thu</div><div className="stat-change positive">+22.1%</div></div>
        </div>
        <div className="admin-section">
          <h3 className="admin-section-title">Bảng tổng hợp đăng ký</h3>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead><tr><th>Đợt</th><th>Đăng ký</th><th>Chờ</th><th>Doanh thu</th></tr></thead>
              <tbody>
                <tr><td>Đợt 12</td><td>28/30</td><td>5</td><td>109.2M</td></tr>
                <tr><td>Đợt 13</td><td>30/30</td><td>12</td><td>117.0M</td></tr>
                <tr><td>Đợt 14</td><td>15/30</td><td>0</td><td>58.5M</td></tr>
                <tr><td>Đợt 15</td><td>0/30</td><td>0</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="admin-section">
          <h3 className="admin-section-title">Đăng ký gần đây</h3>
          <div className="recent-list">
            <div className="recent-item"><div className="recent-avatar">TN</div><div className="recent-info"><div className="recent-name">Trần Nhật</div><div className="recent-detail">Đợt 12 · 5 phút trước</div></div><div className="status-dot status-dot-new" /></div>
            <div className="recent-item"><div className="recent-avatar">LH</div><div className="recent-info"><div className="recent-name">Lê Hạnh</div><div className="recent-detail">Đợt 13 · Đã xác nhận</div></div><div className="status-dot status-dot-confirmed" /></div>
            <div className="recent-item"><div className="recent-avatar">PM</div><div className="recent-info"><div className="recent-name">Phạm Minh</div><div className="recent-detail">Đợt 12 · Chờ duyệt</div></div><div className="status-dot status-dot-waiting" /></div>
          </div>
        </div>
      </div>
    </>
  )
}
