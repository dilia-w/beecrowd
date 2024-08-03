var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var P1 = 3.5;
var P2 = 7.5;

var MEDIA = ((A*P1) + (B*P2)) / (P1 + P2);

console.log("MEDIA = " + MEDIA.toFixed(5));