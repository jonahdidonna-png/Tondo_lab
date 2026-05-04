# Technical Plan

This document records implementation-level defaults approved through the grill process and sub-agent review.

## File Structure

- `index.html`
- `about.html`
- `corsi.html`
- `corso-ux-ui.html`
- `biblioteche.html`
- `biblioteca-braidense.html`
- `insegnante-alessia.html`
- `css/styles.css`
- `js/main.js`
- `assets/`

## CSS Layer Outline

- `@layer reset`: box sizing, base element reset.
- `@layer tokens`: CSS custom properties for colors, fonts, spacing, radius, shadows, layout widths, z-index.
- `@layer base`: body, typography defaults, links, buttons, images, focus states.
- `@layer layout`: containers, sections, grids, split layouts, stacks.
- `@layer components`: header, nav, mobile menu, buttons, tags, cards, forms, footer.
- `@layer interactions`: accordion, calendar, booking feedback, form success, show-more.
- `@layer pages`: page-specific hero/archive/detail/Home rules.
- `@layer utilities`: minimal helper classes only when reusable and semantic enough.
- `@layer responsive`: breakpoint overrides and reduced-motion handling.

## JavaScript Function Map

- `initMobileNav()`: toggles the mobile menu, updates `aria-expanded`, closes on link click and `Escape` where feasible.
- `initCardLinks()`: supports clickable cards if `data-href` is used.
- `initFakeForms()`: intercepts form submit, uses native validation, shows inline success state.
- `initFaqAccordions()`: handles FAQ accordion buttons and `aria-expanded`.
- `initTeacherCalendar()`: handles date/slot selection in teacher page.
- `updateSlotDetail(dateId)`: updates selected slot detail content.
- `initBookingFeedback()`: shows simulated booking confirmation with slot recap and post-course feedback/`+1` mention.
- `initShowMore()`: optional list expansion where it improves clarity.
- `initCurrentPageState()`: applies current nav state if not hardcoded.
- `init()`: safe initializer that runs only relevant functions when elements exist.

## Content Defaults

### Courses

- UX/UI per servizi pubblici: Biblioteca Braidense, teacher Alessia Romano, base.
- Scrittura efficace per il lavoro: Biblioteca Sormani, base.
- Introduzione a Figma: Biblioteca Valvassori Peroni, base.
- Fotografia urbana con smartphone: Biblioteca Chiesa Rossa, workshop.
- Italiano pratico per nuovi cittadini: Biblioteca Dergano-Bovisa, base.
- Podcast di quartiere: Biblioteca Affori, intermedio.

### Libraries

- Biblioteca Nazionale Braidense: centro, aula workshop, consultazione, accessibilità with clear route/info where limitations exist.
- Biblioteca Sormani: centro, sale studio, eventi, Wi-Fi.
- Biblioteca Valvassori Peroni: Lambrate, laboratori, sala ragazzi, accessibile.
- Biblioteca Chiesa Rossa: sud Milano, spazi comunitari, aula corsi.
- Biblioteca Dergano-Bovisa: nord, corsi lingua, coworking leggero.
- Biblioteca Affori: nord, sala multimediale, incontri serali.

### Teachers

- Alessia Romano: service designer, UX/UI per servizi pubblici.
- Marco Bellini: copywriter, scrittura pratica.
- Giulia Ferri: fotografa, fotografia urbana.
- Samira Haddad: mediatrice linguistica, italiano pratico.
- Luca Moretti: producer audio, podcast di quartiere.
- Elena Conti: facilitatrice digitale, strumenti collaborativi.

## Asset Export Priority

- Logo/wordmark Tondo-lab.
- Home hero visual and circular relationship elements.
- Actor icons/illustrations for studenti, insegnanti, biblioteche.
- Course card images.
- Library card/detail images, especially Braidense.
- Alessia profile photo.
- About/team images.
- Social icons.
- Decorative arrows, circular shapes, textures, or SVG motifs that define the visual language.

## QA Viewports

- `390x844`
- `768x1024`
- `1024x768`
- `1440x900`
- `1920x1080`

## Browser QA

- Chrome.
- Safari if available.

## Validation Defaults

- Open pages directly without backend/build tooling.
- Check links between pages.
- Check mobile menu, fake forms, FAQ, calendar, and booking states.
- Check keyboard focus and `aria-expanded` where relevant.
- Check no unintended horizontal overflow.
- Check images are local and not stretched.
- Check desktop Figma closeness at `1920px` before approval gates.

## Font Strategy

- Prefer local font files for `Baskervville`, `Outfit`, and `Inter` if they can be obtained/exported cleanly.
- If local font files are not practical, ask the user before using external imports such as Google Fonts.
