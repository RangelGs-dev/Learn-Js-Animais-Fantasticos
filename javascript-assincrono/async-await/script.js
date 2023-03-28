/* async function puxarDados() {
    try {
        const responseDados = await fetch('./dados.json');
        const jsonDados = await responseDados.json()
        console.log(jsonDados)
    } catch(erro) {
        console.log(erro)
    }
    
}

puxarDados() */

async function puxarDados() {
    const responseDados = await fetch('./dados.json');
    const responseClientes = await fetch('./clientes.json');

    const jsonDados = await responseDados.json()

    console.log(jsonDados)
}

puxarDados()