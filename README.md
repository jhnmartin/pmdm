# PMDM

Monorepo for PMDM: web, iOS and Android clients sharing one Convex backend.

```
apps/
  web/        Next.js 16 + React 19 + Tailwind        → pnpm dev:web
  ios/        SwiftUI app (open PMDM.xcodeproj)        → Xcode
  android/    Kotlin + Compose (placeholder for now)   → Android Studio
packages/
  backend/    Convex schema + functions, shared by all → pnpm dev:backend
```

## Prerequisites

- Node 20+ and pnpm 10 (`corepack enable` or `npm i -g pnpm`)
- Xcode 16+ for iOS, Android Studio for Android

## First run (web + backend)

```sh
pnpm install

# 1. Start Convex. First time it asks you to log in and create a project,
#    then prints a deployment URL and keeps syncing your functions.
pnpm dev:backend

# 2. In another terminal, point the web app at that deployment.
cp apps/web/.env.example apps/web/.env.local   # set NEXT_PUBLIC_CONVEX_URL
pnpm dev:web                                    # http://localhost:3000
```

`pnpm dev` runs both at once after the first-time setup is done.

## Scripts (repo root)

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `pnpm dev`          | Convex dev + Next.js dev, in parallel          |
| `pnpm dev:web`      | Next.js only                                   |
| `pnpm dev:backend`  | Convex only (pushes schema/functions on save)  |
| `pnpm build`        | Build every package                            |
| `pnpm lint`         | Lint every package                             |
| `pnpm typecheck`    | Type-check every package                       |
| `pnpm convex <cmd>` | Run any Convex CLI command against the backend |

## iOS

```sh
open apps/ios/PMDM.xcodeproj
```

Pick the PMDM scheme and a simulator, then ⌘R. Convex client wiring for Swift comes next.

## Backend

See [`packages/backend/README.md`](packages/backend/README.md). All tables live in
`packages/backend/convex/schema.ts`; the `_generated/` folder is committed so every app
type-checks without a running dev server.
