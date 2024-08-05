var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var A = parseFloat(values.shift());
var B = parseFloat(values.shift());
var C = parseFloat(values.shift());

var maior_AB = (A + B + Math.abs(A - B)) / 2;
var maior_ABC = (maior_AB + C + Math.abs(maior_AB - C)) / 2;

console.log(maior_ABC + " eh o maior");