"use strict"

// релізація таймера
let timerSecond = document.getElementById('sec');
let timerMinute = document.getElementById('min');
let timerHour = document.getElementById('hour');
let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let sec = 0,
    min = 0,
    hour = 0;
let int;

function addZero(){
     (sec < 10) ? timerSecond.innerHTML = `:0${sec}` : timerSecond.innerHTML = ` :${sec}`; 
     (min < 10) ? timerMinute.innerHTML = `:0${min}` :  timerMinute.innerHTML = ` :${min}`;
     (hour < 10) ? timerHour.innerHTML = `0${hour}` :  timerHour.innerHTML = `${hour}`;
};

buttonStart.onclick = () => {
     
   //if (!int) {
    int = setInterval(show, 1000); 
       buttonStart.disabled = true;
       buttonStop.disabled = false;
//}
};

function show() {
        
        sec++;
    if (sec === 60) {
        sec = 0; min++;
    };

    if (min === 60) {
        min = 0; hour++;
    };

    if (hour === 24) {
    min = 0; hour = 0; sec = 0;
    };
    
addZero();
};       

buttonStop.onclick = () => {
    clearInterval(int);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
}
