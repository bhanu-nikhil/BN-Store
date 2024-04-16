document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    showSlide(currentSlide);
    setInterval(autoSlide, 2000);
});


function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");

    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function autoSlide() {
    nextSlide();
}