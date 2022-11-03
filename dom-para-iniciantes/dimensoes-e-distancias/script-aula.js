const listaAnimais = document.querySelector('.copy')
const height = listaAnimais.scrollHeight
console.log(height)

const animaisTop = listaAnimais.offsetTop
console.log(animaisTop)

const primeiroH2 = document.querySelector('h2')
const lefth2 = primeiroH2.offsetLeft
console.log(lefth2)

const h2rect = primeiroH2.getBoundingClientRect()
console.log(h2rect.top)

if (h2rect.top < 0) {
  console.log('Passou do elemento.')
}
console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);

const small = window.matchMedia('(max-width: 600px')

if (small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')

}