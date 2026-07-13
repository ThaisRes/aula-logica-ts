/*
Um Set é uma coleção que não aceita repetidos. Jogue o array num Set e volte pra array com [...].

🎯
Exemplo
[a, b, a, c, b] → a, b, c.

new Set()
[...spread]
.length
*/

let arrRepetidos:string[] =["a", "b", "a", "c", "b"];
let arrSemRepeticao:string[] = [...new Set(arrRepetidos)];
alert(arrSemRepeticao.join(" , "));