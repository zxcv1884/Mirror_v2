const moment = require('moment');
const elNow = document.querySelector('.now-time');
timer();
function timer() {
    elNow.innerText = moment().format('HH:mm:ss');
    setTimeout(() => {
        timer()
    }, 1000)
}