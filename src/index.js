import './styles/index.css';
import { displayWelcome } from './welcome';
import { displayContact } from './contact';

const content = document.querySelector('#content');
const buttons = document.querySelector('#buttons');
const welcomeButton = document.createElement('button');
const contactButton = document.createElement('button');

welcomeButton.innerHTML = 'Home';
contactButton.innerHTML = 'Contact Info';

buttons.appendChild(welcomeButton);
buttons.appendChild(contactButton);
displayWelcome(content);

welcomeButton.addEventListener('click', () => {
    content.innerHTML = '';
    displayWelcome(content);
});

contactButton.addEventListener('click', () => {
    content.innerHTML = '';
    displayContact(content);
});
