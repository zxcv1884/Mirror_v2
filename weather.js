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

function timer() {
    if (district !== "") {
        con.query("SELECT * FROM `weathers` WHERE `鄉鎮` ='" + district + "' ORDER BY `weathers`.`時間` ASC", function (error, result) {
            let Wx = (result[0].天氣現象編號);
            let Wd = (result[0].天氣預報綜合描述.split('。'));
            weather.innerText='天氣'+Wd[0]+'，'+Wd[1]+'。\n'+Wd[2]+'，'+Wd[3]+'。';
            if (Wx === 1) {
            pic.innerHTML = "<img src='weather_icon/1.png' alt='1'>";
            } else if (Wx >= 2 && Wx < 4) {
                pic.innerHTML = "<img src='weather_icon/2.png' alt='2'>";
            } else if (Wx >= 4 && Wx < 6) {
                pic.innerHTML = "<img src='weather_icon/4.png' alt='4'>";
            } else if (Wx >= 8 && Wx < 15) {
                pic.innerHTML = "<img src='weather_icon/8.png' alt='8'>";
            } else if (Wx >= 15 && Wx < 19) {
                pic.innerHTML = "<img src='weather_icon/15.png' alt='15'>";
            } else if (Wx >= 19 && Wx < 21) {
                pic.innerHTML = "<img src='weather_icon/19.png' alt='19'>";
            } else if (Wx >= 21 && Wx < 23) {
                pic.innerHTML = "<img src='weather_icon/21.png' alt='21'>";
            } else if (Wx === 23) {
                pic.innerHTML = "<img src='weather_icon/23.png' alt='23'>";
            } else if (Wx >= 24 && Wx < 29) {
                pic.innerHTML = "<img src='weather_icon/24.png' alt='24'>";
            } else if (Wx >= 29 && Wx < 34) {
                pic.innerHTML = "<img src='weather_icon/29.png' alt='29'>";
            } else if (Wx >= 34 && Wx < 37) {
                pic.innerHTML = "<img src='weather_icon/34.png' alt='34'>";
            } else if (Wx >= 37 && Wx < 42) {
                pic.innerHTML = "<img src='weather_icon/37.png' alt='37'>";
            } else if (Wx === 42) {
                pic.innerHTML = "<img src='weather_icon/42.png' alt='42'>";
            }
        });
    }
}

setInterval(timer, 1000 * 60 * 30);
