content = document.querySelector('#content');

const displayContact = () => {
    content.innerHTML = '';
    const ownerNameDiv = createElement('div');
    const ownerNumDiv = createElement('div');


    ownerNameDiv.classList.add('owner-name');
    ownerNumDiv.classList.add('owner-number');

    content.appendChild(ownerNameDiv);
    content.appendChild(ownerNumDiv);

};