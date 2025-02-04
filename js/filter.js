// GAME FILTER
document.addEventListener("DOMContentLoaded", function () {
    // Get all checkboxes and product items
    const checkboxes = document.querySelectorAll('#left-sidebar input[type="checkbox"]');
    const products = document.querySelectorAll('.pro');

    function filterProducts() {
        // Get selected games
        const selectedGames = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.getAttribute('data-game'));

        // Show or hide products based on selection
        products.forEach(product => {
            const productGame = product.querySelector('.des').getAttribute('data-game');

            if (selectedGames.length === 0 || selectedGames.includes(productGame)) {
                product.style.display = 'block'; // Show matching products
            } else {
                product.style.display = 'none'; // Hide non-matching products
            }
        });
    }

    // Add event listeners to checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Ensure all products are shown when the page loads
    filterProducts();
});

// CATEGORY FILTER
document.addEventListener("DOMContentLoaded", function () {
    // Get all game and category checkboxes
    const gameCheckboxes = document.querySelectorAll('#left-sidebar input[type="checkbox"][data-game]');
    const categoryCheckboxes = document.querySelectorAll('#left-sidebar input[type="checkbox"][data-category]');
    const products = document.querySelectorAll('.pro');

    function filterProducts() {
        // Get selected games
        const selectedGames = Array.from(gameCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.getAttribute('data-game'));

        // Get selected categories
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.getAttribute('data-category'));

        // Show or hide products based on both filters
        products.forEach(product => {
            const productGame = product.querySelector('.des').getAttribute('data-game');
            const productCategory = product.querySelector('.des').getAttribute('data-category');

            // Check if product matches selected game(s) and category(ies)
            const gameMatch = selectedGames.length === 0 || selectedGames.includes(productGame);
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);

            if (gameMatch && categoryMatch) {
                product.style.display = 'block'; // Show matching products
            } else {
                product.style.display = 'none'; // Hide non-matching products
            }
        });
    }

    // Add event listeners to checkboxes
    [...gameCheckboxes, ...categoryCheckboxes].forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Ensure all products are shown when the page loads
    filterProducts();
});
