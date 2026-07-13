/*
Some tudo e divida pelo .length. Mostre com 1 casa decimal.

🎯
Exemplo
[8,6,10,7,9] → média 8.0.

for
/ .length
.toFixed()
*/

const arrL4E7:number[]=[8,6,10,7,9];
let accL4E7:number=0;
for(let i=0; i< arrL4E7.length;i++){
  accL4E7 = accL4E7 + arrL4E7[i];
}
alert(`${arrL4E7.join(" , ")} -> media ${(accL4E7/arrL4E7.length).toFixed(1)}`)