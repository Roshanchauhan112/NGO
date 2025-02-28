const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const slider = document.getElementById('slider');
    let currentIndex = 0;

    function slideImages() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(slideImages, 3000); // Change image every 3 seconds