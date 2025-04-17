document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !navLinks.contains(event.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Initialize Splide Carousel
    const splide = new Splide('#image-carousel', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        height: '600px',
        cover: true,
        focus: 'center',
        gap: 0,
        padding: 0,
        breakpoints: {
            991: {
                height: '500px',
            },
            767: {
                height: '400px',
            }
        }
    });

    splide.mount();

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