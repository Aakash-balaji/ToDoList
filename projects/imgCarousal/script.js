


document.addEventListener('DOMContentLoaded', function () {
    // const carousel = document.querySelector('.carosal');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.setAttribute('data-active', '');
            } else {
                slide.removeAttribute('data-active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Initial setup
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    document.querySelector('.btn-next').addEventListener('click', nextSlide);
    document.querySelector('.btn-previce').addEventListener('click', prevSlide);
});
