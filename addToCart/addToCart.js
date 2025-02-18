document.addEventListener('DOMContentLoaded', () => {
    let savedItem = JSON.parse(localStorage.getItem('productListArray'));
    console.log(savedItem);
    
let savedNum = JSON.parse(localStorage.getItem('numOfCount'));
// console.log(savedNum);


// cart product
let showCartProduct = document.getElementById('show-cart-product');
let emptyCart = document.getElementById('empty-cart');
let count = localStorage.getItem('numOfCount');

// button
let checkOut = document.getElementById('check-out');

if(savedItem) {
    savedItem.forEach(item => {
       // console.log(savedItem.name);
    function addProduct(){

        // showCartProduct.textContent = '';
        emptyCart.classList.add('hidden');
        showCartProduct.classList.remove('flex', 'flex-col', 'h-[60vh]', 'justify-center', 'items-center');
        showCartProduct.classList.add('p-3')
        showCartProduct.innerHTML += `
            <div class="w-[100vw]">
                <div class="flex justify-between items-center w-[95%] p-6 bg-white rounded-2xl">
                    <div class="w-[26%]">
                        <img src="${item.image}" class="w-20 h-20 rounded-lg">
                    </div>
                    <div class=" w-[52%]">
                        <p class="font-bold text-xl">${item.name}</p>
                        <p>${item.price} * ${count} <span class="font-bold">$${(Number(item.price) * Number(count)).toString()}</span></p>
                    </div>
                    <div class="w-[15%] text-center">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>`;
            checkOut.classList.remove('hidden');
        // // save to local storage
        // localStorage.setItem('cartItem', JSON.stringify(p));
        // let savedItem = localStorage.getItem('cartItem');
        // console.log(savedItem);
    }
    addProduct();         
    })

}
})