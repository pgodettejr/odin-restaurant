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
        // slide();
        break;

      case 'Home':
        currentButton.removeAttribute('aria-current');
        button.setAttribute('aria-current', 'page');
        content.replaceChildren();
        content.appendChild(homepage());
        // slide();
        break;

      case 'Contact':
        currentButton.removeAttribute('aria-current');
        button.setAttribute('aria-current', 'page');
        content.replaceChildren();
        content.appendChild(contactPage());
        // slide();
        break;
    }
  })
})

content.appendChild(homepage());

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