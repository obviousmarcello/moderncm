# ModernCM

Monorepo with a TypeScript/Express API (`backend/`) and a React + Vite frontend (`ui/`).

## Structure

```
moderncm/
├── backend/                 # REST API (Express + TypeScript)
│   ├── src/
│   │   ├── config/          # env loading & app configuration
│   │   ├── controllers/     # HTTP request/response handling
│   │   ├── middleware/      # express middleware (errors, auth, ...)
│   │   ├── models/          # domain types / data models
│   │   ├── routes/          # route definitions, mounted under /api
│   │   ├── services/        # business logic
│   │   ├── utils/           # shared helpers (logger, ...)
│   │   ├── app.ts           # express app factory
│   │   └── index.ts         # server entry point
│   └── tests/               # vitest + supertest
└── ui/                      # React + Vite + TypeScript
    ├── public/              # static files served as-is
    └── src/
        ├── assets/          # images, fonts, icons
        ├── components/      # reusable UI components
        ├── hooks/           # custom React hooks
        ├── pages/           # route-level views
        ├── services/        # API client
        ├── styles/          # global styles
        ├── types/           # shared TS types
        ├── App.tsx
        └── main.tsx
```

## Getting started

```bash
npm install
npm run dev:backend   # http://localhost:4000/api/health
npm run dev:ui        # http://localhost:5173 (proxies /api to the backend)
```

Copy `backend/.env.example` to `backend/.env` to override defaults.

## The site

`ui/` is a bilingual (Hungarian / English) landing page for a wedding master of ceremonies:

- All copy lives in `ui/src/i18n/content.ts`, with one dictionary per language. The language toggle in the header saves the choice and sets `<html lang>`.
- `freeSaturdays` and the reviews in `content.ts` are placeholders. Replace them with real data before going live.
- The enquiry form posts to `POST /api/inquiries` (validated in `backend/src/services/inquiry.service.ts`). Enquiries are kept in memory for now, so add a database or an email notification before production.
