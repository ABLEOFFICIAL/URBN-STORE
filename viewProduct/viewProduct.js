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
    })
    
})