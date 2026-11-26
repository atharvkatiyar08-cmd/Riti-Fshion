# RITI FASHION — Public Website

This is the public, static, multi-page RITI FASHION website for garment manufacturing and stitching job work. It preserves the supplied logo and uses a cream, ivory, black and champagne-gold visual direction.

## Open the website

1. Open the `Riti-Fasion` folder in VS Code.
2. Open `index.html` directly in a browser, or use VS Code Live Server to preview at a local address such as `http://127.0.0.1:5500/`.
3. Use the navigation to review each page. The logo, licensed stock photographs, original illustrations and OFL-licensed fonts are stored locally.

The site also works as static files without a build step or package installation.

## Pages

- `index.html` — homepage, service overview, four-stage process preview, business enquiry form and the Sample Edit after the enquiry section.
- `sample-edit.html` — dedicated product-catalogue page sharing the same public `window.RITI_SAMPLE_EDIT` data source as the homepage preview.
- `learnmore.html` — independent detailed manufacturing-services page containing all eleven approved service explanations.
- `about.html` — company approach and owner-vision message without invented personal history.
- `services.html` — manufacturing, stitching, sampling, material, quality and finishing services with detailed Learn More links.
- `manufacturing-details.html` — garment categories, customer-provided fabric, capabilities, MOQ confirmation and quotation process.
- `portfolio.html` — filterable garment-category references using licensed editorial photographs, clearly distinguished from RITI FASHION products or completed work.
- `process.html` — detailed six-stage garment manufacturing process with key activities.
- `contact.html` — business contact details and a separate enquiry form.
- `privacy.html` — visitor-facing privacy policy describing current contact and sample-order availability.
- `docs/IMAGE-SOURCES.md` — stock image sources, licence notes, edits, and font licence record.
- `robots.txt` and `sitemap.xml` — technical SEO files with a reserved-domain placeholder.

## What works in this prototype

- Responsive navigation, including keyboard-operable mobile menu, outside-click and Escape dismissal, and fixed mobile call / WhatsApp / quote bar.
- Internal page links, contact links (`tel:` and `mailto:`), map link and WhatsApp shortcuts.
- Direct WhatsApp buttons open a pre-filled message without requiring form submission.
- Enquiry forms validate required fields for WhatsApp drafts. Website submission is currently unavailable and visibly disabled; WhatsApp opens a draft for the visitor to review and send.
- Portfolio category filters and keyboard-operated image previews.
- The RITI Sample Edit is a data-driven, empty catalogue until verified product information and photographs are supplied. Its listing renderer supports multiple photos, fabric, specifications, per-piece price, currency, MOQ and available stock; only complete, in-stock listings are shown. It is not connected to the owner dashboard and has no checkout or payment flow. The section clearly states that no products are currently available and future orders will be online-payment only, with no cash on delivery.
- Page-specific title/description, canonical and social metadata, a local social-sharing image, sitemap and robots file. The homepage contains organization structured data using existing public business contact information.
- Current phone, email, WhatsApp and address details are shared consistently. Delivery and international order wording avoids unconfirmed shipping terms.

## Not connected yet

No sample purchase, payment or checkout is available. The website enquiry form does not transmit or store entries and remains disabled; phone, email and WhatsApp links remain available. The sample catalogue is not connected to the owner dashboard or a product API.

### Planned administrator dashboard for Prototype 3

The future dashboard is for authorised RITI FASHION administrators only. Planned areas include overview, enquiries, customers, quotations, orders, production, portfolio management, notifications, website settings and account settings. Customers will receive updates through WhatsApp or other manually managed channels; no customer login or portal is planned. It should use authenticated server-side access and a persistent database; a static page or browser-only storage would not be a private or shared dashboard. The preferred stack is Astro, TypeScript, React where needed, Tailwind CSS, Cloudflare Workers, D1, R2 and Drizzle. These integrations are not part of this prototype. The Milestone 2A inspection, integration plan and un-applied D1 schema blueprint are in [`docs/MILESTONE-2A-ARCHITECTURE.md`](docs/MILESTONE-2A-ARCHITECTURE.md) and [`docs/database-schema.sql`](docs/database-schema.sql).

## Before publishing

- Replace `YOUR-CONFIRMED-DOMAIN.example` in canonical tags, Open Graph/Twitter URLs, `robots.txt` and `sitemap.xml` after the public domain is confirmed.
- Confirm business legal identity, privacy-request contact channels, applicable legal text and retention practices before publishing the Privacy Policy.
- Confirm current contact details and current minimum order quantities before publication. No 200-piece MOQ or unsupported capacity claim is published.
- Supply actual sample product names, original product photographs, material and product specifications, prices, currency, MOQ and available stock before publishing sample listings.
- If website enquiry submission is to be enabled, approve/configure the endpoint and public Turnstile key in each page's metadata and configure the endpoint's allowed origin, expected hostname, and Turnstile server secret. Do not put server secrets in public files.
- Do not activate online payment or checkout until payment-provider, order, tax, privacy and delivery requirements are approved and configured.
- Keep all three recoverable backup folders out of the production upload. `robots.txt` discourages indexing but does not prevent direct access to files.

The original Prototype 1 files are retained in `prototype-1-backup`. Pre-upgrade copies are retained in `prototype-2-before-upgrade` and `prototype-3-before-upgrade`.

## Backend foundation (Milestone 2B)

An isolated Cloudflare Worker/D1/R2 foundation is in `backend/`; it does not migrate or replace this static website. The backend migration is applied only to Wrangler's local D1 emulator. Cloudflare account resources, Turnstile, administrator Access, email delivery, production deployment, and public form integration are not configured. Existing website enquiries still use the email/WhatsApp draft flow described above.

See [`docs/MILESTONE-2B-IMPLEMENTATION.md`](docs/MILESTONE-2B-IMPLEMENTATION.md) for implemented scope, verification, limitations, and next steps, and [`docs/CLOUDFLARE-SETUP.md`](docs/CLOUDFLARE-SETUP.md) for setup and approval gates.

## Owner dashboard demo (Milestone 2C)

A separate Astro/React owner-workflow dashboard is in [`admin/`](admin/). It is a synthetic-data local demo, not a production admin service: it has no login, backend APIs, shared database, email delivery, live payments or R2 uploads. Start it with `npm install` and `npm run dev` from that folder; open `http://127.0.0.1:4321/`. Do not deploy it or enter real customer information. See [`admin/README.md`](admin/README.md) and [`docs/MILESTONE-2C-IMPLEMENTATION.md`](docs/MILESTONE-2C-IMPLEMENTATION.md) for functionality, security boundaries and remaining backend work. The approved public website remains unchanged.