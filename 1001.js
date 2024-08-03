var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
var B = lines.shift();

A = parseFloat(A);
B = parseFloat(B);

let X = A + B;

console.log("X = " + X);