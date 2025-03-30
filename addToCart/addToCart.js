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
  // let count = localStorage.getItem("numOfCount");

  //   if (savedItem) {
  // button
  let checkOut = document.getElementById("check-out");
  // console.log(checkOut);

  function addProduct() {
    // Get the cart from localStorage
    let productListArray = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(productListArray);
    if (productListArray.length == 0) {
      localStorage.setItem("cart", JSON.stringify(productListArray));

      showCartProduct.innerHTML = "";
      emptyCart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg><span class="text-xl font-bold">Cart Is Empty</span>`;
    } else {
      // showCartProduct.textContent = '';
      showCartProduct.innerHTML = "";
      showCartProduct.classList.remove("h-[60vh]");
      showCartProduct.classList.add("h-auto", "m-3");
      productListArray.forEach((item) => {
        showCartProduct.classList.add("p-3");
        showCartProduct.innerHTML += `
                <div class="w-full m-auto">
                    <div id="del-parent" class="flex mb-2 justify-start gap-3 items-center w-[95%] m-auto h-auto p-6 bg-white rounded-2xl">
                        <div class="w-[26%]">
                            <img src="${item.image}" class="w-20 rounded-lg">
                        </div>
                        <div class="w-[75%] flex flex-col gap-2">
                            <div class="flex justify-between items-center">
                                <div class=" w-[52%]">
                                    <p class="font-bold text-xs">${item.name}</p>
                                </div>
                                <div class="w-[15%] text-center">
                                    <p class="font-bold">$${item.price}</P>
                                </div>
                            </div>
                            <div  class="flex justify-between items-center">
                                <div class="mr-4 inline-block">
                                    <button id="minus" class="border-[1px] border-neutral-500 text-black font-bold py-1 px-2 rounded-l-lg">-</button>
                                    <button id="numOfCount" class="border-[1px] border-neutral-500 text-black font-bold py-1 px-4">1</button>
                                    <button id="plus" class="border-[1px] border-neutral-500 text-black font-bold py-1 px-2 rounded-r-lg">+</button>
                                </div>
                                <div class="w-[15%] text-center">
                                    <i id="del-product" data-id="${item.id}" class="fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>`;
        let minus = document.querySelectorAll("#minus");
        let plus = document.querySelectorAll("#plus");
        // console.log(plus);

        let numOfCount = document.querySelectorAll("#numOfCount");
        // console.log(numOfCount.textContent);
        plus.forEach((btn, index) => {
          btn.addEventListener("click", () => {
            let count = +numOfCount[index].textContent; // Select respective count
            count++;
            numOfCount[index].textContent = count;
          });
        });

        minus.forEach((btn, index) => {
          btn.addEventListener("click", () => {
            let count = +numOfCount[index].textContent;
            if (count > 1) count--;
            numOfCount[index].textContent = count;
          });
        });
      });
      // delete added product
      let parentP = document.querySelectorAll("#del-parent");
      let delProduct = document.querySelectorAll("#del-product");

      delProduct.forEach((del) => {
        del.addEventListener("click", function (e) {
          let productId = e.target.dataset.id;
          productListArray = productListArray.filter(
            (item) => item.id !== productId
          );

          // Update localStorage and remove the element from DOM
          localStorage.setItem("cart", JSON.stringify(productListArray));
          e.target.closest("#del-parent").remove();
        });
      });
      let checkOut = document.createElement("div");
      checkOut.classList.add(
        "flex",
        "justify-center",
        "items-center",
        "w-full",
        "m-auto"
      );
      checkOut.innerHTML = `<button class="block w-full py-3 my-5 text-lg font-bold text-white bg-black border-0 rounded-2xl">CHECKOUT</button>`;
      showCartProduct.appendChild(checkOut);
    }
  }
  addProduct();

  //   }
});

{
  /* <div id="check-out" class="hidden">

</div> */
}
