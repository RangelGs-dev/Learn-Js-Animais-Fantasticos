// const h1Tag = document.querySelector('h1')

// const animaisLista = document.querySelector('.animais-lista')
// console.log(animaisLista.innerText)
// console.log(h1Tag.innerHTML)

// const lista = document.querySelector('.animais-lista')

// console.log(lista.children[lista.children.length -1])
// console.log(lista.querySelector('li:last-child'))

// console.log(lista.previousSibling)

// const mapa = document.querySelector('.mapa')
// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')

// contato.removeChild(titulo) remove 
// contato.replaceChild(lista, titulo) troca
// animais.appendChild(titulo) coloca um elemento em outro determinado
// contato.insertBefore(animais, mapa) troca usando um outro elemento como referencia

// const novoH1 = document.createElement('h1')
// novoH1.innerText = 'Novo Titulo'
// novoH1.classList.add('titulo')
// mapa.appendChild(novoH1)

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true)

faq.appendChild(cloneH1)