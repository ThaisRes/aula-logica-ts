/*
Um caixa: 1 deposita, 2 vê saldo, 3 sai. Repita o menu (while) até escolher Sair.

Exemplo
1 (deposita 50) → 2 (saldo R$50) → 3 → "Até logo!".

while (!== "3")
if / else if
acumulador
*/
let caixa:number = 0;
let deposito:number = 0;

while (caixa !== 3) {
  caixa = Number(prompt( "Digite:\n" +
  "1 - Depositar\n" +
  "2 - Ver saldo\n" +
  "3 - Sair"));
  if (caixa ===1) {
    const adicionar = Number(prompt("Quanto deseja depositar: "));
      if (adicionar > 0) {
      deposito += adicionar;
      }
  } else if (caixa ===2) {
    alert(`O saldo é de R$${deposito}`);
  }
}
alert("Caixa Fechado");