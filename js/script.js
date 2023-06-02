// section-6-contact-us-button

let secondaryBtn = document.getElementById('button');
let popUp = document.getElementById('contact');
let cross = document.getElementById('cross');

secondaryBtn.addEventListener('click' , function() {

    popUp.style.display = 'block';

});

cross.addEventListener('click' , function() {

    popUp.style.display = 'none';

});


