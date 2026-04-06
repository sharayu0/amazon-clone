const slides = document.querySelector('.slides');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');
let imgs = document.querySelectorAll('.slide');

// clone first image
const firstClone = imgs[0].cloneNode(true);
slides.appendChild(firstClone);

// clone last image
const lastClone = imgs[imgs.length-1].cloneNode(true);
slides.insertBefore(lastClone, slides.firstChild);

// update imgs
imgs = document.querySelectorAll('.slide');

//  NO animation at start
slides.style.transition = 'none';

let n = 1;

function changeSlide() {
    slides.style.transform = `translateX(-${n*100}%)`;
}
changeSlide();

prev_btn.addEventListener('click', () => {
    n--;
    slides.style.transition = "transform 0.5s ease";
    changeSlide();
});

next_btn.addEventListener('click', () => {
    n++;
    slides.style.transition = "transform 0.5s ease";
    changeSlide();
});

// infinite loop fix (both sides)
slides.addEventListener('transitionend', () => {
    if (n === imgs.length-1) {
        slides.style.transition = 'none';
        n = 1;
        changeSlide();
    }

    if (n === 0) {
        slides.style.transition = 'none';
        n = imgs.length-2;
        changeSlide();
    }
});

// auto slide
setInterval(() => {
    n++;
    slides.style.transition = "transform 0.5s ease";
    changeSlide();

    if (n >= imgs.length-1) {
        setTimeout(() => {
           slides.style.transition = 'none';
            n = 1; 
            changeSlide();
        },500);
    }
}, 5000);


/* product card slider */
const sliders = document.querySelectorAll('.products-wrapper');

sliders.forEach((slider) => {

    const productContainer = slider.querySelector('.products');
    const cardPrev = slider.querySelector('.card-prev');
    const cardNext = slider.querySelector('.card-next');
    
    cardPrev.addEventListener('click', (e) => {
        e.preventDefault();
        productContainer.scrollLeft = -productContainer.clientWidth;
    });
    
    cardNext.addEventListener('click', (e) => {
        e.preventDefault();
        productContainer.scrollLeft = productContainer.clientWidth;
    });
}); 

