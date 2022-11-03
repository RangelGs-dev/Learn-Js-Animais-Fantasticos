// Crie uma função para verificar se um valor é Truthy
function verification(valor) {
  var filtro = !!valor
  return filtro
}

console.log(verification(''))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(base, altura) {
  var formula = 2 * (base + altura)
  return formula
}
console.log(perimetro(7, 3))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeSobrenome(nome, sobrenome) {
  return nome + sobrenome
}
var nome = 'Rangel'
var sobrenome = ' G. Sousa'

console.log(nomeSobrenome(nome, sobrenome))

// Crie uma função que verifica se um número é par
function par(valor) {
  if(valor % 2 == 0) {
    console.log(`Este valor de ${valor} é par.`)
  } else {
    console.log(`Este valor de ${valor} é impar.`)
  }
}
par(3)


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDe(num1) {
  return typeof num1
}

console.log(tipoDe(1))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

// addEventListener("click", function() {
//   document.getElementById("rolagem").innerHTML = 'Rangel Gabiralba Sousa'
// })


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
