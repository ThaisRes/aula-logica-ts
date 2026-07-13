/*
Dado um array de nomes, mostre o primeiro e o último. O último índice é length - 1.

🎯
Exemplo
["Ana","Bruno","Caio","Duda"] → primeiro Ana, último Duda.
*/
const nomes:string[] = ["Ana","Bruno","Caio","Duda"];
alert(`${nomes.join(" , ")} -> primeiro ${nomes[0]}, ultimo ${nomes[nomes.length-1]}`)