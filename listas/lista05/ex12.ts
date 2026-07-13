/*
Crie ehPrimo(n) que retorna true/false. Dica: assim que achar um divisor, já pode dar return false (sai da função!).

🎯
Exemplo
ehPrimo(7) → true · ehPrimo(9) → false.

function
for
return (sai já)
*/

function ehPrimo(num:number):boolean {
  if (num < 2) { return false; }
  for(let i = 2; i < num; i++) {
    if(num%i === 0){return false}
  }
  return true;
}
const digL5E12 = Number(prompt("Digite um número para saber se é primo:"));
alert("É Primo? " + ehPrimo(digL5E12))
