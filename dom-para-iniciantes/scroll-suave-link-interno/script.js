function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
initTabNav()

function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'

    if(accordionList.length) {
        accordionList[0].classList.add('activeClass')
        accordionList[0].nextElementSibling.classList.add('activeClass')

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
initAccordion()

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const topo = section.offsetTop
    
        // Coloca o elemento na visão
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    
        // Forma alternatina, não suportada por todos os browsers
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth"
        // })
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave()
