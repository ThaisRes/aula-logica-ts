/*
Uma função pode chamar a si mesma! Faça o fatorial sem for: n! = n × (n−1)!. Precisa de um caso base pra parar.

🥞
Aqui a call stack aparece
Cada chamada empilha; ao bater no caso base, tudo desempilha e as multiplicações voltam.

recursão
caso base
chama a si mesma
*/

function fatorialRecursivo(num:number):number {
  if (num <= 1) {
    return 1; 
  }
  return num * fatorialRecursivo(num - 1);
}
const numL5E18 = Number(prompt("Digite um número para conhecer o fatorial:"));
alert(fatorialRecursivo(numL5E18));