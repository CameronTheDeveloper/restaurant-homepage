import nature_restaurant_img from './images/nature_restaurant.png';

const content = document.querySelector('#content');
const welcomeImg = new Image();

welcomeImg.src = nature_restaurant_img;


const displayWelcome = () => {
    const welcomeTitleDiv = document.createElement('div');
    const welcomeImgDiv = document.createElement('div');
    const welcomeBodyDiv = document.createElement('p');

    content.style.backgroundColor = "#439d31";

    welcomeTitleDiv.classList.add('welcome-title');
    welcomeTitleDiv.style.fontSize = "5rem";
    welcomeTitleDiv.innerHTML = 'Welcome to Nature Restaurant';

    welcomeImgDiv.classList.add('welcome-img');
    welcomeImgDiv.appendChild(welcomeImg);

    welcomeBodyDiv.classList.add('welcome-body');
    welcomeBodyDiv.innerHTML = "Join us at one of our finest locations to experience ambient fine-dining atmosphere" +
        " and the wonderful flavors of nature in our signature dishes.";
    welcomeBodyDiv.style.fontSize = "2rem";
    content.appendChild(welcomeTitleDiv);
    content.appendChild(welcomeImgDiv);
    content.appendChild(welcomeBodyDiv);

};

export { displayWelcome };
