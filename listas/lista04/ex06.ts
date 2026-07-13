/*
Percorra o array e conte quantos números são pares.

🎯
Exemplo
[4,7,2,9,10,3] → 3 pares (4, 2, 10). 
for
if
% 2 === 0
*/

const arrL4E6:number[] = [4,7,2,9,10,3];
let accL4E6:number=0;
let showL4E6:string="";
for(let i = 0; i < arrL4E6.length;i++){
  if(arrL4E6[i] %2 === 0){
    accL4E6++;
    if (showL4E6 !== "") {
      showL4E6 += ", ";
    }
    showL4E6 += arrL4E6[i];
  }
}
alert(`${arrL4E6.join(" , ")} ->${accL4E6} pares, ${showL4E6}`)