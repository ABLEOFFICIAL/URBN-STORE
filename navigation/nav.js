// sidebar
let sideBar = document.getElementById('side-bar');
let sideBarBtn = document.querySelector('#side-bar-btn');
let xBtn = document.querySelectorAll('#x-btn');
// open cart section
let cartSctn = document.querySelector('#cart-sctn');
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('#cart');
// product listing category
let products = document.getElementById('products');
let productCategory = document.getElementById('product-category');


// show sidebar
function showSideBar(){
    sideBar.classList.remove('hidden');
}
sideBarBtn.addEventListener('click', showSideBar);

// remove side bar && remove cart section
function removeSideBar(event){
    // event.stopPropagation();
        sideBar.classList.add('hidden');
        cartSctn.classList.add('hidden');
}
xBtn.forEach(btn => {
    btn.addEventListener('click', removeSideBar);
})

document.addEventListener('click', (event) => {
   if(!sideBarBtn.contains(event.target) && !sideBar.contains(event.target)){
    sideBar.classList.add('hidden');
   }
});

// cart section event
cartIcon.addEventListener('click', showCart);
cart.addEventListener('click', showCart);

function showCart() {
    cartSctn.classList.remove('hidden');  
};

// select product category
products.addEventListener('click', () => {
    productCategory.classList.toggle('hidden');
    // productCategory.classList.add('flex');
})