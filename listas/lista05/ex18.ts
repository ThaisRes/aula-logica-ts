// Lista 02 — Exercício 18
// Enunciado: Leia 3 lados. Se formam triângulo (cada lado < soma dos outros 2), classifique: equilátero, isósceles ou escaleno.
// 5,5,5 → equilátero · 5,5,3 → isósceles · 3,4,5 → escaleno · 1,1,5 → não forma.

const digL1:string = prompt("Digite o valor do primeiro lado do triângulo: ") ?? "0";
const digL2:string = prompt("Digite o valor do segundo lado do triângulo:  ") ?? "0";
const digL3:string = prompt("Digite o valor do terceiro lado do triângulo:  ") ?? "0";
const L1:number = Number(digL1);
const L2:number = Number(digL2);
const L3:number = Number(digL3);

if(L1<(L2+L3) && L2<(L1+L3) && L3<(L2+L1)){
    if(L1 == L2 && L2 == L3) {
        alert(`${L1}, ${L2}, ${L3} -> Equilátero`)
    } else if(L1 == L2 || L2 == L3 || L3 == L1) {
        alert(`${L1}, ${L2}, ${L3} -> Isósceles`)
    } else {
        alert(`${L1}, ${L2}, ${L3} -> Escaleno`)
    }  
} else {
    alert(`${L1}, ${L2}, ${L3} -> Não forma um triângulo`)
}