import nature_restaurant_img from './images/nature_restaurant.png';
import nature_soup from './images/nature_soup.png';
import nature_pizza from './images/nature_pizza.png';
import nature_burger from './images/nature_burger.png';
import './styles/welcome.css';

const welcomeImg = new Image();
const burgerImg = new Image();
const pizzaImg = new Image();
const soupImg = new Image();

welcomeImg.src = nature_restaurant_img;
burgerImg.src = nature_burger;
pizzaImg.src = nature_pizza;
soupImg.src = nature_soup;

const displayWelcome = (content) => {
    const welcomeTitleDiv = document.createElement('div');
    const welcomeImgDiv = document.createElement('div');
    const welcomeBodyDiv = document.createElement('p');
    const foodImgDiv = document.createElement('div');
    content.innerHTML = '';
    welcomeTitleDiv.classList.add('welcome-title');
    welcomeImgDiv.classList.add('welcome-img');
    welcomeBodyDiv.classList.add('welcome-body');
    foodImgDiv.classList.add('food-images');

    welcomeTitleDiv.innerHTML = 'Welcome to Nature Restaurant';


    welcomeBodyDiv.innerHTML = 'Dine with us at one of our finest locations to experience ambient fine-dining atmosphere' +
        ' and the wonderful flavors of nature in our signature dishes.';

    welcomeImgDiv.appendChild(welcomeImg);
    content.appendChild(welcomeTitleDiv);
    content.appendChild(welcomeImgDiv);
    content.appendChild(welcomeBodyDiv);
    content.appendChild(foodImgDiv);
    foodImgDiv.appendChild(burgerImg);
    foodImgDiv.appendChild(soupImg);
    foodImgDiv.appendChild(pizzaImg);
};

export { displayWelcome };
