import './styles.css';
import Logo from './img/wreath-6524584_640.png';

// Potentially place all imported elements inside it's own "homepage" function and append that function to the HTML body using the comment at the bottom
const myLogo = document.querySelector('logo');
myLogo.img.src = Logo;

console.log('FOOD!');

// document.body.appendChild(homepage());