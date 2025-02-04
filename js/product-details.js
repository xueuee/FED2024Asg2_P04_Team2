document.addEventListener("DOMContentLoaded", function () {
    const targetProduct = document.querySelector(".pro img[src='images/HSR Products/Small-Plush.webp']");

    if (targetProduct) {
        targetProduct.closest(".pro").addEventListener("click", function (event) {
            // Prevent clicking on the cart icon from redirecting
            if (!event.target.closest("a")) {
                window.location.href = "product.html";
            }
        });
    }
});