document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById('productContainer');

    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            console.log(data);

            if (products) {
                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product';
                    productCard.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>$${product.price}</p>
                        <button>Add to Cart</button>
                    `;
                    productContainer.appendChild(productCard);
                });
            } else {
                const noProductCard = document.createElement('div');
                noProductCard.innerHTML = 'No products found';
                productContainer.appendChild(noProductCard);
            }
        })
        .catch(error => console.error('Error fetching products:', error));
});
