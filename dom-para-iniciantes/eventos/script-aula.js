const img = document.querySelector('img')
function callback(event) {
  console.log(event)
}

// img.addEventListener('click', callback)

// console.log(img)

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event) {
  // console.log(event.currentTarget)
  // console.log(event.target)
  // console.log(event.type)
}
animaisLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event) {
  event.preventDefault()
  console.log(event.currentTarget.href)
  console.log(event)
}

linkExterno.addEventListener('click', handleLinkExterno)

// console.log(linkExterno)

const h1 = document.querySelector('h1')

function handleEvent(event) {
  console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)
// console.log(h1)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)
function handleKeyboard(event) {
  if(event.key === 'f') {
    document.body.classList.toggle('fullscreen')
  }
}

window.addEventListener('keydown', handleKeyboard)

const imgs = document.querySelectorAll('img')

function imgSrc(event) {
  const src = event.target.getAttribute('src')
  console.log(src)
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc)
})