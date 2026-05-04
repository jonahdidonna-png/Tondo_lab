# Home Implementation Plan

The Home page is the workflow pilot. It must stay close to the Figma structure while making the three journeys understandable through the existing blocks.

## Scope Decision

- Preserve the Figma Home structure.
- Do not add a new explicit journey section before user approval.
- Fill journey gaps through microcopy, CTA labels, card links, form role options, and simulated success states.
- If the first visual gate feels unclear, ask the user whether to add a compact journey section.

## Figma-Based Section Order

1. Header.
2. Hero with Tondo-lab wordmark, payoff, circular relationship between Studenti/Insegnanti/Biblioteche, quotes, and visual arrows.
3. Featured courses section.
4. Show-more/course archive CTA if useful.
5. Join/contact/candidacy form section.
6. Footer.
7. Responsive pass and Home JS states.

## Approval Gates

### Gate 0: Plan Approval

- User approves the final plan before coding starts.
- No implementation files are created before this approval.

### Gate 1: Scaffold + Header + Hero

- Create static scaffold and shared CSS/JS files.
- Implement design tokens, base CSS layers, header, mobile menu, and Home hero.
- Desktop at 1920px should feel very close to Figma.
- Mobile hero should become narrative cards while keeping the desktop visual language.
- Ask for approval before continuing.

### Gate 2: Featured Courses

- Implement `I nostri corsi` with Figma-inspired two-column desktop grid.
- Cards are clickable and link at least the UX/UI course to `corso-ux-ui.html` once that page exists.
- Include enough metadata to make student conversion understandable: title, place, duration/outcome if visually feasible.
- Ask for approval before continuing.

### Gate 3: Join/Contact Form

- Implement the existing Figma form section.
- Use it as the lightweight entry point for teacher candidacy and possible library contact by adding a role/interesse field if it does not harm visual fidelity.
- Form success state simulates follow-up and mentions the appropriate next step.
- Ask for approval before continuing.

### Gate 4: Footer

- Implement the Figma dark footer with logo, payoff, social icons, and link groups.
- Mobile footer stacks vertically.
- Ask for approval before continuing.

### Gate 5: Home Responsive + Interactions QA

- Verify breakpoints: `390x844`, `768x1024`, `1024x768`, `1440x900`, `1920x1080`.
- Verify no unintended horizontal overflow.
- Verify mobile nav, card links, form success, focus states, and footer layout.
- Ask for approval to either commit Home milestone or continue with next pages.

## Journey Coverage On Home

- **Studente**: Hero promise, courses grid, course CTA, booking-state language.
- **Insegnante**: Hero actor, candidacy/contact form, teacher profile links later.
- **Biblioteca**: Hero actor, navigation to biblioteche, copy about spaces, library contact/partner intent in form if visually acceptable.

## Journey Acceptance Criteria

- Home approval requires all three actors to be understandable without oral explanation.
- Each actor must have a visible benefit, entry point, and next step or simulated continuation.
- The Home can preserve Figma while still passing this criterion through hero copy, navigation, featured courses, and the form section.
- If one actor is not sufficiently clear by Gate 3, stop and ask whether to add a compact journey section.

## High-Risk Stop Points

- If preserving the Figma Home makes the three journeys unclear, stop and ask whether to add a compact journey section.
- If hero assets cannot be exported closely enough, stop and ask before substituting the visual direction.
- If responsive adaptation forces a very different mobile visual language, stop and ask before proceeding.
