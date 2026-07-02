// Lista 02 — Exercício 15
// Enunciado: Vai pra fila preferencial quem tem mais de 65, ou é deficiente, ou é gestante. Faça as 3 perguntas.
// 70 anos → preferencial · 30, não, não → comum.

const digIdde:string = prompt("Qual a sua idade? ")?? "0";
const idde:number = Number(digIdde);
const digDeficiente:string = prompt("Possui alguma deficiência? (S/N) ")?? "0";
const digGestante:string = prompt("É Gestante?(S/N) ")?? "0";

if(idde > 65 || digDeficiente.localeCompare("s") || digGestante.localeCompare("s")){
    alert(`${digIdde}, ${digDeficiente}, ${digGestante} -> preferencial`);
} else {
    alert(`${digIdde}, ${digDeficiente}, ${digGestante} -> comum`);
}