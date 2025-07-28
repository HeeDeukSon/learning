// Component Loader Utility (Optional)
// This allows you to load header and footer components dynamically

async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component from ${componentPath}:`, error);
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment these lines if you want to use dynamic component loading
    // loadComponent('header-placeholder', 'components/header.html');
    // loadComponent('footer-placeholder', 'components/footer.html');
});

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadComponent };
}