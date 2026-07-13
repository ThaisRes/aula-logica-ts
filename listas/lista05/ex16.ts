/*
Reaproveite o ehPrimo do ex. 12 dentro de primosAte(max), que retorna a lista de primos até max.

🎯
Exemplo
primosAte(15) → 2, 3, 5, 7, 11, 13.

função chama função
reaproveitar
*/
function ehPrimoz(num:number):boolean {
  if (num < 2) { return false; }
  for(let i = 2; i < num; i++) {
    if(num%i === 0){return false}
  }
  return true;
}

function primosAte(max:number):number[]{
  let arr:number[]=[];
  for(let i=1; i<=max; i++){
    if(ehPrimoz(i)){arr.push(i)}
  }
  return arr;
}
const digL5E16 = Number(prompt("Digite um número todos os primos anteriores a ele:"));
alert("Primos " + primosAte(digL5E16))