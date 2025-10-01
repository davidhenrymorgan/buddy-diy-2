import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Add a new email signup
export const addEmail = mutation({
  args: {
    email: v.string(),
    firstName: v.string(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("emails")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("Email already registered");
    }

    // Add the email
    const emailId = await ctx.db.insert("emails", {
      email: args.email,
      firstName: args.firstName,
      signupDate: Date.now(),
      source: args.source || "landing-page",
      status: "active",
    });

    return emailId;
  },
});

// Get all emails (for admin)
export const getAllEmails = query({
  handler: async (ctx) => {
    return await ctx.db.query("emails").order("desc").collect();
  },
});

// Get total count
export const getEmailCount = query({
  handler: async (ctx) => {
    const emails = await ctx.db.query("emails").collect();
    return emails.length;
  },
});

// Export emails (for admin CSV download)
export const getEmailsForExport = query({
  handler: async (ctx) => {
    const emails = await ctx.db.query("emails").order("desc").collect();
    return emails.map((email) => ({
      email: email.email,
      firstName: email.firstName,
      signupDate: new Date(email.signupDate).toISOString(),
      source: email.source,
      status: email.status,
    }));
  },
});
