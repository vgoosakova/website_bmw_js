const moreElements = document.querySelectorAll('.more');
const modalElement = document.querySelector('.modal');

const openModal = () => {
    modalElement.classList.remove('hidden');
    disableScroll();
}

const closeModal = () => {
    modalElement.classList.add('hidden');
    enableScroll();
}

moreElements.forEach(more => {
    more.addEventListener('click', openModal);
}); 

modalElement.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('overlay')
    || target.classList.contains('modal__close')) {
        closeModal()
    }
});