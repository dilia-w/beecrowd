var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var A = parseInt(values.shift());
var B = parseInt(values.shift());

if (B % A === 0 || A % B === 0) {
    console.log("Sao Multiplos")
} else {
    console.log("Nao sao Multiplos")
}
