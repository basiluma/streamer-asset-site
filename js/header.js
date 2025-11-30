document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <div class="fluid-container">
            <nav>
                <button class="mobile-menu-btn" aria-label="Menu">☰</button>
                <a href="index.html" class="logo">
                    V-Assets
                </a>
                <ul class="nav-links">

                    <li><a href="assets.html">素材一覧</a></li>
                    <li><a href="terms.html">利用規約</a></li>
                    <li><a href="request.html" class="btn btn-primary btn-sm">リクエスト</a></li>
                </ul>
            </nav>
        </div>
    `;

    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
        setActiveLink();

        // Re-attach mobile menu event listener if needed
        // Assuming main.js handles the click event delegation or we need to re-bind it here.
        // If main.js runs after this, it might be fine, but if main.js runs before, the button won't exist yet.
        // Let's check if we need to dispatch an event or if main.js uses delegation.
        // For now, let's assume we might need to trigger something or main.js needs to be loaded after.
    }

    function setActiveLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            // Simple check: if current path ends with the link path
            // Handling root path '/' vs 'index.html'
            if (currentPath.endsWith(linkPath) || (currentPath.endsWith('/') && linkPath === 'index.html')) {
                link.classList.add('active-link');
                // Remove btn classes if it's the active link? 
                // In the original code:
                // index.html: Home is active-link
                // terms.html: Terms is active-link
                // request.html: Request is active-link AND btn btn-primary btn-sm
                // So we should just ADD active-link class, not replace others.
            } else {
                link.classList.remove('active-link');
            }
        });
    }
});
