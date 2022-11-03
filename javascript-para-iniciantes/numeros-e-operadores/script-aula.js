// OPERADORES ARITMÉTICOS
var total = 2 + 3
var divisao = 200 / 5
var modulo = 53464575688844333 / 3
console.log(modulo)

var testeNaN = 'Isso é 100' / 2
console.log(testeNaN)
console.log(isNaN(testeNaN))

// A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.
var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10 
console.log(soma1)

// OPERADORES ARITMÉTICOS UNÁRIOS
var x = 5
console.log(x++)
console.log(++x)
console.log(x--)
console.log(--x)

// O + e - tenta transformar o valor seguinte em número
var idade = "23"
var somaIdade = 5
console.log(+idade + somaIdade)
