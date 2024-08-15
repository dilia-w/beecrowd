var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var A = parseFloat(values.shift());
var B = parseFloat(values.shift());
var C = parseFloat(values.shift());

if (A === 0) {
    console.log("Impossivel calcular");
} else {
    var discriminante = Math.pow(B, 2) - 4 * A * C;

    if (discriminante < 0) {
        console.log("Impossivel calcular");
        
    } else {
        var sqrtDiscriminante = Math.sqrt(discriminante);
        var x_pos = (-B + sqrtDiscriminante)/(2 * A);
        var x_neg = (-B - sqrtDiscriminante)/(2 * A);

        console.log(`R1 = ${x_pos.toFixed(5)}`);
        console.log(`R2 = ${x_neg.toFixed(5)}`);
    }
}




