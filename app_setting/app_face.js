const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nayuyu1884",
    database: "server"
});
const child_process = require('child_process');
    child_process.exec('python3 face/test3.py', function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: '+error.signal);
    }
    let email = stdout.split("'");
    const b = document.getElementById("usermail");
    const welcome = document.getElementById("welcome");
        b.innerText = email[3];
        con.query("SELECT * FROM `users` WHERE `email` = '" + email[3] + "'", function (error, result) {
            welcome.innerText = '您好，'+result[0].name;
        });
    let imported = document.createElement('script');
        imported.src = './weather.js';
        document.head.appendChild(imported);
        let imported_magn = document.createElement('script');
        imported_magn.src = './app_setting/magn.js';
        document.head.appendChild(imported_magn);
    });
