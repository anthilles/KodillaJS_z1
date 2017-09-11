var os = require('os');

function time(){
    var uptime = os.uptime();
    var h = Math.floor(uptime/3600) + 'godz ';
    var m = Math.floor(uptime%3600/60) + 'min ';
    var s = Math.floor(uptime%3600%60) + 'sek ';
    console.log(h.red + m.green + s.blue);
}
exports.TimeModul = time;