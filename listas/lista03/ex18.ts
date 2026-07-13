/*
Cada termo é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8… Leia N e mostre os N primeiros termos.

Exemplo
N = 7 → 0 1 1 2 3 5 8.

for
2 variáveis
troca (swap)
*/
const termo = Number(prompt("Quanto termos de Fibonacci deseja ver: "));
let t1:number = 0;
let t2:number = 1;
let todosNum:string ="";

for (let i = 1; i <= termo; i++) {
  todosNum = todosNum + t1 + " ";
  let soma = t1 + t2;
  t1 = t2;
  t2 = soma;
}
alert(`${termo} termo(s) -> ${todosNum}`);