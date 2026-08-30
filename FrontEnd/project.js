const projects = [
    {
        image: "assets/car-catalogue.png",
        title: "Car Catalogue",
        description: "React + Tailwind + Supabase + Auth + CRUD + Admin Dashboard + Price Sorting. Built & deployed in 2 days.",
        link: "https://car-catalogue-liard.vercel.app/",
        source: "https://github.com/cedricconcon/car-catalogue"
    },
    {
        image: "assets/Admin dashboard.png",
        title: "Admin Dashboard",
        description: "Secure CRUD interface. Supabase Auth. Add, edit, and delete cars in real-time.",
        link: "https://car-catalogue-liard.vercel.app/admin",
        source: "https://github.com/cedricconcon/car-catalogue"
    },
    // Add a third placeholder
    {
        image: "/project-picture/coming-soon.png",
        title: "Next Project",
        description: "Building something new. Stay tuned.",
        link: "#",
        source: "#"
    }
];


let currentIndex = 0;

const slideImage = document.querySelector("#slide-image");
const slideTitle = document.querySelector("#slide-title");
const slideDesc = document.querySelector("#slide-desc");
const link = document.querySelector("#link");
const source = document.querySelector("#source");
const slideCounter = document.querySelector("#slide-counter");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dotsContainer = document.querySelector("#dots");
const slide = document.querySelector(".slide");
const mobileNav = document.querySelector('#mobile-nav');
const burgerBtn = document.querySelector('#burger-btn');

if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('hidden');
    });

    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.add('hidden');
        });
    });
}

projects.forEach(function (project, index) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", function () {
        goToSlide(index);
    })
    dotsContainer.appendChild(dot);
})

function loadSlide(index) {
    const current = projects[index];

    slideImage.src = current.image;
    slideTitle.textContent = current.title;
    slideDesc.textContent = current.description;
    link.href = current.link || '#';
    link.textContent = current.link ? "View Project" : "";
    source.href = current.source || '#';
    source.textContent = current.source ? "View Source" : "";
    slideCounter.textContent = (index + 1) + " / " + projects.length;

    document.querySelectorAll(".dot").forEach(function (dot, i) {
        dot.classList.toggle("active", i === index);
    });
}

function goToSlide(index) {
    slide.classList.add("fade");

    setTimeout(function () {
        currentIndex = index;
        loadSlide(currentIndex);

        slide.classList.remove("fade");
    }, 400);
}

nextBtn.addEventListener("click", function () {
    let next = currentIndex + 1;

    if (next >= projects.length) next = 0;
    goToSlide(next);
});

prevBtn.addEventListener("click", function () {
    let prev = currentIndex - 1;

    if (prev < 0) prev = projects.length - 1;

    goToSlide(prev);
});

loadSlide(0);