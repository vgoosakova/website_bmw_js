document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElements = document.querySelectorAll('.feature__link');
    const featureSubElements = document.querySelectorAll('.feature-sub');

    featureLinkElements.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (!btn.classList.contains('feature__link_active')) {
                featureSubElements.forEach((featureSubElement) => {
                    featureSubElement.classList.add('hidden');
                });
                featureLinkElements.forEach((featureLinkElement) => {
                    featureLinkElement.classList.remove('feature__link_active');
                });
                featureSubElements[index].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            } else {
                featureSubElements[index].classList.add('hidden');
                btn.classList.remove('feature__link_active');
            }
            
            // featureSubElements[index].classList.remove('hidden');
            // btn.classList.add('feature__link_active');
        })
    })
});
