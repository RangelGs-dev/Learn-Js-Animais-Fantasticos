// typeof os tipos de dados 
var name = 'Rangel' // string
var idade = 23 // number
var time // undefined
var simbolo = Symbol() // symbol 
console.log(typeof name, typeof idade, typeof time, typeof simbolo)

var nome = 'Rangel'
var sobrenome = 'G. Sousa'
var nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto)

// O resultado da soma de string e number é sempre uma string
var gols = 1000
var frases = 'Romário fez ' + gols + ' gols'
console.log(typeof frases, frases)

// Essa soma irá concatenar uma string com um number
var ano = '2020'
var mes = 08
console.log(ano + mes)

// A barra invertida "Backslash scape" transforma as aspas em caracteres normais
var melhor = 'teste'
var frase1 = "Esse é o \"melhor\" jogo"
console.log(frase1)

// Template string, você deve passar expressões / variáveis dentro de ${}
var numGols = 1000
frase2 = `Pelé fez ${numGols} gols na carreira `
console.log(frase2)