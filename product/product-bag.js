// product page
let productsBox = document.getElementById('products-box');
// user account
let account = document.querySelector('#account');
// account on nav
let accountIcon = document.getElementById('account-icon');
let anchor = accountIcon.querySelector('a');
// search products
let searchProduct = document.getElementById('search-product');

let productList = [];
// display products dynamically
function displayProducts(){
    fetch('../product-bag.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
            let productCard = document.createElement('a');
            productCard.href = '../viewProduct/viewProduct.html?id=' + product.id;
            productCard.classList.add('w-[48%]', 'lg:w-[24%]', 'lg:h-[58vh]', 'bg-white', 'rounded-2xl', 'sm:w-[30%]', 'md:w-[30%]', 'h-[40vh]', 'mb-3', 'pb-1');
            productCard.innerHTML = `
                <div class="relative  md:h-[70%] h-[60%]">
                    <img src="${product.image}" class="object-cover h-[95%] m-auto">
                    <i id="heart" class="absolute p-2 text-white bg-black rounded-full top-2.5 fa-solid fa-heart left-4 text-[10px] md:text-[14px] block md:!hidden"></i>
                    <i id="cart" class="fa-solid fa-cart-shopping absolute p-2 text-white bg-black rounded-full top-2.5 right-4 text-[10px] md:text-[14px] block md:!hidden"></i>
                </div>
                <div class="h-auto px-4 pt-2 pb-4">
                    <h4 class="text-slate-800">New</h4>
                    <p class="font-bold">${product.name}</p>
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs md:text-lg">1 color(s)</span>
                        <span class="px-3 py-0.5 md:px-4 md:py-1 text-white bg-black border-0 text-end rounded-2xl">$${product.price}</span>
                    </div>
                </div>`
            productsBox.appendChild(productCard);
             
        })
    }) 
                 
}
displayProducts();

// home when logged in 
let getUser = JSON.parse(localStorage.getItem('user'));
console.log(getUser);

// check if user is logged in
if (getUser){
    account.href = '../user-profile/profile.html';
    anchor.href = '../user-profile/profile.html'
}

// search product event
fetch('../product-bag.json')
.then(response => response.json())
.then(products => {
    console.log(products);
    
    searchProduct.addEventListener('input', () => {
        let searchValue = searchProduct.value;
        let searchedInput = searchValue.toLowerCase();

        if(searchedInput === ''){
            displayProducts();
        }else{
            let searchResult = products.filter(product => 
                product.name.toLowerCase().includes(searchedInput)
            );
            displaySearchedInput(searchResult);
        }

    })

    function displaySearchedInput(items){
        productsBox.innerHTML = '';
        items.forEach(item => {
            let pBox = document.createElement('a');
            pBox.href = '../viewProduct/viewProduct.html?id=' + product.id;
            pBox.classList.add('w-[48%]', 'lg:w-[24%]', 'lg:h-[58vh]', 'bg-white', 'rounded-2xl', 'sm:w-[30%]', 'md:w-[30%]', 'h-[40vh]', 'mb-3', 'pb-1');
            pBox.innerHTML = `
                <div class="relative  md:h-[70%] h-[60%]">
                    <img src="${item.image}" class="object-cover h-[95%] m-auto">
                    <i id="heart" class="absolute p-2 text-white bg-black rounded-full top-2.5 fa-solid fa-heart left-4 text-[10px] md:text-[14px] block md:!hidden"></i>
                    <i id="cart" class="fa-solid fa-cart-shopping absolute p-2 text-white bg-black rounded-full top-2.5 right-4 text-[10px] md:text-[14px] block md:!hidden"></i>
                </div>
                <div class="h-auto px-4 pt-2 pb-4">
                    <h4 class="text-slate-800">New</h4>
                    <p class="font-bold">${item.name}</p>
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs md:text-lg">1 color(s)</span>
                        <span class="px-3 py-0.5 md:px-4 md:py-1 text-white bg-black border-0 text-end rounded-2xl">$${item.price}</span>
                    </div>
                </div>`;
                productsBox.appendChild(pBox);
        })
    }
});
