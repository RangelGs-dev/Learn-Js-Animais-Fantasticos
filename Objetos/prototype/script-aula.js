function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.abracar = function() {
        return 'Abraçou'
    }
    this.andar = function() {
        return 'Andou pelo objeto'
    }
}

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou'
}

Pessoa.prototype.nadou = function() {
    return this.nome + 'Pessoa nadou'
}

const rangel = new Pessoa('Rangel ', 24)

// console.log(Pessoa.prototype)
// console.log(rangel.prototype)

const pais = 'Brasil'

const cidade = new String('Rio')

const listaAnimais = ['cachorro', 'gato', 'cavalo']

const lista = document.querySelectorAll('li')
const listaArray1 = Array.prototype.slice.call(lista)

const listaArray2 = Array.from(lista)

Object.getOwnPropertyNames(rangel)

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true
    }
}

// dado.constructor.name, retorna o nome do construtor;
Carro.andar.constructor.name // 'boolean'
Carro.marca.constructor.name // 'string'
Carro.preco.constructor.name // 'number'