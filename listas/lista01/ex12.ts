// Lista 01 — Exercício 12
// Enunciado: Leia uma temperatura em Celsius e converta para Fahrenheit: F = C × 9 / 5 + 32.
const temp:string = prompt("Digite a tempertura em Celcius: ")?? "0";
const celcius:number = Number(temp);
const fahrenheit:number = (celcius*9/5)+32;

alert(`${celcius} °C -> ${fahrenheit} °F`);