// Lista 03 — Exercício 2
// Enunciado: Leia N e conte de N até 1 (de trás pra frente). No fim, solte um 🚀.
// N = 5 → 5 4 3 2 1 🚀.

const digNZ:string = prompt("Digite um número para iniciar a contagem: ") ?? "0";
const NZ:number = Number(digNZ);
let regressivo:string = " ";

for(let i = NZ; i > 0; i--) {
    regressivo = regressivo + i + " "
}

alert(`N = ${NZ} -> ${regressivo} 🚀`)