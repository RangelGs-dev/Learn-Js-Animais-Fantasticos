// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraph = document.querySelectorAll('p')
const paragArray = Array.prototype.reduce.call(paragraph, (acc, item) => {
    let itemArray =  item.innerText.split('')
    return acc + itemArray.length
    
},0)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null
    return elemento
}

console.log(novoElemento('section', 'titulo', 'Oi, eu sou Goku!'))

// function NewElement(selector) {
//     this.element = document.querySelector(selector)
// }

// NewElement.prototype.className = function(clasString) {
//     this.element.classList.add(clasString)
// }

// NewElement.prototype.content = function(textString) {
//     this.element.innerText = textString
// }


// const tagElement = new NewElement('p')
// tagElement.content('heloo')

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const createH1 = novoElemento.bind(null, 'h1', 'titulo')

console.log(createH1('Curso JavaScript'))


// function Createh1() {
//     this.section = document.querySelector('section')
//     const tagH1 = document.createElement('h1')
//     this.section.appendChild(tagH1)
// }

// const tag = new Createh1()

// const h1 = {
//     element: document.querySelector('h1')
// }

// // tagElement.content.call(h1, 'Olá')
// // tagElement.className.call(h1, 'titulo')
