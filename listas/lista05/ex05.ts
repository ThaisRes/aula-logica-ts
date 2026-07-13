/*
Crie media(a, b) que retorna a média das duas notas. Mostre com 1 casa decimal.

🎯
Exemplo
media(8, 6) → 7.0.

function
return
( ) /
.toFixed()
*/
function mediaL5E5(a:number, b:number):number {
  return (a+b)/2;
}
const numAL5E5 = Number(prompt("Digite a primeira nota: "))
const numBL5E5 = Number(prompt("Digite a segunda nota: "))
alert(`media: ${(mediaL5E5(numAL5E5, numBL5E5).toFixed(1))}`)