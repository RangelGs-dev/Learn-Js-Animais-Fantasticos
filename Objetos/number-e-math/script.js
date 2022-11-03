// Retorne um número aleatório
// entre 1050 e 2000
const max = 2000
const min = 1050

console.log(Math.floor(Math.random() * (max - min) + min))

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
const numArray = numeros.split(', ')
const numMax = Math.max(...numArray)
console.log(numMax)



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let total = 0
listaPrecos.forEach((preco) => {
    preco = +preco.toUpperCase().replace('R$ ', '').replace(',', '.').trim()
    preco = +preco.toFixed(2)
    total += preco
})
console.log(total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))