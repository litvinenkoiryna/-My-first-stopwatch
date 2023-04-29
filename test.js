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






/*

//варіант, при якому кнопка старт також не працює після нвтискання кнопки стоп.
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

function showTime(){
   if (!int) {
    
      int = setInterval(function() {
        
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
    
     }, 1000);
   }
    };
    buttonStart.addEventListener('click', showTime);

    buttonStop.addEventListener('click', function func () {
              clearInterval(int);
              buttonStart.removeEventListener('click',showTime);
     });




// варіант №1
//таймер працює, але кнопка старт працює лише 1 раз.
let timerSecond = document.getElementById('sec');
let timerMinute = document.getElementById('min');
let timerHour = document.getElementById('hour');
let sec = 0,
    min = 0,
    hour = 0;
    let int;

function showTime(){
   
   int = setInterval(function() {
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
    
   }, 1000);
   
};

function addZero(){
     (sec < 10) ? timerSecond.innerHTML = `:0${sec}`:timerSecond.innerHTML = `:${sec}`; 
     (min < 10) ? timerMinute.innerHTML = `:0${min}`:timerMinute.innerHTML = `:${min}`;
     (hour < 10) ? timerHour.innerHTML = `0${hour}`:timerHour.innerHTML = `${hour}`;
};

function start(){
   let buttonStart = document.getElementById('start');.

   let buttonStop = document.getElementById('stop');

   buttonStart.addEventListener('click', showTime, {once : true});
  
   buttonStop.onclick = function(){
        clearInterval(int);
    }
};
start();
  
   
*/


     /*
     
//варіант №2 - кнопки старт стоп не працюють, одночасно запускаються і секунди і хвилини і години
// а замість конструкції додавання нуля при цифрі менше 10 краще написати функцію, як у варіанті №1


     function showTimer(){
        let seconds = document.getElementById('sec');
        let minutes = document.getElementById('min');
        let hours = document.getElementById('hour');
      let i = 0;
      let j = 0;
      let k = 0; 
      setInterval(function() {
         function showSeconds(){
              if (i === 60) {
                  i = 0; j++;  
              }; 
                   i++;    
             seconds.innerText = i;   
         };
         
 
         function showMinutes(){
                       
                if (j === 60) {
                      j = 0; k++;
                };
                     j++;
                minutes.innerText = j;  
          };
            
          
         function showHours(){
                  k++;
         };
        hours.innerText = k;  
 showSeconds();
 showMinutes(); 
 showHours();     

     /*if (sec < 10) { 
            if (min < 10) {
                if (hour < 10) {
                    timer.innerHTML =`0${hour}:0${min}:0${sec}`;
                } else {
                    timer.innerHTML = `${hour}:0${min}:0${sec}`;
                };
            } else {
                if (hour < 10) {
                    timer.innerHTML = `0${hour}:${min}:0${sec}`;
                } else {
                    timer.innerHTML = `${hour}:${min}:0${sec}`;
                };
            }
        } else {
            if (min < 10) {
                if (hour < 10) {
                    timer.innerHTML = `0${hour}:0${min}:${sec}`;
                } else {
                    timer.innerHTML = `${hour}:0${min}:${sec}`;
                };
            } else {
                if (hour < 10) {
                    timer.innerHTML = `0${hour}:${min}:${sec}`;
                } else {
                    timer.innerHTML = `${hour}:${min}:${sec}`;
                };
            };
        };
 
 }, 1000);
 
 }
 showTimer();*/