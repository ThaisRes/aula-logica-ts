// Lista 02 — Exercício 11
// Enunciado: Leia a nota (0–10) e mostre o conceito: A (≥9), B (≥7), C (≥6), D (≥4), F (<4).
// 9.5 → "A" · 6 → "C" · 3 → "F".

const digConceito:string = prompt("Digite a nota de 0.0 a 10.0: ") ?? "0";
const conceito:number = Number(digConceito);

if(conceito >= 9) {
    alert(`${conceito} -> A`)
} else if(conceito >= 7){
    alert(`${conceito} -> B`)
} else if(conceito >= 6){
    alert(`${conceito} -> C`)
}  else if(conceito >= 4){
    alert(`${conceito} -> D`)
}  else {
    alert(`${conceito} -> F`)
}