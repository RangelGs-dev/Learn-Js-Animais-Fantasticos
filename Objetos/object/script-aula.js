// const pessoa = new Object({
//     nome: 'Rangel',
// })

// console.log(pessoa)

// const carro = {
//     init(valor) {
//         this.marca = valor
//         return this
//     },
//     rodas: 4,
//     acelerar() {
//         return this.marca + ' acelerou'
//     },
//     buzinar() {
//         return 'buzinou'
//     }
// }

// const honda = Object.create(carro).init('Honda')
// console.log(honda.acelerar())

// const ferrari = Object.create(carro).init('Ferrari')
// console.log(ferrari.acelerar())

// const funcaoAutomovel = {
//     acelerar() {
//         return ' acelerou'
//     },
//     buzinar() {
//         return ' buzinou'
//     }
// }

// const moto = {
//     rodas: 2,
//     capacete: true
// }

// Object.assign(moto, funcaoAutomovel)

const moto = {
    capacete: true
}

// Object.defineProperties(moto, {
//     rodas: {
//         value: 2,
//         configurable: false,
//         writable: true
//     }
// })

Object.defineProperties(moto, {
    rodas: {
        enumerable: true,
        get() {
           return 2 /* this._rodas */
        },

        set(valor) {
            this._rodas = valor * 4
        }
    }
})

/* 

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight')
Object.values(moto)

Object.getOwnPropertyNames(Array)
*/

// const fruta = ['Banana', 'Uva', 'Maçã']
// const fruta1 = ['Banana']
// const novaFruta = fruta

// console.log(Object.is(fruta, fruta1))
// console.log(Object.getPrototypeOf(fruta))

const carro = {
    marca: 'Ford',
    ano: 2018,
}

// Object.freeze(carro)
// Object.seal(carro)
// Object.preventExtensions(carro)
// carro.marca = 'Honda'
// console.log(carro.marca)
// console.log(Object.isFrozen(carro))
// console.log(Object.isSealed(carro))
// console.log(Object.isExtensible(carro))

const fruta = ['Banana', 'Uva', 'Maçã']
console.log(fruta.toString())