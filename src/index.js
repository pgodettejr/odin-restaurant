// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node' <-- does this have to do with line 17 or not having "webpack require" config?

import './styles.css';
// import Wreath from './img/wreath-6524584_640.png';
import { homepage } from './home.js';
import { menupage } from './menu.js';

// const logo = document.querySelector('.logo');
const content = document.getElementById('content');
const navBar = document.querySelector('nav');

// TODO: Add 'else if' statement for the 'Contact' page section
// OPTION: turn if-else into a switch statement (see: odin-library Gameboard function as an example)
navBar.forEach(button => {
  button.addEventListener('click', (e) => {
    if (button === 'Menu') {
      content.replaceChildren();
      content.appendChild(menupage());
    } else if (button === 'Home') {
      content.replaceChildren();
      content.appendChild(homepage());
    }
  })
})

// const myLogo = new Image();
// myLogo.src = Wreath;

// logo.appendChild(myLogo);

content.appendChild(homepage());