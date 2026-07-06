// Lista 02 — Exercício 19
// Enunciado: Leia 2 números e a operação (+ - * /). Faça a conta — e bloqueie a divisão por zero.
// 6, 2, + → 8 · 6, 0, / → "não dá pra dividir por zero".

const digNumer1:string = prompt("Digite o primeiro valor: ") ?? "0";
const digNumer2:string = prompt("Digite o segundo valor:  ") ?? "0";
const operacao:string = prompt("Digite o sinal da operação( + , - , * , / ): ") ?? "0";
const Num1:number = Number(digNumer1);
const Num2:number = Number(digNumer2);

if(operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/") {
    alert(`Reinicie a calculadore e escolha uma operação válida de acordo com os sinais ( + , - , * , / )`)
} else if(operacao == "+") {
    alert(`${Num1} ${operacao} ${Num2} -> ${Num1 + Num2}`)
} else if (operacao == "-") {
    alert(`${Num1} ${operacao} ${Num2} -> ${Num1 - Num2}`)
} else if (operacao == "*") {
    alert(`${Num1} ${operacao} ${Num2} -> ${Num1 * Num2}`)
} else if (operacao == "/" && Num2 !== 0) {
    alert(`${Num1} ${operacao} ${Num2} -> ${Num1 / Num2}`)
} else {
    alert(`${Num1} ${operacao} ${Num2} -> Não é possivel dividir por zero.`)
}