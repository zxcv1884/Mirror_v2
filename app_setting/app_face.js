// const fs = require('fs');
const child_process = require('child_process');
    child_process.exec('python3 face/test3.py', function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: '+error.signal);
    }
    let email = stdout.split("'");
    var b = document.getElementById("usermail");
    b.innerText = email[3];
    let imported = document.createElement('script');
    imported.src = './weather.js';
    document.head.appendChild(imported);
});
