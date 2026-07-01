const categoryContainer = document.querySelector("#categoryContainer");

async function loadCategories() {
    const response = await fetch("./data/categories.json");
    const categories = await response.json();

    renderCategories(categories);
}

function renderCategories(categories) {
    categoryContainer.innerHTML = "";

    categories.forEach((category) => {

        let subcategories = "";

        category.items.forEach((item)=> {
            subcategories += `
                <div class="sub-category">
                    <img src="${item.image}" alt="${item.title}">
                    <p>${item.title}</p>
                </div>
            `;
        });

        categoryContainer.innerHTML += `
            <div class="box-col">
                <h3 class="box-heading">${category.title}</h3>
                <div class="sub-category-grid">
                    ${subcategories}
                </div>
                <a href="${category.link}" class="box-link">See More</a>
            </div>
        `;

    });
}
loadCategories();
