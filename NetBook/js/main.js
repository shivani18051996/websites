const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".navbar-toggler");
menuBtn.onclick = () => {
    navbar.classList.add("header-shadow");
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("header-shadow") : navbar.classList.remove("header-shadow");
}
