import './styles/menu.css';

const pizza = createFood('Nature Pizza', 12.99);
const burger = createFood('Nature Burger', 11.99);
const specialsAr = [pizza, burger];

function createFood(foodName, foodPrice) {
    const displayFood = (specialsDiv) => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.classList.add('food-item');
        foodItemDiv.innerHTML = foodName + ' -- $' + foodPrice;
        specialsDiv.appendChild(foodItemDiv);
    };
    return { displayFood };
}

const displayMenu = (content) => {
    const specialsDiv = document.createElement('div');
    const specialsTitle = document.createElement('div');

    content.innerHTML = '';
    specialsTitle.innerHTML = 'Kitchen Specials';

    specialsDiv.classList.add('specials');
    specialsTitle.classList.add('title', 'specials');

    specialsDiv.appendChild(specialsTitle);
    content.appendChild(specialsDiv);
    /* Display specials loop */
    for (let i = 0; i < specialsAr.length; i++) {
        specialsAr[i].displayFood(specialsDiv);
    }

};

export { displayMenu };