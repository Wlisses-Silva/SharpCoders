/*------------------ 1009 - Salário com Bônus------------------*/
//Variáveis
let nome = "Joao"
let salarioFixo = 500.00
let valorDeVendas = 1230.30

// let nome = lines.shift()
// let salarioFixo = parseFloat(lines.shift())
// let valorDeVendas = parseFloat(lines.shift())

// Cálculo
let comissao = valorDeVendas * 0.15
let salarioTotal = salarioFixo + comissao

// Retorno
console.log("TOTAL = R$ " + salarioTotal.toFixed(2))
