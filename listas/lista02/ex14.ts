// Lista 02 — Exercício 14
// Enunciado: Leia a idade e classifique: criança (0–11), adolescente (12–17), adulto (18–59), idoso (60+).
// 8 → criança · 15 → adolescente · 70 → idoso.

const digId:string = prompt("Digite a idade: ")?? "0";
const id:number = Number(digId);

if(id >= 60){
    alert(`${id} -> idoso`);
} else if(id >= 18){
    alert(`${id} -> adulto`);
}  else if(id >= 12){
    alert(`${id} -> adolescente`);
}  else if(id >= 0){
    alert(`${id} -> criança`);
} else {
    alert(`Digite um número positivo.`);
};