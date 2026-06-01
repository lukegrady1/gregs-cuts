# Daily Updates Bulletin Board

## Overview

Replace Greg's daily Facebook stock updates with a bulletin board feature on the website. Posts are casual, body-text-only entries (no titles) fetched client-side from Contentful. The site keeps its current static export deployment model — no ISR, no webhooks, no Netlify/Contentful integration needed.

## Contentful Setup

Create a free Contentful space for Greg's Cuts with one content type:

**Content type: "Update"**

| Field        | Type          | Notes                                              |
| ------------ | ------------- | -------------------------------------------------- |
| `body`       | Rich Text     | Supports bold, links, line breaks — like a Facebook post |
| `publishedAt`| Date & Time   | Defaults to current date/time, editable for backdating  |

- No title field. Contentful's internal entry name auto-generates from the date.
- Greg publishes an entry in Contentful; it's live on the site within seconds (next page load).

## Data Fetching

- Fetch from Contentful's **Content Delivery API** (read-only CDN, free tier: 1M requests/month).
- Call the REST API directly — no `contentful` SDK needed, keeps bundle small.
- API credentials stored as `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` and `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` environment variables.
- These are safe to expose client-side because the Content Delivery API is read-only and scoped to published content only.

### Utility: `lib/contentful.ts`

A small fetch wrapper that:

- Queries the Contentful CDN for entries of type "Update"
- Orders by `publishedAt` descending
- Accepts an optional `limit` parameter
- Returns an array of `{ body: RichTextDocument, publishedAt: string }`

## Homepage Preview

New `<DailyUpdates />` component added to the homepage between existing sections.

**Displays:**

- Section heading consistent with existing site style (eyebrow + title pattern)
- The 3 most recent updates
- Each update shows:
  - Formatted date (e.g. "June 1, 2026")
  - Body text rendered from Contentful rich text
- A "See all updates" button linking to `/updates`
- Loading skeleton while the client-side fetch is in flight
- Empty state if no updates exist yet

## Updates Page (`/updates`)

Full bulletin board page showing all posts.

**Structure:**

- Uses the existing `PageHero` component for the page header
- Lists all updates in reverse chronological order (newest first)
- Same card styling as the homepage preview
- Loading skeleton while fetching
- Navigation link added to the site header/nav

## Rich Text Rendering

Contentful rich text comes as a structured JSON document. Need a lightweight renderer that handles:

- Paragraphs
- Bold / italic
- Links (open in new tab)
- Line breaks

No images, embeds, or complex blocks needed — these are casual text posts.

## Styling

All new components follow the existing site aesthetic:

- Vintage barbershop theme
- Same color palette, typography, and spacing patterns
- Card styling consistent with other content sections on the site

## What This Design Does NOT Include

- No Netlify build triggers or webhooks
- No Contentful Netlify extension
- No server-side rendering or ISR
- No SDK dependency — raw REST API fetch only
- No pagination on the `/updates` page (revisit if post count grows significantly)
- No image support in posts (text-only, like the Facebook posts they replace)
