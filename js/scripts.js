

/* Will make the phone mumber clickable in the Directory listing */
var makePhoneNumberClickable = function() {
    let phoneNumbers = document.querySelectorAll('.wpbdp-field-business_phone_number span');

    if(phoneNumbers) {
        for (let i = 0; i < phoneNumbers.length; i++) {
            const single = phoneNumbers[i];
            single.replace('(','');
            single.replace(')','');
            single.replace(' ','');
            single.replace('-','');

            let clickPhone = document.createElement('a');
            clickPhone.setAttribute('href', single);
            clickPhone.innerHTML(phoneNumbers[i]);
            phoneNumbers[i].innerHTML(clickPhone);
        }
    }
} 


makePhoneNumberClickable();


function makeAddressClickable() {
    let addresses = document.querySelectorAll('.wpbdp-field-business_address');
    for (let i = 0; i < addresses.length; i++) {
        
        let mapPath = "https://www.google.com/maps?";
        const singleAddress = addresses[i];
        singleAddress.replace(' ', '+')
        mapPath += singleAddress;

        let clickToMapElement = document.createElement('a');
        clickToMapElement.setAttribute('href', mapPath);
        clickToMapElement.innerHTML(addresses[i]);
        addresses[i].appendChild(clickToMapElement);
    }
}

makeAddressClickable();