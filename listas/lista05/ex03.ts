/*
Crie uma função soma(a, b) com dois parâmetros que retorna a soma. Leia 2 números e mostre o resultado.

🎯
Exemplo
soma(3, 4) devolve 7.

function
2 parâmetros
return
*/

function somaL5E3(a:number, b:number):number {
  return a+b;
}
const numAL5E3 = Number(prompt("Digite o primeiro número: "))
const numBL5E3 = Number(prompt("Digite o segundo número: "))
alert(`soma: ${somaL5E3(numAL5E3, numBL5E3)}`)