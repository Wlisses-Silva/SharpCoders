/*------------------ 1017 - Gasto Combustível ------------------*/
//Variáveis
let tempo = 10;
let velocidade = 85;
let kml = 12;

// let tempo = parseInt(lines.shift())
// let velocidade = parseInt(lines.shift())

// Cálculo
let distancia = tempo * velocidade;
let litros = distancia / 12;

// Retorno
console.log(litros.toFixed(3));
