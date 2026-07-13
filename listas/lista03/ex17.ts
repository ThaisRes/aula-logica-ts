// Lista 03 — Exercício 17
// Enunciado: Senha certa: 1234. Dê até 3 chances. Na 2ª falha, avise "última tentativa". Bloqueie após 3 erros.
// errou, errou (⚠️ última!), errou → 🔒 Bloqueado · acertou → ✅ liberado.
// while && contador !

const senhaCerta:number = 1234;
let chance:number = 0;
let senhaTentativa:number = 0;

while (chance < 3 && senhaTentativa !== senhaCerta) {
  senhaTentativa = Number(prompt("Digite a senha:"));

  if (senhaTentativa === senhaCerta) {
    alert("acertou -> ✅ liberado.");
    break;
  }

  chance++;

  if (chance === 1) {
    alert("errou!");
  } else if (chance === 2) {
    alert("errou -> ⚠️ última tentativa!");
  } else {
    alert("errou -> 🔒 Bloqueado");
  }
}