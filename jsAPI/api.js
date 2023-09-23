document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.querySelector(".product-list");

    // Replace with your API endpoint
    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    <img class="product-image" src="${product.image}" alt="${product.title}">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">$${product.price}</p>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
