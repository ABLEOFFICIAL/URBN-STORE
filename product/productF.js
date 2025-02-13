document.addEventListener("DOMContentLoaded", function () {
    // product page
let productsBox = document.getElementById('products-box');
// user account
let account = document.querySelector('#account');
// account on nav
let accountIcon = document.getElementById('account-icon');
let anchor = accountIcon.querySelector('a');
// search products
let searchProduct = document.getElementById('search-product');


// display products dynamically
function displayProducts(){
    fetch('../productF.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('w-[48%]', 'bg-white', 'rounded-2xl', 'h-[50vh]');
            productCard.innerHTML = `
                <img src="${product.image}" class="rounded-t-2xl w-[100%] m-auto h-[70%] object-cover">
                <div class="px-4 pt-2 pb-4">
                    <h4 class="text-slate-800">New</h4>
                    <p>${product.name}</p>
                    <div class="flex justify-between items-center mb-4">
                        <span>1 color(s)</span>
                        <span class="text-end">${product.price}</span>
                    </div>
                </div>
            `
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
fetch('../productF.json')
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
            let pBox = document.createElement('div');
            pBox.classList.add('w-[48%]', 'bg-white', 'rounded-2xl', 'h-[50vh]');
            pBox.innerHTML = `
                            <img src="${item.image}" alt="" class="rounded-t-2xl w-[100%] m-auto h-[70%] object-cover">
                <div class="px-4 pt-2 pb-4">
                    <p>${item.name}</p>
                    <div class="flex justify-between items-center mb-4">
                        <span>1 color(s)</span>
                        <span class="text-end">${item.price}</span>
                    </div>
                </div>
                `;
                productsBox.appendChild(pBox);
        })
    }
});
})