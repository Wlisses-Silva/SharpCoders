/*------------------ 1008 - Salário ------------------*/
//Variáveis
// let numero = 25
// let horasTrabalhadas = 100
// let valorHoras = 5.50

let numero = parseInt(lines.shift())
let horasTrabalhadas = parseInt(lines.shift())
let valorHoras = parseFloat(lines.shift())

// Cálculo
var  salario = horasTrabalhadas * valorHoras 

// Retorno
console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + salario.toFixed(2))
