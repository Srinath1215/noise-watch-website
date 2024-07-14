/*===== Resize Navbar on Scroll =====*/
var navbar = document.querySelector(".navbar");
//when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/* Navbar Toggler */
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if (navTogle) {
    navTogle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}

// closing menu when navlink is clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/* Product Colors */
var pic = document.querySelector("#main-shoe");
var priceTag = document.querySelector("#price");  // Original price tag selector
var offerPriceTag = document.querySelector("#offer-price");  // Offer price tag selector

var cyan = document.querySelector(".cyan");
var purple = document.querySelector(".purple");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var green = document.querySelector(".green");
var red = document.querySelector(".red");

const colors = document.querySelectorAll(".color");

//store product info in object
var info = [
    {
        src: "images/products/cyan.png",
        price: "$100",  // Original price
        offerPrice: "$90"  // Offer price
    },
    {
        src: "images/products/purple.png",
        price: "$110",  // Original price
        offerPrice: "$100"  // Offer price
    },
    {
        src: "images/products/blue.png",
        price: "$120",  // Original price
        offerPrice: "$110"  // Offer price
    },
    {
        src: "images/products/pink.png",
        price: "$130",  // Original price
        offerPrice: "$120"  // Offer price
    },
    {
        src: "images/products/green.png",
        price: "$140",  // Original price
        offerPrice: "$130"  // Offer price
    },
    {
        src: "images/products/red.png",
        price: "$150",  // Original price
        offerPrice: "$140"  // Offer price
    }
]

// change color and prices
cyan.addEventListener("click", function() {
    pic.src = info[0].src;
    priceTag.textContent = info[0].price;  // Update original price
    offerPriceTag.textContent = info[0].offerPrice;  // Update offer price
})
purple.addEventListener("click", function() {
    pic.src = info[1].src;
    priceTag.textContent = info[1].price;  // Update original price
    offerPriceTag.textContent = info[1].offerPrice;  // Update offer price
})
blue.addEventListener("click", function() {
    pic.src = info[2].src;
    priceTag.textContent = info[2].price;  // Update original price
    offerPriceTag.textContent = info[2].offerPrice;  // Update offer price
})
pink.addEventListener("click", function() {
    pic.src = info[3].src;
    priceTag.textContent = info[3].price;  // Update original price
    offerPriceTag.textContent = info[3].offerPrice;  // Update offer price
})
green.addEventListener("click", function() {
    pic.src = info[4].src;
    priceTag.textContent = info[4].price;  // Update original price
    offerPriceTag.textContent = info[4].offerPrice;  // Update offer price
})
red.addEventListener("click", function() {
    pic.src = info[5].src;
    priceTag.textContent = info[5].price;  // Update original price
    offerPriceTag.textContent = info[5].offerPrice;  // Update offer price
})

//active color
function color() {
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));
