var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var P1 = 2;
var P2 = 3;
var P3 = 5;

var MEDIA = ((A*P1) + (B*P2) + (C*P3)) / (P1 + P2 + P3);

console.log("MEDIA = " + MEDIA.toFixed(1));