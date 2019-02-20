const mysql = require('mysql');
const pic = document.querySelector('.weather-pic');
const weather = document.querySelector('.now-weather');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "server"
});
let district = "";
con.query("SELECT `district` FROM `personalization` WHERE `user` = 'zxcv1884@gmail.com'", function (error, result) {
    if (result.length > 0) {
        district = result[0].district;
        console.log(result[0].district);
        timer();
    } else {
        console.log('使用者未設定住址');
        pic.innerText = "使用者未設定住址";
    }
});
const WxMap = new Map();
    let temp = [1,2,4,6,8,15,19,21,23,24,29,34,37,42];
for(let i of temp ){
    let p = 1;
    while (p<=i) {
        WxMap.set(p,i);
        p++;
    }
}

function timer() {
    if (district !== "") {
        con.query("SELECT * FROM `weathers` WHERE `鄉鎮` ='" + district + "' ORDER BY `weathers`.`時間` ASC", function (error, result) {
            let Wx = (result[0].天氣現象編號);
            let Wd = (result[0].天氣預報綜合描述.split('。'));
            weather.innerText='天氣'+Wd[0]+'，'+Wd[1]+'。\n'+Wd[2]+'，'+Wd[3]+'。';
            pic.innerHTML = "<img src='weather_icon/"+ WxMap.get(Wx)+".png' alt='1'>";
        });
    }
}

setInterval(timer, 1000 * 60 * 30);