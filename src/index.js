import './styles.css';
import Wreath from './img/wreath-6524584_640.png';

// Potentially place all imported elements inside it's own "homepage" function and append that function to the HTML body using the comment at the bottom (need: return "variable")
const logo = document.querySelector('logo');

const myLogo = new Image();
myLogo.src = Wreath;

logo.appendChild(myLogo);

console.log('FOOD!');

// document.body.appendChild(homepage());