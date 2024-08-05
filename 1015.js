var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift().trim().split(" ");

var x1 = parseFloat(values.shift());
var y1 = parseFloat(values.shift());

values = lines.shift().trim().split(" ");

var x2 = parseFloat(values.shift());
var y2 = parseFloat(values.shift());

var dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(dist.toFixed(4));