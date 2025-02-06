// newsleteter slide
let info1 = document.getElementById('info-1');
let info2 = document.getElementById('info-2');
// sidebar
let sideBar = document.getElementById('side-bar');
let sideBarBtn = document.querySelector('#side-bar-btn');
let xBtn = document.getElementById('x-btn');
// product listing category
let products = document.getElementById('products');
let productCategory = document.getElementById('product-category');
// direct to mens product params
let men = document.getElementById('men');
let women = document.getElementById('women');
// open cart section
let cartSctn = document.getElementById('cart-sctn');
let cartIcon = document.getElementById('cart-icon');



// newsletter animation
window.addEventListener('load', () => {
    slidenewsIn();
})

slidenewsIn = () => {
    setTimeout(() => {
        info1.classList.add('hidden');
        info2.classList.remove('hidden');
        slidenewsOut();
    }, 3000)

}

slidenewsOut = () => {
    setTimeout(() => {
        info1.classList.remove('hidden');
        info2.classList.add('hidden');
        slidenewsIn();
    }, 3000)

}

// show sidebar
function showSideBar(){
    sideBar.classList.remove('hidden');
}
sideBarBtn.addEventListener('click', showSideBar);


// remove side bar
function removeSideBar(event){
    event.stopPropagation();
        sideBar.classList.add('hidden');
}
xBtn.addEventListener('click', removeSideBar);
document.addEventListener('click', (event) => {
   if(!sideBarBtn.contains(event.target) && !sideBar.contains(event.target)){
    sideBar.classList.add('hidden');
    cartSctn.classList.add('hidden');
   }
});

// select product category
products.addEventListener('click', () => {
    productCategory.classList.toggle('hidden');
    // productCategory.classList.add('flex');
})

// cart section event
cartIcon.addEventListener('click', () => {
    cartSctn.classList.remove('hidden');
});
