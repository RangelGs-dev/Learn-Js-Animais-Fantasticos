// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const meusDados = {
  nome: 'Rangel',
  sobrenome: 'Gabiralba Sousa',
  idade: 24,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeComp = function() {
  return `Meu nome completo é ${this.nome + " " + this.sobrenome}`
}

console.log(meusDados.nomeComp())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  animal: 'Cachorro',
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(homem) {
    if (homem === 'homem') {
      return 'O cachorro está latindo para um homem suspeito!!!'
    } else {
      return 'O cachorro está dormindo, não existe nenhum tipo de alerta!'
    }
  }
}

console.log(cachorro.latir('homem'))