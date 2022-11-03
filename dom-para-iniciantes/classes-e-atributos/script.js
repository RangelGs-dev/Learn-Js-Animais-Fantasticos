// Adicione a classe ativo a todos os itens do menu
const ativoMenu = document.querySelectorAll('.menu a')
ativoMenu.forEach(a => {
  a.classList.add('ativo')
  // console.log(a)
})
// console.log(ativoMenu)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// ativoMenu.forEach((li, index) => {
//   const naoPrimeiro = index != 0
//   if(naoPrimeiro)
//   li.classList.remove('ativo')

ativoMenu.forEach(a => {
  a.classList.remove('ativo')
})
ativoMenu[0].classList.add('ativo')



// Verifique se as imagens possuem o atributo alt
const constaAltImg = document.querySelectorAll('img')
constaAltImg.forEach((alt, index) => {
  const posssuiAtributo = alt.hasAttribute('alt')
    console.log(posssuiAtributo, alt)
})

// Modifique o href do link externo no menu
const hrefExterno = document.querySelector('a[href^="http"]')
hrefExterno.setAttribute('href', '#' )
// console.log(hrefExterno)