/*
Crie celsiusParaF(c) que converte usando F = C × 9 / 5 + 32 e retorna o valor.

🎯
Exemplo
celsiusParaF(30) → 86.

function
return
fórmula
*/
function cPfL5E9 (celsius:number):number {
  return ((celsius * 9 / 5) + 32)
}
const celsius =Number(prompt("Digite a temperatura em celsius: "));
alert("Fahrenheit: " + cPfL5E9(celsius));