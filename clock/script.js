const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegree}deg)`

    const minutes = now.getMinutes();
    const minsDegree = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`

    const hours = now.getHours();
    const hoursDegree = ((minutes / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`


    sec.innerHTML = seconds
    sec.innerHTML = sec.innerHTML.length <= 1 ? "0" + seconds : seconds
    min.innerHTML = minutes
    min.innerHTML = min.innerHTML.length <= 1 ? "0" + minutes : minutes
    hour.innerHTML = hours
    hour.innerHTML = hour.innerHTML.length <= 1 ? "0" + hours : hours
}
setInterval(setTime, 1000);