# Implementation Decisions

This document tracks technical and product decisions for translating the Figma prototype into a responsive vanilla `HTML/CSS/JS` deliverable. It complements `docs/CONTEXT.md`: domain terms live there, implementation choices live here.

## Current Decisions

- Use vanilla `HTML/CSS/JS`; no frameworks and no Tailwind.
- Use real static pages: `index.html`, `about.html`, `corsi.html`, `corso-ux-ui.html`, `biblioteche.html`, `biblioteca-braidense.html`, `insegnante-alessia.html`.
- Use shared `css/styles.css`, `js/main.js`, and local `assets/`.
- Keep the 1920px desktop implementation close to Figma while adapting proportionally for smaller widths.
- Build Home section by section first, then decide whether later pages can be implemented in larger milestones. The planned scope remains seven pages unless the user explicitly approves a reduction.
- Store key Figma assets locally and use coherent substitutions only where useful or necessary.
- Correct visible copy typos during implementation.
- Implement only essential interactions: mobile menu, real links/card navigation, FAQ accordion, calendar selection, booking feedback, fake form success, and show-more only if useful.
- Use desktop/tablet calendar grid and mobile agenda/card calendar.
- Do not implement real login, backend, complex filtering, or persistent accounts.
- Copy should frame **Insegnanti** as competent community members, possibly professionals, not formal school professors.
- Pages should keep **Biblioteche** as primary archive/detail entities; rooms or spaces appear only as descriptive attributes such as `Sala A` or `spazio attivabile`.
- Calendar UI should present each **Slot** as a concrete bookable lesson with title, time, place, seats, and CTA.
- The prototype must strongly communicate quality, safety, and sustainability through visible trust signals: curated teacher bio/skills, trusted library context, clear room/date/seats, short practical course outcomes, and accessible booking feedback.
- Do not build a full verification workflow; simulate the verified system through copy, badges, facts, and consistent page structure.
- Use `docs/JOURNEYS.md` as the current summary of exported journey PDFs.
- Use **Tondo-lab** as the only final service name. Do not use `Neo` outside research documentation references.
- Treat student, teacher, and library journeys as strategically equivalent. The prototype should expose all three with credible entry points and lightweight simulated continuation states.
- Use simulated states for journey gaps: booking confirmation mentions post-course feedback and `+1` recap; teacher form confirms candidacy received; library partnership CTA/form confirms next contact; newsletter/preference intent can be represented without accounts.
- Do not create full account, review, recap, or onboarding systems unless later explicitly approved.
- Use four responsive ranges: `>=1440px` wide desktop near Figma, `1024-1439px` compact desktop/tablet, `768-1023px` tablet, `<768px` mobile.
- Use controlled duplication for repeated static HTML structures such as header, footer, and recurring cards; keep CSS/JS shared and update duplicated markup consistently across pages.
- Low/medium-risk grill decisions have been reviewed through a planning sub-agent and documented here. Ask the user directly only for high-impact decisions that could significantly reduce the evaluation score, and request one final overall approval before implementation.
- Use semantic HTML and accessible controls for all interactive prototype states.
- Avoid emoji as primary UI icons in the final product; prefer SVG or Figma-consistent symbols. Text can remain warm and informal without becoming visually casual.
- Keep the prototype static/offline-friendly: no backend, no external map embeds, no external image dependencies in final assets.
- Preserve the Figma Home structure; do not add a new explicit journey section unless the user approves it after a visual gate.
- Use `docs/HOME-PLAN.md` for Home gates and `docs/TECHNICAL-PLAN.md` for implementation defaults.

## Responsive Rules

- `>=1440px`: preserve Figma spacing, large editorial type, and desktop compositions as closely as possible.
- `1024-1439px`: keep desktop structure where readable, reduce container width, spacing, image heights, and title sizes proportionally.
- `768-1023px`: use two-column layouts where content still reads well; stack dense detail sections and reduce large hero compositions.
- `<768px`: use hamburger navigation, one-column grids, stacked sections, compact forms, agenda-style calendar, readable type scaling, and no unintended horizontal overflow.

## Header Rules

- Desktop header follows the Figma pattern: brand on the left, black rounded pill navigation on the right.
- Mobile header uses compact brand plus hamburger button.
- Mobile menu opens as a lightweight dropdown or overlay with `Corsi`, `Biblioteche`, `About`, and simulated `Login`.
- Header color remains section-aware: yellow for Home/About, blue for Corsi/Insegnante, red for Biblioteche.

## Home Hero Rules

- At `>=1440px`, the Home hero should feel very close to the Figma composition: dark photographic background, large Tondo-lab logo, payoff, three circular actors, arrows/connection language, and quotes.
- On tablet, preserve the three-actor circular relationship but simplify spacing and decorative complexity.
- On mobile, transform the hero into narrative cards for `Studenti`, `Insegnanti`, and `Biblioteche`.
- Mobile cards must keep the desktop visual language: circular shapes, yellow/blue/red actor colors, curved/arrow connection motifs, warm quotes, and the idea of knowledge circulating.

## Card Grid Rules

- Archive pages use CSS Grid: 3 columns on wide/desktop, 2 columns on tablet, 1 column on mobile.
- Home `I nostri corsi` keeps the Figma-inspired 2-column desktop layout, then adapts to 2 columns or 1 column depending on available width.
- Cards are full-link elements where possible, not just title links.
- Course titles use the course blue accent; library titles use the library red accent; Home featured cards can use neutral/black unless section context calls for accent.
- Hover/focus behavior should be subtle: image lift/scale or overlay, title underline/color shift, visible keyboard focus.

## Detail Page Layout Rules

- Detail pages start with title/location and a full-width hero image or profile header.
- On desktop, main content uses a two-column layout: narrative/details on the left and facts/map/CTA/calendar support on the right.
- On tablet, stack selectively when content density makes two columns hard to read.
- On mobile, stack all content and surface the primary CTA early after the hero or in a near-sticky position if it does not feel invasive.
- Course detail primary CTA is booking/participation.
- Library detail primary CTA should support partnership/contact/space activation when present, while keeping map and access info readable.
- Teacher detail primary CTA is slot booking through the calendar/agenda.

## Footer Rules

- Desktop footer follows Figma: dark background, large Tondo-lab logo/payoff, social icons, and three link columns.
- Mobile footer stacks vertically: logo/payoff, social links, expanded link groups, copyright.
- Do not use footer accordions unless the link list grows significantly.
- Footer should remain identity-rich rather than minimal, because it reinforces coherence across pages.

## CSS Architecture

- Use CSS custom properties in `:root` for color, type, spacing, radius, shadow, and layout tokens.
- Organize `css/styles.css` with `@layer`, for example: `reset`, `tokens`, `base`, `layout`, `components`, `interactions`, `pages`, `utilities`, `responsive`.
- Keep selector specificity low, preferring single-class selectors and modifier classes.
- Use pragmatic component classes such as `.site-header`, `.button`, `.course-card`, `.library-card`, `.footer`, `.calendar`.
- Use theme/modifier classes such as `.theme-home`, `.theme-courses`, `.theme-libraries`, `.theme-about` for area-specific accents.
- Avoid strict BEM everywhere unless a component becomes complex enough to need it.
- Avoid atomic utility-heavy HTML and do not introduce Tailwind.

## Static HTML Reuse

- Use controlled duplication instead of JS includes, Web Components, or build tooling.
- Header/footer/card markup may be repeated across files for robust offline/static delivery.
- Keep repeated blocks structurally consistent and easy to search/update.
- Shared behavior belongs in `js/main.js`; shared styling belongs in `css/styles.css`.

## Accessibility Rules

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Use real links for navigation and real buttons for actions that change state.
- Provide visible `:focus-visible` states for nav links, cards, CTAs, accordions, calendar controls, and form fields.
- Use `aria-expanded` for mobile menu and FAQ accordion controls.
- Use `aria-live` for form and booking success messages.
- Associate form controls with visible labels.
- Use descriptive `alt` text for informative images and `alt=""` for decorative images.
- Verify contrast on yellow, blue, red, and dark footer combinations.

## Interaction State Rules

- Mobile menu supports open/closed state, closes on navigation link click, and should close on `Escape` when feasible.
- FAQ accordion supports expanded/collapsed states; one or multiple open items are acceptable as long as behavior is clear.
- Calendar supports selected slot, available slot, low-seats state, and disabled/full state if content includes it.
- Booking CTA shows immediate simulated confirmation with slot recap and mention of post-course feedback/`+1` recap.
- Contact/team form uses HTML validation and inline success state.
- Teacher candidacy form or section confirms candidacy received.
- Library partner CTA/form confirms next contact for activating spaces.
- Show-more behavior is used only if it improves clarity or avoids overwhelming a page.

## Form Rules

- No backend submission.
- Use native HTML validation where useful.
- Prevent default submission and show inline success feedback.
- Do not ask for sensitive documents or real personal data in the prototype.
- Represent full-service registration, preference collection, teacher verification, and partner onboarding as simulated intent rather than full workflows.

## Asset Rules

- Store final assets locally in `assets/`.
- Use lowercase kebab-case filenames.
- Prefer readable names such as `logo-tondo-lab.svg`, `home-hero-library.jpg`, `course-ux-ui.jpg`, `library-braidense.jpg`, `teacher-alessia.jpg`.
- Use SVG for logos/icons and compressed `jpg`/`webp` for photos.
- Avoid generic Figma names such as `image-12.png`.
- Use `loading="lazy"` for non-critical images.
- Use `object-fit: cover` and curated crop positions to preserve visual quality.
- If core Figma assets cannot be exported and substitutions would weaken fidelity, stop and ask the user.

## Content Rules

- Corsi archive should include at least six credible course cards.
- Biblioteche archive should include at least six credible library cards.
- Each course should connect clearly to one biblioteca, one insegnante, and at least one slot.
- Course content should state practical outcome, duration/date, place, teacher, seats, and accessibility/free-cost framing.
- Library content should state neighborhood/place, services, accessibility, and activated spaces.
- Teacher content should state competence, motivation, verified/trust signal, and upcoming slots.
- Every page should remain understandable independently: what the service is, who it helps, and what action is possible.
- Avoid marketplace/commercial language such as `cliente`, `acquista`, `vendita`, `premium`.

## Performance And Delivery Rules

- No frameworks, no build tooling, no external UI libraries.
- One shared CSS file and one shared JS file are acceptable.
- Load only needed fonts: `Baskervville`, `Outfit`, and `Inter` only for calendar numbers if used. Final font strategy is local font files when feasible; external font imports require user approval if local export is not practical.
- Avoid heavy embeds; use static map image or styled map placeholder for the library page.
- Offline/static delivery is prioritized.
- No dedicated print optimization unless a basic issue appears.

## QA Rules

- Compare wide desktop with Figma at `1920x1080` for hierarchy, palette, rhythm, and major compositions.
- Test at minimum: `390x844`, `768x1024`, `1024x768`, `1440x900`, `1920x1080`.
- Test in Chrome and Safari if available.
- Verify no unintended horizontal overflow.
- Verify navigation across all static pages.
- Verify mobile menu, FAQ, calendar selection, booking feedback, and form success states.
- Verify images are not stretched or visibly degraded.
- Verify header/footer consistency across pages.

## Commit Milestones

- Commit only after user-approved milestones or explicitly approved sections.
- Recommended commit points:
  - `docs: document project rules`
  - `feat: scaffold static prototype`
  - `feat: build home hero`
  - `feat: build home sections`
  - `feat: add shared interactions`
  - `feat: build course pages`
  - `feat: build library pages`
  - `feat: build teacher page`
  - `fix: polish responsive prototype`
- Before each commit, run `git status`, `git diff`, and recent `git log`, then stage only relevant files.

## High-Risk Decisions Requiring User Confirmation

- Reducing the planned seven-page scope.
- Moving away from desktop-near-pixel fidelity at `1920px`.
- Adding a new Home section or substantially changing the Home structure.
- Replacing core Figma assets with a substantially different visual direction.
- Changing `Tondo-lab` or `Il sapere che gira`.
- Using external font imports if local font files are not practical.
- Introducing real accounts, backend, payments, persistent data, or dashboards.
- Reframing the service as a marketplace, formal school, online course platform, or paid content product.
- Removing core prototype interactions: mobile menu, booking feedback, calendar, form success.
- Introducing frameworks or build tooling.
- Strongly changing tone, palette, or visual identity.
- Skipping responsive/browser QA before delivery.

## Stop Criteria Before Implementation

- Do not start coding before final overall user approval of the plan.
- Do not start a later page before the Home workflow validates the quality bar, unless the user changes this constraint.
- Stop and ask if essential Figma assets cannot be exported and substitutions would materially lower fidelity.
- Stop and ask if Figma, brief, and research documents conflict on a high-impact service behavior.

## Implementation Details To Refine During Build

- Exact token names can be refined during scaffold as long as the documented architecture is preserved.
- Exact repeated block conventions can be refined during scaffold.
- Exact asset export list should be finalized during scaffold.
- Exact interaction labels and success message copy should be finalized during page implementation.

## ADR Notes

- No ADR has been created yet.
- Create an ADR only for decisions that are hard to reverse, surprising without context, and based on a real trade-off.
