function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (!toggle || !nav) {
    return;
  }

  let lockedScrollY = 0;

  const lockScroll = () => {
    lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.setProperty("--nav-lock-offset", `-${lockedScrollY}px`);
  };

  const unlockScroll = () => {
    const restoreScrollY = lockedScrollY;
    document.body.style.removeProperty("--nav-lock-offset");
    lockedScrollY = 0;
    window.scrollTo(0, restoreScrollY);
  };

  const setOpen = (isOpen) => {
    const wasOpen = document.body.classList.contains("nav-open");

    if (isOpen && !wasOpen) {
      lockScroll();
    }

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Chiudi menu" : "Apri menu");
    nav.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);

    if (!isOpen && wasOpen) {
      unlockScroll();
    }
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initCardLinks() {
  document.querySelectorAll("[data-href]").forEach((card) => {
    card.setAttribute("role", "link");
    card.tabIndex = card.tabIndex >= 0 ? card.tabIndex : 0;

    const navigate = () => {
      window.location.href = card.dataset.href;
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button, input, textarea, select")) {
        return;
      }

      navigate();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      navigate();
    });
  });
}

function initFakeForms() {
  document.querySelectorAll("[data-fake-form]").forEach((form) => {
    const status = form.querySelector(".form-status");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const kind = form.dataset.formKind || "contatto";
      const messages = {
        join: "Richiesta ricevuta. Ti ricontatteremo con il prossimo passo Tondo-lab.",
        login: "Accesso simulato. Nel prototipo non salviamo dati, ma il percorso è pronto.",
        register: "Registrazione simulata. Ti abbiamo inserito nel giro Tondo-lab del prototipo.",
      };
      const message = messages[kind] || "Messaggio ricevuto. Questo prototipo simula l'invio senza salvare dati.";

      if (status) {
        status.textContent = message;
      }

      form.reset();
    });
  });
}

function initBookingFeedback() {
  document.querySelectorAll("[data-booking-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const scope = button.closest(".detail-side, .slot-panel, article, section") || document;
      const status = scope.querySelector(".booking-status");
      const label = button.dataset.bookingLabel || "slot selezionato";

      if (status) {
        status.textContent = `Prenotazione simulata per ${label}. Riceverai recap +1 e richiesta feedback dopo la lezione.`;
      }

      button.textContent = "Prenotazione inviata";
      button.disabled = true;
    });
  });
}

function initTeacherCalendar() {
  const calendar = document.querySelector("[data-calendar]");
  const panel = document.querySelector("[data-slot-panel]");

  if (!calendar || !panel) {
    return;
  }

  const slotData = {
    "slot-ux": {
      title: "UX/UI per servizi pubblici",
      detail: "Sabato 24 maggio, 9:00-10:30, Biblioteca Braidense. 15 posti disponibili.",
      label: "UX/UI per servizi pubblici con Alessia Romano",
    },
    "slot-figma": {
      title: "Introduzione a Figma",
      detail: "Giovedì 28 maggio, 18:00-19:30, Biblioteca Valvassori Peroni. 8 posti disponibili.",
      label: "Introduzione a Figma con Alessia Romano",
    },
    "slot-test": {
      title: "Test rapido con utenti",
      detail: "Giovedì 4 giugno, 17:30-19:00, Biblioteca Sormani. Ultimi 3 posti disponibili.",
      label: "Test rapido con utenti con Alessia Romano",
    },
  };

  const title = panel.querySelector("[data-slot-title]");
  const detail = panel.querySelector("[data-slot-detail]");
  const bookingButton = panel.querySelector("[data-booking-trigger]");
  const bookingStatus = panel.querySelector(".booking-status");

  calendar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slot-button]");

    if (!button || button.disabled) {
      return;
    }

    const data = slotData[button.dataset.slotId];

    if (!data) {
      return;
    }

    calendar.querySelectorAll("[data-slot-button]").forEach((slot) => {
      slot.classList.toggle("is-selected", slot === button);
    });

    title.textContent = data.title;
    detail.textContent = data.detail;
    bookingButton.dataset.bookingLabel = data.label;
    bookingButton.textContent = "Prenota questo slot";
    bookingButton.disabled = false;

    if (bookingStatus) {
      bookingStatus.textContent = "";
    }
  });
}

function initFaqAccordions() {
  document.querySelectorAll("[data-accordion-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));

      if (item) {
        item.classList.toggle("is-open", !isOpen);
      }
    });
  });
}

function initShowMore() {
  document.querySelectorAll("[data-show-more-button]").forEach((button) => {
    const target = button.dataset.showMoreTarget;
    const items = [...document.querySelectorAll(`[data-show-more-item="${target}"]`)];
    const collapsedText = button.textContent.trim();
    const expandedText = button.dataset.showMoreExpandedText || "Mostra meno ↑";
    const tabletQuery = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");
    let isExpanded = false;

    if (!target || !items.length) {
      return;
    }

    const getCollapsedExtraCount = () => {
      if (tabletQuery.matches) {
        return Number(button.dataset.showMoreCollapsedExtraTablet || 0);
      }

      return Number(button.dataset.showMoreCollapsedExtra || 0);
    };

    const collapseItems = () => {
      const extraCount = getCollapsedExtraCount();
      items.forEach((item, index) => {
        item.hidden = index >= extraCount;
      });

      button.textContent = collapsedText;
      button.setAttribute("aria-expanded", "false");
    };

    const expandItems = () => {
      items.forEach((item) => {
        item.hidden = false;
      });

      button.textContent = expandedText;
      button.setAttribute("aria-expanded", "true");
    };

    button.addEventListener("click", () => {
      isExpanded = !isExpanded;

      if (isExpanded) {
        expandItems();
      } else {
        collapseItems();
      }
    });

    tabletQuery.addEventListener("change", () => {
      if (!isExpanded) {
        collapseItems();
      }
    });

    collapseItems();
  });
}

function init() {
  initMobileNav();
  initCardLinks();
  initFakeForms();
  initTeacherCalendar();
  initBookingFeedback();
  initFaqAccordions();
  initShowMore();
}

document.addEventListener("DOMContentLoaded", init);
