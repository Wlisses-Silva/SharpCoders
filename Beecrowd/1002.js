/*------------------ 1002 - Área do Círculo ------------------*/ 
//Para esse número flutuante devemos usar o converso parseFloat no Beecrowd.
//var raio = 2.00

var raio = parseFloat(lines.shift())
var pi = 3.14159
var area = Math.pow(raio,2) * pi

console.log("A="+area.toFixed(4))
