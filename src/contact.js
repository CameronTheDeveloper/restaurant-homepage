import './styles/contact.css';

const displayContact = (content) => {

    content.innerHTML = '';
    const nameDiv = document.createElement('div');
    const PhoneNumDiv = document.createElement('div');
    const addressDiv = document.createElement('div');

    nameDiv.classList.add('owner-name');
    PhoneNumDiv.classList.add('phone-number');
    addressDiv.classList.add('address');

    content.appendChild(nameDiv);
    content.appendChild(PhoneNumDiv);
    content.appendChild(addressDiv);

    nameDiv.innerHTML = 'Nature Restaurant';
    PhoneNumDiv.innerHTML = '(000)-000-0000';
    addressDiv.innerHTML = '123 Main Street, Suite 456 Meadowbrook, CA 98765';

};

export { displayContact };