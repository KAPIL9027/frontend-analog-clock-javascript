setInterval(setClock,1000);


const hourHand = document.querySelector('[hourData]');
const minuteHand = document.querySelector('[minuteData]');
const secondHand = document.querySelector('[secondData]');

let audio = new Audio('clock-ticking.mp3');
audio.loop = true;
audio.play();

function setClock() {
    let date = new Date();
    let secondsRatio = date.getSeconds() / 60;
    let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
    let hourRatio = (minutesRatio + date.getHours()) / 12;
   
    setRotation(hourHand,hourRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(secondHand,secondsRatio);
    
}

const setRotation = (hand, ratio)=> {
    hand.style.setProperty('--rotation',ratio*360);
}

setClock();