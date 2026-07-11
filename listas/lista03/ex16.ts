// Lista 03 — Exercício 16
// Enunciado: O número secreto é 7. Peça palpites (while) até acertar, contando as tentativas. while !== contador
// 3 → "errou" · 9 → "errou" · 7 → "Acertou em 3 tentativas!"

const secreto:number = 7;
let palpite:number = 0;
let contador:number = 0;
while(palpite !== 7){
    palpite = Number(prompt("Digite um número até adivinhar: "));
    contador = contador +1;
    if(palpite !== 7){
        alert(`${palpite} -> errou`)
    } else {
        alert(`${palpite} -> acertou em ${contador} tentativa(s).`)
    }
}