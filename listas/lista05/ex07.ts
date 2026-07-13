/*
Crie area(base, altura) que retorna base × altura. Leia os dois e mostre.

🎯
Exemplo
area(5, 3) devolve 15.

function
2 parâmetros
*
*/
function areaL5E7(a:number, b:number):number {
  return a*b;
}
const numAL5E7 = Number(prompt("Digite o primeiro lado: "))
const numBL5E7 = Number(prompt("Digite o segundo lado: "))
alert(`A área é ${areaL5E7(numAL5E7, numBL5E7)}`)