# Antigravity Prompt — Ultraa Album Redesign

You are building a redesigned demo website for Ultraa Album, a photo album manufacturer in Mumbai. The file `README.md` in the project root is the specification. Read it fully before doing anything else. If this prompt and README.md conflict, README.md wins. If anything is unclear, make the smallest reasonable assumption, write it in `HANDOFF-NOTES.md`, and keep going. Do not stop to ask unless a hard rule below would be broken.

## Sources

- Content source: https://ultraaalbums.com/ (current site)
- Structure reference only: https://www.zno.com/

## Hard rules (never break these)

1. **Copy content from the live Ultraa site.** Do not write marketing copy of your own. The only text you may author is navigation labels, form labels, button labels, alt text, and 404 text.
2. **Fix only obvious typos** in copied text. Do not rewrite, shorten, expand or "improve" it. If unsure, leave it as written and add `<!-- CHECK WITH CLIENT -->`.
3. **Never use anything from zno.com**: no text, images, logos, icons, prices, testimonials, product names or colours.
4. **Never invent** testimonials, awards, client names, statistics, prices, certifications or team members.
5. **Every page listed in README.md section 7 must exist** and be reachable from the header, footer or an in-page link. Before building, fetch the live sitemap (`/sitemap.xml` or `/wp-sitemap.xml`), compare it with the list, and add any missing page. Write the final list to `/content/page-list.md`.
6. **Design tokens are fixed.** Use only these colours, via CSS custom properties:
   - `--paper #FBF8F3`, `--blush #F2DAD3`, `--sage #D8E2D3`, `--sky #D6E2EA`, `--butter #F3E7C6`, `--ink #2A2724`, `--ink-soft #6A645D`, `--line #E4DDD2`
   - No other colour values anywhere in the code. No `#000`, no `#fff`, no pure grey.
7. **Forbidden visual patterns**: gradients, glassmorphism or blur, box-shadows (except one very soft shadow under product images), border-radius above 4px, pill buttons, neon or glow, parallax, auto-playing carousels, cursor effects, emoji, decorative icon rows, three-identical-cards-with-icons layouts, centred-everything hero layouts, stock photography, AI-generated imagery, decorative blobs or abstract shapes.
8. **Fonts**: exactly two families. A serif for headings (Newsreader or Instrument Serif) and a sans for body (Instrument Sans or Figtree). Self-host them. Do not use Inter, Roboto, Poppins, Montserrat or Space Grotesk.
9. **Banned words** in anything you write: elevate, unlock, seamless, seamlessly, empower, supercharge, revolutionize, cutting-edge, game-changing, next-level, tailored solutions, journey, delve, crafted experiences.
10. **Maximum one pastel per section.** Text is always `--ink`, except captions in `--ink-soft` which must pass WCAG AA.
11. **Images**: use only images from the Ultraa site (`wp-content/uploads`). Download, convert to WebP, resize, self-host, write real alt text. If an image is too small or missing, do not stretch or substitute it. Add it to `ASSETS-NEEDED.md` and use a plain `--line` bordered placeholder.
12. **No tracking scripts, no analytics, no third-party embeds** in the demo. No remote fonts or CDN assets at runtime.
13. **No customer accounts, no login, no cart, no prices.** The current site has none.
14. **Do not add pages or features** that are not in README.md or on the live site.

## Order of work (follow strictly, do not skip ahead)

Complete each phase and write one line of status in `PROGRESS.md` before starting the next.

Phase 1: Audit. Fetch the live sitemap and every URL in README.md section 7. Save each page's main content as Markdown in `/content/<slug>.md` with front matter (`title`, `description`, `url`). List all images each page uses. Write `/content/page-list.md`.

Phase 2: Assets. Download and optimise all images into `/public/images/<slug>/`. Download the catalog PDF into `/public/files/`. Write `ASSETS-NEEDED.md`.

Phase 3: Foundation. Create `tokens.css`, `base.css`, `components.css`. Build Header, Footer, Announcement bar, ContactTab, ProductTile, Split, Accordion, BeforeAfter and ProcessList components exactly as specified in README.md section 5.

Phase 4: Home page. Build in the exact section order in README.md section 5.

Phase 5: All other pages. Build every route in README.md section 7 using the copied content. Reuse components. UK pages keep their own copy and get `hreflang`.

Phase 6: Technical. Meta tags per page (reuse the live title and description), canonical URLs, `sitemap.xml`, `robots.txt`, redirects for `/mount-flush-album/` to `/flush-mount-album/`, structured data as listed in README.md section 9, a 404 page.

Phase 7: Verification. Run every check below. Fix failures. Re-run until all pass. Then write `HANDOFF-NOTES.md`.

