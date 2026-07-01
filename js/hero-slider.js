const heroSlider = document.querySelector("#heroSlider");

async function loadHeroSlider() {
    const response = await fetch("./data/banners.json");
    const banners = await response.json();
    
    renderSlider(banners);
}

function renderSlider(banners) {
    heroSlider.innerHTML = `
        <div class="slider">
            <div class="slides" id="slides">
                ${banners.map(banner =>`
                    <img src= "${banner.img}"
                    alt="${banner.alt}"
                    class="slide">
                `).join("")}
            </div>
            <a href="#" class="prev">&#10094</a>
            <a href="#" class="next">&#10095</a>    
        </div>
    `;

    initializeHeroSlider();
}

function initializeHeroSlider() {
    const slidesContainer = heroSlider.querySelector("#slides");
    const prev_btn = heroSlider.querySelector(".prev");
    const next_btn = heroSlider.querySelector(".next");
    let slides = heroSlider.querySelectorAll(".slide");
    
    // clone first slide
    const firstClone = slides[0].cloneNode(true);
    slidesContainer.appendChild(firstClone);

    // clone last slide
    const lastClone = slides[slides.length-1].cloneNode(true);
    slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

    // update slides
    slides = heroSlider.querySelectorAll(".slide");

    //  NO animation at start
    slidesContainer.style.transition = 'none';

    let n = 1;

    function changeSlide() {
        slidesContainer.style.transform = `translateX(-${n*100}%)`;
    }

    changeSlide();

    prev_btn.addEventListener('click', () => {
        n--;
        slidesContainer.style.transition = "transform 0.5s ease"; 
        changeSlide();
    });

    next_btn.addEventListener('click', () => {
        n++;
        slidesContainer.style.transition = "transform 0.5s ease"; 
        changeSlide();
    });

    // infinite loop fix (both sides)
    slidesContainer.addEventListener('transitionend', () => {
        if (n === slides.length-1) {
            slidesContainer.style.transition = 'none';
            n = 1;
            changeSlide();
        }

        if (n === 0) {
            slidesContainer.style.transition = 'none';
            n = slides.length-2;
            changeSlide();
        }
    });

    // auto slide
    setInterval(() => {
    n++;
    slidesContainer.style.transition = "transform 0.5s ease";
    changeSlide();

        if (n >= slides.length-1) {
            setTimeout(() => {
            slidesContainer.style.transition = 'none';
                n = 1; 
                changeSlide();
            },500);
        }
    }, 5000);

}

loadHeroSlider();
