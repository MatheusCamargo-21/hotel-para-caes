const hamburger = document.querySelector('#btn');
const navHeader = document.querySelector('#nav_menu');

hamburger.addEventListener('click', () => {
navHeader.classList.toggle('active');
})

ScrollReveal().reveal('.redes_sociais', {
    delay: 200,
    origin: "left",
    distance: "1000px",
    duration: 3500,
    reset: false
});
