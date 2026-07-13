/*
Crie ehPar(n) que retorna true se o número é par e false se não. Use a função num if.

🎯
Exemplo
ehPar(4) → true · ehPar(7) → false.

function
return true/false
%
*/
function ehParL5E4 (num:number):boolean {
  return num%2 ===0
}
const numL5E4 =Number(prompt("Digite um número: "))
if(ehParL5E4(numL5E4)){alert("É par")} else {alert("É ímpar")}