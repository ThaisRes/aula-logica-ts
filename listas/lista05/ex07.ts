// Lista 02 — Exercício 07
// Enunciado: A loja dá 10% de desconto em compras acima de R$ 100. Leia o valor e mostre quanto pagar.
//120 → "R$ 108" · 80 → "R$ 80".

const digValor:string = prompt("Digite o valor da compra: ")?? "0";
const valor:number = Number(digValor);

if(valor > 100) {
    alert(`${valor} -> R$ ${valor*0.9}`)
} else {
    alert(`${valor} -> R$ ${valor}`)
}