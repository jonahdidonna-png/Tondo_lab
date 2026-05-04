function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (!toggle || !nav) {
    return;
  }

  const setOpen = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
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
    if (event.key === "Escape") {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initPrototypeLogin() {
  const loginButtons = document.querySelectorAll("[data-prototype-login]");

  loginButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Demo";
      window.setTimeout(() => {
        button.textContent = "Login";
      }, 1400);
    });
  });
}

function init() {
  initMobileNav();
  initPrototypeLogin();
}

document.addEventListener("DOMContentLoaded", init);
