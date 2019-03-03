const fs = require('fs');
const child_process = require('child_process');
var workerProcess = child_process.exec('cd face & python test3.py ', function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: '+error.signal);
    }
    var b = document.getElementById("usermail");
    b.innerText = stdout;
});
