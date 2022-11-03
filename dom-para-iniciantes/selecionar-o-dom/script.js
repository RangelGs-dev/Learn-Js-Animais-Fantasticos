// Retorne no console todas as imagens do site
const allImagens = document.querySelectorAll('.grid-section img')
console.log('Todas as imagens do nosso site:', allImagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const apenasComPalavImagem = document.querySelectorAll('.grid-section [src^="img/imagem"]')
console.log('Apenas imagens começadas com a palavra imagem:', apenasComPalavImagem)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('.menu [href^="#"]')
console.log('Todas os links internos do nosso site:', linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log('Primeira tag h2 da nossa classe .animais-descricao:', primeiroH2)

// Selecione o último p do site
const ultimoP = document.querySelector('.copy p')
console.log('Nossa última tag p do site', ultimoP)

