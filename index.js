// alert("JS File is connected to index.html");

let menuIcon = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-times');
    }
});