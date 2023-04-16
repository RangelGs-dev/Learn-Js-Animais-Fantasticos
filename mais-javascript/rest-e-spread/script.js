function perimetroForma(lado, totalLados) {
  totalLados = totalLados || 4;
  return lado * totalLados;
}

perimetroForma(10, 4)

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

const ganhadores = ['Pedro', 'Marta', 'Maria'];
anunciarGanhadores(...ganhadores)

const frutas = ['Banana', 'Uva', 'Morango']
const legumes = ['Cenoura', 'Batata']

const comidas = [...frutas, 'Pizza', ...legumes]

console.log(comidas)