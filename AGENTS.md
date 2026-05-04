# AGENTS.md

## Canonical Project Docs

Before making implementation decisions, read the relevant docs in this order:

1. `docs/CONTEXT.md` for domain language and resolved ambiguities.
2. `docs/JOURNEYS.md` for research journey synthesis.
3. `docs/IMPLEMENTATION.md` for technical/product rules, QA, and stop points.
4. `docs/HOME-PLAN.md` for the Home section-by-section workflow.
5. `docs/TECHNICAL-PLAN.md` for CSS/JS/content/assets defaults.
6. `PLAN.md` for the current execution plan and approval status.

## Goal

- Build a fictional but working responsive vanilla `HTML/CSS/JS` prototype for the final presentation.
- Theme: **Education - Biblioteche come campus diffuso** from `brief.md`.
- Service name: **Tondo-lab**.
- Payoff: **Il sapere che gira**.
- Maximize brief score by making the digital touchpoint polished, coherent, and understandable when navigated independently by the commission.

## Non-Negotiables

- Use vanilla `HTML/CSS/JS`; no frameworks, Tailwind, backend, real login, payments, dashboards, or persistent data.
- Planned scope is seven static pages: `index.html`, `about.html`, `corsi.html`, `corso-ux-ui.html`, `biblioteche.html`, `biblioteca-braidense.html`, `insegnante-alessia.html`.
- Shared files: `css/styles.css`, `js/main.js`, `assets/`.
- Keep **Tondo-lab** and **Il sapere che gira** as canonical naming; never use `Neo` in final UI/copy.
- Correct visible copy typos from Figma during implementation.
- Store final assets locally; do not leave Figma localhost URLs in the delivered prototype.
- Desktop target is near-Figma at `1920px`; smaller breakpoints adapt responsively and proportionally.
- Preserve the Figma Home structure; do not add a new Home section unless the user approves it after a visual gate.

## Implementation Guardrails

- Use semantic HTML landmarks and accessible controls.
- Use CSS custom properties, low specificity, and `@layer` as documented in `docs/TECHNICAL-PLAN.md`.
- Prefer CSS Grid for archive grids and large layout structures; prefer Flexbox for nav, buttons, tags, forms, and footer groups.
- Use controlled duplication for static header/footer/card markup rather than JS includes or build tooling.
- Implement only essential JS interactions: mobile menu, card links, fake form success, FAQ accordion, teacher calendar/agenda, booking feedback, optional show-more.
- Simulate journey gaps with lightweight states and copy, not full account/review/onboarding systems.
- Treat Studente, Insegnante, and Biblioteca journeys as strategically equivalent, while keeping Home close to Figma.

## High-Risk Stop Points

Ask the user before doing any of the following:

- Reducing the seven-page scope.
- Moving away from desktop-near-pixel fidelity at `1920px`.
- Adding a new Home section or substantially changing the Home structure.
- Replacing core Figma assets with a materially different visual direction.
- Changing naming, payoff, palette, core typography, or service model.
- Introducing frameworks, build tooling, backend, real accounts, payments, persistent data, or complex filters.
- Removing core prototype interactions or skipping responsive/browser QA.
- Using external font imports if local font files are not practical.

## Workflow

- No coding starts until the user gives final overall approval of the plan.
- Start with Home section by section according to `docs/HOME-PLAN.md`.
- After Home is complete, reassess only approval-gate granularity for later pages, not the seven-page scope.
- Use a planning sub-agent as proxy for low/medium-risk decisions when useful; ask the user directly only for high-risk decisions and final approval.

## Git And Auto-Commit Rules

- The repo is a git repository.
- Auto-commit is allowed only for user-approved milestones or explicit user requests.
- A user approval such as `procedi con questa pagina`, `approvato`, or approved `PLAN.md` milestone counts as permission to commit that milestone.
- Never push automatically; push only if explicitly requested.
- Before each commit, inspect `git status`, `git diff`, and recent `git log`.
- Stage only files relevant to the approved milestone; never stage unrelated user/tool changes.
- Never commit secrets or local credentials.
- Do not amend commits unless explicitly requested.
- If verification fails, fix the issue before committing or ask the user how to proceed.
- Commit message style should be concise and descriptive, for example `docs: document project rules`, `feat: build home hero`, `fix: polish responsive prototype`.

## Decision Log

- 2026-05-04: Brief and seven Figma pages analyzed before coding.
- 2026-05-04: User requested `grill-with-docs` before implementation.
- 2026-05-04: User requested documentation inside `docs/`.
- 2026-05-04: User approved desktop-near-pixel fidelity at `1920px` with responsive adaptation below.
- 2026-05-04: User approved desktop/tablet calendar grid and mobile agenda/card calendar.
- 2026-05-04: User approved essential high-impact prototype interactions only.
- 2026-05-04: User approved separate static HTML pages with shared CSS/JS/assets.
- 2026-05-04: User requested Home section-by-section first, then reassess gate granularity.
- 2026-05-04: User approved local asset export with coherent substitutions only when useful or necessary.
- 2026-05-04: User approved automatic correction of visible copy typos.
- 2026-05-04: User approved planning sub-agent proxy for low/medium-risk decisions.
- 2026-05-04: User approved preserving Figma Home structure and filling journey gaps through existing blocks.
- 2026-05-04: User gave final overall approval of the documentation plan and requested a documentation baseline commit.

## Pending Decisions

- None before starting Home Gate 1.
