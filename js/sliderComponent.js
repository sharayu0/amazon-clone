export function renderSlider(containerId, title, productsCategory) {
    const container = document.querySelector(containerId);

    container.innerHTML = `
        <div class="products-slider">
            <h2>${title}</h2>
            <div class="products-wrapper">
                <button aria-label="Previous products" href="#" class="card-prev">&#10094</button>
                <div class="products">
                    ${productsCategory.map(product => `
                        <img 
                            class="product-img" 
                            src="${product.image}" 
                            alt="${product.title}">
                        `).join("")}
                </div>
                <button aria-label="Previous products" href="#" class="card-next">&#10095</button>
            </div>
        </div>
    `;

    initializeSlider(container.querySelector(".products-wrapper"));
}

function initializeSlider(wrapper) {
    const products = wrapper.querySelector('.products');
    const prev = wrapper.querySelector('.card-prev');
    const next = wrapper.querySelector('.card-next');

    prev.addEventListener('click', () =>{
        products.scrollBy({
            left: -products.clientWidth,
            behaviour: 'smooth'
        });
    });

    next.addEventListener('click', () => {
        products.scrollBy({
            left: products.clientWidth,
            behaviour: 'smooth'
        });
    });

    function updateButtons() {
        if(products.scrollLeft <= 0) {
            prev.classList.add('disabled');
        } else {
            prev.classList.remove('disabled');
        }

        if(products.scrollLeft + products.clientWidth >= products.scrollWidth) {
            next.classList.add('disabled');
        } else {
            next.classList.remove('disabled');
        }
    }
    products.addEventListener("scroll", updateButtons);
}
