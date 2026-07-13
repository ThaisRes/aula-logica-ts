/*
Crie maior(a, b) que retorna o maior dos dois números.

🎯
Exemplo
maior(3, 8) devolve 8.

function
if / else
return
*/
function maiorL5E6(a:number, b:number):number {
  if(a > b){return a} else {return b};
}
const numAL5E6 = Number(prompt("Digite o primeiro número: "))
const numBL5E6 = Number(prompt("Digite o segundo número: "))
alert(`O maior é ${maiorL5E6(numAL5E6, numBL5E6)}`)