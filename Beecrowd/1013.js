/*------------------ 1013 - O Maior ------------------*/
//Variáveis
// let A = 7
// let B = 14
// let C = 106
let [A, B, C] = input.split(" ").map((item) => parseInt(item) )
// Cálculo
// let AB = ((A+B) + Math.abs((A-B))) / 2
//let maiorValor = ((AB + C) + Math.abs((AB - C))) / 2
let maiorValor = Math.max(A,B,C)
// Retorno
//console.log(`${maiorValor} eh o maior`) 
console.log(maiorValor + " eh o maior")