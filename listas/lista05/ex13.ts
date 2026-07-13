/*
Crie somar(lista) que recebe um array de números e retorna a soma de todos.

🎯
Exemplo
somar([10, 25, 5]) devolve 40.

function(lista)
for
return
*/
function somar (lista:number[]):number {
  let acc:number=0;
  for(let i=0; i<lista.length; i++){
    acc = acc + lista[i];
  }
  return acc;
}
const arrL5E13:number[] =  [10, 25, 5];
alert("Soma" + arrL5E13.join(" , ") + " = " +somar(arrL5E13));