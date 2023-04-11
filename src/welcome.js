import nature_restaurant_img from './images/nature_restaurant.png';
import './styles/welcome.css';

const welcomeImg = new Image();

welcomeImg.src = nature_restaurant_img;

const displayWelcome = (content) => {

    const welcomeTitleDiv = document.createElement('div');
    const welcomeImgDiv = document.createElement('div');
    const welcomeBodyDiv = document.createElement('p');


    welcomeTitleDiv.classList.add('welcome-title');
    welcomeTitleDiv.innerHTML = 'Welcome to Nature Restaurant';

    welcomeImgDiv.classList.add('welcome-img');
    welcomeImgDiv.appendChild(welcomeImg);

    welcomeBodyDiv.classList.add('welcome-body');
    welcomeBodyDiv.innerHTML = 'Dine with us at one of our finest locations to experience ambient fine-dining atmosphere' +
        ' and the wonderful flavors of nature in our signature dishes.';
    content.appendChild(welcomeTitleDiv);
    content.appendChild(welcomeImgDiv);
    content.appendChild(welcomeBodyDiv);

};

export { displayWelcome };
