/*
Crie fatorial(n) que calcula n! com um for dentro e retorna o total. A função esconde o laço!

🎯
Exemplo
fatorial(5) = 1×2×3×4×5 = 120.

function
for dentro
return
*/
function fat(num:number):number{
  let acc:number = 1;
  for(let i = 1; i <= num; i++){
    acc = acc*i;
  }
  return acc;
}
const L5E10 = Number(prompt("Digite um número: "))
alert("Fatorial: " + fat(L5E10))