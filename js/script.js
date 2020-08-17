const overlay = document.getElementById('overlay');

const openMenuBtn = document.getElementById('open-menu-btn');

const mobileMenu = document.getElementById('mobile-menu');

const closeMenuBtn = document.getElementById('close-icon')

openMenuBtn.addEventListener('click',function(){
    mobileMenu.style.display = "block";    
    overlay.classList.add('open-menu');
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener('click', function(){
    mobileMenu.style.display = "none";
    overlay.classList.remove('open-menu');
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
});


    
