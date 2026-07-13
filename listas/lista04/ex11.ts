/*
Use .map com .toUpperCase() pra deixar todos os nomes em maiúsculas.

🎯
Exemplo
["ana","bruno"] → ANA, BRUNO.

.map
.toUpperCase()
*/
const arrL4E11:string[]=["ana","bruno"];
let maiusculaL4E11:string[]=arrL4E11.map(n=>n.toUpperCase());
alert(`${maiusculaL4E11.join(" , ")}`)