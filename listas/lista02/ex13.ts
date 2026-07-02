// Lista 02 — Exercício 13
// Enunciado: Leia três números e diga qual é o maior.
// 5, 9, 2 → "O maior é 9".

const digNume1:string = prompt("Digite o primeiro número: ") ?? "0";
const nume1:number = Number(digNume1);

const digNume2:string = prompt("Digite o segundo número: ") ?? "0";
const nume2:number = Number(digNume2);

const digNume3:string = prompt("Digite o segundo número: ") ?? "0";
const nume3:number = Number(digNume3);

if(nume1 > nume2 && nume1 > nume3) {
    alert(`${nume1}, ${nume2} e ${nume3}-> o maior é o ${nume1}`)
} else if(nume2 > nume1 && nume2 > nume3){
    alert(`${nume1}, ${nume2} e ${nume3}-> o maior é o ${nume2}`)
} else {
    alert(`${nume1}, ${nume2} e ${nume3}-> o maior é o ${nume3}`)
}