/*
Use .indexOf pra achar a posição de um nome na fila. Ele devolve -1 se não achar!

🎯
Exemplo
Fila: Ana(0), Bruno(1), Caio(2). "Caio" → índice 2 (o 3º).

.indexOf()
=== -1
pos + 1
*/

const fila:string[] = ["Ana", "Bruno", "Caio", "Duda"];
const minusculoFila:string[] = fila.map(nome=>nome.toLowerCase());

const buscarNome = ((prompt("Digite o nome que está buscando: "))?.toLowerCase())?? "";
const posicao = minusculoFila.indexOf(buscarNome);

if (posicao === -1) {
  alert("Este nome não está na fila");
} else {
  alert("Posição na fila: " + (posicao + 1) );
}