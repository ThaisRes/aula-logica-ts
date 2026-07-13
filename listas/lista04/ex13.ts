/*
Pergunte um nome e use .includes pra dizer se ele está entre os convidados.

🎯
Exemplo
Convidados: Ana, Bruno, Caio. "Bruno" → está ✅ · "Zé" → não 🚫.

.includes()
if / else
*/
const convidadosL4E13:string[]=["Ana", "Bruno", "Caio"];
const incluiL4E13:string=prompt("Digite o nome do convidado para verificação: ") ?? "";
const convidadosMinusculos: string[] = convidadosL4E13.map(nome => nome.toLowerCase());


if(convidadosMinusculos.includes(incluiL4E13.toLowerCase())){
  alert("está ✅")
}else{
  alert("não 🚫")
}