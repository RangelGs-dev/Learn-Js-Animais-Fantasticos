/* let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1)
    console.log(item2)
    console.log(item3)
  }
  funcao2()
}

funcao1() */
// func1, possui acesso à
// item1 e item2

// func2, possui acesso à
// item1, item2 e item3

function contagem() {
    let total = 0;
    return function incrementar() {
        total++;
        console.log(total);
    }
}
//console.log(contagem())

const ativarIncremento = contagem()

ativarIncremento()
ativarIncremento()
ativarIncremento()