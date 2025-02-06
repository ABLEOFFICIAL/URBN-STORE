document.addEventListener("DOMContentLoaded", function () {
    // product page
let productsBox = document.getElementById('products-box');
// search bar background
let seacrhCtn = document.getElementById('seacrh-ctn');
// back button
let backBtn = document.getElementById('back-btn');

// display products dynamically
function displayProducts(){
    fetch('../productF.json')
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

// add background to search bar on scroll
window.addEventListener('scroll', function(){
    if(window.scrollY > 30){
        seacrhCtn.classList.add('bg-white', 'shadow-2xl');
    }else{
        seacrhCtn.classList.remove('bg-white', 'shadow-2xl');  
    }
})

// add back btn event
backBtn.addEventListener('click', () => {
    window.location.href = '../index.html';
})
})