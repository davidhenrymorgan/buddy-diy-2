import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  emails: defineTable({
    email: v.string(),
    firstName: v.string(),
    signupDate: v.number(),
    source: v.string(),
    status: v.string(),
  })
    .index("by_email", ["email"])
    .index("by_signup_date", ["signupDate"]),
});
