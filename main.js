const menuEmail = document.querySelector(".navbar-email");
const iconMenu = document.querySelector(".menu");
const carMenu = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const MobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")


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

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Donkey",
    price: 240,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Whale",
    price: 6000,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgAddToCart = document.createElement("img");
        productImgAddToCart.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgAddToCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)