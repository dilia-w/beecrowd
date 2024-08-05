var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var horas = parseFloat(lines.shift());
var vel = parseFloat(lines.shift());
var dist = horas * vel;

var litros = dist / 12;

console.log(litros.toFixed(3));