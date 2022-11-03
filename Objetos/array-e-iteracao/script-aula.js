// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach((itemAtual, index, array)=> {
//   console.log(itemAtual.toLocaleUpperCase(), index, array)
// })

// const li = document.querySelectorAll('li')

// li.forEach((item) => item.classList.add('ativa'))

// console.log(li)

// const carros = ['Ford', 'Fiat', 'Honda']

// const carrosArray = carros.map((item, index, array) => {
//   console.log(item.toLocaleUpperCase(), index, array)
//   return item.toLocaleUpperCase()
// })

// console.log(carrosArray)

// const numeros = [2, 4, 5, 6, 78]

// const numeros1 = numeros.map((item) => {
//   return item * 2
// })

// console.log(numeros1)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map((tempo)=> {
//   return tempo.min
// })

// console.log(tempoAulas)

// function aulasFun(aula) {
//   return aula.nome
// }

// const aulasTotal = aulas.map(aulasFun)

// console.log(aulasTotal)

// const aulas = [10, 25, 30]

// // const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
// //     console.log(acumulador, item)
// //     return acumulador + item
// // })

// // console.log(reduceAulas) 

// const numeros = [10, 25, 30, 3, 54, 33, 22]

// const maiorNumero = numeros.reduce((acumulador, atual) => {
//     return acumulador < atual ? atual : acumulador
// },0)

// console.log(maiorNumero)

// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]
  
//   const listaAulas = aulas.reduce((acumulador, aula, index) => {
//     acumulador[index] = aula.nome
//     return acumulador
//   }, {})

//   console.log(listaAulas)

// const frutas = ['Banana', 'Pera', 'Uva']

// const temUva = frutas.some((fruta) => {
//     return fruta === 'Uva'
// })

// console.log(temUva)

// const frutas = ['Banana', 'Pera', 'Uva']

// const temUva = frutas.every((fruta) => {
//     return fruta
// })

// console.log(temUva)

// const frutas1 = [ '', 'Laranja', 'Banana', 'Pera', 'Uva']

// const indexUva = frutas1.find((fruta) => {
//     return fruta
// })

// console.log(indexUva)


// const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

// const arrayFruta = frutas2.filter((fruta) => {
//     return fruta
// })

// console.log(arrayFruta)

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]

  const maiores15 = aulas.filter((aula) => {
      return aula.min > 15
  })

  console.log(maiores15[0].min)