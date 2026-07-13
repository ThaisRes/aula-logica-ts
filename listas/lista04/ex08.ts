/*
Comece supondo que o maior é o primeiro item. Percorra e troque sempre que achar um maior.

🎯
Exemplo
[12,5,27,8,19] → o maior é 27.

arr[0]
for
>
*/
const arrL4E8:number[]=[12,5,27,8,19];
let maiorL4E8:number=arrL4E8[0];
for(let i=0; i< arrL4E8.length;i++){
  if(arrL4E8[i] > maiorL4E8){maiorL4E8 = arrL4E8[i];}
}
alert(`${arrL4E8.join(" , ")} -> maior ${maiorL4E8}`)