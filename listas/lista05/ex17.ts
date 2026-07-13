/*
Crie inverter(texto) que retorna a palavra de trás pra frente. Uma string também tem .length e índice (texto[i])!

🎯
Exemplo
inverter("SENAI") → IANES.

function
for (i--)
texto[i]
return
*/
function inverter(palavra:string):string {
  let invert:string = "";
  for(let i = palavra.length-1; i>=0; i--) {
    invert = invert + palavra[i];
  }
  return invert;
}
const digL5E17 = prompt("Digite uma palavra para inverter:") ?? "";
alert(digL5E17 + " -> " + inverter(digL5E17))