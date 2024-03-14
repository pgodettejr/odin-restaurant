import './styles.css';
// import Wreath from './img/wreath-6524584_640.png';
import { homepage } from './home.js';
import { menupage } from './menu.js';
import { contactPage } from './contact.js';

// const logo = document.querySelector('.logo');
const content = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-button');

// Navigation bar button functionality to switch pages via tabbed browsing. 
// TODO: Do we really need the (e) if it's never being called?
navButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    let currentButton = document.querySelector('button[aria-current]');

    // if (button === 'Menu') {
    //   currentButton.removeAttribute('aria-current');
    //   button.setAttribute('aria-current', 'page');
    //   content.replaceChildren();
    //   content.appendChild(menupage());
    // } else if (button === 'Home') {
    //   currentButton.removeAttribute('aria-current');
    //   button.setAttribute('aria-current', 'page');
    //   content.replaceChildren();
    //   content.appendChild(homepage());
    //   // TODO: Add 'else if' statement for the 'Contact' page section 
    // }

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

// const myLogo = new Image();
// myLogo.src = Wreath;

// logo.appendChild(myLogo);

content.appendChild(homepage());