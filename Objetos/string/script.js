// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let taxaTotal = 0
let recebimentoTotal = 0
transacoes1.forEach((value) => {
    const numeroLimpo = +value.valor.replace('R$', '')
    if(value.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo
    } else {
        recebimentoTotal += numeroLimpo
    }
    
})

console.log(taxaTotal)
console.log(recebimentoTotal)
  
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const autoArray = transportes.split(';')
console.log(autoArray)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const splitSpan = html.split('span')
const ancorJoin = splitSpan.join('a')
console.log(ancorJoin)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length -1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxas = 0
transacoes2.forEach((taxa) => {
  const taxaTrim = taxa.trim()
  const taxaLower = taxaTrim.toLowerCase()
  if(taxaLower.slice(0, 4) === 'taxa') {
    taxas++
  }
})
console.log(taxas)