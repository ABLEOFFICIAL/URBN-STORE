document.addEventListener('DOMContentLoaded', () => {
    const productURL = new URLSearchParams(window.location.search);
    // console.log(productURL.get('id'));
    const productID = productURL.get('id');
    findClickedProduct();

    // find clicked product
    function findClickedProduct() {
        fetch('../productAll.json')
        .then(Response => Response.json())
        .then(products => {
            products.find(product => {
                if (product.id == productID) {}
            })
        })
    }
    
})