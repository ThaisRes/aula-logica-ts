// Lista 02 — Exercício 12
// Enunciado: Menos de 16: não entra. De 16 a 17: só acompanhado. 18+: entra normal. Leia a idade.
// 14 → não entra · 17 → acompanhado · 20 → entra.

const digIdd:string = prompt("Digite a idade: ")?? "0";
const idd:number = Number(digIdd);

if(idd < 16){
    alert(`${idd} -> não entra`);
} else if(idd < 18){
    alert(`${idd} -> acompanhado`);
} else {
    alert(`${idd} -> entra`);
}