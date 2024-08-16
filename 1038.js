var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var codigo = parseFloat(values.shift());
var quantidade = parseFloat(values.shift());
let preco;

if (codigo == 1) {
    preco = 4.00;
} else if (codigo == 2) {
    preco = 4.50;
} else if (codigo == 3) {
    preco = 5.00;
} else if (codigo == 4) {
    preco = 2.00;
} else if (codigo == 5) {
    preco = 1.50;
}

var total = quantidade * preco;
console.log(`Total: R$ ${total.toFixed(2)}`);


