# MotoManager Website

Marketing website for MotoManager (Next.js 14 App Router + Tailwind CSS).

## Setup

```bash
npm install
npm run dev
```

## Structure

- `src/app/page.tsx` — landing page
- `src/app/pricing/page.tsx` — pricing (Basic/Pro, placeholder INR amounts marked TODO)
- `src/app/get-started/page.tsx` — download + how subscription works (in-app via Razorpay)
- `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` — legal pages (DPDP Act 2023)

## Notes / TODO

- Replace placeholder pricing in `pricing/page.tsx`.
- Replace `#` App Store / Play Store links once published.
- Replace screenshot placeholder boxes with real screenshots in `public/screenshots`.
- Fill in `[TODO]` items in privacy/terms pages (business name, address, contact email, retention period, jurisdiction).
- Brand color: `brand` (#c96442) / `brand-dark` (#a8502f), configured in `tailwind.config.ts`.

Subscriptions/Razorpay are handled inside the MotoManager app itself, not on this website.
