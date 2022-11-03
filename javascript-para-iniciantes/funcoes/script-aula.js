// Bloco de código que pode ser executado e reutilizado
function areaQuadrada(lado) {
    return lado * lado
  }
  console.log(areaQuadrada(5))
  
  function pi() {
    return 3.14
  }
  
  var total = 5 * pi()
  console.log(total)
  
  // Ao criar uma função, você pode definir parâmetros.
  // Ao executar uma função, você pode passar argumentos.
  
  function imc(peso, altura) {
    const imc = peso / (altura * 2)
    return imc
  }
  
  const results = imc(75, 1.65)
  console.log(results)
  
  function corFavorita(cor) {
    if(cor === 'azul') {
      return 'Eu gosto do céu'
    } else if (cor === 'verde') {
      return 'Eu gosto de mato'
    } else {
      return 'Eu não gosto de cores'
    }
  }
  
  console.log(corFavorita('azul'))
  
  // Chamadas de Callback, geralmente são funções que ocorrem após algum evento
  // addEventListener('click', function() {
  //   console.log('Oi')
  // })
  
  // Pode ou não retornar um valor
  function imc2(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
  }
  
  imc2(80, 1.80)
  
  // Uma função pode retornar qualquer tipo de dado e até outras funções.
  
  // function tercIdade(idade) {
  //   var idadNumber = +idade
  //   if (typeof idadNumber !== "number") {
  //     return alert('Insira um valor válido para idade')
  //   } else if (idadNumber >= 60) {
  //     var name = prompt('Digite seu nome!')
  //     return alert(`Bem vindo Sr.(Srª), ${name}. Idade Ok!`)
  //   } else {
  //     return alert('Desculpe, está aréa é reservada para idosos meu jovem!')
  //   }
  // }
  
  // var idade = prompt('Digite sua idade!')
  // tercIdade(idade)
  
  function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
      return "Informe sua idade, por favor!"
    } else if (idade >= 60) {
      return true
    } else {
      return false
    }
  }
  
  console.log(terceiraIdade(''))
  
  // Escopo 
  function faltaVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} países`
  }