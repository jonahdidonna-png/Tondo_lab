# PLAN.md

## Status

- Approved by the user on 2026-05-04.
- Coding may start from Home Gate 1 only after this documentation baseline is committed or explicitly skipped by the user.
- Planned scope remains seven pages unless the user explicitly changes it.

## Supporting Docs

- `docs/CONTEXT.md`: domain language and resolved ambiguities.
- `docs/JOURNEYS.md`: research journey summary from exported PDFs.
- `docs/IMPLEMENTATION.md`: implementation decisions, constraints, QA, and high-risk stop points.
- `docs/HOME-PLAN.md`: Home section-by-section workflow and approval gates.
- `docs/TECHNICAL-PLAN.md`: CSS/JS/content/assets/QA defaults.

## Objective

- Convert the 7-page Figma prototype for **Tondo-lab** into a polished responsive vanilla `HTML/CSS/JS` prototype.
- Prioritize clarity, finish, identity consistency, autonomous navigability, and coherence with the pitch/process materials.

## Approved Strategy

- Desktop at `1920px` should feel very close to Figma.
- Tablet and mobile adapt proportionally with readable layouts, scalable typography, and no unintended horizontal overflow.
- Home is implemented section by section first.
- Home preserves the Figma structure; journey gaps are filled through microcopy, CTAs, form states, and links in existing blocks.
- Later pages remain in scope; after Home, only gate granularity is reassessed.
- Assets are local; coherent substitutions are allowed only when useful or necessary.
- Interactions are essential and simulated: no real login, backend, filters, payments, or persistent accounts.
- Visible copy typos are corrected automatically.

## Planned File Structure

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

## Page Order

1. Home.
2. About.
3. Corsi archive.
4. Corsi single.
5. Biblioteche archive.
6. Biblioteche single.
7. Insegnanti single.

## Workflow

1. Final approval of this plan.
2. Optional documentation baseline commit if requested/approved.
3. Scaffold, tokens, local assets, shared CSS/JS structure.
4. Home Gate 1: scaffold + header + hero.
5. Home Gate 2: featured courses.
6. Home Gate 3: join/contact/candidacy form.
7. Home Gate 4: footer.
8. Home Gate 5: responsive + interactions QA.
9. Reassess gate granularity for later pages.
10. Implement remaining pages, interactions, responsive polish, and final QA.
11. Commit only approved milestones according to `AGENTS.md`.

## Verification Checklist

- Pages open without build tooling or backend.
- Navigation links between prototype pages work.
- Header and footer are consistent across pages.
- Desktop, tablet, and mobile layouts avoid unintended horizontal overflow.
- Cards and CTAs are clickable where expected.
- Mobile menu, fake forms, FAQ accordion, calendar, and booking feedback work where present.
- Copy is coherent with Tondo-lab language and the Education brief.
- Final assets are local and images are not visibly stretched or degraded.
- Visual identity is consistent across all pages.
- QA covers at least `390x844`, `768x1024`, `1024x768`, `1440x900`, and `1920x1080`.

## Open Question

- Awaiting final user approval before implementation and before any documentation baseline commit.
