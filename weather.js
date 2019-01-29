const mysql = require('mysql');
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
    }
});
// const pic = document.querySelector('.weather-pic');
// const weather = document.querySelector('.now-weather');
function timer() {
        if (district !== "") {
            con.query("SELECT * FROM `weathers` WHERE `鄉鎮` ='"+ district +"' ORDER BY `weathers`.`時間` ASC", function (error, result) {
                console.log(result[0]);
                let time = '2019-01-29 18:00:00';
                var dt = new Date(time);
                dt.setHours( dt.getHours() + 3 );
                console.log(dt);
            });
        }
}
setInterval(timer,1000*10);
