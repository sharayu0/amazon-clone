const menuBtn = document.querySelector('#menuBtn');
const sideMenu = document.querySelector('#sideMenu');
const closeBtn =  document.querySelector('#close');
const overlay = document.querySelector('#overlay');
const electronicsBtn = document.querySelector('#electronicsBtn');
const electronicsMenu = document.querySelector('#electronicsMenu');
const backBtn = document.querySelector('#backBtn');

// for side menu
menuBtn.addEventListener('click',()=> {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = "hidden";
});

function closeMenu() {
    sideMenu.classList.remove('active');
    electronicsMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = "";
}

closeBtn.addEventListener('click', closeMenu); 
overlay.addEventListener('click', closeMenu); 

// for side submenu
electronicsBtn.addEventListener('click', function(e){
    e.preventDefault();
    electronicsMenu.classList.add('active');   
})

backBtn.addEventListener('click', () => {
    electronicsMenu.classList.remove('active');
})
