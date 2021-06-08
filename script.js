//PORTFOLIO
const workMenu = document.querySelectorAll('.js-titlebox h2');
const workContent = document.querySelectorAll('.js-work__menu .js-item__portfolio');

//checking if the items exist before calling the functions
if(workMenu.length && workContent.length) {
    //toggle the active class in the js-item__portfolio//
    const activateWork = (index) => {
        workContent.forEach((content) => {
            content.classList.remove('active');
        })
        workContent[index].classList.add('active');
    };

    const activateMenu = (index) => {
        workMenu.forEach((menu) => {
            menu.classList.remove('active');
        })
        workMenu[index].classList.add('active');
    };

    workMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activateWork(index);
            activateMenu(index);
        });
    });
}

