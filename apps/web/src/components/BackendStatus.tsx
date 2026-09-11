"use client";

import { useQuery } from "convex/react";
import { api } from "@pmdm/backend/convex/_generated/api";
import { isConvexConfigured } from "./ConvexClientProvider";

export function BackendStatus() {
  if (!isConvexConfigured) {
    return (
      <p className="text-sm text-zinc-500">
        Backend not configured. Set <code>NEXT_PUBLIC_CONVEX_URL</code> in{" "}
        <code>apps/web/.env.local</code>.
      </p>
    );
  }
  return <LiveStatus />;
}

function LiveStatus() {
  const status = useQuery(api.health.status);
  if (status === undefined) {
    return <p className="text-sm text-zinc-500">Connecting to backend…</p>;
  }
  return (
    <p className="text-sm text-zinc-500">
      Backend connected · {status.checkCount} health check
      {status.checkCount === 1 ? "" : "s"} recorded
    </p>
  );
}
