// Currently, Webpack is seeing the images as dependencies, but not processing them via a url or image loader? (why images are showing up broken on the HTML)

import './styles.css';
import Wreath from './img/wreath-6524584_640.png';
import { homepage } from './src/home.js';

// Potentially place all imported elements inside it's own "homepage" function and append that function to the HTML body using the comment at the bottom (need: return "variable")
const logo = document.querySelector('logo');
const content = document.getElementById('content');

const myLogo = new Image();
myLogo.src = Wreath;

logo.appendChild(myLogo);

console.log('FOOD!');

content.appendChild(homepage());