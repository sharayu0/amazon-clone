const searchInput = document.querySelector('#searchInput');
const searchResult = document.querySelector('#searchResult');

let products = [];

// Load products from JSON
async function loadProducts() {
    const response = await fetch("data/products.json");
    products = await response.json();
}

loadProducts();

searchInput.addEventListener('input',() => {
    const value = searchInput.value.toLowerCase();

    searchResult.innerHTML = "";
    
    if (value === "") {
        return;
    } 
    
    const filteredProduct = products.filter((product) => {
        return product.title.toLowerCase().includes(value);
    });

    if (filteredProduct.length === 0) {
        searchResult.style.display = "none";
        return;
    }

    searchResult.style.display = "block";

    filteredProduct.forEach((product)=> {
        const item = document.createElement("div");
        item.classList.add("search-item");
        item.textContent = product.title;
        searchResult.appendChild(item);

        item.addEventListener('click',() => {
            searchInput.value = product.title;
            searchResult.style.display = "none";
        });
    });
    
});
