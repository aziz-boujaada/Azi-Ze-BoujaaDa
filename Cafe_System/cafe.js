/* control mobile navbar */
const bars_icon = document.querySelector(".open_nav");
const Close_icon = document.querySelector(".close_nav");
const navBar_List = document.querySelector(".nav_list");

function ShowNavbar() {
    bars_icon.addEventListener('click', () => {
        navBar_List.classList.remove("show_list");
        bars_icon.style.display = "none";

    });
}
ShowNavbar();

function HideNavbar() {
    Close_icon.addEventListener('click', () => {
        navBar_List.classList.add("show_list");
        bars_icon.style.display = "block";
    });
}
HideNavbar();

/* click on the products to add to sales */
const products = [
    { name: "cafe creme", price: "10dh", quantity: "0" },
    { name: "black coffee", price: "10dh", quantity: "0" },
    { name: "Normal coffee", price: "09dh", quantity: "0" },
    { name: "Light coffee", price: "10dh", quantity: "0" },
    { name: "Italian coffee", price: "10dh", quantity: "0" },
    { name: "cappuccino", price: "13dh", quantity: "0" },
    { name: "Cold coffee", price: "15dh", quantity: "0" },
    { name: "cafe creme", price: "10dh", quantity: "0" }
];

const Product_card = document.querySelectorAll(".product_card");
const Product_sale = document.querySelector(".product_sale");
const product_name = document.querySelector(".product_name");
const product_price = document.querySelector(".product_price");
const product_quantity = document.querySelector(".product_quantity");
const Day_End_button = document.querySelector(".day_End");
const Day_total_display = document.querySelector(".day_total");


function AddToSales() {
    
    product_name.innerHTML = "";
    product_price.innerHTML = "";
    product_quantity.innerHTML = "";


    products.forEach((product) => {
        if (product.quantity > 0) {
            product_name.innerHTML += `<h3> ${product.name}</h3>`
            product_price.innerHTML += `<h3> ${product.price}</h3>`
            product_quantity.innerHTML += `<h3> ${product.quantity}</h3>`
        }

    });

}

function UpgradeQuantity() {

    Product_card.forEach((Product_card, index) => {

        Product_card.addEventListener('click', () => {
            const product = products[index];
            product.quantity++;
            Product_sale.classList.remove("sale_show");
            AddToSales();
        });

    });

}
UpgradeQuantity();

function TotalDay(){
    let day_total =0;
    Day_End_button.addEventListener('click' , () =>{
        day_total=0;
        products.forEach(product =>{
            const price = parseFloat(product.price);
            day_total+= price;
        });
        Day_total_display.innerHTML = `<h3>${day_total}</h3>`
    });
}
TotalDay();