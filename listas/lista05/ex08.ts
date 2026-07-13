/*
Crie situacao(nota) que retorna o texto "Aprovado" (nota ≥ 6) ou "Reprovado". Note: dá pra ter mais de um return.

🎯
Exemplo
situacao(7) → "Aprovado ✅".

function
return "texto"
if / else
*/
function aproveL5E8(a:number):string {
  if(a >= 6){return "Aprovado"} else {return "Reprovado"}
}
const situacao =Number(prompt("Digite a nota: "));
alert(aproveL5E8(situacao));