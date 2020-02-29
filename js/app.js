
const btns = document.querySelectorAll('.btn');
const displayCounter = document.querySelector('#counter');
let counter = 0;

btns.forEach(btn => {
    btn.addEventListener('click', function(event) {

        const value = event.target;

        // change counter
        if(value.classList.contains('prevBtn')) {
            
            counter--;
        } else if (value.classList.contains('nextBtn')) {

            counter++;
        }

        displayCounter.textContent = counter;
        
        // change colour

        if(counter === 0) {
            displayCounter.style.color = 'black';
        } else if (counter < 0) {
            displayCounter.style.color = 'red';
        } else if (counter > 0) {
            displayCounter.style.color = 'green';
        }
    })
})