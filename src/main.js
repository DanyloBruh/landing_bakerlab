import { CountUp } from "countup.js/dist/countUp.min.js";
import "./scss/styles.scss";

const toggle = document.getElementById("hamburger__toggle");
const button = document.querySelector(".hamburger__btn");
const links = document.querySelectorAll(".header__link");

const closeMenu = () => {
  toggle.checked = false;
  document.body.style.overflow = "";
};

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.style.overflow = "hidden";
  } else {
    closeMenu();
  }
});

const observer = new ResizeObserver(() => {
  const isButtonHidden = window.getComputedStyle(button).display === "none";
  if (isButtonHidden) {
    closeMenu();
  }
});

observer.observe(button);

document.addEventListener("DOMContentLoaded", () => {
  const counters = [
    { id: "number-year", target: 2015 },
    { id: "number-stores", target: 23 },
    { id: "number-companies", target: 155 },
    { id: "number-clients", target: 10 },
  ];
  const options = {
    separator: "",
    enableScrollSpy: true,
    scrollSpyOnce: true,
  };
  counters.forEach((counter) => {
    // Створюємо новий інстанс CountUp, вказуючи startVal як 0, а endVal як потрібне значення
    const countUp = new CountUp(counter.id, counter.target, options);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  });
});
