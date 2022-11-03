// Verifique a distância da primeira imagem
// em relação ao topo da página
const elementImagem = document.querySelector('img')
const topImagem = elementImagem.offsetTop
console.log(topImagem)

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagensLargura = document.querySelectorAll('img')
  let soma = 0
  imagensLargura.forEach((img) => {
    soma += img.offsetWidth
  })
  console.log(soma)
}

window.onload = function() {
  somaImagens()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const padraoLink = document.querySelectorAll('a')
//console.log(padraoLink.offsetHeight)
padraoLink.forEach((link) => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight

  if (linkWidth && linkHeight >= 48) {
    console.log('Possui boa acessibilidade')
  } else {
    console.log('Não possui boa acessibilidade')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches

if (browserSmall) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}