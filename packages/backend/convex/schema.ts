import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * PMDM data model.
 *
 * Every table lives here so iOS, Android and web all see the same shape.
 * Add tables as the product takes shape; run `pnpm dev:backend` and Convex
 * will push the schema and regenerate types automatically.
 */
export default defineSchema({
  // Placeholder table so the schema is non-empty and end-to-end wiring can
  // be verified. Replace or extend once the domain model is decided.
  healthChecks: defineTable({
    source: v.string(), // "web" | "ios" | "android"
    note: v.optional(v.string()),
  }).index("by_source", ["source"]),
});
