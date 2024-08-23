var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var inicial = parseInt(values.shift());
var final = parseInt(values.shift());

var duracao; 

if (inicial === final) {
    duracao = 24; 
} else if (final >= inicial) {
    duracao = final - inicial;
} else {
    duracao = (24 - inicial) + final;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);