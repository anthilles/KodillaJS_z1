var os = require('os');
var Time = require('./time');
var colors = require('colors');


function getOSinfo() {
    var type = os.type();
    if (type === "Darwin"){
        type = 'OSX';
    }else if(type === 'Windows_NT'){
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();

    console.log('System:'.green, type.blue);
    console.log('Release:'.blue, release);
    console.log('CPU model:'.red, cpu);
    Time.TimeModul();
    console.log('User name:'.rainbow, userInfo.username);
    console.log('Home dir:'.trap, userInfo.homedir);
}

exports.print = getOSinfo;


