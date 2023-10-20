/*------------------ 1014 - Consumo ------------------*/
//Variáveis
let distanciaTotal = 500
let totalCombustivel = 35.0

// let distanciaTotal = parseInt(lines.shift())
// let totalCombustivel = parseFloat(lines.shift())
// Cálculo

let consumoMedio = distanciaTotal / totalCombustivel

// Retorno
console.log(`${consumoMedio.toFixed(3)} km/l`)
