"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { type ReactNode, useMemo } from "react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

/**
 * Wraps the app in a Convex client when NEXT_PUBLIC_CONVEX_URL is set.
 * Without it the app still renders, so the site works before the backend is provisioned.
 */
export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const client = useMemo(
    () => (convexUrl ? new ConvexReactClient(convexUrl) : null),
    [],
  );

  if (!client) return <>{children}</>;
  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}

export const isConvexConfigured = Boolean(convexUrl);
