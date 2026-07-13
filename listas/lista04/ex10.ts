/*
Use .map pra criar uma nova lista com cada número dobrado.

🎯
Exemplo
[1,2,3,4,5] → 2, 4, 6, 8, 10.

.map
=>
*
*/
const arrL4E10:number[]=[1,2,3,4,5];
let dobroL4E10:number[]=arrL4E10.map(n=>n*2);
alert(`${dobroL4E10.join(" , ")}`)