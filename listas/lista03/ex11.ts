// Lista 03 — Exercício 11
// Enunciado: Leia A e B e mostre os números pares de A até B. O laço não precisa começar em 1!
// A = 3, B = 12 → 4 6 8 10 12. 

const dig1 = Number(prompt("Digite o primeiro número: "));  
const dig2 = Number(prompt("Digite o segundo número: "));
let dig1corrigido:number = dig1;
let accPares:string = "";

if(dig1 %2 !== 0){
    dig1corrigido = dig1+1;
}

for(let i = dig1corrigido; i <= dig2; i += 2) {
    accPares = accPares + " " + i;
}

alert(`A = ${dig1corrigido}, B = ${dig2} -> ${accPares}`)
