var pessoa = {
    nome: 'Rangel',
    idade: 24, 
    profissao: 'Dev',
    possuiFaculdade: true
  }
  
  var quadrado = {
    lados: 4,
    area(lado) {
      return lado * lado
    },
  
    perimetro(lado) {
      return this.lados * lado 
    },
  
  }
  
  console.log(quadrado.perimetro(5))
  console.log(Math.random())
  
  
  var height = 120
  var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',
    metadeHeight() {
      return height / 2
    }
  }
  
  menu.backgroundColor = '#000'
  menu.color = 'blue'
  
  menu.esconder = function() {
    console.log('Escondi')
  }
  
  var bg = menu.backgroundColor
  
  console.log(menu.hasOwnProperty('color')) //hasOwnProperty para verificar quais heranças pertecem ao objeto