# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a landing page for Buddy's DIY, a 700K+ YouTube creator who teaches car flipping. The project is specifically Phase 0: an email waitlist capture page with a strong focus on trust, authenticity, and serving the loyal audience.

## Essential Commands

```bash
# Development (always run from buddy-diy-landing/)
npm run dev              # Start Next.js dev server with Turbopack
npx convex dev          # Start Convex backend (separate terminal)

# Build & Deploy
npm run build           # Build for production
vercel deploy           # Deploy to Vercel

# Linting
npm run lint            # Run ESLint checks
```

## Architecture Overview

### Tech Stack
- **Next.js 15** with App Router and Turbopack
- **Tailwind CSS v4** with inline theme configuration
- **Convex** for real-time database and email storage
- **Resend** for transactional emails

### Key Data Flow

1. **Email Submission**:
   - User submits via `EmailForm` component
   - POST to `/api/subscribe/route.ts`
   - Stores in Convex via `emails.addEmail` mutation
   - Sends confirmation via Resend API
   - Real-time updates to admin dashboard

2. **Convex Schema**:
   - Single `emails` table with indexes on email and signup date
   - Mutations: `addEmail`
   - Queries: `getAllEmails`, `getEmailCount`, `getEmailsForExport`

### Component Architecture

The app uses a component-based approach with clear separation:
- **Page Components**: `Hero`, `TrustSection`, `ComingSoon`, `Footer`
- **Interactive**: `EmailForm` (handles submission state and validation)
- **Branding**: `BuddysDIYLogo` (SVG component with color variants)
- **Provider**: `ConvexProvider` wraps the app for real-time functionality

### Environment Configuration

Required variables in `.env.local`:
```
CONVEX_DEPLOYMENT=       # From Convex dashboard
NEXT_PUBLIC_CONVEX_URL=  # Public Convex URL
RESEND_API_KEY=          # Resend API key
RESEND_FROM_EMAIL=       # Optional: sender email
```

## Brand Principles

Critical requirements from Buddy's DIY brand:
- **Trust First**: No hype, no scammy tactics, authentic messaging
- **Mobile-First**: Audience primarily on phones
- **Voice**: "What's going on Everybuddy!" - maintain authentic tone
- **Colors**: Red (#D32F2F) as primary brand color, black/white/grays for professional look

## Project Structure Context

The workspace has a specific organization:
- `buddy-diy-landing/` - Main Next.js project (deployable)
- `_drafts/` - Alternative implementations (inline page.tsx, extended globals.css)
- `docs/brand/` - Brand guidelines and project briefs
- `_reference/primer-ts/` - Original Primer template for reference

## Key Implementation Details

### Email Validation
- Frontend: Basic HTML5 validation in EmailForm
- Backend: Regex validation + duplicate checking in `/api/subscribe/route.ts`
- Error handling: User-friendly messages for duplicates

### Admin Dashboard
- Located at `/admin` route
- Shows real-time signup count via Convex subscriptions
- CSV export functionality for email list

### Styling Approach
- Tailwind v4 with inline theme configuration in `globals.css`
- Brand colors defined as CSS variables
- Component-specific styles kept inline with Tailwind classes

## Current Phase & Future Roadmap

**Phase 0** (Current): Email waitlist landing page
**Phase 1**: Newsletter integration (ConvertKit/Mailchimp)
**Phase 2**: Member portal with Clerk auth
**Phase 3**: Course platform
**Phase 4**: Community features
**Phase 5**: Deal analyzer tools

Focus on Phase 0 completion with 2-3 hour deployment target.