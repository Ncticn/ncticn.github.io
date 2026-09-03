const revealElements = document.querySelectorAll(
    ".project-card, .about__content, .contact__content"
);


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


revealElements.forEach((element) => {
    observer.observe(element);
});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar--scrolled");
    } else {
        navbar.classList.remove("navbar--scrolled");
    }
});



const hero = document.querySelector(".hero");


if (window.matchMedia("(pointer: fine)").matches) {

    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        hero.style.setProperty("--mouse-x", `${x}%`);
        hero.style.setProperty("--mouse-y", `${y}%`);
    });


    hero.addEventListener("mouseleave", () => {
        hero.style.setProperty("--mouse-x", "50%");
        hero.style.setProperty("--mouse-y", "0%");
    });

}


