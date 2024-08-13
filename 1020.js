var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var idade = parseInt(lines.shift());

var qtdAnos = parseInt(idade / 365);
console.log(`${qtdAnos} ano(s)`);
idade = idade % 365;

var qtdMeses = parseInt(idade / 30);
console.log(`${qtdMeses} mes(es)`);
idade = idade % 30;

console.log(`${idade} dia(s)`);


