var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distY = parseFloat(lines.shift());

var velX = 60;
var velY = 90;
var diferenca = velY - velX;

var tmin = (distY / diferenca) * 60;

console.log(tmin + " minutos");