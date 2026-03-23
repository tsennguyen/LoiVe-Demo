# Lối Về — Next.js Migration Walkthrough

Migrated from static HTML SPA → Next.js App Router with dark/light mode and footer credits.

## File Structure

```
app/
├── layout.js          ← Root layout + theme hydration
├── globals.css        ← Full design system (dark + light)
├── page.js            ← Home
├── onboarding/page.js
├── guide/page.js
├── schedule/page.js
├── booking/page.js
├── waitlist/page.js
├── checklist/page.js
├── faq/page.js
└── admin/page.js
components/
├── ThemeToggle.js     ← ☀️/🌙 toggle + localStorage
├── BottomNav.js       ← Fixed nav with Link + usePathname
├── AdminFab.js        ← Admin/User route toggle
├── Footer.js          ← Full academic credits
└── BackButton.js      ← Reusable back navigation
```

## Key Features

| Feature | Implementation |
|---------|---------------|
| **Dark/Light** | CSS vars + `data-theme` + localStorage |
| **Mobile-first** | 430px max, touch targets, iOS zoom fix |
| **Routing** | Next.js App Router (file-based) |
| **SSR/CSR** | Server pages where possible, `'use client'` for interactive |
| **Footer** | Học phần, dự án, giải pháp, GVHD, developer |

## Screenshots

````carousel
![Home — Dark Mode](/Users/mac/.gemini/antigravity/brain/4affead7-17da-43b5-b10d-0be2ea019416/nextjs_home.png)
<!-- slide -->
![FAQ — Light Mode](/Users/mac/.gemini/antigravity/brain/4affead7-17da-43b5-b10d-0be2ea019416/nextjs_light.png)
<!-- slide -->
![Footer — Credits](/Users/mac/.gemini/antigravity/brain/4affead7-17da-43b5-b10d-0be2ea019416/nextjs_footer.png)
````

## Demo Recording

![Full test flow](/Users/mac/.gemini/antigravity/brain/4affead7-17da-43b5-b10d-0be2ea019416/nextjs_full_test_1774238529219.webp)

## Deploy

```bash
cd /Users/mac/workspace/LoiVe-Demo
npx -y vercel --prod
```
