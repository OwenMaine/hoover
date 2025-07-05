// script.js
document.addEventListener('DOMContentLoaded', function() {

    // Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP & ScrollTrigger Initialization
    gsap.registerPlugin(ScrollTrigger);

    // Scrolled Header
    const header = document.querySelector('header');
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'scrolled', target: header }
    });

    // GSAP Animations
    // Hero Section
    gsap.from(".glass-card h1", { duration: 1, y: 50, opacity: 0, delay: 0.2, ease: "power3.out" });
    gsap.from(".glass-card p", { duration: 1, y: 50, opacity: 0, delay: 0.4, ease: "power3.out" });
    gsap.from(".glass-card .btn", { duration: 1, y: 50, opacity: 0, delay: 0.6, stagger: 0.2, ease: "power3.out" });

    // General Section Fade-ins
    const sections = gsap.utils.toArray('section:not(:first-child)');
    sections.forEach((section, i) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });
    });

    // Animated Statistics Counter
    const counters = gsap.utils.toArray('.stat-item h3');
    counters.forEach(counter => {
        const target = +counter.dataset.counterTarget;
        gsap.to(counter, {
            scrollTrigger: {
                trigger: counter,
                toggleActions: 'play none none none',
                start: 'top 85%'
            },
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            onUpdate: function() {
                // Format number with commas
                this.targets()[0].innerText = Math.ceil(this.targets()[0].innerText).toLocaleString();
            },
        });
    });

    // SwiperJS for Logos
    const swiper = new Swiper('.logo-swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 800,
        breakpoints: {
            640: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 5, spaceBetween: 60 },
        },
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

});

// script-about.js
document.addEventListener('DOMContentLoaded', function() {

    // Lenis Smooth Scroll (Same as homepage)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    // --- Page-Specific Animations ---
    // Page Header Animation
    gsap.from(".page-header h1", { duration: 1, y: 40, opacity: 0, delay: 0.2, ease: "power3.out" });
    // ... rest of the animations

    // Staggered Timeline Animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });
    });

    // Founder's Quote Animation
    gsap.from(".lg\\:col-span-2 img", {
        scrollTrigger: { trigger: ".lg\\:col-span-2", start: "top 80%" },
        opacity: 0, scale: 0.9, duration: 1, ease: 'power3.out'
    });
    gsap.from(".lg\\:col-span-3 > *", {
        scrollTrigger: { trigger: ".lg\\:col-span-3", start: "top 80%" },
        opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out'
    });
    
    // Values Cards Animation
    gsap.from(".value-card", {
        scrollTrigger: { trigger: ".value-card", start: "top 85%" },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power2.out'
    });


    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
});