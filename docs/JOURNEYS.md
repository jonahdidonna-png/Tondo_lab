# User Journeys

This document summarizes the exported journey PDFs currently present in the repository:

- `user-journey-studente.pdf`
- `user-journey-insegnante.pdf`
- `user-journey-biblioteche.pdf`

The PDFs include research and strategy material with several visible typos and an older service name, `Neo`. The implementation should keep the intended meaning but use the current canonical language defined in `docs/CONTEXT.md`: **Tondo-lab**.

## Shared Research Signals

- People abandon online courses because of lack of time, low concentration, frustration, and disorganization.
- The service value is short, concentrated, shared learning that produces small but satisfying outcomes.
- The learning model should feel informal, interactive, circular, and free from judgment.
- Libraries are valuable because they provide trusted physical spaces and can become active community places rather than passive archives.
- The strategic values repeated across materials are: crescita reciproca, accessibilita, connessioni, dynamic/fresh tone, and activation of unused spaces.
- The touchpoint ecosystem includes website, email, notifications, social, posters/objects, physical library experience, and word of mouth.

## Studente Journey

### Need

- Wants to learn something interesting in a group but has little time and limited budget.
- Struggles with online courses, concentration, and the uncertainty of how to start.
- Prefers in-person learning and wants a concrete result without school-like pressure.

### Before

- Discovers Tondo-lab through word of mouth, social content, poster, or notification.
- Visits the website to understand available courses.
- May register preferences or subscribe to a newsletter, but this is not essential for the first prototype.

### During

- Browses courses.
- Finds an interesting course.
- Checks course details, teacher, place, and practical outcome.
- Books/joins the course.
- May contact the teacher for clarification.
- Participates in the course in a library.

### After

- Receives a thank-you email.
- Leaves feedback or review.
- Gets a recap/progress signal.
- Looks for more courses and tells a friend.

## Insegnante Journey

### Need

- Wants to share a skill without pressure and feel part of a wider change, not an isolated exception.
- Needs a fluid way to propose teaching, be accepted, and open a course with times, description, and location.

### Before

- Discovers Tondo-lab through word of mouth, social, or advertising.
- Visits the website and understands how the service works.
- Sends a request/candidacy to teach.

### During

- Provides personal/professional details such as documents, bio, photo, and curriculum in the full service concept.
- Receives positive feedback/acceptance.
- Opens a course with schedule, description, and place.
- Teaches in a library.

### After

- Receives student feedback and teacher evaluation.
- Organizes future lessons.
- May receive benefits such as credits, discounts, or professional opportunities.
- Recommends the experience to others.

## Biblioteca Journey

### Need

- Wants to activate underused rooms and become a more lively community learning place.
- Needs a way to communicate room availability and receive course requests.

### Before

- Learns about Tondo-lab through direct/internal communication, meetings, presentations, or word of mouth.
- Visits the website to understand the service.
- Registers availability of library spaces in the full service concept.

### During

- Shares room availability and opening hours.
- Receives course requests over time.
- The site records the library and its availability.

### After

- Registers attendance/presence for people entering the library in the full service concept.
- Remains a partner and recommends the service to other libraries.

## Prototype Implications

- Student, teacher, and library journeys have equivalent strategic importance.
- The public prototype must still remain understandable when navigated independently, so each journey should have visible entry points and proof of continuation.
- Missing Figma steps should be bridged with lightweight prototype signals where useful: registration intent, preference/newsletter capture, teacher candidacy, library partnership, booking confirmation, post-course feedback, and recap/progress cues.
- Full registration, preference collection, reviews, counters, email automation, and partner onboarding should be simulated through lightweight states, confirmations, and concise copy rather than built as full systems.

## Flagged Ambiguities

- The research PDFs use `Neo`, while current Figma/prototype language uses **Tondo-lab**. Resolved: `Neo` is legacy naming and must never appear in the final prototype UI or final copy.
