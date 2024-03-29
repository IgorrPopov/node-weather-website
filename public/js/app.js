console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';


    fetch('/weather?address=' + location)
    .then((response) => {
        response.json().then(data => {
                    
            if(data.error) {
                messageOne.textContent = 'Error: ' + data.error;
            } else {
                messageOne.textContent = 'Location: ' + data.location;
                messageTwo.textContent = 'Forecast: ' + data.forecast;
            }

        }) 
    });

});