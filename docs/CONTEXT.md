# Tondo-lab Context

Tondo-lab is a fictional service prototype for the Education brief: local libraries become a distributed learning campus where people can learn, teach, and activate underused spaces. This document captures the domain language that must stay consistent across prototype, pitch, and process materials.

## Language

### Service

**Tondo-lab**:
The service that connects learners, teachers, and libraries through short informal learning experiences.
_Avoid_: Neo, generic platform, course marketplace, school.

**Il sapere che gira**:
The payoff expressing knowledge as something that circulates between people and places.
_Avoid_: slogan variants that dilute the circular knowledge metaphor.

**Conoscenza circolare**:
The service principle that knowledge moves reciprocally between citizens, teachers, and libraries.
_Avoid_: one-way teaching, content delivery.

**Tripla Circolarita**:
The relationship between **Studenti**, **Insegnanti**, and **Biblioteche** that makes the service work.
_Avoid_: treating the three actors as independent silos.

**Campus diffuso**:
A network of local libraries understood as one distributed learning environment.
_Avoid_: single campus, online-only school.

### Actors

**Studente**:
A citizen who joins a course to learn a practical skill in an informal library setting.
_Avoid_: customer, user, pupil.

**Insegnante**:
A competent community member, possibly a professional, who shares a practical skill through informal guided courses in libraries.
_Avoid_: professor, tutor, content creator.

**Biblioteca**:
A local library that hosts learning activities and contributes physical space to the campus diffuso.
_Avoid_: venue, classroom, coworking.

**Spazio attivabile**:
A room or area inside a biblioteca that can host a course or learning slot.
_Avoid_: standalone venue, separate library page.

**Commissione**:
The evaluators who must understand and navigate the digital touchpoint without oral explanation.
_Avoid_: client, stakeholder.

### Learning Experience

**Corso**:
A short, practical learning experience hosted in a library and led by an insegnante.
_Avoid_: academic class, long curriculum, event.

**Slot**:
A specific bookable instance of a lesson or course, with title, time, place, seats, and CTA.
_Avoid_: generic availability, appointment.

**Disponibilita**:
The visible state indicating that a **Slot** can still be booked.
_Avoid_: free time, opening hours.

**Prenotazione**:
The prototype action by which a studente expresses intent to join a course or available slot.
_Avoid_: purchase, enrollment payment.

**Sistema verificato**:
The service promise that teachers, spaces, and courses are curated enough to feel safe, high-quality, and sustainable.
_Avoid_: unmoderated marketplace, bureaucratic certification system.

**Qualita**:
The assurance that each course has a clear practical outcome and a credible insegnante.
_Avoid_: academic grading, formal certification.

**Sicurezza**:
The assurance that learning happens in trusted library spaces with clear booking information.
_Avoid_: surveillance, heavy compliance language.

**Sostenibilita**:
The assurance that the service activates existing library spaces and keeps courses short, accessible, and manageable.
_Avoid_: generic environmental messaging.

### Prototype

**Touchpoint digitale**:
The working web prototype submitted for evaluation and navigated independently by the commission.
_Avoid_: mockup, static screenshot, app.

**Desktop-near-pixel**:
The implementation fidelity target where the 1920px desktop result feels very close to Figma while remaining responsive.
_Avoid_: fixed absolute clone, pure interpretation.

**Agenda mobile**:
The mobile version of the teacher calendar, shown as readable date cards rather than a squeezed wide grid.
_Avoid_: horizontal-only calendar when it hides the booking action.

## Relationships

- **Tondo-lab** connects **Studenti**, **Insegnanti**, and **Biblioteche**.
- A **Biblioteca** can contain one or more **Spazi attivabili**, but the prototype presents them as details rather than standalone pages.
- A **Biblioteca** hosts one or more **Corsi**.
- An **Insegnante** can lead one or more **Corsi**.
- A **Corso** belongs to one **Biblioteca** and has one primary **Insegnante** in the prototype.
- A **Slot** is an instance of a **Corso** or lesson led by one **Insegnante** in one **Biblioteca** or **Spazio attivabile**.
- A **Studente** can make a **Prenotazione** for a **Corso** or **Slot**.
- The **Touchpoint digitale** must explain **Tondo-lab** clearly to the **Commissione** without oral support.
- The **Sistema verificato** must be visible through concise trust signals rather than full administrative flows.

## Example Dialogue

> **Dev:** "When the commission opens a course page, should it feel like buying a class?"
> **Domain expert:** "No. A **Corso** is a short, practical learning experience in a **Biblioteca**. The CTA is a **Prenotazione**, not a purchase, because accessibility and informal learning are central to **Tondo-lab**."

## Flagged Ambiguities

- **Insegnante** previously could mean a professional teacher, peer citizen, or skilled volunteer. Resolved: an **Insegnante** is a competent community member, possibly professional, not a formal school professor.
- **Biblioteca** could mean the institution/building or a specific room/space inside it. Resolved: **Biblioteca** is the public-facing entity; **Spazio attivabile** is a descriptive detail inside it.
- **Corso** and **Slot** overlap on detail pages: a course has a scheduled date, while the teacher page shows availability. Resolved: a **Slot** is a concrete bookable lesson/course instance; the teacher page shows future slots, and the course page highlights one selected slot.
- **Sistema verificato** could imply a full moderation backend. Resolved: the service is conceptually verified, but the prototype communicates it through strong trust signals and skips complex verification flows.
- `Neo` appears in research PDFs as a previous working name. Resolved: **Tondo-lab** is the only final service name and `Neo` must not appear in the prototype UI or final copy.
