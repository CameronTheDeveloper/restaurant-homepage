import './styles/index.css';
import { displayWelcome } from './modules/welcome';
import { displayMenu } from './modules/menu';
import { displayContact } from './modules/contact';


const content = document.querySelector('#content');
const buttons = document.querySelector('#buttons');
const welcomeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');


welcomeButton.innerHTML = 'Home';
menuButton.innerHTML = 'Menu';
contactButton.innerHTML = 'Contact Info';

buttons.appendChild(welcomeButton);
buttons.appendChild(menuButton);
buttons.appendChild(contactButton);

displayWelcome(content);

welcomeButton.addEventListener('click', () => {
    displayWelcome(content);
});

menuButton.addEventListener('click', () => {
    displayMenu(content);
});

contactButton.addEventListener('click', () => {
    displayContact(content);
});
