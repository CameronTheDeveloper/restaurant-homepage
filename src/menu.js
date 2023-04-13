function createFood(foodName, foodPrice) {
    const displayFood = (content) => {
        const foodDiv = document.createElement('div');
        foodDiv.innerHTML = foodName + ' -- $' + foodPrice;
        content.appendChild(foodDiv);
    };
    return { displayFood };
}

const displayMenu = (content) => {
    content.innerHTML = '';
    const pizza = createFood('Nature Pizza', 12.99);
    pizza.displayFood(content);
};

export { displayMenu };