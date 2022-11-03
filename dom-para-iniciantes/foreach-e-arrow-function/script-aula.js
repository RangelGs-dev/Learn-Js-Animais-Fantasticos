// const imgs = document.querySelectorAll('img')
// imgs.forEach(function(elemento, index, array) {
//     console.log(elemento, index, array)
// })

const titulos = document.getElementsByClassName('titulo')
const arrayTitulos = Array.from(titulos)

arrayTitulos.forEach(function(titulo, index) {
    console.log(titulo)
})

const imgs = document.querySelectorAll('img')
imgs.forEach(elemento => {
    console.log(elemento)
})

let i = 0
imgs.forEach(img => console.log(i++))