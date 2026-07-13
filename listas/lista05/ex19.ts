/*
Crie calcular(a, b, op) que retorna o resultado conforme a operação (+ - * /).

🎯
Exemplo
calcular(6, 2, "*") → 12.

3 parâmetros
else if
vários return
*/

function calculadora(a:number, b:number, op:string):number {
  if (op === "+") { return a + b}
  else if (op === "-") { return a - b}
  else if (op === "*") { return a * b}
  else if (op === "/") { 
    if(b === 0){return NaN}
    return a / b
  } else {return NaN}
}

let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));
let op = prompt("Digite a operação de acordo com os seguinte sinais: + - * /  ") ?? "0";

const resultado = calculadora(a, b, op);

if (isNaN(resultado)) {
  alert("Operação inválida ou divisão por zero");
} else {
  alert(`Resultado: ${resultado}`);
}