/*
Primo só divide por 1 e por ele mesmo. Leia N e liste os primos de 2 até N. Vai precisar de laço dentro de laço.

Exemplo
N = 15 → 2 3 5 7 11 13.

for dentro de for
%
flag boolean
*/

const digPrimos = Number(prompt("Digite um número:"));
let showPrimos = "";

for (let i = 2; i <= digPrimos; i++) {
  let primo = true;

  for (let f = 2; f < i; f++) {
    if (i % f === 0) {
      primo = false;
    }
  }

  if (primo) {
    showPrimos += i + " ";
  }
}

alert(`N = ${digPrimos} -> ${showPrimos}`);