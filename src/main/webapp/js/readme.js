function startTimer() {

    let today = new Date();

    let amPm = (today.getHours() > 12) ? "PM" : "AM";
    let hours = ((today.getHours() % 12) < 10) ? `0${today.getHours()}` : today.getHours();
    let min = (today.getMinutes() < 10) ? `0${today.getMinutes()}` : today.getMinutes();
    let sec = (today.getSeconds() < 10) ? `0${today.getSeconds()}` : today.getSeconds();

    // console.log(amPm);
    // console.log(hours);
    // console.log(min);
    // console.log(sec);

    let times = `${amPm} ${hours} : ${min} : ${sec}`;
    document.getElementById("time").value = times;

}


function init() {
    startTimer();
    setInterval(startTimer, 1000);
}
