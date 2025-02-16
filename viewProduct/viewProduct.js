document.addEventListener('DOMContentLoaded', () => {
    // params
    let itemDisplay = document.getElementById('item-display');
    let featuredProducts = document.getElementById('featured-products');
    let clickedProImg = document.getElementById('clicked-pro-img');
    let clickedProName = document.getElementById('clicked-pro-name');
    let clickedProPrice = document.getElementById('clicked-pro-price');
    let clickedProDescription = document.getElementById('clicked-pro-description');
    // go back
    let backBtn = document.getElementById('back-btn');
    // increase number of products
    let minus = document.getElementById('minus');
    let numOfCount = document.getElementById('numOfCount');
    let plus = document.getElementById('plus');
    // add to cart btn
    let addToCart = document.getElementById('add-to-cart');
    // cart product
    let showCartProduct = document.getElementById('show-cart-product');
    let emptyCart = document.getElementById('empty-cart');
    



    const productURL = new URLSearchParams(window.location.search);
    // console.log(productURL.get('id'));
    const productID = productURL.get('id');
    findClickedProduct();

    // find and display clicked product
    function findClickedProduct() {
        fetch('../productAll.json')
        .then(Response => Response.json())
        .then(products => {
            products.find(product => {
                if (product.id == productID) {
                    console.log(product);
                    
                    clickedProImg.src = product.image;
                    clickedProName.innerText = product.name;
                    clickedProPrice.innerText = product.price;
                    clickedProDescription.innerText = product.description;
                }
            })
        })
    }

    backBtn.addEventListener('click', () => {
        window.history.back();
    });

    plus.addEventListener('click', () => {
        let strNum = +numOfCount.textContent;
        strNum++;
        numOfCount.innerText = strNum;  
        localStorage.setItem('numOfCount', strNum);   
    })
    minus.addEventListener('click', () => {
        let strNum = +numOfCount.textContent;
        if(numOfCount.textContent == '0'){
            numOfCount.textContent = numOfCount.textContent;
        }else{
            strNum--;
            numOfCount.innerText = strNum; 

        }
    })

    // save number of items
    // console.log(savedNum)

    // add to cart event
    addToCart.addEventListener('click', () => {
        fetch('../productAll.json')
        .then(Response => Response.json())
        .then(product => {
            product.find(p => {
                if (p.id == productID) {
                    console.log(p.price);
                    
                    function addProduct(){
                        // showCartProduct.textContent = '';
                        emptyCart.classList.add('hidden');
                        showCartProduct.classList.remove('flex', 'flex-col', 'h-[60vh]', 'justify-center', 'items-center');
                        showCartProduct.classList.add('p-3')
                        showCartProduct.innerHTML = `
                                                <div class="w-[100vw]">
                            <div class="flex justify-between items-center w-[95%] p-6 bg-white rounded-2xl">
                                <div class="w-[26%]">
                                    <img src="${p.image}" class="w-20 h-20 rounded-lg">
                                </div>
                                <div class=" w-[52%]">
                                    <p class="font-bold text-xl">${p.name}</p>
                                    <p>${p.price} * ${numOfCount.textContent} <span class="font-bold">$${(Number(p.price) * Number(numOfCount.textContent)).toString()}</span></p>
                                </div>
                                <div class="w-[15%] text-center">
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="bg-black text-white font-bold text-lg block w-full py-3 border-0 rounded-2xl my-5">CHECKOUT</button>
                        </div>`;
                    }
                    addProduct();
                }
            })
        })
    })
    
})