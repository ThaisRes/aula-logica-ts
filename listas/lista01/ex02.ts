// Lista 01 - Exercício 2
// Enunciado: Pergunte nome e sobrenome e mostre

const nome: string = prompt("Digite o seu nome:") ?? "0";
const sobrenome: string = prompt("Digite o seu sobrenome:") ?? "0";

alert(`Olá, ${nome} ${sobrenome}`);