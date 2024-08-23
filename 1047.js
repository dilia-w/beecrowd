var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var values = lines.shift().trim().split(" ");

var hora_inicial = parseInt(values.shift());
var min_inicial = parseInt(values.shift());
var hora_final = parseInt(values.shift());
var min_final = parseInt(values.shift());

// Converte horas e minutos para minutos desde o início do dia
let inicioEmMinutos = hora_inicial * 60 + min_inicial;
let finalEmMinutos = hora_final * 60 + min_final;

// Calcula a duração em minutos
let duracaoEmMinutos = finalEmMinutos - inicioEmMinutos;

// Se a duração for negativa ou zero, significa que o jogo passou pela meia-noite
if (duracaoEmMinutos <= 0) {
    duracaoEmMinutos += 24 * 60; // Adiciona 24 horas em minutos
}

// Converte a duração em horas e minutos
let duracaoHoras = Math.floor(duracaoEmMinutos / 60);
let duracaoMinutos = duracaoEmMinutos % 60;

console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`);