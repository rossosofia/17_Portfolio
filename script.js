"use strict"

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const cardInfo = card.querySelector(".card-text");
      const cardImg = card.querySelector("img");
      cardInfo.classList.remove("hidden");
      cardImg.classList.add("blur");
    });
  
    card.addEventListener("mouseleave", () => {
      const cardInfo = card.querySelector(".card-text");
      const cardImg = card.querySelector("img");
      cardInfo.classList.add("hidden");
      cardImg.classList.remove("blur");
    });
  });


// Scroll to projects section when clicking on projects link
const projectsLink = document.querySelector('nav a[href="#projects-heading"]');

projectsLink.addEventListener('click', (event) => {
  event.preventDefault();
  const projectsHeading = document.getElementById('projects-heading');
  const nav = document.querySelector('nav');
  const topOffset = projectsHeading.getBoundingClientRect().top;
  const navHeight = nav.getBoundingClientRect().height;

  window.scrollTo({
    top: window.pageYOffset + topOffset - navHeight,
    behavior: 'smooth',
  });
});

