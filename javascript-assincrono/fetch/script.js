/* Fetch com text() e json() */

// const doc = fetch('./doc.txt');
const cep = fetch('https://viacep.com.br/ws/68022140/json/');
// console.log(doc)
// cep.then(function(resolucao) {
//     return resolucao.json()
// }).then(function(body) {
//     // console.log(body)
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body.logradouro;
// })

/* Fetch com blob() */

// const imagem = fetch('./rgsgit.webp');

// imagem.then(function(image) {
//     return image.blob()
// }).then(function(imagePrint) {
//     const blobUrl = URL.createObjectURL(imagePrint);
//     const imagemDom = document.querySelector('img') 
//     imagemDom.src = blobUrl;
// })


/* Fetch com clone() */
// cep.then(function(ojbCep) {
//     const clone = ojbCep.clone()
//     ojbCep.text().then(function(cepTxt) {
//         console.log(cepTxt)
//     })

//     clone.json().then(function(objJson) {
//         console.log(objJson)
//     })
// })

/* Fetch headers */
cep.then(function(local) {
    local.headers.forEach(console.log)
})