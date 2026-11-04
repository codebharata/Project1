# Ultraa Album — Website Redesign Brief

Redesign of https://ultraaalbums.com/ using the structure and pacing of https://www.zno.com/ as a reference, with a pastel, minimal visual language.

This file is the single source of instructions for the build. Follow it in order.

---

## 1. The brief in one paragraph

Ultraa Album is a Mumbai-based photo album manufacturer and album design studio serving wedding photographers in India, the UK and worldwide. The current site is a WordPress build (Jupiter X theme, Elementor, Slider Revolution) that feels heavy and template-driven. The new site should feel like a small, well-run print studio: quiet, tactile, confident. Pastel colour, lots of paper-white space, real product photography, restrained type.

**Two client requirements that override everything else:**

1. Pastel colours, minimal design.
2. Content is copied from the current site, and **every page on the current site exists in the new demo.**

---

## 2. What to take from ZNO, and what not to

ZNO is a reference for **structure and rhythm**, not for look, copy or assets.

### Take
- Full-width hero with one strong product image and one clear action. Not a busy slider.
- Short value statements in a row of two or three, each with a single image (ZNO: "Best Value", "Broadest Selection", "Design Software").
- "Most popular products" as a horizontal strip of large product images with a one-line caption and a "Learn more" link.
- Alternating image / text sections that run edge to edge.
- Testimonials with a real name, studio name and a short paragraph (only if the client supplies real ones).
- A footer organised into clear columns (About, Support, Resources, Community) with address and contact details visible.
- A slim announcement bar at the very top for one offer.
- Navigation that is short at the top level and holds depth in dropdowns.

### Do not take
- ZNO's logo, colours, typography, photography, icons, copy, testimonials, prices, discount tiers or product names.
- The US-style promotional density (multiple discount banners, pop-ups, "Sign up / Log in" clutter). Ultraa has no customer accounts on the current site, so do not add any.
- Software-product language (cloud, AI retouching). Ultraa is a manufacturer and design service.

---

## 3. Design direction

### Mood
A printed album on a linen table. Warm paper, soft pastel blocks, a single dark ink colour for text. Calm, unhurried, tactile. Closer to a stationery brand than a SaaS landing page.

### Colour tokens
Pastels are used as **flat section backgrounds**, never as gradients. Text is always the warm ink colour.

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FBF8F3` | Default page background |
| `--blush` | `#F2DAD3` | Primary pastel, hero panels, feature blocks |
| `--sage` | `#D8E2D3` | Secondary pastel, product sections |
| `--sky` | `#D6E2EA` | Tertiary pastel, services / editing |
| `--butter` | `#F3E7C6` | Sparing accent, announcement bar, highlights |
| `--ink` | `#2A2724` | Body and heading text (warm near-black, never `#000`) |
| `--ink-soft` | `#6A645D` | Secondary text, captions |
| `--line` | `#E4DDD2` | Hairline borders and dividers |

Rules:
- Maximum **one pastel per section**. Do not mix blush and sage in the same block.
- Check contrast. `--ink` on every pastel must pass WCAG AA. Use `--ink-soft` on pastels only for large text or captions, and verify.
- Buttons: solid `--ink` background with `--paper` text, or a 1px `--ink` outline. No coloured glows, no gradient fills.

### Typography
Two families only.

- **Headings:** a refined serif with some character. Suggested: *Newsreader* or *Instrument Serif* (Google Fonts). Regular weight, large, tight tracking. Sentence case.
- **Body / UI:** a quiet sans. Suggested: *Instrument Sans* or *Figtree*. 16–18px body, 1.6 line height.
- Avoid the default-looking stack of Inter plus a rounded display font.
- Provide real fallback stacks (`Georgia, serif` and `system-ui, sans-serif`).
- Use fluid `clamp()` sizes. Hero heading roughly 48–84px on desktop. Small uppercase labels (12px, letter-spacing 0.08em) for eyebrows only.

### Shape and surface
- Corners: **0–4px radius**. Albums are rectangles. No pill buttons, no 24px rounded cards.
- No drop shadows, except a very soft one under product images sitting on a pastel (so they feel like objects on a surface).
- Borders: 1px `--line` hairlines to separate sections and list items.
- No glassmorphism, blur, gradient meshes, neon or glow.

### Imagery
- Use **Ultraa's own photography** (albums, boxes, bags, wedding work, before/after edits) from the current site's `wp-content/uploads`. Download, resize, convert to WebP/AVIF, and self-host.
- Crop images consistently. Prefer neutral-surface product shots so pastels sit well beside them.
- No stock "team at laptop" photos. No AI-generated imagery. No 3D blobs, abstract shapes or decorative illustrations.
- If an image is too low quality, list it in `ASSETS-NEEDED.md` for the client to re-shoot. Do not stretch it.
- Every image gets meaningful alt text (describe the album, not "image of album").

### Motion
- Subtle only: 200–300ms opacity/translate on scroll reveal, image hover zoom of at most 3%, smooth accordion open/close.
- Respect `prefers-reduced-motion`.
- No parallax, no cursor effects, no auto-playing carousels. Any carousel must be user-controlled with visible arrows and a count (like ZNO's "1/5").

---

## 4. How to avoid the "AI template" look

This is a stated requirement. Check every page against this list before calling it done.

**Layout**
- Do not centre everything. Use left-aligned headings with generous right-hand space, offset image/text splits, and uneven column widths (7/5, 5/7).
- No "three identical rounded cards with an icon on top" pattern anywhere.
- No hero with a centred headline, two buttons and a gradient behind it.
- Vary section rhythm: full-bleed image, then text on a pastel, then a hairline-separated list, then a split. Avoid stacked equal-height blocks.
- Use whitespace deliberately. Big gaps between sections (96–160px desktop), tight spacing inside groups.

**Iconography**
- No icon libraries used as decoration (no sparkles, rockets, shields, checkmark-in-circle rows).
- Where a mark is needed, use a small numeral (01, 02, 03) or a plain text label.

**Copy**
- Content comes from the client's site (section 6). Do not add generated marketing filler.
- Banned words in anything you write (microcopy, buttons, alt text, meta): *elevate, unlock, seamless, seamlessly, empower, supercharge, revolutionize, cutting-edge, game-changing, next-level, tailored solutions, journey, delve, crafted experiences*.
- Buttons use plain verbs: "View albums", "Request a sample", "Send message".
- No invented triplet slogans ("fast, simple, and reliable").

**Details that make it feel human**
- Real contact details visible in the header or footer.
- A proper favicon from the existing logo.
- A tidy 404 page in the same style.
- One accent per section, used consistently.
- Considered focus states and selection colour (`::selection` in `--blush`).
- `text-wrap: balance` on headings to avoid widows.

---

## 5. Layout system and components

- Max content width 1200px; text measure 60–70ch; 12-column grid; 24px gutters (16px on mobile).
- Breakpoints: 480 / 768 / 1024 / 1280. Mobile first. Test at 360px.

### Global components
1. **Announcement bar** (`--butter`, 36px, small text). One message from the existing site: *10% off on Studio Samples for photographers.* Dismissible.
2. **Header**: logo left, nav centre/right, one outline button "Request a quote" linking to `/contact-us/`. Sticky, `--paper` background, 1px bottom `--line`.
3. **Dropdowns**: Products (6 items), Services (2 items), UK (7 items). Simple list panel on `--paper`, no icons, 1px border.
4. **Footer**: four columns on a `--sage` or `--blush` block (pick one, keep it site-wide).
   - Brand: logo, short description, address.
   - Products: the six product pages.
   - Company: About, Album Designing, Blogs, FAQ, Catalog (PDF).
   - Contact: phones, emails, Messenger link, Pay Online.
   - Bottom strip: Privacy Policy, Terms & Conditions, © 2026 Ultraa Album. All rights reserved.
5. **Floating contact**: replaces the current floating form + Messenger + phone with one small "Contact" tab bottom-right that opens a compact form and shows both phone numbers and the Messenger link.
6. **Product tile**: large image, product name in serif, one-line description, "Learn more" text link with arrow. No card border; the image carries it.
7. **Split section**: 50/50 or 58/42 image + text on a pastel background.
8. **Accordion** for FAQ.
9. **Before/After slider** for photo editing samples (drag handle, keyboard accessible).
10. **Process list** for "How we work": numbered 01–04, hairline-separated rows.

### Home page structure (ZNO-informed order)
1. Announcement bar
2. Header
3. **Hero**: full-width image of a flagship album on a pastel surface. Left-aligned H1 using the current copy ("Build Your Wedding Photo Book With Us"), one supporting sentence, button "View our albums".
4. **Occasions strip**: Wedding, Baby, Family, Travel, Premium Wall Art. Replaces the Slider Revolution hero. Five large images in a horizontal scroller with captions and the existing descriptions. (All five "Click Here" links on the current site point to `/wedding-photo-albums/`. Link each to its most relevant page and note this in the handoff.)
5. **Intro**: "Give wings to your imagination with the best photo album manufacturer in Mumbai". Two columns: heading left, existing body text right. Cover image below.
6. **Our Products**: Luxury Albums, Flush Mount Album, Photo Book, Layflat as large tiles; "See all products" link to `/our-products/`.
7. **Services we offer**, three alternating splits:
   - Photo Editing Services (`--sky`)
   - Best Photo Album Books Designer (`--blush`)
   - Wedding Photography Services (`--sage`)
8. **Photo Editing Sample Before / After**: three sliders (Image Manipulation, Background Removal, Foreground Removal).
9. **How we work**: four numbered steps (Transfer Photos Online, Get Design, Printing, Shipping).
10. **Why Ultraa**: World Wide Delivery, Cost Effective, Reliable Quality, Customer Centric. Plain text on hairline rows, no icons.
11. Footer

---

## 6. Content rules

**The live site is the source of truth.** Copy text from each page of https://ultraaalbums.com/.

- Copy content **verbatim**, with these exceptions:
  - Fix obvious typos and spacing (e.g. "howcase" → "showcase", "ptotographs" → "photographs", "Servie" → "Service", "Photograpy" → "Photography", "childs" → "child's").
  - Fix grammar only where meaning is unambiguous.
  - Anything uncertain stays as written, with a `<!-- CHECK WITH CLIENT -->` comment.
- Do **not** invent claims, numbers, testimonials, awards, client names or prices.
- Do **not** copy any text or images from zno.com.
- Keep headings and page titles recognisable so SEO value carries over. Preserve each page's existing `<title>` and meta description.
- The brand appears as "Ultraa Album", "Ultra Albums", "Ultra Album" and "UltraaAlbums" across the current site. Use **Ultraa Album** in the new UI and flag the inconsistency to the client. Domain stays ultraaalbums.com.

### Suggested scraping approach
For each URL in section 7, fetch the HTML, extract the main content (everything between header and footer), and save as Markdown in `/content/<slug>.md` with front matter (`title`, `description`, `url`). Download referenced images into `/public/images/<slug>/`. Review by hand. Do not publish raw scraper output.

### Content already verified from the live site

**Contact page**
- Address: Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Hwy, Dahisar East, Mumbai 400068, INDIA
- Phone: +91-93222 54315, +91-93200 54315
- Email: ultraaalbums@gmail.com, ultraadesignes@gmail.com (as published; confirm with client)
- Form fields: Name, Phone Number, Email, Country, Message
- Messenger: https://m.me/UltraaAlbums

**About page**
- Team started photography in 2010; Ultraa Album founded 2012.
- Team: Rajiv Panchal (Founder), Mayank Panchal (Co-Founder), Bhairavi Panchal (Head of Designing Department). Photos are under `/wp-content/uploads/2021/10` and `/2021/11`.
- Why Choose Us: Affordable Albums, Reliable Quality, Customer Centric, Complete Privacy & Security of Your Images.
- "We Invest In You": 10% Off on Studio Samples.
- One paragraph on the live About page is garbled (the "four themes of design…" sentence). Confirm the intended wording with the client before copying.

**Our Products (listing)**
- Flush Mount Albums, Lay Flat Albums, Luxury Albums, Photo Book, Box & Bags, Slip in Albums, each with the description already on the site.

**Home page**
- Headline, subhead, intro paragraphs, three service blurbs, "How we work" steps and before/after samples as listed in section 5.

---

## 7. Page inventory: every page must exist in the demo

All routes below come from the current site's navigation, footer and in-page links. Build each one with content copied from the matching live URL.

### Core
| Route | Notes |
|---|---|
| `/` | Home, see section 5 |
| `/about-us/` | Story, team, why choose us, studio sample offer, size/side diagrams |
| `/our-products/` | Six product tiles |
| `/album-designing/` | Album design service |
| `/contact-us/` | Details, form, map link |
| `/blogs/` | Post index. Also scrape every individual post |
| `/faq/` | Accordion |
| `/privacy-policy/` | Plain legal layout |
| `/terms-and-condition/` | Plain legal layout |

### Products
| Route | Notes |
|---|---|
| `/flush-mount-album/` | The products listing links to `/mount-flush-album/`. Check both and redirect one to the other |
| `/layflat/` | |
| `/photo-book/` | |
| `/luxury-albums/` | |
| `/box-and-bags/` | |
| `/slip-in-albums/` | |
| `/wedding-photo-albums/` | Linked from the home slider and footer |

### Services
| Route | Notes |
|---|---|
| `/image-editing/` | |
| `/photography/` | Wedding Photography |
| `/photo-editing-and-album-design/` | Linked from the home Photo Editing "Click here" |
| `/album-designs/` | Linked from the home "Best Photo Album Books designer" |

### UK pages (nav group "UK")
| Route |
|---|
| `/flush-mount-album-for-uk/` |
| `/luxury-albums-for-uk/` |
| `/box-and-bags-for-uk/` |
| `/slip-in-albums-for-uk/` |
| `/image-editing-for-uk/` |
| `/photo-book-for-uk/` |
| `/photography-for-uk/` |

Treat UK pages as real pages with their own copy (they exist for local SEO). Add `hreflang="en-GB"` to these and `en-IN` to the Indian equivalents. Do not merge or drop them.

### External / files
- **Pay Online**: https://www.paypal.com/in/signin (new tab, `rel="noopener"`)
- **Catalog**: `/wp-content/uploads/2021/11/Ultraa-product-Catelogue.pdf`. Download, host it on the new site, link from footer and Products.
- **Messenger**: https://m.me/UltraaAlbums

### Before you start
Crawl the live site (`/sitemap.xml` or `/wp-sitemap.xml`) and compare it with this table. **If any URL is on the sitemap but missing here, add it.** Record the final list in `/content/page-list.md`.

---

## 8. Navigation

Keep the current information architecture so existing visitors and search engines aren't lost.

```
Home
About us
Our Products
  Flush Mount Album
  Layflat
  Photo Book
  Luxury Albums
  Box and Bags
  Slip in Albums
Services
  Image Editing
  Wedding Photography
UK
  Flush Mount Album for UK
  Luxury Albums for UK
  Box and Bags for UK
  Slip in Albums for UK
  Image Editing for UK
  Photo Book for UK
  Photography for UK
Album Designing
Blogs
Contact Us
Pay Online  (external)
```

On mobile: a full-screen menu on `--paper` with large serif links, collapsible groups, and the phone numbers at the bottom.

---

## 9. Technical requirements

The tech stack wasn't specified. Default recommendation: a static multi-page site (Astro, or Next.js with static export), since the content is mostly fixed. Plain HTML/CSS is fine for a demo. Adjust if the client needs WordPress to stay.

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one `h1` per page.
- CSS custom properties for all tokens in section 3. No stray colour values elsewhere.
- Images: WebP/AVIF with `srcset`, explicit width/height, `loading="lazy"` below the fold, hero image preloaded.
- Self-host fonts, `font-display: swap`, subset to Latin.
- Lighthouse targets (mobile): Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100.
- Accessibility: visible focus rings, keyboard-operable menus/accordions/sliders, 44px minimum tap targets, labelled form fields.
- Contact form: client-side validation, honeypot field, endpoint set by env var. In the demo, show a clear success state and leave a TODO. Don't ship a form that silently goes nowhere.
- SEO: unique `<title>` and meta description per page (reuse existing), canonical URLs, Open Graph tags, `sitemap.xml`, `robots.txt`, and a 301 redirect map for any changed URLs.
- Structured data: `LocalBusiness` on Home and Contact; `FAQPage` on FAQ; `BlogPosting` on posts.
- No tracking scripts in the demo.

### Suggested structure
```
/content/            page copy as markdown + page-list.md
/public/images/      optimised assets, grouped by page
/public/files/       catalog PDF
/src/styles/         tokens.css, base.css, components.css
/src/components/     Header, Footer, ProductTile, Split, Accordion, BeforeAfter, ContactTab
/src/pages/          one file per route in section 7
ASSETS-NEEDED.md     images that are too small or missing
HANDOFF-NOTES.md     content issues found (typos, broken links, inconsistencies)
```

---

## 10. Known issues on the current site to resolve or flag

- All five home slides link to `/wedding-photo-albums/` regardless of topic.
- The products listing links to `/mount-flush-album/` while the nav links to `/flush-mount-album/`.
- The brand name varies (Ultraa Album / Ultra Albums / Ultra Album).
- Typos in published copy (see section 6).
- `ultraadesignes@gmail.com` may be a typo; confirm with the client.
- Slider Revolution slides use placeholder `dummy.png` in the markup; real images load via script. Pull the actual images from the Media Library.
- No pricing is shown anywhere on the current site. Do not add any.

Record all of these in `HANDOFF-NOTES.md`.

---

## 11. Definition of done

- [ ] Every route in section 7 exists, is linked from nav or footer, and loads with real copied content.
- [ ] Sitemap cross-check complete; no live page missing.
- [ ] Palette, type and spacing come only from the tokens in this file.
- [ ] Anti-template checklist (section 4) passes on Home, a product page, About and Contact.
- [ ] No text, image or asset from zno.com anywhere in the build.
- [ ] No banned words, no decorative icon rows, no gradients, no glass effects.
- [ ] Looks right at 360, 768, 1024 and 1440px.
- [ ] Lighthouse and accessibility targets met.
- [ ] `ASSETS-NEEDED.md` and `HANDOFF-NOTES.md` written.
- [ ] Reviewed by someone who didn't build it, and who can't tell it was generated.
