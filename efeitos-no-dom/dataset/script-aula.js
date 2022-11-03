const div = document.querySelector('div')
// div = document.querySelector('[data-cor]')
// div = document.querySelector('[data-cor="azul"]')
// console.log(Object.prototype.toString.call(h1))
div.dataset.height = "1000"

delete div.dataset.width

console.log(div.dataset)