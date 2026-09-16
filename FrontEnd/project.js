const projects = [
    {
        image: "assets/car-catalogue.png",
        title: "Car Catalogue",
        description: "A full-stack automotive marketplace built with React and Tailwind CSS, backed by Supabase for real-time data and authentication. Features a searchable car inventory with brand and price filters, curated featured listings, and a protected admin panel for full CRUD management designed, built, and deployed in just 2 days.",
        link: "https://car-catalogue-liard.vercel.app/",
        source: "https://github.com/cedricconcon/car-catalogue"
    },
    {
        image: "assets/Admin dashboard.png",
        title: "Admin Dashboard",
        description: "The secure control panel behind the Car Catalogue app. Protected by Supabase Auth, it gives admins full real-time CRUD access — add new listings, update car details and pricing, or remove entries instantly through a clean, responsive interface",
        link: "https://car-catalogue-liard.vercel.app/admin",
        source: "https://github.com/cedricconcon/car-catalogue"
    },
    {
        image: "assets/Community_Reports.png",
        title: "Community Watch",
        description: "A full-stack civic reporting platform where residents can flag local issues directly to administrators. Built with React, Tailwind CSS, and Supabase, it features role-based access for residents and admins, real-time report submission and tracking, and a moderation dashboard for reviewing and resolving community submissions.",
        link: "https://community-report-system-git-main-cedric-dev1.vercel.app/",
        source: "https://github.com/cedricconcon/community-report-system"
    },
    {
        image: "assets/Booking-System-Form.png",
        title: "Appointment Booking Page",
        description: "A clean, responsive appointment booking page for service-based businesses. Clients can enter their details, choose a service, and pick a date all through a minimal, mobile-friendly form designed for fast conversions and easy integration.",
        link: "https://booking-system-kphtl3xpg-cedric-dev1.vercel.app/",
        source: "https://github.com/cedricconcon/booking-system#booking-system"
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