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
    // let productListArray;


    // cart product
    let showCartProduct = document.getElementById('show-cart-product');
    let emptyCart = document.getElementById('empty-cart');
    

    fetch('../productListArray.json')
    .then(response => response.json())
    .then(data => {
        data = JSON.parse(localStorage.getItem('productListArray'));
        productListArray = data;
        console.log(productListArray);
        let savedItem = JSON.parse(localStorage.getItem('productListArray'));
        console.log(savedItem);
        
    }
    )

    const productURL = new URLSearchParams(window.location.search);
    // console.log(productURL.get('id'));
    const productID = productURL.get('id');
    findClickedProduct();

    // find and display clicked product
    function findClickedProduct() {
        fetch('../productAll.json')
        .then(response => response.json())
        .then(products => {
            products.find(product => {
                if (product.id == productID) {
                    // console.log(product);
                    
                    // clickedProImg.src = product.image;
                    // clickedProName.innerText = product.name;
                    // clickedProPrice.innerText = product.price;
                    // clickedProDescription.innerText = product.description;
                    itemDisplay.innerHTML = `

                    <div class="text-center m-auto">
                        <img id="clicked-pro-img" src="${product.image}" class="w-full rounded-3xl h-[50vh] object-cover ">
                    </div>
                    <div class="p-2">
                        <h2 id="clicked-pro-name" class="font-bold text-3xl py-3">${product.name}</h2>
                        <span id="clicked-pro-price" class="block text-neutral-700 font-bold py-2">${product.price}</span>
                        <div class="mr-4 inline-block">
                            <button id="minus" class="bg-neutral-400 text-black font-bold py-2 px-4 rounded-l-lg">-</button>
                            <button id="numOfCount" class="bg-neutral-400 text-black font-bold py-2 px-7">0</button>
                            <button id="plus" class="bg-neutral-400 text-black font-bold py-2 px-4 rounded-r-lg">+</button>
                        </div>
                        <button id="add-to-cart" class="bg-black text-white font-bold rounded-xl py-2.5 px-4">ADD TO CART</button>
                        <p id="clicked-pro-description" class="my-4 w-[90%]">${product.description}</p>
                    </div>`;

                // increase number of products
                let minus = document.getElementById('minus');
                let numOfCount = document.getElementById('numOfCount');
                localStorage.setItem('numOfCount', JSON.stringify(numOfCount)); 
                let plus = document.getElementById('plus');

                // add to cart btn
                let addToCart = document.getElementById('add-to-cart');

                plus.addEventListener('click', () => {
                    let strNum = +numOfCount.textContent;
                    strNum++;
                    numOfCount.innerText = strNum;  
                    // localStorage.setItem('numOfCount', strNum);   
                })
                minus.addEventListener('click', () => {
                    let strNum = +numOfCount.textContent;
                    if(numOfCount.textContent == '0'){
                        numOfCount.textContent = numOfCount.textContent;
                    }else{
                        strNum--;
                        numOfCount.innerText = strNum; 
                        // localStorage.setItem('numOfCount', strNum); 
                    }
                })
                    // get count from local storage and display it
                let count = localStorage.getItem('numOfCount');
                if (count == null) {
                    numOfCount.textContent = 0;
                    } else {
                        numOfCount.textContent = count;
                    }

                
                // console.log();
                

                addToCart.addEventListener('click', () => {
                    fetch('../productAll.json')
                    .then(response => response.json())
                    .then(product => {
                        product.find(p => {
                            if (p.id == productID) {
                                // console.log(p.price);
                                productListArray.push(p);
                                console.log(productListArray);
                                
                                 // save to local storage
                                localStorage.setItem('productListArray', JSON.stringify(productListArray));

                               
                                // localStorage.setItem('cartItem', JSON.stringify(p));
                                
                                // console.log(savedItem);
                                
                                // function addProduct(){
                                //     // showCartProduct.textContent = '';
                                //     emptyCart.classList.add('hidden');
                                //     showCartProduct.classList.remove('flex', 'flex-col', 'h-[60vh]', 'justify-center', 'items-center');
                                //     showCartProduct.classList.add('p-3')
                                //     showCartProduct.innerHTML = `
                                //                             <div class="w-[100vw]">
                                //         <div class="flex justify-between items-center w-[95%] p-6 bg-white rounded-2xl">
                                //             <div class="w-[26%]">
                                //                 <img src="${p.image}" class="w-20 h-20 rounded-lg">
                                //             </div>
                                //             <div class=" w-[52%]">
                                //                 <p class="font-bold text-xl">${p.name}</p>
                                //                 <p>${p.price} * ${numOfCount.textContent} <span class="font-bold">$${(Number(p.price) * Number(numOfCount.textContent)).toString()}</span></p>
                                //             </div>
                                //             <div class="w-[15%] text-center">
                                //                 <i class="fa-solid fa-trash"></i>
                                //             </div>
                                //         </div>
                                //     </div>
                                //     <div>
                                //         <button class="bg-black text-white font-bold text-lg block w-full py-3 border-0 rounded-2xl my-5">CHECKOUT</button>
                                //     </div>`;
            
                                //     // save to local storage
                                //     localStorage.setItem('cartItem', JSON.stringify(p));
                                //     let savedItem = localStorage.getItem('cartItem');
                                //     console.log(savedItem);
                                // }
                                // addProduct();
                            }
                        })
                    })
                })


                }
            })
        })
    }

    backBtn.addEventListener('click', () => {
        window.history.back();
    });





    // save number of items
    // console.log(savedNum)

    // add to cart event
    // addToCart.addEventListener('click', () => {
    //     fetch('../productAll.json')
    //     .then(response => response.json())
    //     .then(product => {
    //         product.find(p => {
    //             if (p.id == productID) {
    //                 // console.log(p.price);
                    
    //                 function addProduct(){
    //                     // showCartProduct.textContent = '';
    //                     emptyCart.classList.add('hidden');
    //                     showCartProduct.classList.remove('flex', 'flex-col', 'h-[60vh]', 'justify-center', 'items-center');
    //                     showCartProduct.classList.add('p-3')
    //                     showCartProduct.innerHTML = `
    //                                             <div class="w-[100vw]">
    //                         <div class="flex justify-between items-center w-[95%] p-6 bg-white rounded-2xl">
    //                             <div class="w-[26%]">
    //                                 <img src="${p.image}" class="w-20 h-20 rounded-lg">
    //                             </div>
    //                             <div class=" w-[52%]">
    //                                 <p class="font-bold text-xl">${p.name}</p>
    //                                 <p>${p.price} * ${numOfCount.textContent} <span class="font-bold">$${(Number(p.price) * Number(numOfCount.textContent)).toString()}</span></p>
    //                             </div>
    //                             <div class="w-[15%] text-center">
    //                                 <i class="fa-solid fa-trash"></i>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <button class="bg-black text-white font-bold text-lg block w-full py-3 border-0 rounded-2xl my-5">CHECKOUT</button>
    //                     </div>`;

    //                     // save to local storage
    //                     localStorage.setItem('cartItem', JSON.stringify(p));
    //                     let savedItem = localStorage.getItem('cartItem');
    //                     console.log(savedItem);
    //                 }
    //                 addProduct();
    //             }
    //         })
    //     })
    // })
    
})