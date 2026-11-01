// ==========================
// 1. ICONS
// ==========================

if (window.lucide) {
    lucide.createIcons();
}


// ==========================
// 2. TYPING ANIMATION
// ==========================

const typingText = document.getElementById("typingText");

const words = [
    "beautiful websites",
    "creative experiences",
    "modern interfaces",
    "digital ideas"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let delay = deleting ? 45 : 90;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        delay = 1400;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        delay = 350;
    }

    setTimeout(typeEffect, delay);
}

if (typingText) {
    typeEffect();
}


// ==========================
// 3. MOBILE NAVIGATION
// ==========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    if (window.lucide) {
        lucide.createIcons();
    }
});


// Close the mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.innerHTML = '<i data-lucide="menu"></i>';

        if (window.lucide) {
            lucide.createIcons();
        }
    });
});


// ==========================
// 4. SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}


// ==========================
// 5. ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navItems.forEach(function (link) {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        '.nav-links a[href="#' + entry.target.id + '"]'
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });
}


// ==========================
// 6. CURRENT YEAR
// ==========================

document.getElementById("year").textContent =
    new Date().getFullYear();