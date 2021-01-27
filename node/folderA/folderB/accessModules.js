const moduloA = require('../../moduloA');

console.log(moduloA.ola);
console.log(moduloA); 

const http = require('http');

const c = require('./folderC');
console.log(c);


http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080);