// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node' <-- does this have to do with line 19 or not having "webpack require" config?

import './styles.css';
// import Wreath from './img/wreath-6524584_640.png';
import { homepage } from './home.js';

// Potentially place all imported elements inside it's own "homepage" function and append that function to the HTML body using the comment at the bottom (need: return "variable")
// Add all button logic to this file (event listener to remove all current elements under content div and replace with { imported } elements related to which button was clicked)
// const logo = document.querySelector('.logo');
const content = document.getElementById('content');

// const myLogo = new Image();
// myLogo.src = Wreath;

// logo.appendChild(myLogo);

console.log('FOOD!');

content.appendChild(homepage());