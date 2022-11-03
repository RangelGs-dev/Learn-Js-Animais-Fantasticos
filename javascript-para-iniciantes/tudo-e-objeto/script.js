// nomeie 3 propriedades ou métodos de strings

//1º length
var texto = 'ABCDEFGHIJKLMNOPQRSTUVYXZ'
var textoTaman = texto.length

//2º lastIndexOf
var textoInteiro = 'Praticamente todos os efeitos com JS!'
var indiceTexto = textoInteiro.lastIndexOf('todos')

//3º replace
var alterandoText = textoInteiro.replace('Praticamente', 'Pratique')
console.log(alterandoText)

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn')

//1º outerHTML
//2º innerHTML
//3º id
//4º appendChild
//5º addEventListener
console.log(btn)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function myFunction() {
    /*Obtenha o campo de texto*/
    var copyText = document.getElementById('myInput')

    /*selecione o campo de texto*/
    copyText.select()
    copyText.setSelectionRange(0, 99999)

    /*Copie o texto dentro do campo de texto*/
    document.execCommand('copy')

    /*Alerte o texto copiado*/
    alert('Copiou o texto: ' + copyText.value)
}