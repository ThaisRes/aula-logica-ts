/*
Percorra a lista de votos e conte quantas vezes o "sim" apareceu.

🎯
Exemplo
["sim","não","sim","sim","não"] → 3 votos "sim".

for
if
===
contador
*/
const listaVotos:string[] = ["sim","não","sim","sim","não"] ;
let contaSim:number= 0;
for (let i = 0; i < listaVotos.length; i++) {
  if (listaVotos[i] === "sim") {
    contaSim = contaSim + 1;
  }
}
alert("Contagem de sim: " + contaSim);