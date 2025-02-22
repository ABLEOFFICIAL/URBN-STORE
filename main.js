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
            trendCard.href = './viewProduct/viewProduct.html?id=' + product.id;
            trendCard.classList.add('w-[48%]','sm:w-[30%]', 'bg-white', 'rounded-2xl', 'h-[50vh]', 'mb-2', 'md:h-[60vh]');
            trendCard.innerHTML = `
                            <img src="${product.image}" alt="" class="rounded-t-2xl w-[100%] m-auto h-[70%] object-cover">
                                <div class="px-4 pt-2 pb-4">
                                    <h4 class="text-slate-800">New</h4>
                                    <p>${product.name}</p>
                                    <div class="flex items-center justify-between mb-4">
                                        <span>1 color(s)</span>
                                        <span class="text-end">${product.price}</span>
                                    </div>
                                </div>`;
            trending.appendChild(trendCard);
            // console.log(trendCard.href);
            
        })
    })
}
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