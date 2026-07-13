/*
Use forEach pra montar uma lista com um traço antes de cada nome.

🎯
Exemplo
["Ana","Bruno","Caio"] → - Ana / - Bruno / - Caio.

.forEach
=>
acumular
*/

let arrL4E5:string[] = ["Ana","Bruno","Caio"];
let showL4E5:string = "";
arrL4E5.forEach(nome => {showL4E5 =showL4E5 + " - " + nome + "/"});

alert(`${arrL4E5.join(" , ")} -> ${showL4E5}`)
