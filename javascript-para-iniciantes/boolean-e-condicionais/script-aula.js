// Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
var possuiGraduacao = false
var possuiDoutorado = true

if(possuiDoutorado) {
    console.log('Possui Graduação e Doutorado')
} else if(possuiGraduacao) {
    console.log('Possui apenas Graduação')
} else {
    console.log('Não possui nada!')
}

var nome = 'Rangel' // Se for passado vazio, então retorna false

if(nome) {
    console.log(nome)
} else {
    console.log('Nome não existe')
}

// O operador !, nega uma operação booleana. Ou seja, !true é igual a false
if(!possuiGraduacao) {
    console.log(!possuiGraduacao)
    console.log('Possui graduação')
}

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita
var x = 10
console.log('Verdadeiro: ',x == 10)

// && Compara se uma expressão e a outra é verdadeira
var condicional1 = (5 - 5) && (5 + 5)
if(condicional1) {
    console.log('Verdadeiro', condicional)
} else{
    console.log('Falso')
}

// || Compara se uma expressão ou outra é verdadeira
var condicional2 = (5 - 5) || (5 + 5) || (10 - 2)
if(condicional2) {
    console.log('Verdadeiro', condicional2)
} else {
    console.log('Falso', condicional2)
}

// Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case
var corFavorita = 'Verde'
switch(corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu')
        break
    case 'Amarelo':
        console.log('Olhe para o sol')
        break
    case 'Verde':
        console.log('Olhe para a floresta')
        break
    default: 
        console.log('Feche os olhos')
}