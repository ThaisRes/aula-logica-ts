/*
Comece com 2 itens, adicione mais 2 com .push e mostre a lista e o total.

🎯
Exemplo
["pão","leite"] + ovos + café → 4 itens.

.push()
.join()
.length
*/

let list:string[]=["pão","leite"];
list.push("leite");
list.push("ovos");
alert(`${list.join(" , ")} -> ${list.length} itens.`)