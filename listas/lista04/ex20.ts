/*
Na mesma lista de objetos, descubra quem tem a maior nota — guardando o objeto inteiro, não só o número.

🎯
Exemplo
Ana(8), Bruno(5), Caio(9), Duda(7) → Caio (9).

alunos[0]
for
.nota
>
*/

const objAlunosL4E20:{ nome: string; nota: number }[]  = [ 
  { nome: "Ana", nota: 8 }, 
  { nome: "Bruno", nota: 5 }, 
  { nome: "Caio", nota: 9 }, 
  { nome: "Duda", nota: 4 } 
];

let maiorNota:{ nome: string; nota: number } = objAlunosL4E20[0];
for (let i = 1; i < objAlunosL4E20.length; i++) {
  if (objAlunosL4E20[i].nota > maiorNota.nota) {
    maiorNota = objAlunosL4E20[i];
  }
}
alert("Maior nota: " + maiorNota.nota + "\nAluno(a): " + maiorNota.nome);