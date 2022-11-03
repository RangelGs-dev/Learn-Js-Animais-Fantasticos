// Retorne o url da página atual utilizando o objeto window
const localUrl = window.location.href
console.log(`Esta é a url da minha localização: ${localUrl} `)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementoAtivo = document.querySelector('.ativo')
// const classElement = element.classList[2]
console.log(elementoAtivo)

// Retorne a linguagem do navegador
const idiomaNav = window.navigator.language
console.log(`O idioma do meu navegador é: ${idiomaNav}`)

// Retorne a largura da janela 
const larguraJanela = window.innerWidth
console.log(`A largura da minha janela é: ${larguraJanela}px`)