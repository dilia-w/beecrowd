var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const lines1 = lines[0].split(' ');
const N1 = Number(lines1[0]);
const N2 = Number(lines1[1]);
const N3 = Number(lines1[2]);
const N4 = Number(lines1[3]);
const exame = Number(lines[1]);

const P1 = 2;
const P2 = 3;
const P3 = 4;
const P4 = 1;

var media = ((N1*P1)+(N2*P2)+(N3*P3)+(N4*P4))/(P1 + P2 + P3 + P4);

var nova_media = (media + exame) / 2;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7) {
    console.log("Aluno aprovado.");
} else if (media < 7 && media >= 5) {
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    if (nova_media >= 5) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${nova_media.toFixed(1)}`)
} else {
    console.log("Aluno reprovado.");
}


