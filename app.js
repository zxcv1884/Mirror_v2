const moment = require('moment');
const elNow = document.querySelector('.now-time');
const elDay = document.querySelector('.now-day');
timer();
function timer() {
    elNow.innerText = moment().locale('zh-tw').format('HH:mm:ss');
    elDay.innerText = moment().locale('zh-tw').format('YYYY年MM月DD日dddd');
    setTimeout(() => {
        timer()
    }, 1000)
}