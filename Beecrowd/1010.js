/*------------------ 1010 - Calculo Simples------------------*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let totalValores1 = lines.shift().split(" ")
let totalValores2 = lines.shift().split(" ")

let codpeca1 = totalValores1.shift()
let numpeca1 = totalValores1.shift()
let valorUni1 = totalValores1.shift()
let valorTotal1 = numpeca1 * valorUni1

let codpeca2 = totalValores2.shift()
let numpeca2 = totalValores2.shift()
let valorUni2 = totalValores2.shift()
let valorTotal2 = numpeca2 * valorUni2

let = totalPagar = valorTotal1 + valorTotal2

console.log("TOTAL A PAGAR: R$ " + totalPagar.toFixed(2))
