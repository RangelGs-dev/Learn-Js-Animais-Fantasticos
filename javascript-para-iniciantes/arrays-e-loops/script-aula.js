

//var ultimoItem = videoGames.pop()

//videoGames.push('3DS')

for (var numero = 0; numero < 10; numero += 5) {
    console.log(numero)
}

var i = 0
while (i < 10) {
  console.log(i)
  i += 5
}

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']
// for (var item = 0; item < videoGames.length; item++) {
//   const consoles = videoGames[item];
//   console.log(consoles)
// }

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']
// for (var item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item])
//   if (videoGames[item] === '3DS') {
//     break
//   }
// }

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']
frutas.forEach(function(fruta, index, frutas){
  console.log(fruta, index, frutas)
})