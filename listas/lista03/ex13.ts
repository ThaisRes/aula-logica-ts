// Lista 03 — Exercício 13
// Enunciado: Leia N e conte de 1 até N com reticências. No fim, escreva "Fim!".

const contarN = Number(prompt("Digite um número para contagem: "));
let arrayContar:number[]=[];

for(let i = 0; i <= contarN; i++){
    arrayContar.push(i);
}
alert(`N = ${contarN} -> ${arrayContar.join("... ")}`)