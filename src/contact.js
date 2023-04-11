const content = document.querySelector('#content');


const displayContact = () => {

    content.innerHTML = '';
    const ownerNameDiv = document.createElement('div');
    const ownerNumDiv = document.createElement('div');


    ownerNameDiv.classList.add('owner-name');
    ownerNumDiv.classList.add('owner-number');

    content.appendChild(ownerNameDiv);
    content.appendChild(ownerNumDiv);

    ownerNameDiv.innerHTML = "Owner: First M. Last ";
    ownerNumDiv.innerHTML = "Call: (000)-000-0000";

};

export { displayContact };