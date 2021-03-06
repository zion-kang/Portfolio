'use strict';

// Make navbar transparent when it is on top
const navbar= document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
})
// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
   const target = event.target;
   const link = target.dataset.link;
   if (link == null){
       return;
   } 
   scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');}
);
// Handle scrolling when tapping on the contact button
const contactMenu = document.querySelector('.home__contact');
contactMenu.addEventListener('click',()=> {
   scrollIntoView('#contact');
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}
// Make Home transparent when scrollingdown
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
})


// Arrow will take it to the homepage
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>
{   if(window.scrollY > homeHeight / 2){
    arrow.classList.add('visible');
    } else{
        arrow.classList.remove('visible');
    }    
})
arrow.addEventListener("click", ()=>{
    scrollIntoView("#home")
})


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
