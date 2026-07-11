// Lista 03 — Exercício 15
// Enunciado: Só aceite segundos de 1 a 59. Se digitarem fora, peça de novo (while) até valer. Depois conte. while (valida) || for (conta)
// 90 → "Inválido!" · 0 → "Inválido!" · 5 → conta 1 a 5.

let cronometro:number = 0;
while( cronometro < 1 || cronometro > 59 ){
    cronometro = Number(prompt("Digite os segundos para iniciar o cronometro: "));
    if( cronometro < 1 || cronometro > 59){
        alert(`${cronometro} -> invalido`)
    } else {
        let contagem:string = "";
        for(let i = 1; i <=cronometro; i++){
            contagem = contagem + " " + i;
        }
        alert(`${cronometro} -> ${contagem}`)
    }
}

