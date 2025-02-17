let savedItem = JSON.parse(localStorage.getItem('cartItem'));
console.log(savedItem.name);
// cart product
let showCartProduct = document.getElementById('show-cart-product');
let emptyCart = document.getElementById('empty-cart');
let count = localStorage.getItem('numOfCount');

if(savedItem) {

    function addProduct(){
        // showCartProduct.textContent = '';
        emptyCart.classList.add('hidden');
        showCartProduct.classList.remove('flex', 'flex-col', 'h-[60vh]', 'justify-center', 'items-center');
        showCartProduct.classList.add('p-3')
        showCartProduct.innerHTML = `
            <div class="w-[100vw]">
                <div class="flex justify-between items-center w-[95%] p-6 bg-white rounded-2xl">
                    <div class="w-[26%]">
                        <img src="${savedItem.image}" class="w-20 h-20 rounded-lg">
                    </div>
                    <div class=" w-[52%]">
                        <p class="font-bold text-xl">${savedItem.name}</p>
                        <p>${savedItem.price} * ${count} <span class="font-bold">$${(Number(savedItem.price) * Number(count)).toString()}</span></p>
                    </div>
                    <div class="w-[15%] text-center">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            <div>
                <button class="bg-black text-white font-bold text-lg block w-full py-3 border-0 rounded-2xl my-5">CHECKOUT</button>
            </div>`;
            
        // // save to local storage
        // localStorage.setItem('cartItem', JSON.stringify(p));
        // let savedItem = localStorage.getItem('cartItem');
        // console.log(savedItem);
    }
    addProduct();
}