document.addEventListener('DOMContentLoaded', function() {
    // Initialize Splide slider
    new Splide('#image-carousel', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 3000,
        arrows: true,
        pagination: true,
    }).mount();

    // Mobile Menu Functionality
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        hamburger.innerHTML = mobileMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && 
            !mobileMenu.contains(e.target) && 
            mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Handle scroll
    let lastScroll = 0;
    const navigation = document.querySelector('.navigation');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navigation.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navigation.classList.contains('scroll-down')) {
            navigation.classList.remove('scroll-up');
            navigation.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navigation.classList.contains('scroll-down')) {
            navigation.classList.remove('scroll-down');
            navigation.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});