/*
Crie uma função dobro(n) que retorna o dobro do número (não use alert dentro dela!). Depois mostre o valor devolvido.

🎯
Exemplo
dobro(5) devolve 10.

function
return
*
*/
function dobroL5E2(n:number):number {
  return n*2;
}
const numL5E2 = Number(prompt("Digite um número para saber o dobro: "))
alert(`dobro: ${dobroL5E2(numL5E2)}`)