/* const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick() {
   setTimeout(() => {
    console.log(this)
    this.classList.add('active')
   }, 1000);
};


/* function espera(texto) {
    console.log(texto);
} */

/* setTimeout(function() {
    console.log('Testando')
}, 0); */

/* for(let i = 0; i < 20; i++) {
    setTimeout(function(){
        console.log(i)
    }, 1000 * i);
} */
  
// function loop(texto) {
//     console.log(texto);
// }

// setInterval(loop, 300, '300ms')

// const myLoop = setInterval(myCall, 1000);

// let i = 0;
// function myCall() {
//     console.log(i++)
//     if(i > 10) {
//         clearInterval(myLoop);
//     };
// };

/* function mudarClasse() {
    document.body.classList.toggle('active')
}

setInterval(mudarClasse, 2000); */
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(()=> {
        tempo.innerText = i++;
    }, 100);

    iniciar.setAttribute('disabled', '')
};

function pausarTempo() {
    clearInterval(timer)
    iniciar.removeAttribute('disabled')
};

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
};

