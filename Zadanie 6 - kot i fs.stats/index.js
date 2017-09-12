var fs = require('fs'); // import modułu fs do zarządzania plikami
var folderDir = '.'; // odniesienie do ścieżki projektu

fs.readdir(folderDir, function(err, list){ // odczytanie zawartości katalogu
    if (err) throw err;
    console.log(list);
    fs.appendFile('./fileList.txt', list, function(err){ //przypisanie do fileList.txt - list
        if (err) throw err;
        console.log('Zapisano');
    });
});