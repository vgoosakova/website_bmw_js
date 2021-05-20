const menuElement = document.querySelector('.menu');
const burgerMenu = document.querySelector('.humburger-menu');


const toggleMenu = () => {
    menuElement.classList.toggle('menu-active');
    burgerMenu.classList.toggle('humburger-menu-active');
};

const closeMenu = () => {
    menuElement.classList.remove('menu-active');
    burgerMenu.classList.remove('humburger-menu-active');
};

burgerMenu.addEventListener('click', toggleMenu);

menuElement.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('menu-list__link')) {
        closeMenu();
    }
});