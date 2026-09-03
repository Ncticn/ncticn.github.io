const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar--scrolled");
    } else {
        navbar.classList.remove("navbar--scrolled");
    }
});


projectCards.forEach((card) => {
    observer.observe(card);
});
