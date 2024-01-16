const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const carMenu = document.querySelector(".navbar-shopping-cart");
const MobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");


menuEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
carMenu.addEventListener("click", toggleShoppingCar);

function toggleDesktopMenu() {
    const closedProductDetail = productDetail.classList.contains("inactive");

    if(!closedProductDetail) {
        productDetail.classList.add("inactive");
    } 

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const closedProductDetail = productDetail.classList.contains("inactive");

    if(!closedProductDetail) {
        productDetail.classList.add("inactive");
    } 

    MobileMenu.classList.toggle("inactive");
}

function toggleShoppingCar() {
    const closedMobileMenu = MobileMenu.classList.contains("inactive");
    const closedDesktopMenu = desktopMenu.classList.toggle("inactive");

    if(!closedMobileMenu) {
        MobileMenu.classList.add("inactive");
    } else (!closedDesktopMenu); {
        desktopMenu.classList.add("inactive")
    }

    productDetail.classList.toggle("inactive");
}
