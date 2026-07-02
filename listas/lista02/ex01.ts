// Lista 02 — Exercício 01
// Enunciado: Leia a idade e diga se a pessoa é maior ou menor de idade.
//20 → "Maior de idade" · 15 → "Menor de idade".

const digIdade:string = prompt("Digite a idade: ")?? "0";
const idade:number = Number(digIdade);

if(idade >=18 ){
    alert(`${idade} -> Maior de idade`);
} else {
    alert(`${idade} -> Menor de idade`);
}


