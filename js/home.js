import { renderSlider } from "./sliderComponent.js";

async function loadHomePage() {
    const response = await fetch('./data/products.json');
    const products = await response.json();

    const sports = products.filter((product) => {
        return product.category == "sports";
    });
    
    const electronics = products.filter((product) => {
        return product.category == "electronics";
    });
    
    renderSlider("#sportsSlider", "Best Sellers in Sports & Outdoors", sports);

    renderSlider("#electronicsSlider", "Best Sellers in Electronics", electronics);

}

loadHomePage();
