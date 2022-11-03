console.log(Number.isNaN(NaN)) // É not a number? true
console.log(Number.isInteger(10910109)) // É um inteiro? true

console.log(parseFloat(600.50)) // Corta o zero, pois não tem valor
console.log(parseFloat('600.50 reais')) // Ainda assim consegue retornar o número
console.log(parseInt(600.50)) // Conterte para inteiro, integral

let preco = 2.99
console.log(preco.toFixed())

let valor = 48.49
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor)

console.log(Math.PI)

console.log(Math.abs(3-6)) // Tranforma numeros negativos em positivo
console.log(Math.ceil(3.2)) // Arredonda para cima sempre
console.log(Math.floor(3.2)) // Arredonda para baixo sempre
console.log(Math.round(3.8)) // Arredonda no padrão matemático 

console.log(Math.max(4, 7, 1, 9, 30)) // Retorna sempre o máximo (30)
console.log(Math.min(4, 7, 1, 9, 30)) // Retorna sempre o minimo (1)
console.log(Math.random()) // Retorna um número aleatório de 0 a 1

let aleatorio = Math.floor(Math.random() * 10) 
console.log(aleatorio)

const min = 32
const max = 72

console.log(Math.floor(Math.random() * (max - min)) + min)