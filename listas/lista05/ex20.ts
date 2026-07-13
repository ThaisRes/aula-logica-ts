/*
Crie senhaForte(senha): precisa ter 8+ caracteres e pelo menos um número. Use uma função auxiliar temNumero.

🎯
Exemplo
senha1 → curta · senhabcd → sem número · senha123 → forte ✅.

2 funções
.length
.includes
return cedo
*/

function temNumero(senha:string):boolean {
  for (let i = 0; i < senha.length; i++) {
    if ("0123456789".includes(senha[i])) {return true};
  }
  return false;
}

function senhaForte(senha:string):string {
  if (senha.length < 8) {return "A senha deve ter pelo menos 8 caracteres"}
  if (!temNumero(senha)) {return "A senha deve ter pelo menos um número"}
  return "forte ✅";
}

const digSenhaL5E20=prompt("Digite a senha com elo menos 1 número e no mínimo 8 caracteres: ") ?? "";
alert(senhaForte(digSenhaL5E20));