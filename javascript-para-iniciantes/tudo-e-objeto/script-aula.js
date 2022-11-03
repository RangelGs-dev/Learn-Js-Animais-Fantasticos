var nome = 'Rangel'

var nomeMinusculo = nome.toLowerCase()
console.log(nomeMinusculo)

var altura = 1.8
var alturaFixa = altura.toFixed()
console.log(alturaFixa)
console.log(typeof altura)

function areaQuad(lado) {
    return lado * lado
}

console.log(areaQuad.length)

var btn = document.querySelector('.btn')
btn.classList.add('ativo')
console.log(btn.innerText)

btn.addEventListener('click', function() {
    alert('Clicou!!!')
    return console.log('Clicou!!!')
})