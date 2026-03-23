import './globals.css'
import BottomNav from '@/components/BottomNav'
import AdminFab from '@/components/AdminFab'
import ThemeToggle from '@/components/ThemeToggle'
import Footer from '@/components/Footer'

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Lối Về — Song May Home',
  description: 'Trải nghiệm 49 giờ nghỉ dưỡng & thiền định tại Sông Mây Home, Đồng Nai.',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: false },
  themeColor: '#0f1115',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Lối Về' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `
          try{const t=localStorage.getItem('loive-theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}
        `}} />
      </head>
      <body>
        <div id="app-container">
          <AdminFab />
          <ThemeToggle />
          <main className="screen-page">{children}</main>
          <Footer />
        </div>
        <BottomNav />
      </body>
    </html>
  )
}
