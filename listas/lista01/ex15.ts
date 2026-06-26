// Lista 01 — Exercício 15
// Enunciado: Leia o total da conta e o nº de pessoas. Some 10% de gorjeta e mostre quanto cada um paga.

const digConta:string = prompt("Digite o total da conta: ")?? "0";
const digPessoas:string = prompt("Digite o número de pessoas que pagarão a conta: ")?? "0";
const conta:number = Number(digConta);
const pessoas:number = Number(digPessoas);
const calculo:number = (conta*1.1);

alert(`R$${conta.toFixed(2)}, ${pessoas} pessoas -> R$${calculo.toFixed(2)} ÷ ${pessoas} = R$${(calculo/pessoas).toFixed(2)} cada.`);