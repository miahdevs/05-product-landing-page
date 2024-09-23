const burger = document.querySelector('.burger');
const navBar = document.getElementById('nav-bar');

burger.addEventListener('click', () => {
    navBar.classList.toggle('active');
});
