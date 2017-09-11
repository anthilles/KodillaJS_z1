
var OSinfo = require('./OSInfo');

process.stdin.on('readable', function(){
    //metoda read ma za zadanie odczytanie tego, co użytkownik podał na wejściu
    var input = process.stdin.read();
    // instrukcja warunkowa sprawdzająca, czy na wejściu cokolwiek istnieje
    if (input !== null){
        var instruction = input.toString().trim();
        switch (instruction){
            case "/exit":
                process.stdout.write('Koniec z apką!\n');
                process.exit();
                break;
            case "info":
                console.log(process.versions.node);    
                break;
            case "/getOSinfo":
                OSinfo.print();          
                break;
            default:
                process.stderr.write('Coś ty wpisał??!\n');
                break;
        }
    }
});
