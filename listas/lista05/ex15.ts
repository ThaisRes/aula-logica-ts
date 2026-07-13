/*
Crie soPares(lista) que retorna um novo array só com os pares. Uma função pode devolver uma coleção!

🎯
Exemplo
soPares([4,7,2,9,10]) → [4, 2, 10].

array novo
.push
return lista
*/
function soPares(lista:number[]):number[] {
  let pares:number[] = [];
  for(let i=0; i<lista.length; i++){
    if(lista[i]%2 ===0){
      pares.push(lista[i]);
    }
  }
  return pares;
}

const arrL5E15:number[] =  [4,7,2,9,10];
alert("Pares: " + soPares(arrL5E15));