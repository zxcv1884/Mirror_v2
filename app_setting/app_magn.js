const child_process = require('child_process');
    child_process.exec('python3 flask_opencv/p.py', function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: '+error.signal);
    }