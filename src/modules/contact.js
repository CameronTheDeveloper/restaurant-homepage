import '../styles/contact.css';

const displayContact = (content) => {
    const nameDiv = document.createElement('div');
    const PhoneNumDiv = document.createElement('div');
    const scheduleDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    content.innerHTML = '';

    nameDiv.classList.add('name');
    PhoneNumDiv.classList.add('phone-number');
    scheduleDiv.classList.add('schedule');
    addressDiv.classList.add('address');

    content.appendChild(nameDiv);
    content.appendChild(PhoneNumDiv);
    content.appendChild(scheduleDiv);
    content.appendChild(addressDiv);

    nameDiv.innerHTML = 'Nature Restaurant';
    PhoneNumDiv.innerHTML = '(000)-000-0000';
    scheduleDiv.innerHTML = 'Weekdays, 1:00 PM -11:00 PM';
    addressDiv.innerHTML = '123 Main Street, Suite 456 Meadowbrook, CA 98765';

};

export { displayContact };