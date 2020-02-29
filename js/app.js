
const btns = document.querySelectorAll('.btn');
const displayCounter = document.querySelector('#counter');
let counter = 0;

btns.forEach(btn => {
    btn.addEventListener('click', function(event) {

        const value = event.target;
        if(value.classList.contains('prevBtn')) {
            counter--;
            
            if(counter < 0) {
                displayCounter.textContent = counter;
                displayCounter.style.color = 'red';
            } else if (counter > 0) {
                displayCounter.textContent = counter;
                displayCounter.style.color = 'green';
            } else {
                displayCounter.textContent = counter;
                displayCounter.style.color = 'black';
            }
            
            
        }

        if(value.classList.contains('nextBtn')) {

            counter++;

            if(counter > 0) {
                displayCounter.textContent = counter;
                displayCounter.style.color = 'green';
            } else if (counter < 0 ) {

                displayCounter.textContent = counter;
                displayCounter.style.color = 'red';

            } else {
                displayCounter.textContent = counter;
                displayCounter.style.color = 'black';
            }

          
        }
    })
})