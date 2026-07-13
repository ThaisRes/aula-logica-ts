/*
Crie uma função saudacao(nome) que mostra "Olá, [nome]! Bem-vindo(a)." num alert. Depois chame-a com um nome.

🎯
Exemplo
saudacao("Ana") → "Olá, Ana! Bem-vindo(a)."

function
parâmetro
alert
*/
function saudacao(nome:string):void {
  alert("Olá, " + nome + "! Bem-vindo(a).");
}
saudacao(prompt("Qual é o seu nome: ") ?? "");