/*------------------ 1078 - Tabuada -----------------*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let numero = parseInt(lines.shift());

for (let i = 1; i <= 10; i++) {
  let produto = i * numero;

  console.log(i + " x " + numero + " = " + produto);
}
