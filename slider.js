const slides = document.querySelector('.slides');
let imgs = document.querySelectorAll('.slide');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');

const firstClone = imgs[0].cloneNode(true);
slides.appendChild(firstClone);

const lastClone = imgs[imgs.length-1].cloneNode(true);
slides.insertBefore(lastClone, slides.firstChild);

imgs = document.querySelectorAll('.slide');

n = 1;

function changeSlide() {
    slides.style.transform = `translateX(-${n * 100}%)`;
}

prev_btn.addEventListener('click', () => {
    n--;
    slides.style.transition = 'transform 0.5s ease';

    changeSlide();
});

next_btn.addEventListener('click', () => {
    n++;
    slides.style.transition = 'transform 0.5s ease';
    changeSlide();
});

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
