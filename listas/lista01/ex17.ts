// Lista 01 — Exercício 17
// Enunciado: Leia o preço e o valor pago. Mostre o troco, quantas notas de R$ 10 cabem nele e quanto sobra.

const digPreco:string = prompt("Digite o preço: ")?? "0";
const digValorPg:string = prompt("Digite o valor pago: ")?? "0";

const preco:number = Number(digPreco);
const valorPg:number = Number(digValorPg);

const troco:number = valorPg - preco;
const notas10:number = Math.floor(troco/10);
const resto10:number = troco%10;

alert(`preço ${preco}, pago ${valorPg} -> troco ${troco} = ${notas10} notas de 10 + R$${resto10}.`);