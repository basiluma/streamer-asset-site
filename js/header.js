export function initHeader() {
    const headerHTML = `
        <div class="fluid-container">
            <nav>
                <button class="mobile-menu-btn" aria-label="Menu">☰</button>
                <a href="index.html" class="logo">
                    V-Assets
                </a>
                <ul class="nav-links">


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
}
