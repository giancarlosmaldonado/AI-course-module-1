"use strict";
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
if (toggle && nav) {
  document.documentElement.classList.add("js");
  toggle.hidden = false;
  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  window.matchMedia("(max-width: 800px)").addEventListener("change", closeMenu);
}
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
const projectEmail = document.querySelector("#email-project");
const subjects = {
  network: "Let’s talk about network infrastructure",
  security: "Let’s talk about cybersecurity",
  cloud: "Let’s talk about cloud solutions",
  software: "Let’s talk about custom software",
};
const service = new URLSearchParams(window.location.search).get("service");
if (projectEmail && Object.hasOwn(subjects, service)) {
  projectEmail.href =
    "mailto:info@itpuertorico.com?subject=" +
    encodeURIComponent(subjects[service]);
}
