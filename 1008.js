var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift());
var hours = parseInt(lines.shift());
var received = parseFloat(lines.shift());

var NUMBER = number;
var SALARY = hours * received;

console.log("NUMBER = " + NUMBER + "\n" + "SALARY = U$ " + SALARY.toFixed(2));