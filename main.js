document.addEventListener('DOMContentLoaded', () => {
    // newsleteter slide
let info1 = document.getElementById('info-1');
let info2 = document.getElementById('info-2');
// trnding products
let trending = document.getElementById('trending');
// cart product
let showCartProduct = document.getElementById('show-cart-product');
let emptyCart = document.getElementById('empty-cart');



function displaytrendingProduct() {
    fetch('./products-trend.json')
    .then(Response => Response.json())
    .then(products => {
        products.forEach(product => {     
            let trendCard = document.createElement('a');
            // trendCard.className = "trendCardId";
            trendCard.href = './viewProduct/viewProduct.html?id=' + product.id;
            trendCard.classList.add('w-[48%]', 'lg:w-[24%]', 'lg:h-[58vh]', 'bg-white', 'rounded-2xl',
                 'sm:w-[30%]', 'md:w-[30%]', 'h-[40vh]', 'mb-3', 'pb-1');
            trendCard.innerHTML = `
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
                </div>`;
                let heart = trendCard.querySelector('#heart');
                let cart = trendCard.querySelector('#cart');

                // let trendCardId = document.querySelectorAll('.trendCardId')
                // Add mouseover event to show the heart and cart icons
                trendCard.addEventListener('mouseover', () => {
                    heart.classList.remove('!hidden'); // Show heart icon
                    cart.classList.remove('!hidden'); // Show cart icon
                });

                // Add mouseout event to hide the heart and cart icons
                trendCard.addEventListener('mouseout', () => {
                    heart.classList.add('!hidden'); // Hide heart icon
                    cart.classList.add('!hidden'); // Hide cart icon
                });

                
            trending.appendChild(trendCard);
            // console.log(trendCard.href);
            
        })
    })
}
// trendcard former class
// ('w-[48%]','sm:w-[30%]', 'bg-white', 'rounded-2xl', 'h-[50vh]', 'mb-2', 'md:h-[60vh]')

// innerHTML TRENDCARD
// <img src="${product.image}" alt="" class="rounded-t-2xl w-[100%] m-auto h-[70%] object-cover">
// {/* <div class="px-4 pt-2 pb-4">
// <h4 class="text-slate-800">New</h4>
// <p>${product.name}</p>
// <div class="flex items-center justify-between mb-4">
//     <span>1 color(s)</span>
//     <span class="text-end">${product.price}</span>
// </div>
// </div> */}
displaytrendingProduct();


// direct to mens product params
let men = document.getElementById('men');
let women = document.getElementById('women');
// user account
let account = document.querySelector('#account');
// account on nav
let accountIcon = document.getElementById('account-icon');
let anchor = accountIcon.querySelector('a');
// night mood
let moodChange = document.getElementById('night-mood');
let moodText = document.getElementById('mood-text');



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

// home when logged in 
let getUser = JSON.parse(localStorage.getItem('user'));
console.log(getUser);

// check if user is logged in
if (getUser){
    account.href = './user-profile/profile.html';
    anchor.href = './user-profile/profile.html'
}

moodChange.addEventListener('click', () => {
    nightMood();
    moodText.textContent = 'LIGHT MOOD'
})

// light and dark mood function
function nightMood() {
    document.body.classList.remove('bg-neutral-200');
    document.body.classList.add('bg-black', 'text-white');
};

function lightMood() {
    document.body.classList.remove('bg-black', 'text-white');
    document.body.classList.add('bg-black', 'text-white');
};
})