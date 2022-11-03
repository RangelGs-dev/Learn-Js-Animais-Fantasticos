// const perimetro = new Function('lado', 'return lado * lado')

// console.log(perimetro(10))

// function somar(n1, n2) {
//     return n1 + n2;
// }

// console.log(somar.length)

// function darOi(nome, idade) {
//     console.log(`Oi para você ${nome} ${idade}`)
// }
// darOi.call({}, 'Rangel', 25)

// function descricaoCarro() {
//     console.log(this.marca + ' ' + this.ano)
// }

// const carros1 = {
//     marca: 'Ford',
//     ano: '2022'
// }
// descricaoCarro.call(carros1)

// const carros = ['Ford', 'Fiat', 'VW']

// const frutas = ['Banana', 'Uva', 'Pêra']

// carros.forEach.call(frutas, function(item) {
//     console.log(item)
// })

function Dom(seletor) {
    this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
    console.log(this)
    this.element.classList.add(classe)
}

const li = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativo')

// const frutas = ['Uva', 'Maçã', 'Banana']

// const li1 = document.querySelectorAll('li')

// const filtro = Array.prototype.filter.call(li1, (item) => {
//     return item
// })

const numeros = [3,4,6,1,34,44,32]

Math.max.apply(null, numeros)

const lii = document.querySelectorAll('li')
const filtraLi = Array.prototype.filter.bind(lii, function(item) {
    return item.classList.contains('ativo')
})

filtraLi()

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

const honda = {
    marca: 'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda)
console.log(acelerarHonda(160, 20))