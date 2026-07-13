/*
Sem usar .reverse: percorra de trás pra frente e vá dando .push num array novo.

🎯
Exemplo
["A","B","C","D"] → D, C, B, A.

for (i--)
.push
array novo
*/
const arrL4ex16:string[] = ["A", "B", "C", "D"];
let inverteArr:string[] = [];
for (let i = arrL4ex16.length - 1; i >= 0; i--) {
  inverteArr.push(arrL4ex16[i]);
}
alert(inverteArr);