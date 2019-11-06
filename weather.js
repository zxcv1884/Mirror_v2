const mysql = require('mysql');
const Chart = require('chart.js');
const pic = document.querySelector('.weather-pic');
const weather = document.querySelector('.now-weather');
const select = document.getElementById("usermail");
let email = select.innerHTML;
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "server"
});
let district = "";
con.query("SELECT `district` FROM `personalization` WHERE `user` = '"+email+"'", function (error, result) {
    if (result.length > 0) {
        district = result[0].district;
        // console.log(result[0].district);
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
    appendData();
    if (district !== "") {
        con.query("SELECT * FROM `weathers` WHERE `鄉鎮` ='" + district + "' ORDER BY `weathers`.`時間` ASC", function (error, result) {
            let Wx = (result[0].天氣現象編號);
            let Wd = (result[0].天氣預報綜合描述.split('。'));
            weather.innerText='天氣'+Wd[0]+'，'+Wd[1]+'。\n'+Wd[2]+'，'+Wd[3]+'。';
            pic.innerHTML = "<img src='weather_icon/"+ WxMap.get(Wx)+".png' alt='1'>";
        });
    }
}

// y 軸的顯示
let yAxis= [];
// 資料集合，之後只要更新這個就好了。
let datas=[];
let ctx = document.getElementById('canvasLine').getContext('2d');
let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:yAxis,
        datasets: [{
            label: '氣溫',
            data: datas,
            backgroundColor: "rgba(0,148,255,0.6)"
        }]
    }
});
function appendData()
{
    con.query("SELECT * FROM `weathers` WHERE `鄉鎮` ='" + district + "' ORDER BY `weathers`.`時間` ASC", function (error, result) {
        let j = 0;
        let timeArr=[];
        let weekday = new Array(7);
        weekday[0] = "（日）";
        weekday[1] = "（一）";
        weekday[2] = "（二）";
        weekday[3] = "（三）";
        weekday[4] = "（四）";
        weekday[5] = "（五）";
        weekday[6] = "（六）";
        if(yAxis.length>0){
            yAxis.clear();
            datas.clear();
        }

            while (j<15) {
            //超過10 個，就把最早進來的刪掉
            //推入y 軸新的資料
            if(yAxis.length>18){
                yAxis.shift();
                datas.shift();
            }
            let datetime = new Date();
            datetime.setTime(result[j].時間);
            if (datetime.getHours() < 10){
                timeArr.push(weekday[datetime.getDay()]+"0"+datetime.getHours()+":00");
            } else {
                timeArr.push(weekday[datetime.getDay()]+datetime.getHours()+":00");
            }

            yAxis.push(timeArr[j]);
            datas.push(result[j].溫度);

            //更新線圖
            lineChart.update();
            j++;
        }
    });

}
function callGoogleCalendar(){
    let importedGoogle = document.createElement('script');
    importedGoogle.src = './googleCalendar.js';
    document.head.appendChild(importedGoogle);
}
//每秒做一次
setInterval(timer, 1000 * 60 * 30);
setTimeout(callGoogleCalendar,100);
