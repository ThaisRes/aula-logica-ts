/*
Ordene do menor pro maior com .sort. Pegadinha: sem (a,b)=>a-b, o sort compara como texto e erra!

🎯
Exemplo
[10,2,33,4,25] → 2, 4, 10, 25, 33.

.sort
(a, b) => a - b
*/

const arrL4E25:number[] = [10, 2, 33, 4, 25];

let arrOrdem:number[] = arrL4E25.sort((a, b) => a - b);

alert(arrOrdem);