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

## Deploying to GitHub Pages

`.github/workflows/deploy-pages.yml` builds the UI and publishes it to GitHub Pages on every push to the default branch. You can also run it by hand from the Actions tab for any branch.

One-time setup:

1. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
2. **Settings → Secrets and variables → Actions → Variables:** add `CONTACT_EMAIL` with the address enquiries should go to. Pages can't run the API, so on the deployed site the enquiry form opens a pre-filled email to this address instead.
3. If you run the workflow on a branch other than the default, allow that branch under **Settings → Environments → github-pages → Deployment branches**.

The site is then served at `https://<owner>.github.io/<repo>/`. The build sets the base path automatically, including for a custom domain.

To run the full stack with the API instead, deploy `backend/` to any Node host and build the UI with `VITE_API_URL` pointing at it.

`.github/workflows/ci.yml` runs the backend tests and builds both packages on every push and pull request.
