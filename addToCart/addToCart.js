document.addEventListener('DOMContentLoaded', () => {
    let savedItem = JSON.parse(localStorage.getItem('productListArray'));
    console.log(savedItem);
    
let savedNum = JSON.parse(localStorage.getItem('numOfCount'));
// console.log(savedNum);


// cart product
let showCartProduct = document.getElementById('show-cart-product');
let emptyCart = document.getElementById('empty-cart');
let count = localStorage.getItem('numOfCount');



if(savedItem) {
    // button
    let checkOut = document.getElementById('check-out');
    // console.log(checkOut);
    
    savedItem.forEach(item => {
       // console.log(savedItem.name);
    function addProduct(){

        

        // showCartProduct.textContent = '';
        emptyCart.classList.add('hidden');
        showCartProduct.classList.remove('flex', 'flex-col', 'h-[60vh]', 'justify-center', 'items-center');
        showCartProduct.classList.add('p-3')
        showCartProduct.innerHTML += `
            <div class="w-[100vw]">
                <div id="del-parent" class="flex mb-2 justify-between items-center w-[95%] p-6 bg-white rounded-2xl">
                    <div class="w-[26%]">
                        <img src="${item.image}" class="w-20 h-20 rounded-lg">
                    </div>
                    <div class=" w-[52%]">
                        <p class="font-bold text-xl">${item.name}</p>
                        <p>${item.price} * ${count} <span class="font-bold">$${(Number(item.price) * Number(count)).toString()}</span></p>
                    </div>
                    <div class="w-[15%] text-center">
                        <i id="del-product" data-id="${item.id}" class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>`;
            checkOut.classList.remove('hidden');

            // delete added product
            let parentP = document.querySelectorAll('#del-parent');
            let delProduct = document.querySelectorAll('#del-product');
            
            
            delProduct.forEach(del => {
                del.addEventListener('click', function(e) {
                    e.target.parentElement.parentElement.remove();
                    savedItem.pop()
                })
            })
            // console.log(delProduct);
            
        // // save to local storage
        // localStorage.setItem('cartItem', JSON.stringify(p));
        // let savedItem = localStorage.getItem('cartItem');
        // console.log(savedItem);
    }
    addProduct();         
    })

}
})