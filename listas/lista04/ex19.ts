/*
Cada aluno é um objeto { nome, nota }. Use .filter pra pegar os aprovados (nota ≥ 6) e .map pros nomes.

🎯
Exemplo
Ana(8), Bruno(5), Caio(9), Duda(4) → aprovados: Ana, Caio.

{ nome, nota }
.filter
.map
a.nota
*/

const objAlunos:{ nome: string; nota: number }[]  = [ 
  { nome: "Ana", nota: 8 }, 
  { nome: "Bruno", nota: 5 }, 
  { nome: "Caio", nota: 9 }, 
  { nome: "Duda", nota: 4 } 
];

let alunosAprovados:{ nome: string; nota: number }[]  = objAlunos.filter(element => element.nota >= 6);
let apenasNomes:string[] = alunosAprovados.map(element => element.nome);
alert("Alunos aprovados: " + apenasNomes.join(" , "));