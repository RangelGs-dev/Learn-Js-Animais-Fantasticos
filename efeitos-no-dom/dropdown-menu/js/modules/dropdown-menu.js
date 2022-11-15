import outsideClick from './outsideclick.js';
export default function initDropownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')

    dropdownMenus.forEach(function(menu){
        const listEvents = ['click', 'touchstart']
        listEvents.forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        })
    });
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['click', 'touchstart'], () => {
            this.classList.remove('active');
        });
    };
};