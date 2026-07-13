/*
Crie contarPares(lista) que recebe um array e retorna quantos números são pares.

🎯
Exemplo
contarPares([4,7,2,9,10]) → 3.

function(lista)
for
if % 2
return
*/

function contarPares(lista:number[]):number {
  let acc:number = 0;
  for(let i=0; i<lista.length; i++){
    if(lista[i]%2 ===0){
      acc++;
    }
  }
  return acc;
}

const arrL5E14:number[] =  [4,7,2,9,10];
alert("Pares em" + arrL5E14.join(" , ") + " = " + contarPares(arrL5E14));