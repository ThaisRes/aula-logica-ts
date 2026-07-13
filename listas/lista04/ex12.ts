/*
Use .filter pra ficar só com os preços acima de 100.

🎯
Exemplo
[50,120,30,200,90] → 120, 200.

.filter
=>
>
*/
const arrL4E12:number[]=[50,120,30,200,90];
let maiorCemL4E12:number[]=arrL4E12.filter(n=>n>100);
alert(`${maiorCemL4E12.join(" , ")}`)