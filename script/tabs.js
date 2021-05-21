export default function tabs() {
    const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
    const tabsFieldElements = document.querySelectorAll('[data-tabs-field]');
    const tabsTitleElements = document.querySelectorAll('[data-tabs-title]');

    for (const tab of tabsHandlerElements) {
        tab.addEventListener('click', () => {
            tabsHandlerElements.forEach(item => {
                if (tab === item) {
                    item.classList.add('design-list__item_active');
                } else {
                    item.classList.remove('design-list__item_active');
                }
            })

            tabsFieldElements.forEach(item => {
                if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            })

            tabsTitleElements.forEach(item => {
                if (item.dataset.tabsTitle === tab.dataset.tabsHandler) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            })
        })
    }
}