const displayContact = (content) => {

    content.innerHTML = '';
    const ownerNameDiv = document.createElement('div');
    const PhoneNumDiv = document.createElement('div');
    const addressDiv = document.createElement('div');

    ownerNameDiv.classList.add('owner-name');
    PhoneNumDiv.classList.add('phone-number');
    addressDiv.classList.add('address');

    content.appendChild(ownerNameDiv);
    content.appendChild(PhoneNumDiv);
    content.appendChild(addressDiv);

    ownerNameDiv.innerHTML = 'Owner: First M. Last ';
    PhoneNumDiv.innerHTML = 'Call: (000)-000-0000';
    addressDiv.innerHTML = '123 Main Street, Suite 456 Meadowbrook, CA 98765';

};

export { displayContact };