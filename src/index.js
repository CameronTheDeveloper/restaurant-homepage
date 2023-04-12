import './styles/index.css';
import { displayWelcome } from './welcome';
import { displayMenu } from './menu';
import { displayContact } from './contact';


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
    content.innerHTML = '';
    displayWelcome(content);
});

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    displayMenu(content);
});

contactButton.addEventListener('click', () => {
    content.innerHTML = '';
    displayContact(content);
});
