const hours = document.getElementById('hours');
const miuntes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const colons = document.querySelectorAll('.colon');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');

// initial values
let secNumber = 0, minNumber = 0, hrNumber = 0;

// Setting Event Listeners
start.addEventListener('click', triggerFunc);

// Functions
function triggerFunc() {
  // display buttons
  start.style.display = 'none';
  pause.style.display = 'block';
  clear.style.display = 'block';
  
  // begin timmer
  const timer = setInterval(() => {
    checker(secNumber, minNumber);
    secNumber += 1;
    seconds.innerText = secNumber;
    miuntes.innerText = minNumber;
    hours.innerText = hrNumber;
  }, 1000);
  // End Begin timmer
  
  // Pause timmer
  pause.addEventListener('click', () => {
    start.style.display = 'block';
    start.innerText = 'Continue';
    pause.style.display = 'none';
    clearInterval(timer);
  })
  // End Pause timmer

  // Stop timmer
  clear.addEventListener('click', () => {

    // display buttons
    start.innerText = 'Start';
    start.style.display = 'block';
    pause.style.display = 'none';
    clear.style.display = 'none';

    // Reset Counter
    secNumber = 0, minNumber = 0, hrNumber = 0;
    clearInterval(timer);

    seconds.innerText = secNumber;
    seconds.style.fontSize = '100px'
    miuntes.style.display = 'none';
    colons[1].style.display = 'none';
    hours.style.display = 'none';
    colons[0].style.display = 'none';
  });
  // End Stop timmer
}

// checks the time
function checker(sec, min) {
  // Check for munite
  if (sec === 59) {
    secNumber = -1;
    minNumber += 1;

    // change styles
    seconds.style.fontSize = '50px'
    miuntes.style.display = 'contents';
    colons[1].style.display = 'contents';
  }

  // check for hours
  if (min === 59 && sec === 59) {
    minNumber = 0;
    hrNumber += 1;

    // change styles
    hours.style.display = 'contents';
    colons[0].style.display = 'contents';
  }
}