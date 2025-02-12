// product page
let productsBox = document.getElementById('products-box');
// user account
let account = document.querySelector('#account');
// account on nav
let accountIcon = document.getElementById('account-icon');
let anchor = accountIcon.querySelector('a');

let productList = [];
// display products dynamically
function displayProducts(){
    fetch('../product-shoe.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('w-[48%]', 'bg-white', 'rounded-2xl', 'h-[50vh]');
            productCard.innerHTML = `
                <img src="${product.image}" class="rounded-t-2xl w-[90%] m-auto h-[60%] object-cover">
                <div class="px-4 pt-2 pb-4">
                    <h4 class="text-slate-800">New</h4>
                    <p>${product.name}</p>
                    <div class="flex justify-between items-center mb-4">
                        <span>1 color(s)</span>
                        <span class="text-end">$${product.price}</span>
                    </div>
                    <a href="#" class="bg-black text-white text-center py-2 px-6 rounded-3xl block text-xs font-bold">SHOP NOW</a>
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
