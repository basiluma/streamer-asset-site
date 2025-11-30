// Slideshow Logic
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));

            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;

            slides[currentSlide].classList.add('active');
        }

        if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

        // Auto play
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }
}

// Mobile Menu Logic
function setupMobileMenu() {
    // Use event delegation to handle clicks on the mobile menu button
    document.addEventListener('click', (e) => {
        const mobileMenuBtn = e.target.closest('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const btn = document.querySelector('.mobile-menu-btn'); // Get the button for text toggle

        // Handle Menu Button Click
        if (mobileMenuBtn && navLinks) {
            navLinks.classList.toggle('active');
            if (btn) {
                btn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            }
            e.stopPropagation(); // Prevent immediate closing
            return;
        }

        // Handle Clicking Outside or on a Link
        if (navLinks && navLinks.classList.contains('active')) {
            // If clicking inside nav-links (but not on a link that navigates), do nothing?
            // Actually, we want to close if clicking a link.

            if (e.target.closest('a')) {
                // Clicked a link inside active menu
                navLinks.classList.remove('active');
                if (btn) btn.textContent = '☰';
                return;
            }

            // If clicking outside nav-links
            if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
                navLinks.classList.remove('active');
                if (btn) btn.textContent = '☰';
            }
        }
    });
}
