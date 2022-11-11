export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]')
    // console.log(tooltips)

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMousemOver)
    })

    function onMousemOver(event) {
        const tooltipBox = criarTooltipBox(this);
        tooltipBox.style.top = event.pageY + 'px';
        tooltipBox.style.left = event.pageX + 'px';

        onMouseMove.tooltipBox = tooltipBox
        this.addEventListener('mousemove', onMouseMove);
        
        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave);
        
        console.log(onMouseLeave.element)
    }

    const onMouseLeave = {
        // tooltipBox: '',
        // element: '',
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
        //Em caso de utilização de objeto para eventos, é sempre necessário o uso do metodo "handleEvent()"
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px'; 
        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}