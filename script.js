
/* =============================================================================  GETTING ELEMENTS  =================================================================*/

/*========================================  START  ============================*/
const start = document.querySelector('button')
const visible = document.querySelector('.countdown')
const hidden = document.querySelector('.input')

/* ========================================  INPUT  ============================*/
var date = document.querySelector('#input-date')
var text = document.querySelector('#input-text')

/* ====================================== COUNTDOWN  =========================== */
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const fortext = document.querySelector('#for')

/*==================================  PENDULUM  ====================================*/
let pendulum1 = document.querySelector('#pendulum1')
let pendulum2 = document.querySelector('#pendulum2')
let pendulum3 = document.querySelector('#pendulum3')
let pendulum4 = document.querySelector('#pendulum4')





/*================================================================================  STARTING COUNTDOWN  ================================================================*/
let value
let Countdowndays
let Countdownhours
let Countdownseconds
let textValue
date.addEventListener('change', (small) => {
    value = small.target.value;
}
)
text.addEventListener('change', (e) => {
    textValue = e.target.value;
})

function calldate(){
    const newDate = new Date(value);
    const present = new Date();
    const Countdowndays = Math.floor((newDate - present)/1000/3600/24);
    const Countdownhours = Math.floor((newDate - present)/1000/3600)%24;
    const Countdownminutes = Math.floor((newDate - present)/1000/60)%60;
    const Countdownseconds = Math.floor((newDate - present)/1000)%60;
  //  console.log(Countdowndays + ":" + Countdownhours + ":" + Countdownminutes + ":" + Countdownseconds);
    days.innerHTML = Countdowndays;
    hours.innerHTML = Countdownhours;
    minutes.innerHTML = Countdownminutes;
    seconds.innerHTML = Countdownseconds ;
    fortext.innerHTML = textValue;

}
setInterval (calldate, 1000)




/* ===============================================================================  START BUTTON  ======================================================================*/
start.addEventListener('click', function() {
    visible.style.visibility ="visible";
    hidden.style.visibility = "hidden";
    calldate();
   /* pendulum1.classList.add("pendulum1-motion");
    pendulum2.classList.add("pendulum2-motion");
    pendulum3.classList.add("pendulum3-motion");
    pendulum4.classList.add("pendulum4-motion");
    
*/
    
})



