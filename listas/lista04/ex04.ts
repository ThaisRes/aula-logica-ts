/*
Percorra o array com for e some todos os números num acumulador.

🎯
Exemplo
[10,25,5,40,20] → soma 100.

for
arr[i]
acumulador
*/

const arrL4E4:number[]=[10,25,5,40,20];
let accL4E4:number=0;
for(let i=0; i< arrL4E4.length;i++){
  accL4E4 = accL4E4 + arrL4E4[i];
}
alert(`${arrL4E4.join(" , ")} -> ${accL4E4}`)