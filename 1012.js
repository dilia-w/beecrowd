var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var A = parseFloat(values.shift());
var B = parseFloat(values.shift());
var C = parseFloat(values.shift());

var pi = 3.14159;

var triangulo = (A * C) / 2;
var circulo = pi * Math.pow(C, 2);
var trapezio = ((A + B) * C) / 2 ;
var quadrado = Math.pow(B, 2);
var retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3) + "\n" + "CIRCULO: " + circulo.toFixed(3) + "\n" + "TRAPEZIO: " + trapezio.toFixed(3) + "\n" + "QUADRADO: " + quadrado.toFixed(3) + "\n" + "RETANGULO: " + retangulo.toFixed(3));
