/*------------------ 1012 - Área ------------------*/
//Variáveis
let A = 3.0 
let B = 4.0
let C = 5.2 
//let [A, B, C] = input.split(" ").map(item => parseFloat(item))
let pi = 3.14159

// Cálculo
let trianguloRetangulo = (A * C) / 2  //-- (A*C)/2
let circulo = pi * Math.pow(C,2)      //-- PI * C³
let trapezio = (A + B) * C / 2        //-- (A+B) *C/2
let quadrado = B * B                  //-- B*B
let retangulo = A * B                 //-- A*B

// Retorno
console.log("TRIANGULO: " + trianguloRetangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))