let menuBtn = document.querySelector('#menuBtn');
let sideMenu = document.querySelector('#sideMenu');
let closeBtn =  document.querySelector('#close');
let overlay = document.querySelector('#overlay');
let electronicsBtn = document.querySelector('#electronicsBtn');
let electronicsMenu = document.querySelector('#electronicsMenu');
let backBtn = document.querySelector('#backBtn');

// for side menu
menuBtn.addEventListener('click',()=> {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', ()=> {
    sideMenu.classList.remove('active');
    electronicsMenu.classList.remove('active');
    overlay.classList.remove('active')
}); 


// for side submenu
electronicsBtn.addEventListener('click', function(e){
    e.preventDefault();
    electronicsMenu.classList.add('active');
    
})

backBtn.addEventListener('click', () => {
    electronicsMenu.classList.remove('active');
})