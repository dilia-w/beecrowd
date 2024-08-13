var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var segundos = parseInt(lines.shift());  

var qtdHoras = parseInt(segundos / 3600);
segundos = segundos % 3600;
var qtdMin = parseInt(segundos/ 60);
segundos = segundos % 60
console.log(`${qtdHoras}:${qtdMin}:${segundos}`);

