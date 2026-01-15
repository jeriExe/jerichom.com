fetch('version.txt')
    .then(response => response.text())
    .then(version => {
        const lastVersion = localStorage.getItem('siteVersion');
        if (lastVersion !== version) {
            localStorage.setItem('siteVersion', version);
            if (lastVersion) window.location.reload();
        }
    });

document.addEventListener('DOMContentLoaded', () => {
    // Hash Router Logic
    const handleNavigation = () => {
        const hash = window.location.hash.slice(1); // Remove the '#'
        const homeView = document.getElementById('home-view');
        const projectDetails = document.querySelectorAll('.project-detail');
        
        // Reset all views
        homeView.classList.remove('hidden');
        projectDetails.forEach(detail => detail.classList.remove('active'));
        
        // Scroll to top
        window.scrollTo(0, 0);

        if (hash) {
            const targetProject = document.getElementById(hash);
            if (targetProject && targetProject.classList.contains('project-detail')) {
                // Show specific project, hide home
                homeView.classList.add('hidden');
                targetProject.classList.add('active');
            } else {
                // If hash doesn't match a project (e.g. #about), stay on home and scroll to it
                // Allow default browser behavior or smooth scroll manually
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }, 0);
                }
            }
        }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleNavigation);
    
    // Handle initial load
    handleNavigation();

    // Preserve existing smooth scroll for non-route anchors if needed, 
    // but the router above handles most cases. 
    // We can keep the specific smooth scroll logic for internal home links if they don't trigger a route change.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // If it's a link to a project (not existing on home page), let the hashchange handle it
            if (document.querySelector(href)?.classList.contains('project-detail')) {
                return; 
            }
            
            // If it's a link to 'Back to Portfolio', we want to clear hash
            if (href === '#') {
                e.preventDefault();
                history.pushState("", document.title, window.location.pathname + window.location.search);
                handleNavigation();
                return;
            }
        });
    });
});