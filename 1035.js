var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var A = parseInt(values.shift());
var B = parseInt(values.shift());
var C = parseInt(values.shift());
var D = parseInt(values.shift());

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}