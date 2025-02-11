let searchProduct = document.getElementById('search-product');

let filteredProducts = document.getElementById('filtered-products');

fetch('../productAll.json')
.then(response => response.json())
.then(products => {
    console.log(products);
    
    searchProduct.addEventListener('input', () => {
        let searchValue = searchProduct.value;
        let searchedInput = searchValue.toLowerCase();
        let searchResult = products.filter(product => 
            product.name.toLowerCase().includes(searchedInput)
        )
        console.log(searchResult);
        displaySearchedInput(searchResult);
    })

    function displaySearchedInput(items){
        filteredProducts.innerHTML = '';
        items.forEach(item => {
            let productBox = document.createElement('div');
            productBox.classList.add('w-[48%]', 'bg-white', 'rounded-2xl', 'h-[50vh]');
            productBox.innerHTML = `
                            <img src="${item.image}" alt="" class="rounded-t-2xl w-[90%] m-auto h-[60%] object-cover">
                <div class="px-4 pt-2 pb-4">
                    <p>${item.name}</p>
                    <div class="flex justify-between items-center mb-4">
                        <span>1 color(s)</span>
                        <span class="text-end">$${item.price}</span>
                    </div>
                    <a href="#" class="bg-black text-white text-center py-2 px-6 rounded-3xl block text-xs font-bold">SHOP NOW</a>
                </div>
                `;
                filteredProducts.appendChild(productBox);
        })
    }
});