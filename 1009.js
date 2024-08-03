var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var name = lines.shift();
var salary = parseFloat(lines.shift());
var products = parseFloat(lines.shift());

var commission = products * 0.15;
var final_salary = salary + commission;

console.log("TOTAL = R$ " + final_salary.toFixed(2));