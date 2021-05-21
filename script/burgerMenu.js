export default function burger() {
    const menuElement = document.querySelector('.menu');
    const burgerMenu = document.querySelector('.humburger-menu');

    const handlerMenu = event => {
        const target = event.target;
        const parent = target.closest('.menu');

        if ((!parent && target !== burgerMenu)
        || target.classList.contains('menu-list__link')) {
            toggleMenu()
        }
    }

    const toggleMenu = () => {
        menuElement.classList.toggle('menu-active');
        burgerMenu.classList.toggle('humburger-menu-active');


        if (menuElement.classList.contains('menu-active')) {
            document.body.addEventListener('click', handlerMenu)
        } else {
            document.body.removeEventListener('click', handlerMenu)
        }
    };

    burgerMenu.addEventListener('click', toggleMenu);
}