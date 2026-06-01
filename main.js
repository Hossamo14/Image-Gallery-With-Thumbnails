

let slides = document.querySelectorAll(".slider img");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let imgId = document.querySelector(".img-id");
let galleryContainer = document.querySelector(".gallery-container");
galleryContainer.style.gridTemplateColumns = `repeat(${slides.length}, 1fr)`;
let currentSlide = 0;

updateSliderControls();

function goTOSlide(n) {

    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length // (1 + 7) % 7 = 1 the next
    slides[currentSlide].classList.add("active");
    imgId.textContent = `Image ${currentSlide + 1} of ${slides.length}`;
    updateSliderControls();
    updateThumpnailsAciveState(currentSlide);
}



prevBtn.addEventListener("click", () => {
    goTOSlide(currentSlide - 1);
});



nextBtn.addEventListener("click", () => {
    goTOSlide(currentSlide + 1);
});


function updateSliderControls() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === (slides.length - 1);
}

slides.forEach((img, index) => {
    const thumpnails = img.cloneNode();
    galleryContainer.appendChild(thumpnails);
    thumpnails.addEventListener("click", () => {
        goTOSlide(index);
    });
});


function updateThumpnailsAciveState(index) {
    galleryContainer.querySelectorAll("img").forEach((img, i) => {
        img.classList.toggle("active", i === index);
        // img.classList.toggle("active", true);
    });
};

goTOSlide(0);