/* const frutas = ['Banana', 'Morango', 'Uva']
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
    console.log(fruta)
}

const buttons = document.querySelectorAll('button');

for(let btn of buttons) {
    btn.style.color = 'blue';
} */

const carro = {
    marca: 'Honda',
    ano: 2023
}

for(let key in carro) {
    console.log(key, carro[key]);
}