// Lista 01 — Exercício 10
// Enunciado: Leia a distância (km) e os litros gastos, e mostre o consumo médio (km/l) com 1 casa.

const digiteDistancia:string = prompt("Digite a distância percorrida em Km: ")?? "0";
const digiteLitros:string = prompt("Digite os litros de combustível gasto: ")?? "0";

const distancia:number = Number(digiteDistancia);
const litros:number = Number(digiteLitros);
const consumo:number = distancia/litros;
const consumo1casa:string = consumo.toFixed(1);

alert(`${distancia} Km / ${litros} L -> ${consumo1casa} Km/l`);