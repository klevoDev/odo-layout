function headerMenu(goto = true) {
    const burgerBtnEl = document.querySelector('[data-burger]');
    const bodyMenuEl = document.querySelector('[data-body-menu]');
    const bodyEl = document.body;

    const toggleBurgerMenu = () => {
        bodyMenuEl.classList.toggle('active')
        bodyEl.classList.toggle('scroll')
        burgerBtnEl.classList.toggle('active')
    }

    burgerBtnEl && burgerBtnEl.addEventListener('click', toggleBurgerMenu)

    if (goto) {
        const linkGoTo = () => {
            const linkGoToList = document.querySelectorAll('[data-goto]');

            if (linkGoToList.length) {
                linkGoToList.forEach((link) => {
                    link.addEventListener('click', toggleBurgerMenu)
                })
            }
        }
        linkGoTo()
    }
}

headerMenu()