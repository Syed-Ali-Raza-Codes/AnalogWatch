let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let secounds = document.querySelector("#secounds");

function clock(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrRotation = 30 * hr + min/2;
    let minRotation = 6 * min;
    let secRotation = 6 * sec;
    
    hours.style.transform = `rotate(${hrRotation}deg)`;
    minutes.style.transform = `rotate(${minRotation}deg)`;
    secounds.style.transform = `rotate(${secRotation}deg)`;
    
}
clock();

setInterval(clock , 1000)