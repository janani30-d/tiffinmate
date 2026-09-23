/* =========================================================
   TIFFINMATE HEADER
   PART 4 — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const body = document.body;
    const html = document.documentElement;

    const mobileMenuToggle =
        document.getElementById("mobileMenuToggle");

    const headerMenu =
        document.getElementById("headerMenu");

    const rtlToggle =
        document.getElementById("rtlToggle");

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    const navDropdown =
        document.querySelector(".nav-dropdown");

    const navDropdownToggle =
        document.querySelector(".nav-dropdown-toggle");


    /* =====================================================
       DARK MODE
    ====================================================== */

    const savedTheme =
        localStorage.getItem("tiffinmate-theme");


    if (savedTheme === "dark") {

        body.classList.add("dark-mode");

    } else {

        body.classList.remove("dark-mode");

    }


    function updateDarkModeButton() {

        if (!darkModeToggle) {
            return;
        }

        const isDark =
            body.classList.contains("dark-mode");


        if (isDark) {

            darkModeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            darkModeToggle.setAttribute(
                "title",
                "Switch to light mode"
            );

        } else {

            darkModeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            darkModeToggle.setAttribute(
                "title",
                "Switch to dark mode"
            );

        }

    }


    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "click",
            function () {

                body.classList.toggle(
                    "dark-mode"
                );


                const isDark =
                    body.classList.contains(
                        "dark-mode"
                    );


                localStorage.setItem(
                    "tiffinmate-theme",
                    isDark
                        ? "dark"
                        : "light"
                );


                updateDarkModeButton();

            }
        );

    }


    updateDarkModeButton();


    /* =====================================================
       RTL
    ====================================================== */

    const savedDirection =
        localStorage.getItem(
            "tiffinmate-direction"
        );


    if (savedDirection === "rtl") {

        html.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        html.setAttribute(
            "dir",
            "ltr"
        );

    }


    function updateRTLButton() {

        if (!rtlToggle) {
            return;
        }


        const isRTL =
            html.getAttribute("dir") === "rtl";


        if (isRTL) {

            rtlToggle.setAttribute(
                "aria-label",
                "Switch to LTR"
            );

            rtlToggle.setAttribute(
                "title",
                "Switch to LTR"
            );

        } else {

            rtlToggle.setAttribute(
                "aria-label",
                "Switch to RTL"
            );

            rtlToggle.setAttribute(
                "title",
                "Switch to RTL"
            );

        }

    }


    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            function () {

                const isRTL =
                    html.getAttribute("dir") === "rtl";


                if (isRTL) {

                    html.setAttribute(
                        "dir",
                        "ltr"
                    );

                    localStorage.setItem(
                        "tiffinmate-direction",
                        "ltr"
                    );

                } else {

                    html.setAttribute(
                        "dir",
                        "rtl"
                    );

                    localStorage.setItem(
                        "tiffinmate-direction",
                        "rtl"
                    );

                }


                updateRTLButton();

            }
        );

    }


    updateRTLButton();


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    function openMobileMenu() {

        if (!headerMenu || !mobileMenuToggle) {
            return;
        }


        headerMenu.classList.add(
            "mobile-menu-open"
        );


        mobileMenuToggle.classList.add(
            "active"
        );


        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "true"
        );


        mobileMenuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );


        document.body.classList.add(
            "mobile-navigation-active"
        );

    }


    function closeMobileMenu() {

        if (!headerMenu || !mobileMenuToggle) {
            return;
        }


        headerMenu.classList.remove(
            "mobile-menu-open"
        );


        mobileMenuToggle.classList.remove(
            "active"
        );


        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        mobileMenuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        document.body.classList.remove(
            "mobile-navigation-active"
        );


        closeHomeDropdown();

    }


    function toggleMobileMenu() {

        if (!headerMenu) {
            return;
        }


        const isOpen =
            headerMenu.classList.contains(
                "mobile-menu-open"
            );


        if (isOpen) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    }


    if (mobileMenuToggle) {

        mobileMenuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                toggleMobileMenu();

            }
        );

    }


    /* =====================================================
   HOME DROPDOWN
===================================================== */

function openHomeDropdown() {

    if (!navDropdown || !navDropdownToggle) {
        return;
    }

    navDropdown.classList.add("dropdown-open");

    navDropdownToggle.setAttribute(
        "aria-expanded",
        "true"
    );
}


function closeHomeDropdown() {

    if (!navDropdown || !navDropdownToggle) {
        return;
    }

    navDropdown.classList.remove("dropdown-open");

    navDropdownToggle.setAttribute(
        "aria-expanded",
        "false"
    );
}


function toggleHomeDropdown(event) {

    event.preventDefault();
    event.stopPropagation();

    if (
        navDropdown.classList.contains(
            "dropdown-open"
        )
    ) {

        closeHomeDropdown();

    } else {

        openHomeDropdown();

    }
}


if (navDropdownToggle) {

    navDropdownToggle.addEventListener(
        "click",
        toggleHomeDropdown
    );

}


/* HOME 1 + HOME 2 */

const homeDropdownLinks =
    document.querySelectorAll(
        ".nav-dropdown-menu .dropdown-item"
    );


homeDropdownLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            closeHomeDropdown();

        }
    );

});


/* CLICK OUTSIDE */

document.addEventListener(
    "click",
    function (event) {

        if (
            navDropdown &&
            !navDropdown.contains(event.target)
        ) {

            closeHomeDropdown();

        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeHomeDropdown();

        }

    }
);
    /* =====================================================
       DASHBOARD + LOGIN
    ====================================================== */

    const headerButtons =
        document.querySelectorAll(
            ".header-actions .header-button"
        );


    headerButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );

    });


    /* =====================================================
       CLICK OUTSIDE MENU
    ====================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (!headerMenu) {
                return;
            }


            const clickedInsideMenu =
                headerMenu.contains(
                    event.target
                );


            const clickedHamburger =
                mobileMenuToggle &&
                mobileMenuToggle.contains(
                    event.target
                );


            if (
                !clickedInsideMenu &&
                !clickedHamburger
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            closeMobileMenu();

        }
    );


    /* =====================================================
       CLOSE MENU WHEN MOVING TO DESKTOP
    ====================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        function () {

            clearTimeout(resizeTimer);


            resizeTimer = setTimeout(
                function () {

                    if (
                        window.innerWidth >= 1200
                    ) {

                        closeMobileMenu();

                    }

                },
                100
            );

        }
    );


    /* =====================================================
       INITIAL STATE
    ====================================================== */

    if (mobileMenuToggle) {

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (navDropdownToggle) {

        navDropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});













/******HOME-1********/


/* =========================================================
   HOME 1 — HERO SECTION
   PART 4 — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector("#home1Hero");

    if (!hero) {
        return;
    }


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const slides = Array.from(
        hero.querySelectorAll(".home1-hero-slide")
    );

    const dots = Array.from(
        hero.querySelectorAll(".home1-hero-dot")
    );

    const currentCounter = hero.querySelector(
        ".home1-hero-counter-current"
    );


    if (!slides.length || !dots.length) {
        return;
    }


    /* =====================================================
       SETTINGS
    ===================================================== */

    const totalSlides = slides.length;

    const slideDuration = 5000;

    let currentSlide = 0;

    let slideTimer = null;

    let isPaused = false;

    let touchStartX = 0;

    let touchEndX = 0;


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* =====================================================
       UPDATE COUNTER
    ===================================================== */

    const updateCounter = () => {

        if (!currentCounter) {
            return;
        }

        currentCounter.textContent = String(
            currentSlide + 1
        ).padStart(2, "0");

    };


    /* =====================================================
       UPDATE DOTS
    ===================================================== */

    const updateDots = () => {

        dots.forEach((dot, index) => {

            const isActive = index === currentSlide;

            dot.classList.toggle(
                "active",
                isActive
            );

            dot.setAttribute(
                "aria-current",
                isActive ? "true" : "false"
            );

        });

    };


    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    const showSlide = (index) => {

        if (index < 0) {
            index = totalSlides - 1;
        }

        if (index >= totalSlides) {
            index = 0;
        }

        currentSlide = index;


        slides.forEach((slide, slideIndex) => {

            slide.classList.toggle(
                "active",
                slideIndex === currentSlide
            );

        });


        updateDots();
        updateCounter();

    };


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    const nextSlide = () => {

        showSlide(currentSlide + 1);

    };


    /* =====================================================
       START AUTO SLIDE
    ===================================================== */

    const startAutoSlide = () => {

        if (prefersReducedMotion) {
            return;
        }

        clearInterval(slideTimer);

        slideTimer = setInterval(() => {

            if (!isPaused && !document.hidden) {
                nextSlide();
            }

        }, slideDuration);

    };


    /* =====================================================
       STOP AUTO SLIDE
    ===================================================== */

    const stopAutoSlide = () => {

        clearInterval(slideTimer);

        slideTimer = null;

    };


    /* =====================================================
       DOT CLICK
    ===================================================== */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            startAutoSlide();

        });

    });


    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    hero.addEventListener("keydown", (event) => {

        if (event.key === "ArrowRight") {

            event.preventDefault();

            showSlide(currentSlide + 1);

            startAutoSlide();

        }

        else if (event.key === "ArrowLeft") {

            event.preventDefault();

            showSlide(currentSlide - 1);

            startAutoSlide();

        }

    });


    /* =====================================================
       RTL KEYBOARD SUPPORT
    ===================================================== */

    const isRTL = () => {

        return document.documentElement.dir === "rtl";

    };


    hero.addEventListener("keydown", (event) => {

        if (
            event.key !== "ArrowLeft" &&
            event.key !== "ArrowRight"
        ) {
            return;
        }


        /*
         * In RTL:
         * ArrowLeft  = next
         * ArrowRight = previous
         */

        if (isRTL()) {

            event.preventDefault();

            if (event.key === "ArrowLeft") {

                showSlide(currentSlide + 1);

            } else {

                showSlide(currentSlide - 1);

            }

            startAutoSlide();

        }

    });


    /* =====================================================
       PAUSE ON HOVER
    ===================================================== */

    hero.addEventListener("mouseenter", () => {

        isPaused = true;

    });


    hero.addEventListener("mouseleave", () => {

        isPaused = false;

    });


    /* =====================================================
       FOCUS PAUSE
    ===================================================== */

    hero.addEventListener("focusin", () => {

        isPaused = true;

    });


    hero.addEventListener("focusout", () => {

        /*
         * Delay slightly so moving between
         * hero controls does not restart immediately.
         */

        setTimeout(() => {

            if (!hero.contains(document.activeElement)) {
                isPaused = false;
            }

        }, 50);

    });


    /* =====================================================
       TOUCH START
    ===================================================== */

    hero.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH END
    ===================================================== */

    hero.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );


    /* =====================================================
       HANDLE SWIPE
    ===================================================== */

    const handleSwipe = () => {

        const swipeDistance =
            touchEndX - touchStartX;

        const minimumSwipeDistance = 50;


        if (
            Math.abs(swipeDistance) <
            minimumSwipeDistance
        ) {
            return;
        }


        if (isRTL()) {

            /*
             * RTL:
             * Swipe left  = previous
             * Swipe right = next
             */

            if (swipeDistance < 0) {

                showSlide(currentSlide - 1);

            } else {

                showSlide(currentSlide + 1);

            }

        } else {

            /*
             * LTR:
             * Swipe left  = next
             * Swipe right = previous
             */

            if (swipeDistance < 0) {

                showSlide(currentSlide + 1);

            } else {

                showSlide(currentSlide - 1);

            }

        }


        startAutoSlide();

    };


    /* =====================================================
       VISIBILITY CHANGE
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                stopAutoSlide();

            } else {

                startAutoSlide();

            }

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    showSlide(0);

    startAutoSlide();

});

/* =========================================================
   HOME 1 — SECTION 11
   TIFFINMATE BY NUMBERS
   ANIMATED COUNTERS
   File: assets/js/home1-stats.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const statsSection = document.querySelector("#home1Stats");

    if (!statsSection) {
        return;
    }

    const counters = statsSection.querySelectorAll(
        ".home1-stat-counter"
    );

    if (!counters.length) {
        return;
    }


    /* =====================================================
       SETTINGS
    ===================================================== */

    const duration = 1800;

    let animationStarted = false;


    /* =====================================================
       FORMAT NUMBER
    ===================================================== */

    function formatNumber(value, decimalPlaces) {

        if (decimalPlaces > 0) {
            return value.toFixed(decimalPlaces);
        }

        return Math.floor(value).toLocaleString("en-IN");
    }


    /* =====================================================
       ANIMATE SINGLE COUNTER
    ===================================================== */

    function animateCounter(counter) {

        const target = parseFloat(
            counter.dataset.count || "0"
        );

        const decimalPlaces = parseInt(
            counter.dataset.decimal || "0",
            10
        );

        if (!Number.isFinite(target)) {
            return;
        }

        const startTime = performance.now();


        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );


            /*
             * Smooth ease-out animation
             */
            const easedProgress =
                1 - Math.pow(1 - progress, 3);


            const currentValue =
                target * easedProgress;


            counter.textContent =
                formatNumber(
                    currentValue,
                    decimalPlaces
                );


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    formatNumber(
                        target,
                        decimalPlaces
                    );
            }
        }


        requestAnimationFrame(updateCounter);
    }


    /* =====================================================
       START ALL COUNTERS
    ===================================================== */

    function startCounters() {

        if (animationStarted) {
            return;
        }

        animationStarted = true;

        counters.forEach((counter, index) => {

            setTimeout(() => {
                animateCounter(counter);
            }, index * 120);

        });
    }


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            startCounters();

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.25
                }
            );


        observer.observe(statsSection);

    } else {

        startCounters();

    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function handleReducedMotion() {

        if (!prefersReducedMotion.matches) {
            return;
        }


        counters.forEach((counter) => {

            const target =
                parseFloat(
                    counter.dataset.count || "0"
                );

            const decimalPlaces =
                parseInt(
                    counter.dataset.decimal || "0",
                    10
                );


            if (Number.isFinite(target)) {

                counter.textContent =
                    formatNumber(
                        target,
                        decimalPlaces
                    );
            }

        });


        animationStarted = true;
    }


    handleReducedMotion();


    if (
        typeof prefersReducedMotion.addEventListener ===
        "function"
    ) {

        prefersReducedMotion.addEventListener(
            "change",
            handleReducedMotion
        );

    }

});



/******home-2******/

/* =========================================================
   TIFFINMATE — HOME 2 HERO SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const hero = document.getElementById("home2Hero");
    const slides = document.querySelectorAll(".home2-hero-slide");
    const dots = document.querySelectorAll(".home2-hero-dot");

    const prevButton = document.getElementById("home2HeroPrev");
    const nextButton = document.getElementById("home2HeroNext");


    /* =====================================================
       CHECK ELEMENTS
    ====================================================== */

    if (
        !hero ||
        !slides.length ||
        !dots.length ||
        !prevButton ||
        !nextButton
    ) {
        return;
    }


    /* =====================================================
       VARIABLES
    ====================================================== */

    let currentSlide = 0;

    let autoSlideTimer = null;

    const slideDuration = 5000;


    /* =====================================================
       SHOW SLIDE
    ====================================================== */

    function showSlide(index) {

        /* Keep index inside range */

        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }


        /* Update current slide */

        currentSlide = index;


        /* =================================================
           UPDATE SLIDES
        ================================================== */

        slides.forEach(function (slide, slideIndex) {

            const isActive = slideIndex === currentSlide;

            slide.classList.toggle("active", isActive);

        });


        /* =================================================
           UPDATE DOTS
        ================================================== */

        dots.forEach(function (dot, dotIndex) {

            const isActive = dotIndex === currentSlide;

            dot.classList.toggle("active", isActive);

            dot.setAttribute(
                "aria-current",
                isActive ? "true" : "false"
            );

        });

    }


    /* =====================================================
       NEXT SLIDE
    ====================================================== */

    function nextSlide() {

        showSlide(currentSlide + 1);

    }


    /* =====================================================
       PREVIOUS SLIDE
    ====================================================== */

    function previousSlide() {

        showSlide(currentSlide - 1);

    }


    /* =====================================================
       START AUTO SLIDE
    ====================================================== */

    function startAutoSlide() {

        stopAutoSlide();

        autoSlideTimer = setInterval(function () {

            nextSlide();

        }, slideDuration);

    }


    /* =====================================================
       STOP AUTO SLIDE
    ====================================================== */

    function stopAutoSlide() {

        if (autoSlideTimer) {

            clearInterval(autoSlideTimer);

            autoSlideTimer = null;

        }

    }


    /* =====================================================
       RESTART AUTO SLIDE
    ====================================================== */

    function restartAutoSlide() {

        stopAutoSlide();

        startAutoSlide();

    }


    /* =====================================================
       NEXT BUTTON
    ====================================================== */

    nextButton.addEventListener("click", function () {

        nextSlide();

        restartAutoSlide();

    });


    /* =====================================================
       PREVIOUS BUTTON
    ====================================================== */

    prevButton.addEventListener("click", function () {

        previousSlide();

        restartAutoSlide();

    });


    /* =====================================================
       DOT NAVIGATION
    ====================================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);

            restartAutoSlide();

        });

    });


    /* =====================================================
       PAUSE WHEN MOUSE IS OVER HERO
    ====================================================== */

    hero.addEventListener("mouseenter", function () {

        stopAutoSlide();

    });


    /* =====================================================
       RESUME WHEN MOUSE LEAVES HERO
    ====================================================== */

    hero.addEventListener("mouseleave", function () {

        startAutoSlide();

    });


    /* =====================================================
       KEYBOARD NAVIGATION
    ====================================================== */

    document.addEventListener("keydown", function (event) {

        /*
         * Only control the slider when the hero
         * is visible on the page.
         */

        const heroRect = hero.getBoundingClientRect();

        const heroVisible =
            heroRect.top < window.innerHeight &&
            heroRect.bottom > 0;


        if (!heroVisible) {
            return;
        }


        /* Previous */

        if (event.key === "ArrowLeft") {

            previousSlide();

            restartAutoSlide();

        }


        /* Next */

        if (event.key === "ArrowRight") {

            nextSlide();

            restartAutoSlide();

        }

    });


    /* =====================================================
       TOUCH / SWIPE SUPPORT
    ====================================================== */

    let touchStartX = 0;
    let touchEndX = 0;

    const swipeThreshold = 50;


    /* Touch Start */

    hero.addEventListener(
        "touchstart",
        function (event) {

            touchStartX = event.changedTouches[0].screenX;

            stopAutoSlide();

        },
        {
            passive: true
        }
    );


    /* Touch End */

    hero.addEventListener(
        "touchend",
        function (event) {

            touchEndX = event.changedTouches[0].screenX;

            handleSwipe();

            startAutoSlide();

        },
        {
            passive: true
        }
    );


    /* =====================================================
       HANDLE SWIPE
    ====================================================== */

    function handleSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;


        /* Swipe Left */

        if (swipeDistance < -swipeThreshold) {

            nextSlide();

        }


        /* Swipe Right */

        if (swipeDistance > swipeThreshold) {

            previousSlide();

        }

    }


    /* =====================================================
       VISIBILITY CHANGE
    ====================================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (document.hidden) {

                stopAutoSlide();

            } else {

                startAutoSlide();

            }

        }
    );


    /* =====================================================
       INITIALIZE
    ====================================================== */

    showSlide(0);

    startAutoSlide();

});



/* =========================================================
   HOME 2 — STATS / TIFFINMATE AT A GLANCE
   PART 4 — COUNTING ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const statCounters = document.querySelectorAll(".home2-stat-count");

    if (!statCounters.length) {
        return;
    }


    /* =====================================================
       FORMAT NUMBER
    ===================================================== */

    function formatNumber(value, counter) {

        const decimals = Number(
            counter.getAttribute("data-decimals") || 0
        );

        const format = counter.getAttribute("data-format");

        let formattedValue;

        if (format === "compact") {

            if (value >= 1000000) {

                formattedValue =
                    (value / 1000000)
                    .toFixed(1)
                    .replace(".0", "") + "M";

            } else if (value >= 1000) {

                formattedValue =
                    (value / 1000)
                    .toFixed(1)
                    .replace(".0", "") + "K";

            } else {

                formattedValue = Math.floor(value).toString();
            }

        } else {

            formattedValue = Number(value).toFixed(decimals);
        }

        return formattedValue;
    }


    /* =====================================================
       ANIMATE SINGLE COUNTER
    ===================================================== */

    function animateCounter(counter) {

        if (counter.dataset.counted === "true") {
            return;
        }

        counter.dataset.counted = "true";

        const target =
            Number(counter.getAttribute("data-target"));

        const decimals =
            Number(counter.getAttribute("data-decimals") || 0);

        const duration = 1800;

        const startTime = performance.now();


        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress =
                Math.min(elapsed / duration, 1);


            /* Smooth ease-out effect */
            const easedProgress =
                1 - Math.pow(1 - progress, 3);


            const currentValue =
                target * easedProgress;


            counter.textContent =
                formatNumber(currentValue, counter);


            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                /*
                 * Make sure the final value is exact.
                 */
                counter.textContent =
                    formatNumber(target, counter);
            }
        }


        requestAnimationFrame(updateCounter);
    }


    /* =====================================================
       INTERSECTION OBSERVER
       Starts counting when stats section enters viewport
    ===================================================== */

    const statsSection =
        document.querySelector(".home2-stats-section");


    if (!statsSection) {
        return;
    }


    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    statCounters.forEach(counter => {
                        animateCounter(counter);
                    });


                    observerInstance.unobserve(entry.target);
                });

            },
            {
                threshold: 0.25
            }
        );


    observer.observe(statsSection);


    /* =====================================================
       ACCESSIBILITY / REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {

        statCounters.forEach(counter => {

            const target =
                Number(counter.getAttribute("data-target"));

            counter.textContent =
                formatNumber(target, counter);

            counter.dataset.counted = "true";
        });

        observer.disconnect();
    }

});



/* =========================================================
   HOME 2 — FAQ
   PART 4 — ACCORDION JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(
        ".home2-faq-item[data-faq-item]"
    );

    if (!faqItems.length) {
        return;
    }


    /* =====================================================
       CLOSE FAQ ITEM
    ===================================================== */

    function closeFaq(item) {

        const question = item.querySelector(
            ".home2-faq-question"
        );

        const answer = item.querySelector(
            ".home2-faq-answer"
        );

        if (!question || !answer) {
            return;
        }

        item.classList.remove("active");

        question.setAttribute(
            "aria-expanded",
            "false"
        );

        /*
         * Keep the answer available to the CSS grid
         * animation before hiding it.
         */
        window.requestAnimationFrame(() => {

            answer.hidden = true;

        });
    }


    /* =====================================================
       OPEN FAQ ITEM
    ===================================================== */

    function openFaq(item) {

        const question = item.querySelector(
            ".home2-faq-question"
        );

        const answer = item.querySelector(
            ".home2-faq-answer"
        );

        if (!question || !answer) {
            return;
        }

        answer.hidden = false;

        /*
         * Force the browser to recognize the answer
         * before adding the active class.
         */
        void answer.offsetHeight;

        item.classList.add("active");

        question.setAttribute(
            "aria-expanded",
            "true"
        );
    }


    /* =====================================================
       FAQ CLICK HANDLER
    ===================================================== */

    faqItems.forEach(item => {

        const question = item.querySelector(
            ".home2-faq-question"
        );

        if (!question) {
            return;
        }


        question.addEventListener("click", () => {

            const isActive =
                item.classList.contains("active");


            /*
             * Close all other FAQ items.
             * Only one answer stays open at a time.
             */

            faqItems.forEach(otherItem => {

                if (otherItem !== item) {
                    closeFaq(otherItem);
                }

            });


            /*
             * Toggle the selected item.
             */

            if (isActive) {

                closeFaq(item);

            } else {

                openFaq(item);

            }

        });

    });


    /* =====================================================
       KEYBOARD SUPPORT
    ===================================================== */

    faqItems.forEach((item, index) => {

        const question = item.querySelector(
            ".home2-faq-question"
        );

        if (!question) {
            return;
        }


        question.addEventListener("keydown", event => {

            let targetIndex = null;


            /* Move to previous question */

            if (event.key === "ArrowUp") {

                targetIndex =
                    index === 0
                        ? faqItems.length - 1
                        : index - 1;

            }


            /* Move to next question */

            if (event.key === "ArrowDown") {

                targetIndex =
                    index === faqItems.length - 1
                        ? 0
                        : index + 1;

            }


            /* Home */

            if (event.key === "Home") {
                targetIndex = 0;
            }


            /* End */

            if (event.key === "End") {
                targetIndex = faqItems.length - 1;
            }


            if (targetIndex !== null) {

                event.preventDefault();

                const targetQuestion =
                    faqItems[targetIndex].querySelector(
                        ".home2-faq-question"
                    );

                if (targetQuestion) {
                    targetQuestion.focus();
                }

            }

        });

    });


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function applyReducedMotion() {

        if (!reducedMotion.matches) {
            return;
        }

        faqItems.forEach(item => {

            const answer =
                item.querySelector(
                    ".home2-faq-answer"
                );

            if (!answer) {
                return;
            }

            /*
             * Disable the animated grid transition
             * through an inline property for users who
             * request reduced motion.
             */

            answer.style.transition = "none";

            const answerInner =
                answer.querySelector(
                    ".home2-faq-answer-inner"
                );

            if (answerInner) {
                answerInner.style.transition = "none";
            }

        });

    }


    applyReducedMotion();


    /* =====================================================
       INITIAL FAQ STATE
    ===================================================== */

    /*
     * The HTML has FAQ 01 active by default.
     * Make sure all other answers remain hidden.
     */

    faqItems.forEach((item, index) => {

        const question =
            item.querySelector(
                ".home2-faq-question"
            );

        const answer =
            item.querySelector(
                ".home2-faq-answer"
            );

        if (!question || !answer) {
            return;
        }


        if (index === 0) {

            item.classList.add("active");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

            answer.hidden = false;

        } else {

            item.classList.remove("active");

            question.setAttribute(
                "aria-expanded",
                "false"
            );

            answer.hidden = true;

        }

    });

});








/* =========================================================
   TIFFINMATE LOGIN PAGE
   PART 4 — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const html = document.documentElement;
    const body = document.body;

    const rtlToggle = document.getElementById("loginRtlToggle");
    const darkModeToggle = document.getElementById("loginDarkModeToggle");

    const loginForm = document.getElementById("tiffinmateLoginForm");

    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    const passwordToggle = document.getElementById(
        "loginPasswordToggle"
    );

    const rememberCheckbox = document.getElementById(
        "loginRemember"
    );

    const emailError = document.getElementById(
        "loginEmailError"
    );

    const passwordError = document.getElementById(
        "loginPasswordError"
    );

    const formMessage = document.getElementById(
        "loginFormMessage"
    );

    const submitButton = document.getElementById(
        "loginSubmitButton"
    );

    const submitText = submitButton
        ? submitButton.querySelector(".login-submit-text")
        : null;

    const googleButton = document.getElementById(
        "loginGoogleButton"
    );

    const facebookButton = document.getElementById(
        "loginFacebookButton"
    );

    const appleButton = document.getElementById(
        "loginAppleButton"
    );



    /* =====================================================
       LOCAL STORAGE KEYS
    ====================================================== */

    const STORAGE_KEYS = {
        darkMode: "tiffinmate-dark-mode",
        rtl: "tiffinmate-login-rtl",
        rememberEmail: "tiffinmate-remember-email"
    };



    /* =====================================================
       UTILITY — SAFE STORAGE
    ====================================================== */

    function storageGet(key) {

        try {
            return localStorage.getItem(key);
        } catch (error) {
            return null;
        }

    }


    function storageSet(key, value) {

        try {
            localStorage.setItem(key, value);
        } catch (error) {
            /* Storage may be unavailable */
        }

    }


    function storageRemove(key) {

        try {
            localStorage.removeItem(key);
        } catch (error) {
            /* Storage may be unavailable */
        }

    }



    /* =====================================================
       DARK MODE
    ====================================================== */

    function updateDarkModeIcon() {

        const sunIcon = darkModeToggle
            ? darkModeToggle.querySelector(".login-sun-icon")
            : null;

        const moonIcon = darkModeToggle
            ? darkModeToggle.querySelector(".login-moon-icon")
            : null;

        if (!sunIcon || !moonIcon) {
            return;
        }

        const darkModeEnabled =
            body.classList.contains("dark-mode");

        if (darkModeEnabled) {

            sunIcon.style.display = "none";
            moonIcon.style.display = "block";

            if (darkModeToggle) {
                darkModeToggle.setAttribute(
                    "aria-label",
                    "Switch to light mode"
                );

                darkModeToggle.setAttribute(
                    "title",
                    "Switch to light mode"
                );
            }

        } else {

            sunIcon.style.display = "block";
            moonIcon.style.display = "none";

            if (darkModeToggle) {
                darkModeToggle.setAttribute(
                    "aria-label",
                    "Switch to dark mode"
                );

                darkModeToggle.setAttribute(
                    "title",
                    "Switch to dark mode"
                );
            }

        }

    }


    function setDarkMode(enabled, save = true) {

        body.classList.toggle(
            "dark-mode",
            Boolean(enabled)
        );

        updateDarkModeIcon();

        if (save) {

            storageSet(
                STORAGE_KEYS.darkMode,
                enabled ? "true" : "false"
            );

        }

    }


    function loadDarkMode() {

        const savedMode =
            storageGet(STORAGE_KEYS.darkMode);

        if (savedMode === "true") {

            setDarkMode(true, false);

            return;
        }

        if (savedMode === "false") {

            setDarkMode(false, false);

            return;
        }

        /* Use system preference when no saved preference exists */

        const prefersDark =
            window.matchMedia &&
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

        setDarkMode(prefersDark, false);

    }


    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "click",
            () => {

                const isDark =
                    body.classList.contains("dark-mode");

                setDarkMode(!isDark);

            }
        );

    }



    /* =====================================================
       RTL
    ====================================================== */

    function updateRtlButton() {

        if (!rtlToggle) {
            return;
        }

        const isRTL =
            html.getAttribute("dir") === "rtl";

        rtlToggle.setAttribute(
            "aria-pressed",
            String(isRTL)
        );

        rtlToggle.setAttribute(
            "aria-label",
            isRTL
                ? "Switch to left-to-right"
                : "Switch to right-to-left"
        );

        rtlToggle.setAttribute(
            "title",
            isRTL
                ? "Switch to LTR"
                : "Switch to RTL"
        );

    }


    function setRTL(enabled, save = true) {

        html.setAttribute(
            "dir",
            enabled ? "rtl" : "ltr"
        );

        updateRtlButton();

        if (save) {

            storageSet(
                STORAGE_KEYS.rtl,
                enabled ? "true" : "false"
            );

        }

    }


    function loadRTL() {

        const savedRTL =
            storageGet(STORAGE_KEYS.rtl);

        if (savedRTL === "true") {

            setRTL(true, false);

            return;
        }

        if (savedRTL === "false") {

            setRTL(false, false);

            return;
        }

        updateRtlButton();

    }


    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            () => {

                const isRTL =
                    html.getAttribute("dir") === "rtl";

                setRTL(!isRTL);

            }
        );

    }



    /* =====================================================
       PASSWORD SHOW / HIDE
    ====================================================== */

    function setPasswordVisibility(show) {

        if (!passwordInput) {
            return;
        }

        const eyeOpen =
            passwordToggle
                ? passwordToggle.querySelector(
                    ".login-eye-open"
                )
                : null;

        const eyeClosed =
            passwordToggle
                ? passwordToggle.querySelector(
                    ".login-eye-closed"
                )
                : null;

        passwordInput.type =
            show ? "text" : "password";

        if (eyeOpen) {
            eyeOpen.style.display =
                show ? "none" : "block";
        }

        if (eyeClosed) {
            eyeClosed.style.display =
                show ? "block" : "none";
        }

        if (passwordToggle) {

            passwordToggle.setAttribute(
                "aria-label",
                show
                    ? "Hide password"
                    : "Show password"
            );

            passwordToggle.setAttribute(
                "title",
                show
                    ? "Hide password"
                    : "Show password"
            );

        }

    }


    if (passwordToggle) {

        passwordToggle.addEventListener(
            "click",
            () => {

                const shouldShow =
                    passwordInput.type === "password";

                setPasswordVisibility(
                    shouldShow
                );

            }
        );

    }



    /* =====================================================
       REMEMBERED EMAIL
    ====================================================== */

    function loadRememberedEmail() {

        if (!emailInput || !rememberCheckbox) {
            return;
        }

        const savedEmail =
            storageGet(
                STORAGE_KEYS.rememberEmail
            );

        if (savedEmail) {

            emailInput.value = savedEmail;

            rememberCheckbox.checked = true;

        }

    }


    function saveRememberedEmail() {

        if (!emailInput || !rememberCheckbox) {
            return;
        }

        const email =
            emailInput.value.trim();

        if (rememberCheckbox.checked && email) {

            storageSet(
                STORAGE_KEYS.rememberEmail,
                email
            );

        } else {

            storageRemove(
                STORAGE_KEYS.rememberEmail
            );

        }

    }



    /* =====================================================
       CLEAR ERRORS
    ====================================================== */

    function clearFieldError(input, errorElement) {

        if (input) {
            input.removeAttribute("aria-invalid");
        }

        if (errorElement) {
            errorElement.textContent = "";
        }

    }


    function clearErrors() {

        clearFieldError(
            emailInput,
            emailError
        );

        clearFieldError(
            passwordInput,
            passwordError
        );

        if (formMessage) {

            formMessage.textContent = "";

            formMessage.classList.remove(
                "success",
                "error"
            );

        }

    }



    /* =====================================================
       SHOW ERROR
    ====================================================== */

    function showFieldError(
        input,
        errorElement,
        message
    ) {

        if (input) {

            input.setAttribute(
                "aria-invalid",
                "true"
            );

        }

        if (errorElement) {
            errorElement.textContent = message;
        }

    }



    /* =====================================================
       EMAIL VALIDATION
    ====================================================== */

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);

    }



    /* =====================================================
       PASSWORD VALIDATION
    ====================================================== */

    function isValidPassword(password) {

        return password.length >= 6;

    }



    /* =====================================================
       LOGIN VALIDATION
    ====================================================== */

    function validateLoginForm() {

        clearErrors();

        let valid = true;

        const email =
            emailInput
                ? emailInput.value.trim()
                : "";

        const password =
            passwordInput
                ? passwordInput.value
                : "";


        /* EMAIL */

        if (!email) {

            showFieldError(
                emailInput,
                emailError,
                "Please enter your email address."
            );

            valid = false;

        } else if (!isValidEmail(email)) {

            showFieldError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            valid = false;

        }


        /* PASSWORD */

        if (!password) {

            showFieldError(
                passwordInput,
                passwordError,
                "Please enter your password."
            );

            valid = false;

        } else if (!isValidPassword(password)) {

            showFieldError(
                passwordInput,
                passwordError,
                "Password must contain at least 6 characters."
            );

            valid = false;

        }


        return valid;

    }



    /* =====================================================
       FOCUS FIRST ERROR
    ====================================================== */

    function focusFirstError() {

        if (
            emailInput &&
            emailInput.getAttribute("aria-invalid") === "true"
        ) {

            emailInput.focus();

            return;
        }

        if (
            passwordInput &&
            passwordInput.getAttribute("aria-invalid") === "true"
        ) {

            passwordInput.focus();

        }

    }



    /* =====================================================
       FORM SUBMIT
    ====================================================== */

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const valid =
                    validateLoginForm();

                if (!valid) {

                    focusFirstError();

                    return;
                }


                /* Save email if Remember Me is enabled */

                saveRememberedEmail();


                /* Button loading state */

                if (submitButton) {

                    submitButton.disabled = true;

                }

                if (submitText) {

                    submitText.textContent =
                        "Signing In...";

                }


                /*
                 * Demo login response.
                 *
                 * Replace this section later with
                 * your real backend / authentication API.
                 */

                window.setTimeout(
                    () => {

                        if (formMessage) {

                            formMessage.textContent =
                                "Login details submitted successfully.";

                            formMessage.classList.remove(
                                "error"
                            );

                            formMessage.classList.add(
                                "success"
                            );

                        }

                        if (submitButton) {
                            submitButton.disabled = false;
                        }

                        if (submitText) {

                            submitText.textContent =
                                "Login";

                        }

                    },
                    700
                );

            }
        );

    }



    /* =====================================================
       LIVE EMAIL VALIDATION
    ====================================================== */

    if (emailInput) {

        emailInput.addEventListener(
            "input",
            () => {

                if (
                    emailInput.getAttribute(
                        "aria-invalid"
                    ) === "true"
                ) {

                    clearFieldError(
                        emailInput,
                        emailError
                    );

                }

                if (formMessage) {

                    formMessage.textContent = "";

                    formMessage.classList.remove(
                        "success",
                        "error"
                    );

                }

            }
        );

    }



    /* =====================================================
       LIVE PASSWORD VALIDATION
    ====================================================== */

    if (passwordInput) {

        passwordInput.addEventListener(
            "input",
            () => {

                if (
                    passwordInput.getAttribute(
                        "aria-invalid"
                    ) === "true"
                ) {

                    clearFieldError(
                        passwordInput,
                        passwordError
                    );

                }

                if (formMessage) {

                    formMessage.textContent = "";

                    formMessage.classList.remove(
                        "success",
                        "error"
                    );

                }

            }
        );

    }



    /* =====================================================
       SOCIAL LOGIN BUTTONS
    ====================================================== */

    function showSocialMessage(provider) {

        if (!formMessage) {
            return;
        }

        formMessage.textContent =
            `${provider} login will be connected here.`;

        formMessage.classList.remove(
            "success"
        );

        formMessage.classList.add(
            "error"
        );

    }


    if (googleButton) {

        googleButton.addEventListener(
            "click",
            () => {
                showSocialMessage("Google");
            }
        );

    }


    if (facebookButton) {

        facebookButton.addEventListener(
            "click",
            () => {
                showSocialMessage("Facebook");
            }
        );

    }


    if (appleButton) {

        appleButton.addEventListener(
            "click",
            () => {
                showSocialMessage("Apple");
            }
        );

    }



    /* =====================================================
       ENTER KEY SUPPORT
    ====================================================== */

    if (loginForm) {

        loginForm.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" &&
                    event.target.tagName !== "BUTTON"
                ) {

                    /*
                     * Native form submission will handle
                     * the actual validation and submit.
                     */

                }

            }
        );

    }



    /* =====================================================
       INITIALIZE
    ====================================================== */

    loadDarkMode();

    loadRTL();

    loadRememberedEmail();

    setPasswordVisibility(false);

});









/* =========================================================
   TIFFINMATE REGISTER PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;
    const html = document.documentElement;

    const registerForm = document.getElementById("tiffinmateRegisterForm");

    const rtlToggle = document.getElementById("registerRtlToggle");
    const darkModeToggle = document.getElementById("registerDarkModeToggle");

    const passwordInput = document.getElementById("registerPassword");
    const confirmPasswordInput = document.getElementById("registerConfirmPassword");

    const passwordToggle = document.getElementById("registerPasswordToggle");
    const confirmPasswordToggle = document.getElementById("registerConfirmPasswordToggle");

    const submitButton = document.getElementById("registerSubmitButton");
    const formMessage = document.getElementById("registerFormMessage");

    const googleButton = document.getElementById("registerGoogleButton");
    const facebookButton = document.getElementById("registerFacebookButton");
    const appleButton = document.getElementById("registerAppleButton");

    const rememberDarkModeKey = "tiffinmate-dark-mode";
    const rememberRtlKey = "tiffinmate-register-rtl";


    /* =====================================================
       DARK MODE
    ===================================================== */

    function updateDarkModeIcons() {

        const sunIcon = darkModeToggle
            ? darkModeToggle.querySelector(".register-sun-icon")
            : null;

        const moonIcon = darkModeToggle
            ? darkModeToggle.querySelector(".register-moon-icon")
            : null;

        const isDark = body.classList.contains("dark-mode");

        if (sunIcon) {
            sunIcon.style.display = isDark ? "none" : "block";
        }

        if (moonIcon) {
            moonIcon.style.display = isDark ? "block" : "none";
        }

        if (darkModeToggle) {
            darkModeToggle.setAttribute(
                "aria-label",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );

            darkModeToggle.setAttribute(
                "title",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );
        }
    }


    function applySavedDarkMode() {

        const savedMode = localStorage.getItem(rememberDarkModeKey);

        if (savedMode === "dark") {
            body.classList.add("dark-mode");
        } else if (savedMode === "light") {
            body.classList.remove("dark-mode");
        }

        updateDarkModeIcons();
    }


    if (darkModeToggle) {

        darkModeToggle.addEventListener("click", () => {

            body.classList.toggle("dark-mode");

            const isDark = body.classList.contains("dark-mode");

            localStorage.setItem(
                rememberDarkModeKey,
                isDark ? "dark" : "light"
            );

            updateDarkModeIcons();
        });
    }


    /* =====================================================
       RTL MODE
    ===================================================== */

    function applySavedRTL() {

        const savedRTL = localStorage.getItem(rememberRtlKey);

        if (savedRTL === "rtl") {
            html.setAttribute("dir", "rtl");
        } else {
            html.setAttribute("dir", "ltr");
        }

        if (rtlToggle) {
            rtlToggle.setAttribute(
                "aria-pressed",
                savedRTL === "rtl" ? "true" : "false"
            );
        }
    }


    if (rtlToggle) {

        rtlToggle.addEventListener("click", () => {

            const currentDirection = html.getAttribute("dir") || "ltr";
            const newDirection =
                currentDirection === "rtl" ? "ltr" : "rtl";

            html.setAttribute("dir", newDirection);

            localStorage.setItem(
                rememberRtlKey,
                newDirection === "rtl" ? "rtl" : "ltr"
            );

            rtlToggle.setAttribute(
                "aria-pressed",
                newDirection === "rtl" ? "true" : "false"
            );
        });
    }


    /* =====================================================
       PASSWORD VISIBILITY
    ===================================================== */

    function setupPasswordToggle(toggle, input) {

        if (!toggle || !input) {
            return;
        }

        const eyeOpen = toggle.querySelector(".register-eye-open");
        const eyeClosed = toggle.querySelector(".register-eye-closed");

        toggle.addEventListener("click", () => {

            const isPassword =
                input.getAttribute("type") === "password";

            input.setAttribute(
                "type",
                isPassword ? "text" : "password"
            );

            if (eyeOpen) {
                eyeOpen.style.display =
                    isPassword ? "none" : "block";
            }

            if (eyeClosed) {
                eyeClosed.style.display =
                    isPassword ? "block" : "none";
            }

            toggle.setAttribute(
                "aria-label",
                isPassword
                    ? "Hide password"
                    : "Show password"
            );
        });
    }


    setupPasswordToggle(
        passwordToggle,
        passwordInput
    );

    setupPasswordToggle(
        confirmPasswordToggle,
        confirmPasswordInput
    );


    /* =====================================================
       FORM FIELD HELPERS
    ===================================================== */

    function clearFieldError(input, errorElement) {

        if (!input) {
            return;
        }

        input.classList.remove("register-input-error");

        if (errorElement) {
            errorElement.textContent = "";
            errorElement.classList.remove("is-visible");
        }
    }


    function showFieldError(input, errorElement, message) {

        if (!input) {
            return false;
        }

        input.classList.add("register-input-error");

        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add("is-visible");
        }

        return false;
    }


    function clearFormMessage() {

        if (!formMessage) {
            return;
        }

        formMessage.textContent = "";
        formMessage.classList.remove(
            "is-visible",
            "success",
            "error"
        );
    }


    function showFormMessage(message, type) {

        if (!formMessage) {
            return;
        }

        formMessage.textContent = message;

        formMessage.classList.remove(
            "success",
            "error"
        );

        formMessage.classList.add(
            "is-visible",
            type
        );
    }


    /* =====================================================
       VALIDATION
    ===================================================== */

    function validateFullName() {

        const input =
            document.getElementById("registerFullName");

        const error =
            document.getElementById("registerFullNameError");

        if (!input) {
            return true;
        }

        const value = input.value.trim();

        clearFieldError(input, error);

        if (!value) {
            return showFieldError(
                input,
                error,
                "Please enter your full name."
            );
        }

        if (value.length < 2) {
            return showFieldError(
                input,
                error,
                "Please enter a valid name."
            );
        }

        return true;
    }


    function validateEmail() {

        const input =
            document.getElementById("registerEmail");

        const error =
            document.getElementById("registerEmailError");

        if (!input) {
            return true;
        }

        const value = input.value.trim();

        clearFieldError(input, error);

        if (!value) {
            return showFieldError(
                input,
                error,
                "Please enter your email address."
            );
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value)) {
            return showFieldError(
                input,
                error,
                "Please enter a valid email address."
            );
        }

        return true;
    }


    function validatePhone() {

        const input =
            document.getElementById("registerPhone");

        const error =
            document.getElementById("registerPhoneError");

        if (!input) {
            return true;
        }

        const value = input.value.trim();

        clearFieldError(input, error);

        if (!value) {
            return showFieldError(
                input,
                error,
                "Please enter your phone number."
            );
        }

        const phonePattern =
            /^[0-9+\-\s()]{10,15}$/;

        if (!phonePattern.test(value)) {
            return showFieldError(
                input,
                error,
                "Please enter a valid phone number."
            );
        }

        return true;
    }


    function validatePassword() {

        const input =
            document.getElementById("registerPassword");

        const error =
            document.getElementById("registerPasswordError");

        if (!input) {
            return true;
        }

        const value = input.value;

        clearFieldError(input, error);

        if (!value) {
            return showFieldError(
                input,
                error,
                "Please enter a password."
            );
        }

        if (value.length < 6) {
            return showFieldError(
                input,
                error,
                "Password must be at least 6 characters."
            );
        }

        return true;
    }


    function validateConfirmPassword() {

        const input =
            document.getElementById("registerConfirmPassword");

        const error =
            document.getElementById("registerConfirmPasswordError");

        if (!input) {
            return true;
        }

        const value = input.value;

        clearFieldError(input, error);

        if (!value) {
            return showFieldError(
                input,
                error,
                "Please confirm your password."
            );
        }

        if (
            passwordInput &&
            value !== passwordInput.value
        ) {
            return showFieldError(
                input,
                error,
                "Passwords do not match."
            );
        }

        return true;
    }


    function validateTerms() {

        const checkbox =
            document.getElementById("registerTerms");

        if (!checkbox) {
            return true;
        }

        const termsRow =
            checkbox.closest(".register-terms-row");

        if (!checkbox.checked) {

            if (termsRow) {
                termsRow.classList.add("register-terms-error");
            }

            return false;
        }

        if (termsRow) {
            termsRow.classList.remove("register-terms-error");
        }

        return true;
    }


    /* =====================================================
       LIVE VALIDATION
    ===================================================== */

    const fullNameInput =
        document.getElementById("registerFullName");

    const emailInput =
        document.getElementById("registerEmail");

    const phoneInput =
        document.getElementById("registerPhone");

    const termsCheckbox =
        document.getElementById("registerTerms");


    if (fullNameInput) {
        fullNameInput.addEventListener(
            "input",
            validateFullName
        );
    }


    if (emailInput) {
        emailInput.addEventListener(
            "input",
            validateEmail
        );
    }


    if (phoneInput) {
        phoneInput.addEventListener(
            "input",
            validatePhone
        );
    }


    if (passwordInput) {
        passwordInput.addEventListener(
            "input",
            () => {

                validatePassword();

                if (
                    confirmPasswordInput &&
                    confirmPasswordInput.value
                ) {
                    validateConfirmPassword();
                }
            }
        );
    }


    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener(
            "input",
            validateConfirmPassword
        );
    }


    if (termsCheckbox) {
        termsCheckbox.addEventListener(
            "change",
            validateTerms
        );
    }


    /* =====================================================
       FORM SUBMIT
    ===================================================== */

    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                clearFormMessage();

                const isFullNameValid =
                    validateFullName();

                const isEmailValid =
                    validateEmail();

                const isPhoneValid =
                    validatePhone();

                const isPasswordValid =
                    validatePassword();

                const isConfirmPasswordValid =
                    validateConfirmPassword();

                const areTermsValid =
                    validateTerms();


                const isFormValid =
                    isFullNameValid &&
                    isEmailValid &&
                    isPhoneValid &&
                    isPasswordValid &&
                    isConfirmPasswordValid &&
                    areTermsValid;


                if (!isFormValid) {

                    showFormMessage(
                        "Please check the highlighted fields.",
                        "error"
                    );

                    const firstError =
                        registerForm.querySelector(
                            ".register-input-error"
                        );

                    if (firstError) {
                        firstError.focus();
                    }

                    return;
                }


                /* =========================================
                   DEMO SUBMIT STATE
                ========================================= */

                if (submitButton) {

                    submitButton.disabled = true;

                    const submitText =
                        submitButton.querySelector(
                            ".register-submit-text"
                        );

                    if (submitText) {
                        submitText.textContent =
                            "Creating Account...";
                    }
                }


                clearFormMessage();


                setTimeout(() => {

                    showFormMessage(
                        "Account created successfully.",
                        "success"
                    );


                    if (submitButton) {

                        submitButton.disabled = false;

                        const submitText =
                            submitButton.querySelector(
                                ".register-submit-text"
                            );

                        if (submitText) {
                            submitText.textContent =
                                "Create Account";
                        }
                    }


                    /*
                     * Backend/API registration can be
                     * connected here later.
                     */

                }, 1200);
            }
        );
    }


    /* =====================================================
       SOCIAL LOGIN BUTTONS
    ===================================================== */

    function setupSocialButton(button, provider) {

        if (!button) {
            return;
        }

        button.addEventListener("click", () => {

            clearFormMessage();

            showFormMessage(
                `${provider} registration will be available soon.`,
                "error"
            );
        });
    }


    setupSocialButton(
        googleButton,
        "Google"
    );

    setupSocialButton(
        facebookButton,
        "Facebook"
    );

    setupSocialButton(
        appleButton,
        "Apple"
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    applySavedDarkMode();
    applySavedRTL();

});




/* =========================================================
   TIFFINMATE — GLOBAL DARK MODE + RTL SYNC
   MASTER CONTROLLER
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    const DARK_MODE_KEY = "tiffinmate-dark-mode";
    const RTL_KEY = "tiffinmate-rtl";


    /* =====================================================
       BUTTON SELECTORS
    ===================================================== */

    const DARK_BUTTON_SELECTOR = [
        "#darkModeToggle",
        "#registerDarkModeToggle",
        "#loginDarkModeToggle",
        "#dashboardDarkModeToggle"
    ].join(",");


    const RTL_BUTTON_SELECTOR = [
        "#rtlToggle",
        "#registerRtlToggle",
        "#loginRtlToggle",
        "#dashboardRtlToggle"
    ].join(",");


    /* =====================================================
       APPLY DARK MODE
    ===================================================== */

    function applyDarkMode(enabled) {

        document.body.classList.toggle(
            "dark-mode",
            enabled
        );

        document.documentElement.classList.toggle(
            "dark-mode",
            enabled
        );

        updateDarkButtons(enabled);

    }


    /* =====================================================
       UPDATE DARK BUTTONS
    ===================================================== */

    function updateDarkButtons(enabled) {

        const buttons =
            document.querySelectorAll(
                DARK_BUTTON_SELECTOR
            );

        buttons.forEach(function (button) {

            button.setAttribute(
                "aria-pressed",
                String(enabled)
            );

            button.setAttribute(
                "aria-label",
                enabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            button.setAttribute(
                "title",
                enabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        });

    }


    /* =====================================================
       APPLY RTL
    ===================================================== */

    function applyRTL(enabled) {

        document.documentElement.setAttribute(
            "dir",
            enabled ? "rtl" : "ltr"
        );

        document.documentElement.classList.toggle(
            "rtl-mode",
            enabled
        );

        document.body.classList.toggle(
            "rtl-mode",
            enabled
        );

        updateRTLButtons(enabled);

    }


    /* =====================================================
       UPDATE RTL BUTTONS
    ===================================================== */

    function updateRTLButtons(enabled) {

        const buttons =
            document.querySelectorAll(
                RTL_BUTTON_SELECTOR
            );

        buttons.forEach(function (button) {

            button.setAttribute(
                "aria-pressed",
                String(enabled)
            );

            button.setAttribute(
                "aria-label",
                enabled
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

            button.setAttribute(
                "title",
                enabled
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

        });

    }


    /* =====================================================
       READ SAVED SETTINGS
    ===================================================== */

    function getDarkMode() {

        return (
            localStorage.getItem(
                DARK_MODE_KEY
            ) === "true"
        );

    }


    function getRTL() {

        return (
            localStorage.getItem(
                RTL_KEY
            ) === "true"
        );

    }


    /* =====================================================
       APPLY SETTINGS IMMEDIATELY
    ===================================================== */

    const savedDarkMode =
        getDarkMode();

    const savedRTL =
        getRTL();


    /*
     * Apply before page-specific JavaScript
     * can change the visual state.
     */

    document.documentElement.classList.toggle(
        "dark-mode",
        savedDarkMode
    );

    document.documentElement.setAttribute(
        "dir",
        savedRTL ? "rtl" : "ltr"
    );


    /* =====================================================
       DOM READY
    ===================================================== */

    function initializeTheme() {

        applyDarkMode(
            getDarkMode()
        );

        applyRTL(
            getRTL()
        );

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );

    } else {

        initializeTheme();

    }


    /* =====================================================
       DARK MODE CLICK
       
       CAPTURE PHASE
       
       This prevents the old page-specific
       Dark Mode handler from also running.
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    DARK_BUTTON_SELECTOR
                );

            if (!button) {
                return;
            }


            event.preventDefault();

            event.stopImmediatePropagation();


            const current =
                getDarkMode();

            const newState =
                !current;


            localStorage.setItem(
                DARK_MODE_KEY,
                String(newState)
            );


            applyDarkMode(
                newState
            );

        },
        true
    );


    /* =====================================================
       RTL CLICK
       
       CAPTURE PHASE
       
       This prevents the old page-specific
       RTL handler from also running.
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    RTL_BUTTON_SELECTOR
                );

            if (!button) {
                return;
            }


            event.preventDefault();

            event.stopImmediatePropagation();


            const current =
                getRTL();

            const newState =
                !current;


            localStorage.setItem(
                RTL_KEY,
                String(newState)
            );


            applyRTL(
                newState
            );

        },
        true
    );


    /* =====================================================
       CROSS-TAB SYNC
    ===================================================== */

    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key ===
                DARK_MODE_KEY
            ) {

                applyDarkMode(
                    event.newValue === "true"
                );

            }


            if (
                event.key ===
                RTL_KEY
            ) {

                applyRTL(
                    event.newValue === "true"
                );

            }

        }
    );


    /* =====================================================
       EXPOSE GLOBAL FUNCTIONS
    ===================================================== */

    window.TiffinMateTheme = {

        setDarkMode: function (enabled) {

            localStorage.setItem(
                DARK_MODE_KEY,
                String(Boolean(enabled))
            );

            applyDarkMode(
                Boolean(enabled)
            );

        },

        setRTL: function (enabled) {

            localStorage.setItem(
                RTL_KEY,
                String(Boolean(enabled))
            );

            applyRTL(
                Boolean(enabled)
            );

        },

        isDarkMode: function () {

            return getDarkMode();

        },

        isRTL: function () {

            return getRTL();

        }

    };

})();










/* =========================================================
   DASHBOARD — SCROLL TO TOP
========================================================= */

const dashboardScrollTop =
    document.getElementById("dashboardScrollTop");

if (dashboardScrollTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 350) {
            dashboardScrollTop.classList.add("show");
        } else {
            dashboardScrollTop.classList.remove("show");
        }

    }, { passive: true });


    dashboardScrollTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}