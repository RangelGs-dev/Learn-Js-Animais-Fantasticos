// const comida = 'Pizza'
// const agua = new String('agua')
// const frase = 'A melhor comida'

// console.log(comida.length)

// console.log(frase[frase.length -1])
// console.log(frase.charAt(2))

const frase = 'A melhor liguagem é '
const linguagem = 'JavaScript'
const fraseCompleta = frase.concat(linguagem)
console.log(fraseCompleta)

const frutas = 'Banana'
const listaFrutas = 'Melancia, Banana, Laranja'

console.log(listaFrutas.includes(frutas))

console.log(frutas.startsWith('Ba'))
console.log(frutas.endsWith('na'))

const transacao1 = 'Depósito de cliente'
const transacao2 = 'Depósito de fornecedor'
const transacao3 = 'Taxa de camisas'

console.log(transacao1.slice(0, 4))
console.log(transacao2.slice(11, 16))
console.log(transacao3.slice(0, 4))

console.log(frutas.indexOf('n'))
console.log(frutas.lastIndexOf('n'))

const listaPrecos = ['R$ 97', 'R$ 199', 'R$ 12000']
listaPrecos.forEach(preco => {
    console.log(preco.padStart(10, '.'))
});

console.log(listaPrecos[0].padStart(10, '.'))
console.log(listaPrecos[2].padEnd(10, '.'))

const frase1 = 'Tá'
console.log(frase1.repeat(2))

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
listaItens = listaItens.replace(/[ ]+/g, ', ')
console.log(listaItens)

const arrayLista = listaItens.split(', ')
console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
console.log(htmlArray.join('li'))

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino')

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'