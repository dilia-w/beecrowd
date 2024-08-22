var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ").map(parseFloat);

values.sort((a, b) => b - a);

var A = values[0];
var B = values[1];
var C = values[2];

if (A >= B + C || B >= A + C || C >= A + B) {
    console.log("NAO FORMA TRIANGULO");
} else {
    var A2 = A * A;
    var B2 = B * B;
    var C2 = C * C;

    if (A2 === B2 + C2) {
        console.log("TRIANGULO RETANGULO");
    } else if (A2 > B2 + C2) {
        console.log("TRIANGULO OBTUSANGULO");
    } else if (A2 < B2 + C2) {
        console.log("TRIANGULO ACUTANGULO");
    }

    if (A === B && B === C) {
        console.log("TRIANGULO EQUILATERO");
    } else if (A === B || A === C || B === C) {
        console.log("TRIANGULO ISOSCELES");
    }
}

