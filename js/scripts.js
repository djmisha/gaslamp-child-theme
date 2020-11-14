

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

            console.log(single);

            let element = document.createElement('a');
            element.setAttribute('href', makePhoneNumberClickable);
            element.innerHTML(single);
            
        }
    }
} 


makePhoneNumberClickable();