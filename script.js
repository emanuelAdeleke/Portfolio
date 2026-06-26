/* =========================
   TYPING EFFECT (HERO)
========================= */

const texts = [
    "IoT Engineer",
    "AI Enthusiast",
    "Digital Twin Developer",
    "Embedded Systems Engineer",
    "Structural Engineering Researcher"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;

        setTimeout(type, 1500); // pause before next word

    } else {
        setTimeout(type, 100);
    }

    if (count === texts.length) {
        count = 0;
    }

})();

/* =========================
   SMOOTH SCROLL NAV LINKS
========================= */

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(17, 24, 39, 0.95)";
    } else {
        nav.style.background = "rgba(17, 24, 39, 0.8)";
    }
   /* =========================
   PROJECT FILTER SYSTEM
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        // remove active class
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        projects.forEach(project => {

            const category = project.getAttribute("data-category");

            if (filter === "all") {
                project.classList.remove("hide");
            } else {
                if (category === filter) {
                    project.classList.remove("hide");
                } else {
                    project.classList.add("hide");
                }
            }

        });

    });

});
});
