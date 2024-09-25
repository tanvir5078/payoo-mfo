    //  add money to the account
    // step 1 add an event handler to the add money btn inside the form
    // step 2 get money to be added to the account balance




document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submitted
    event.preventDefault();
// console.log('money add button');

// step 2 get money to be added to the account balance
const addmoneyInput = document.getElementById('input-add-money').value;
console.log(addmoneyInput);

//get the pin no.provided
const PinNumberinput = document.getElementById('input-Pin-number').value;
console.log(PinNumberinput);

});    