// Lista 02 — Exercício 02
// Enunciado: Leia a nota (0 a 10) e diga se o aluno foi aprovado (≥ 6) ou reprovado.
//7 → "Aprovado" · 4 → "Reprovado".

const digNota:string = prompt("Digite a nota: ") ?? "0";
const nota:number = Number(digNota);

if(nota >= 6) {
    alert(`${nota} -> Aprovado`)
} else {
    alert(`${nota} -> Reprovado`)
}
