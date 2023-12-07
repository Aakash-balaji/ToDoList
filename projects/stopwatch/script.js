

let tens = 0;
let seconds = 0;
let min = 0;
let getTens = document.querySelector('.tens')
let getSeconds = document.querySelector('.seconds')
let getMins = document.querySelector('.mins')
let btnStart = document.querySelector('.btn-start')
let btnStop = document.querySelector('.btn-stop')
let btnReset = document.querySelector('.btn-reset')
let interval;


btnStart.addEventListener('click', ()=>{

    interval = setInterval(setTimer,10)

})

btnStop.addEventListener('click',()=>{
    clearInterval(interval)
})

btnReset.addEventListener('click',()=>{
        getMins.innerHTML = '00'
        getSeconds.innerHTML = '00'
        getTens.innerHTML = '00'
        clearInterval(interval)
})

function setTimer(){

    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;

    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0'+ seconds;
        tens = 0;
        getTens.innerHTML = '00'
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
        min++;
        getMins.innerHTML = '0' + min;
        seconds = 0;
        getSeconds.innerHTML = '00'
    }
    if (min > 9) {
        getMins.innerHTML = min;
    }

}