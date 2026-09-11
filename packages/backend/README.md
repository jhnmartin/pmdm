# @pmdm/backend

Convex backend shared by every PMDM client (web, iOS, Android).

- `convex/schema.ts` – the data model
- `convex/*.ts` – queries, mutations, actions
- `convex/_generated/` – created by Convex; committed so clients type-check without a running dev server

## First-time setup

```sh
pnpm install
pnpm dev:backend   # runs `convex dev`, prompts you to log in / create a project
```

`convex dev` writes `packages/backend/.env.local` with `CONVEX_DEPLOYMENT` and prints the
deployment URL. Copy that URL into `apps/web/.env.local` as `NEXT_PUBLIC_CONVEX_URL`.

## Day to day

Leave `pnpm dev:backend` running; it pushes function and schema changes on save and keeps
`_generated/` up to date.
