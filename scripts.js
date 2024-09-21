document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const intervalTime = 3000;
    let slideInterval;

    const slidesContainer = document.querySelector('.slides');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });

    slidesContainer.addEventListener('mouseover', stopSlideShow);
    slidesContainer.addEventListener('mouseout', startSlideShow);

    startSlideShow();
});
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.2}s`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});
