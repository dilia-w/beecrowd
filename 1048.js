var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());

if (salario <= 400) {
    aumento = salario * 0.15
    novo_salario = salario + aumento;
    var percentual = 15;
} else if (salario > 400 && salario <= 800) {
    aumento = salario * 0.12
    novo_salario = salario + aumento;
    var percentual = 12;
} else if (salario > 800 && salario <= 1200) {
    aumento = salario * 0.10
    novo_salario = salario + aumento;
    var percentual = 10;
} else if (salario > 1200 && salario <= 2000) {
    aumento = salario * 0.07
    novo_salario = salario + aumento;
    var percentual = 7;
} else if (salario > 2000) {
    aumento = salario * 0.04
    novo_salario = salario + aumento;
    var percentual = 4;
}

console.log(`Novo salario: ${novo_salario.toFixed(2)}`);
console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);