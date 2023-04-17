import '../styles/menu.css';

const pizza = createFood('Nature Pizza', 12.99);
const burger = createFood('Nature Burger', 11.99);
let specialsAr = [pizza, burger];

const pasta = createFood('Nature Pasta', 12.99);
const veggieBurger = createFood('Veggie Burger', 11.99);
const grillCheese = createFood('Grilled Cheese Sandwich', 6.99);
let lunchAr = [pasta, veggieBurger, grillCheese];

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

    const lunchDiv = document.createElement('div');
    const lunchTitle = document.createElement('div');

    content.innerHTML = '';
    specialsTitle.innerHTML = 'Kitchen Specials';
    lunchTitle.innerHTML = 'Lunch Crafts';


    specialsDiv.classList.add('specials');
    specialsTitle.classList.add('title', 'specials');
    lunchDiv.classList.add('lunch');
    lunchTitle.classList.add('title', 'lunch');

    specialsDiv.appendChild(specialsTitle);
    content.appendChild(specialsDiv);
    lunchDiv.appendChild(lunchTitle);
    content.appendChild(lunchDiv);

    /* Display specials loop */
    for (let i = 0; i < specialsAr.length; i++) {
        specialsAr[i].displayFood(specialsDiv);
    }

    for (let j = 0; j < lunchAr.length; j++) {
        lunchAr[j].displayFood(lunchDiv);
    }

};

export { displayMenu };