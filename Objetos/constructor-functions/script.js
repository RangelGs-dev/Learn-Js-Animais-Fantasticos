// const carro = {
//     marca: 'Marca',
//     preco: 0
// }

// const honda = carro
// honda.marca = 'honda'
// honda.preco = 2000

// const fiat = carro
// fiat.marca = 'fiat'
// fiat.preco = 3000

function Carro(marca, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
}

const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)
const mazda = new Carro('Mazda', 5000)
