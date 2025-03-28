document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("cartUpdated", addProduct); // Update cart dynamically if an item is added

  // function loadCart() {
  //     // Get the cart from localStorage
  //     let productListArray = JSON.parse(localStorage.getItem('cart')) || [];

  //     // Display the cart items (you can loop through them and add to the UI)
  //     productListArray.forEach(item => {
  //         console.log(item);  // You can display each item on your cart page here
  //     });
  // }

  //   let savedNum = JSON.parse(localStorage.getItem("numOfCount"));
  // console.log(savedNum);

  // cart product
  let showCartProduct = document.getElementById("show-cart-product");
  let emptyCart = document.getElementById("empty-cart");
  let count = localStorage.getItem("numOfCount");

  //   if (savedItem) {
  // button
  let checkOut = document.getElementById("check-out");
  // console.log(checkOut);

  function addProduct() {
    // Get the cart from localStorage
    let productListArray = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(productListArray);
    // showCartProduct.textContent = '';
    emptyCart.classList.add("hidden");
    showCartProduct.classList.remove(
      "flex",
      "flex-col",
      "h-[60vh]",
      "justify-center",
      "items-center"
    );
    productListArray.forEach((item) => {
      showCartProduct.classList.add("p-3");
      showCartProduct.innerHTML += `
            <div class="w-[100vw]">
                <div id="del-parent" class="flex mb-2 justify-start gap-3 items-center w-[95%] p-6 bg-white rounded-2xl">
                    <div class="w-[26%]">
                        <img src="${item.image}" class="w-20 h-20 rounded-lg">
                    </div>
                    <div class="w-[75%] flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            <div class=" w-[52%]">
                                <p class="font-bold text-xl">${item.name}</p>
                            </div>
                            <div class="w-[15%] text-center">
                                <p class="font-bold">$${item.price}</P>
                            </div>
                        </div>
                        <div  class="flex justify-between items-center">
                            <div class="mr-4 inline-block">
                                <button id="minus" class="border-[1px] border-black text-black font-bold py-1 px-2 rounded-l-lg">-</button>
                                <button id="numOfCount" class="border-[1px] border-black text-black font-bold py-1 px-4">1</button>
                                <button id="plus" class="border-[1px] border-black text-black font-bold py-1 px-2 rounded-r-lg">+</button>
                            </div>
                            <div class="w-[15%] text-center">
                                <i id="del-product" data-id="${item.id}" class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`;
      checkOut.classList.remove("hidden");
    });
    // delete added product
    let parentP = document.querySelectorAll("#del-parent");
    let delProduct = document.querySelectorAll("#del-product");

    delProduct.forEach((del) => {
      del.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.remove();
        productListArray.pop();
      });
    });
    // console.log(delProduct);

    // // save to local storage
    // localStorage.setItem('cartItem', JSON.stringify(p));
    // let savedItem = localStorage.getItem('cartItem');
    // console.log(savedItem);
  }
  // addProduct();

  //   }
});
