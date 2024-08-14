var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines.shift()) * 100; // Multiplicando por 100 para evitar problemas de precisão

const notas = [10000, 5000, 2000, 1000, 500, 200];
const moedas = [100, 50, 25, 10, 5, 1];

console.log("NOTAS:");

for (let nota of notas) {
    var qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
    valor = valor % nota;
}

console.log("MOEDAS:");

for (let moeda of moedas) {
    var qtdMoedas = parseInt(valor / moeda);
    console.log(`${qtdMoedas} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
    valor = valor % moeda;
}



