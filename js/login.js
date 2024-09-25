// search: form submit reloading the page
// step 1: set event handler
// document.getElementById('btn-login').addEventListener('click',function(event){

//     // vejal to beginners
// // step 2: prevent default behavior(prevent reloading browser)

//     event.preventDefault();
//     console.log('login btn clicked');
//     // step 3: get the phone no and the pin no.
//     const phoneNumber = document.getElementById('Phone-number').value;

//     const PinNumber = document.getElementById('Pin-number').value;

//     console.log(phoneNumber,PinNumber);
//     // step 4: validate phone and pin
//     if(phoneNumber === '5' && PinNumber === '12345'){
//         console.log('you are awesome');
//         // step 5: allow user to use the website
//     }
//     else{
//         console.log('you are not');
//     }
// })

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
// console.log('btn clicked');
// get phone no.and pin
const phoneNumber = document.getElementById('Phone-number').value;
const PinNumber = document.getElementById('Pin-number').value;
console.log(phoneNumber,PinNumber);

// bad way to validate
if(phoneNumber === '5' && PinNumber === '12345'){
            console.log('you are awesome');
            window.location.href = '/home.html';

            
        }
        else{
            console.log('you are not');
        }




})











