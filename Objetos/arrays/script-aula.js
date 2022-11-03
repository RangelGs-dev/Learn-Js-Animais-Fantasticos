const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda')
carros[2] = 'Ferrari'
carros[20] = 'Kia' // Cria uma array cim varios espaços vazios
console.log(carros.length)

const li = document.querySelectorAll('li')

/* HtmlCollection
const li1 = document.getElementsByTagName('li')
console.log(li1)*/

const arrayLi = Array.from(li)
console.log(arrayLi)

/* Objtos que parecem array, como são construidos */
const obj = {
    0: 'Rangel',
    1: 'G.',
    2: 'Sousa',
    length: 3
}

const objArray = Array.from(obj)
console.log(objArray)

console.log(Array.of(10))
console.log(Array.of('teste', 'level'))


const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]
console.log(frutas[2][1])
console.log(frutas[2][1].length)

// sort() retorna um valor oranizado pelo unicode e modifica a array
const instMusicais = ['Guitarra', 'Violão', 'Baixo']
console.log(instMusicais.sort())

const automovel = ['Renault', 'Suzuki', 'Toyota']
automovel.unshift('Chevrolet') // adiciona no inicio da array
automovel.push('Volkswagen') // adiciona ao fim da array
automovel.shift() // remove no inicio da array
automovel.pop() // remove ao fim da array
automovel.reverse() // inverte a array 
console.log(automovel)

// splice() adiciona de acordo com o indice passado e retorna de acordo com o segundo params
const automovel1 = ['Volvo', 'Nissan', 'GM', 'Mercedes']
const aut = automovel1.splice(1, 3, 'kia', 'Mustang')
console.log(aut) // retorno dos itens recortados da array 
console.log(automovel1)

// retorna uma repetição do alvo apontado
const itens = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
console.log(itens.copyWithin(2, 0, 2))

// fill() preenche com o valor repassado
console.log(itens.fill('Banana'))

// concat() irá concatenar arrays
const transp1 = ['Bike', 'Moto']
const transp = ['Carro', 'Uber']
const transportes = transp1.concat(transp)
console.log(transportes)

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js']
console.log(linguagens.includes('css'))

console.log(linguagens.indexOf('js'))

// join() junta todos os valores de uma array e retorna uma string
console.log(linguagens.join())

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('h1')
console.log(htmlString)

const linguagens1 = ['html', 'css', 'js', 'php', 'python']
console.log(linguagens1.slice(1, 2))