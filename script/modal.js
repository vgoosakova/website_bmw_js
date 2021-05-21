const designBlockElement = document.querySelector('.design-block');
const modalElement = document.querySelector('.modal');

const openModal = () => {
    modalElement.classList.remove('hidden');
    disableScroll();
}

const closeModal = () => {
    modalElement.classList.add('hidden');
    enableScroll();
}

designBlockElement.addEventListener('click', event => {
    const target = event.target;

    if(target.matches('.more')) {
        openModal();
    }
}); 

modalElement.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('overlay')
    || target.classList.contains('modal__close')) {
        closeModal()
    }
});