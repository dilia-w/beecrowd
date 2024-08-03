var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
var R = parseFloat(input);

var A = n * Math.pow(R,2);

console.log("A="+ A.toFixed(4));