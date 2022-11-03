// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p')
console.log(paragrafo)

// Mostre o texto dos parágrafos no console
paragrafo.forEach((singleP, index) => {
    console.log(`Paragrafo: ${index + 1} - ${singleP.textContent}`)
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach((img) => console.log(i++));

