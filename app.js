const div = document.querySelector('#seconds')
const minutes = document.querySelector('#minutes')
const hour = document.querySelector('#hours')

const start = document.querySelector('.start');
const stops = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let seconds = 0
let minute = 0;
let hours = 0;
let interval;
start.addEventListener('click', () => {
      interval = setInterval(() => {
          seconds += 1
          div.innerHTML = seconds
          if (seconds === 60) {
              minute += 1;
              minutes.innerHTML = minute
              seconds = 0;
          }
  
          if (minute === 60) {
              hours += 1;
              hour.innerHTML = hours
              minute = 0;
          }
      }, 1000)
      start.disabled = true
})



stops.addEventListener('click' , ()=>{
    clearInterval(interval)
    start.disabled = false

})


reset.addEventListener('click' , ()=>{
    clearInterval(interval);
    seconds = 0
    div.innerHTML = '00'
    minute = 0;
    minutes.innerHTML = '00'
    hours = 0;
    hour.innerHTML = '00'
    start.disabled = false
})