var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var A = parseFloat(values.shift());
var B = parseFloat(values.shift());
var C = parseFloat(values.shift());

var perimetro = A + B + C;
var area = ((A + B) * C) / 2;

if (A + B > C && A + C > B && B + C > A) {
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    console.log(`Area = ${area.toFixed(1)}`)
}
