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
    // Simple smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});
