const products = [
    { id: 1, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 2, name: 'Indomie', price: 4000, image: 'foto.jpg' },
    { id: 3, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 4, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 5, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 6, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 7, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 8, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 9, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 10, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 11, name: 'Indomie', price: 4000, image: 'foto.jpg'},
    { id: 12, name: 'Indomie', price: 4000, image: 'foto.jpg'}
    // Add more products as needed
];

// Function to create product list
function createProductList(products) {
    const productList = document.getElementById('productList');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.classList.add('product-image');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Harga: $${product.price}`;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productList.appendChild(productItem);
    });
}

createProductList(products);