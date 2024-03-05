// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node' <-- does this have to do with line 17 or not having "webpack require" config?

import './styles.css';
// import Wreath from './img/wreath-6524584_640.png';
import { homepage } from './home.js';
import { menupage } from './menu.js';

// const logo = document.querySelector('.logo');
const content = document.getElementById('content');
const navBar = document.querySelector('nav');

// Navigation bar button functionality to switch pages via tabbed browsing
navBar.forEach(button => {
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

    switch (true) {
      case (button === 'Menu'):
        currentButton.removeAttribute('aria-current');
        button.setAttribute('aria-current', 'page');
        content.replaceChildren();
        content.appendChild(menupage());
        return true;

      case (button === 'Home'):
        currentButton.removeAttribute('aria-current');
        button.setAttribute('aria-current', 'page');
        content.replaceChildren();
        content.appendChild(homepage());
        return true;

      // TODO: Put the case for the 'Contact' button here
    }
  })
})

// const myLogo = new Image();
// myLogo.src = Wreath;

// logo.appendChild(myLogo);

content.appendChild(homepage());