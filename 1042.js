var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

let valores = [];

var valor1 = parseInt(values.shift());
var valor2 = parseInt(values.shift());
var valor3 = parseInt(values.shift());

valores.push(valor1); 
valores.push(valor2); 
valores.push(valor3); 

let valoresOrdenados = [...valores];
valoresOrdenados.sort((a, b) => a - b);

console.log(valoresOrdenados.join("\n"));

console.log();  

console.log(valores.join("\n"));