let currentSlide = 0;
const slide = document.querySelectorAll('.slide');


function showSlide() {
    slide.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    currentSlide = (currentSlide + 1) % slide.length; 
}

showSlide(); 

setInterval(showSlide, 5000);
