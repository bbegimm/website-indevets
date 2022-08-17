window.addEventListener("scroll", function () {
    // document.body.classList.remove
    let header = document.querySelector("header");
    header.classList.toggle("_scroll", window.scrollY > 0)
})

// Burger menu 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {

    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// Scroll Reveal Animation
const sr = ScrollReveall({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // rest: true
})

sr.reveal('.main-page__row')
sr.reveal('.services__column_1', {origin: 'left'})
sr.reveal('.works__img_1', {origin: 'right'})