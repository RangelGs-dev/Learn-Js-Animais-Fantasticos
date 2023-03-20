/* const promessa = new Promise(function(resolve, reject) {
    let condition = true;

    if(!condition) {
        setTimeout(() => {
            resolve({nome: 'Rangel', idade: 26});
        }, 5000);
    } else {
        reject(Error('Ocorreu um erro!'));
    }
});

const retorno = promessa.then(function(resolucao) {
    resolucao.profissao = 'Dev FrontEnd'
    return resolucao
}).then(function(resolucao) {
    console.log(resolucao)
}).catch(function(rejeitada) {
    console.log(rejeitada)
}).finally(() => {
    console.log('Acabou')
}) */
// Tratamento de erro pode ser passado como segundo parametro do then()
//console.log(retorno)

const login = new Promise(function(resolve) {
    setTimeout(() => {
        console.log('Usuario logado')
    }, 1000);
})

const dados = new Promise(function(resolve) {
    setTimeout(() => {
        console.log('Dados carregados')
    }, 1500);
})

const loadAll = Promise.all([login, dados])

loadAll.then(function(resolucao) {
    console.log(resolucao)
})

// console.log(loadAll)