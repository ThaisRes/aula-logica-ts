/*
Crie saudacaoHorario(hora) que retorna "Bom dia" (< 12), "Boa tarde" (< 18) ou "Boa noite".

🎯
Exemplo
9 → Bom dia · 15 → Boa tarde · 21 → Boa noite.

function
else if
return
*/

function saudacaoHorario(hora:number):string {
  if(hora<12){return "Bom dia!"} 
  else if (hora <18){return "Boa tarde!"}
  else {return "Boa noite!"}
}
const digHora = Number(prompt("Que horas são (digite a hora sem os minutos no formato 24h): "))
alert(saudacaoHorario(digHora));