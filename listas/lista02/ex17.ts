// Lista 02 — Exercício 17
// Enunciado: Login certo: admin, senha: 1234. Se algo estiver errado, diga qual (login ou senha).
// admin/1234 → ok · admin/0000 → "senha errada" · joao/1234 → "login errado".

const digLogin:string = prompt("Digite o login: ") ?? "0";
const digSenha:string = prompt("Digite a senha: ") ?? "0";
const senha:number = Number(digSenha);

if(senha !== 1234 && digLogin !== "admin") {
    alert(`${digLogin} \ ${senha} -> Login e Senha errados`)
} else if(senha !== 1234 && digLogin == "admin") {
    alert(`${digLogin} \ ${senha} -> Senha errada`)
} else if(senha == 1234 && digLogin !== "admin") {
    alert(`${digLogin} \ ${senha} -> Login errado`)
} else if(senha == 1234 && digLogin == "admin") {
    alert(`${digLogin} \ ${senha} -> ok`)
} else {
    alert(`O Login é formado por letras e o senha apenas por números.`)
}