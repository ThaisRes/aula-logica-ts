/*
Mostre quantos itens tem o array e o item do meio (use Math.floor pra achar o índice central).

🎯
Exemplo
[A,B,C,D,E] → tamanho 5, meio C (índice 2).

.length
Math.floor()
 */
const arr:number[] = [10,20,30,40,50,60];
alert(`${arr.join(" , ")} -> tamanho ${arr.length}, meio ${Math.floor(arr.length/2)}`)