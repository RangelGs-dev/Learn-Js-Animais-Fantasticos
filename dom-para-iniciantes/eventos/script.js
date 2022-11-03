// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function clickEmLink(event) {
  event.preventDefault()
  
  linksInternos.forEach(link => {
    if (link.classList.contains('ativo')) {
      link.classList.remove('ativo')
    }
  })

  event.target.classList.toggle('ativo')
}

linksInternos.forEach(link => {
  // link.classList.add('ativo')
  link.addEventListener('click', clickEmLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElementos = document.querySelector('body')
const elementsChild = allElementos.childNodes
// function elementCallback(event) {
//   console.log(event.target)
// }

elementsChild.forEach((element) => {
  element.addEventListener('click', elementCallback)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function elementCallback(event) {
  console.log(event.target.remove())
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const text = document.querySelectorAll('p')

function textSize(event) {
  if(event.key === 't') {
    const text = document.querySelectorAll('p')
    text.forEach(singleP => {
      singleP.classList.toggle('aumentarTexto')
    })
  }
}

window.addEventListener('keydown', textSize)

// warsaw_setup64