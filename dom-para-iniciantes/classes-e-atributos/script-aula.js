const menu = document.querySelector('.menu')
menu.classList.add('ativo')
menu.classList.remove('azul')
// menu.classList.toggle('azul')

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul')
} else {
  menu.classList.add('não-possui-azul')
}

const animais = document.querySelector('.animais')
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img')
const srcImg = img.getAttribute('alt')
console.log(srcImg)

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)

img.setAttribute('alt', 'É uma raposa.')
console.log(srcImg)

// Ainda sobre método 
const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km}`)
  }
}
carro.andar(30)