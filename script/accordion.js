document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElements = document.querySelectorAll('.feature__link');
    const featureSubElements = document.querySelectorAll('.feature-sub');

    // for (let i = 0; i < featureLinkElements.length; i++) {
    //     featureLinkElements[i].addEventListener('click', () => {
    //         featureSubElements[i].classList.toggle('hidden');
    //         featureLinkElements[i].classList.toggle('feature__link_active');
    //     })
    // }

    featureLinkElements.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            featureSubElements.forEach((featureSubElement) => {
                featureSubElement.classList.add('hidden');
            });
            featureLinkElements.forEach((featureLinkElement) => {
                featureLinkElement.classList.remove('feature__link_active');
            });
            featureSubElements[index].classList.remove('hidden');
            btn.classList.add('feature__link_active');
        })
    })
});
