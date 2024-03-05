// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node' <-- does this have to do with line 17 or not having "webpack require" config?

import './styles.css';
// import Wreath from './img/wreath-6524584_640.png';
import { homepage } from './home.js';

// Will need the 'replaceChildren()' function in order to get the tabbed browsing to work in our event listener for the nav buttons (see: odin-library and tic-tac-toe JS for e.g.)
// Add all button logic to this file (event listener to remove all current elements under content div and replace with { imported } elements related to which button was clicked)
// const logo = document.querySelector('.logo');
const content = document.getElementById('content');

// const myLogo = new Image();
// myLogo.src = Wreath;

// logo.appendChild(myLogo);

content.appendChild(homepage());