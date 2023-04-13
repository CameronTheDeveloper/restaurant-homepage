function createFood(foodName, foodPrice) {
    const displayFood = (content) => {
        const foodDiv = document.createElement('div');
        foodDiv.innerHTML = foodName + ' -- $' + foodPrice;
        content.appendChild(foodDiv);
    };
    return { displayFood };
}

const displayMenu = (content) => {
    const pizza = createFood('Nature Pizza', 12.99);
    const burger = createFood('Nature Burger', 11.99);
    const specialsAr = [pizza, burger];
    content.innerHTML = '';

    for (let i = 0; i < specialsAr.length; i++) {
        specialsAr[i].displayFood(content);
    }

};

export { displayMenu };