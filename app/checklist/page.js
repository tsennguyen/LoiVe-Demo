'use client'

import { useState, useCallback } from 'react'
import BackButton from '@/components/BackButton'

const ITEMS = {
  'Đồ dùng cá nhân': ['Quần áo thoải mái (2-3 bộ)', 'Đồ vệ sinh cá nhân', 'Khăn mặt & khăn tắm', 'Thuốc cá nhân (nếu có)'],
  'Tâm thế chuẩn bị': ['Tắt thông báo điện thoại', 'Thông báo người thân', 'Mang theo sổ tay & bút', 'Đọc lưu ý trước chuyến đi'],
}

export default function ChecklistPage() {
  const allItems = Object.values(ITEMS).flat()
  const [checked, setChecked] = useState(new Set())

  /** @param {string} item */
  const toggle = useCallback((item) => {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(item) ? next.delete(item) : next.add(item)
      return next
    })
  }, [])

  const pct = Math.round((checked.size / allItems.length) * 100)

  return (
    <>
      <div className="screen-header">
        <BackButton href="/" />
        <h2 className="screen-title">Chuẩn bị lên đường</h2>
      </div>
      <div className="checklist-content">
        <p className="checklist-intro">Đánh dấu những thứ bạn đã chuẩn bị để sẵn sàng cho hành trình 49h.</p>
        {Object.entries(ITEMS).map(([section, items]) => (
          <div key={section} className="checklist-section">
            <h3 className="checklist-section-title">{section}</h3>
            {items.map(item => (
              <label key={item} className="checklist-item">
                <input type="checkbox" checked={checked.has(item)} onChange={() => toggle(item)} />
                <span>{item}</span>
              </label>
            ))}
          </div>
        ))}
        <div className="checklist-progress">
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
          <span className="progress-text">{checked.size}/{allItems.length}</span>
        </div>
      </div>
    </>
  )
}
