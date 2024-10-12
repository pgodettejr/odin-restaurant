import './styles.css';
import { homepage } from './home.js';
import { menupage } from './menu.js';
import { contactPage } from './contact.js';

const content = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-button');

// Navigation bar button functionality to switch pages via tabbed browsing. 
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    let currentButton = document.querySelector('button[aria-current]');

    switch (button.textContent) {
      case 'Menu':
        currentButton.removeAttribute('aria-current');
        button.setAttribute('aria-current', 'page');
        content.replaceChildren();
        content.appendChild(menupage());
        break;

      case 'Home':
        currentButton.removeAttribute('aria-current');
        button.setAttribute('aria-current', 'page');
        content.replaceChildren();
        content.appendChild(homepage());
        break;

      case 'Contact':
        currentButton.removeAttribute('aria-current');
        button.setAttribute('aria-current', 'page');
        content.replaceChildren();
        content.appendChild(contactPage());
        break;
    }
  })
})

content.appendChild(homepage());

const carouselButtons = document.querySelectorAll('.carousel-button');
const slides = document.querySelectorAll('.gallery-slide > div');
const dots = document.querySelectorAll('.carousel-dot');

let currentIndex = 0;
const totalSlides = slides.length;

// Sets the active slide and corresponding dot
function setActiveSlide(index) {
  slides.forEach((slide, i) => {
    slide.removeAttribute('data-active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.setAttribute('data-active', 'selected');
      dots[i].classList.add('active');
    }
  });
}

// Arrow button event listeners
carouselButtons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    currentIndex = (currentIndex + offset + totalSlides) % totalSlides;
    setActiveSlide(currentIndex);
  });
});

// Navigation dots click event
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    setActiveSlide(currentIndex);
  });
});

// Automatically advances slides every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  setActiveSlide(currentIndex);
}, 5000);

// BRANCH: Attempted function for a sliding animation on button click

// function slide() {
//   const menu = document.querySelector('.menu-page');
//   const contact = document.querySelector('.contact-page');
//   const home = document.querySelector('.home-content');

//   menu.addEventListener("animationend", function(e) {
//     e.preventDefault();

//     if (menu.style.animationName == "slide-left" ||
//         menu.style.animationName == "slide-right") {
//           menu.style.display = "none";
//     }
//   });

//   if (menu.style.display === "none" &&
//       button.textContent === "Home") {
//         menu.style.display = "block";
//         menu.style.animation = "1s slide-left";
//   } else {
//     menu.style.animation = "1s slide-right";
//   }

//   contact.addEventListener("animationend", function(e) {
//     e.preventDefault();

//     if (contact.style.animationName == "slide-left") {
//           contact.style.display = "none";
//     }
//   });

//   if (contact.style.display === "none") {
//     contact.style.display = "block";
//     contact.style.animation = "1s slide-left";
//   }

//   home.addEventListener("animationend", function(e) {
//     e.preventDefault();

//     if (home.style.animationName == "slide-right") {
//           home.style.display = "none";
//     }
//   });

//   if (home.style.display === "none") {
//     home.style.display = "block";
//     home.style.animation = "1s slide-right";
//   }
// }