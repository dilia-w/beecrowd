var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var x = parseFloat(values.shift());
var y = parseFloat(values.shift());

if (x === 0 && y === 0) {
    console.log("Origem");
} else if (x === 0) {
    console.log("Eixo Y");
} else if (y === 0) {
    console.log("Eixo X");
} else if (x > 0 && y > 0) {
    console.log("Q1");
} else if (x < 0 && y > 0) {
    console.log("Q2");
} else if (x < 0 && y < 0) {
    console.log("Q3");
} else if (x > 0 && y < 0) {
    console.log("Q4");
}
