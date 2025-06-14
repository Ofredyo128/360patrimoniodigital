
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-images img");
    let current = 0;

    function showSlide(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    setInterval(() => {
        current = (current + 1) % images.length;
        showSlide(current);
    }, 3000);

    const fadeIns = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    fadeIns.forEach(el => observer.observe(el));
});
