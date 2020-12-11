
/* Directory - Phone Number Clickable to Call*/

var makePhoneNumberClickable = function() {
    var phoneNumbers = document.querySelectorAll('.wpbdp-field-business_phone_number span');
    if(phoneNumbers) {
        for (let i = 0; i < phoneNumbers.length; i++) {
            var phoneLink = "tel:+1";
            phoneLink += phoneNumbers[i].innerText;
            phoneLink = phoneLink.split('(').join('');
            phoneLink = phoneLink.split(')').join('');
            phoneLink = phoneLink.split(' ').join('');
            phoneLink = phoneLink.split('—').join('');
            phoneLink = phoneLink.split('-').join('');

            var phoneEl = document.createElement('a');
            phoneEl.setAttribute('href', phoneLink);
            phoneEl.classList.add('dr-click-phone');
            phoneEl.innerHTML = phoneNumbers[i].innerText;
            phoneNumbers[i].innerHTML = "";
            phoneNumbers[i].appendChild(phoneEl);
        }
    }
} 

makePhoneNumberClickable();


/* Directory Category - Address Clickable to Google Map */

function makeAddressClickableCategoryPage() {
    var addresses = document.querySelectorAll('.address-info');
    var venueName = document.querySelectorAll('.listing-title a');
    
    if(addresses) {
        for (let i = 0; i < addresses.length; i++) {
            var name = venueName[i].innerText.split(" ").join('+');
            var mapPath = "https://www.google.com/maps/search/" + name + "+";
            var singleAddy = addresses[i].innerText;
            singleAddy = singleAddy.split(' ').join('+');
            singleAddy = singleAddy.split(',').join('');
            singleAddy = singleAddy.split('.').join('');
            singleAddy = singleAddy.replace(/(\r\n|\n|\r)/gm, "");

            singleAddy = singleAddy.replace('(', '');
            singleAddy = singleAddy.replace(')', '');
            mapPath += singleAddy;

            var addyEl = document.createElement('a');
            addyEl.setAttribute('href', mapPath);
            addyEl.setAttribute('target', '_blank');
            addyEl.classList.add('dr-click-addy');
            addyEl.innerHTML = addresses[i].innerText;
            addresses[i].innerHTML = "";
            addresses[i].appendChild(addyEl);
        }
    }
}

makeAddressClickableCategoryPage();


/* Directory Single Page - Address Clickable to Google Map */

function makeAddressClickableSinglePage() {
    var addresses = document.querySelectorAll('.wpbdp-field-business_address');
    var venueName = document.querySelectorAll('.listing-title h2');
    
    if(addresses) {
        for (let i = 0; i < addresses.length; i++) {
            var name = venueName[i].innerText.split(" ").join('+');
            var mapPath = "https://www.google.com/maps/search/" + name + "+";
            var singleAddy = addresses[i].innerText;
            singleAddy = singleAddy.split(' ').join('+');
            singleAddy = singleAddy.split(',').join('');
            singleAddy = singleAddy.split('.').join('');
            singleAddy = singleAddy.replace(/(\r\n|\n|\r)/gm, "");

            singleAddy = singleAddy.replace('(', '');
            singleAddy = singleAddy.replace(')', '');
            mapPath += singleAddy;

            var addyEl = document.createElement('a');
            addyEl.setAttribute('href', mapPath);
            addyEl.setAttribute('target', '_blank');
            addyEl.classList.add('dr-click-addy');
            addyEl.innerHTML = addresses[i].innerText;
            addresses[i].innerHTML = "";
            addresses[i].appendChild(addyEl);
        }
    }
}

makeAddressClickableSinglePage();