/*------------------ 1015 - Distância entre Dois Pontos ------------------*/
//Variáveis
let x1y1 //= lines.shift().split(" ")
let x2y2 //= lines.shift().split(" ")

let x1 = 1.0
let y1 = 7.0
let x2 = 5.0
let y2 = 9.0

// let x1 = x1y1.shift().split(" ")
// let y1 = x1y1.shift().split(" ")
// let x2 = x2y2.shift().split(" ")
// let y2 = x2y2.shift().split(" ")

// Cálculo
let distancia = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2) )

// Retorno
console.log(distancia.toFixed(4))
