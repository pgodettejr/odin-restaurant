import './styles.css';
// import Wreath from './img/wreath-6524584_640.png';
import { homepage } from './home.js';
import { menupage } from './menu.js';

// const logo = document.querySelector('.logo');
const content = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-button');

// Navigation bar button functionality to switch pages via tabbed browsing. 
// TODO: None of the buttons work on click right now. Debug this!
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

// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node' <-- does this have to do with not having "webpack require" config?
content.appendChild(homepage());