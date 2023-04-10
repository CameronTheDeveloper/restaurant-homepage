const content = document.querySelector('#content');

const displayWelcome = () => {
    const welcomeTitle = document.createElement('div');
    const welcomeBody = document.createElement('p');

    content.style.backgroundColor = "#439d31";
    welcomeTitle.classList.add('welcome-title');
    welcomeTitle.style.fontSize = "5rem";
    welcomeTitle.innerHTML = 'Welcome to Nature Restaurant';

    welcomeBody.classList.add('welcome-body');
    welcomeBody.innerHTML = "Join us at one of our finest locations to experience ambient fine-dining atmosphere" +
        " and the wonderful flavors of nature in our signature dishes.";
    welcomeBody.style.fontSize = "2rem";
    content.appendChild(welcomeTitle);
    content.appendChild(welcomeBody);

};

export { displayWelcome };
