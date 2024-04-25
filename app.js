AOS.init();

const navbar=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if(scrollY>=188){
        navbar.classList.add('bg');
    }else{
        navbar.classList.remove('bg');
    }
})

const scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


