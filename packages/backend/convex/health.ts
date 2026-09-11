import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/** Cheap read used by every client to confirm it can reach the backend. */
export const status = query({
  args: {},
  returns: v.object({
    ok: v.boolean(),
    serverTime: v.number(),
    checkCount: v.number(),
  }),
  handler: async (ctx) => {
    const checks = await ctx.db.query("healthChecks").collect();
    return { ok: true, serverTime: Date.now(), checkCount: checks.length };
  },
});

/** Records a ping from a client. Useful while wiring up each platform. */
export const ping = mutation({
  args: { source: v.string(), note: v.optional(v.string()) },
  returns: v.id("healthChecks"),
  handler: async (ctx, { source, note }) => {
    return await ctx.db.insert("healthChecks", { source, note });
  },
});
