function filterProducts() {
    const products = document.querySelectorAll('.pro');
    const productContainers = document.querySelectorAll('.pro-container'); // Get all product containers

    // Get selected games
    const selectedGames = Array.from(document.querySelectorAll('#left-sidebar input[type="checkbox"][data-game]:checked'))
        .map(checkbox => checkbox.getAttribute('data-game'));

    // Get selected categories
    const selectedCategories = Array.from(document.querySelectorAll('#left-sidebar input[type="checkbox"][data-category]:checked'))
        .map(checkbox => checkbox.getAttribute('data-category'));

    let hasVisibleProducts = false; // Track if any product is visible

    // Show or hide products based on selection
    products.forEach(product => {
        const productGame = product.querySelector('.des').getAttribute('data-game');
        const productCategory = product.querySelector('.des').getAttribute('data-category');

        // Check if product matches selected filters
        const gameMatch = selectedGames.length === 0 || selectedGames.includes(productGame);
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);

        if (gameMatch && categoryMatch) {
            product.style.display = 'block'; // Show matching products
            hasVisibleProducts = true;
        } else {
            product.style.display = 'none'; // Hide non-matching products
        }
    });

    // Hide empty product containers
    productContainers.forEach(container => {
        const visibleProducts = container.querySelectorAll('.pro:not([style*="display: none"])');

        if (visibleProducts.length === 0) {
            container.style.display = 'none'; // Hide empty containers
        } else {
            container.style.display = 'flex'; // Show containers with products
        }
    });
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#left-sidebar input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    filterProducts(); // Run on page load to check visibility
});

