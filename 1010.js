var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift().trim().split(" ");

var code1 = parseFloat(values.shift());
var qt1 = parseFloat(values.shift());
var price1 = parseFloat(values.shift());

values = lines.shift().trim().split(" ");

var code2 = parseFloat(values.shift());
var qt2 = parseFloat(values.shift());
var price2 = parseFloat(values.shift());

var total_price = (qt1 * price1) + (qt2 * price2);

console.log("VALOR A PAGAR: R$ " + total_price.toFixed(2));
