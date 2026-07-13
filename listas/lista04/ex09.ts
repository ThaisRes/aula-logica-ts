/*
Mesma ideia do maior, mas trocando quando achar um menor. Cuidado: não comece o menor em 0!

🎯
Exemplo
[12,5,27,8,19] → o menor é 5.

arr[0]
for
<
*/
const arrL4E9:number[]=[12,5,27,9,19];
let menorL4E9:number=arrL4E9[0];
for(let i=0; i< arrL4E9.length;i++){
  if(arrL4E9[i] < menorL4E9){menorL4E9 = arrL4E9[i];}
}
alert(`${arrL4E9.join(" , ")} -> menor ${menorL4E9}`)