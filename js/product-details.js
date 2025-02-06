document.addEventListener("DOMContentLoaded", function () {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        console.error("Product ID not found in URL.");
        return;
    }

    // Product database
    const products = {
        "hsr-small-plush": {
            game: "Honkai Star Rail",
            name: "Honkai Star Rail Small Character Plush",
            price: "29.00",
            image: "images/HSR Products/Small-Plush.webp",
            description: "",
            variants: [""]
        },
        "genshin-xiao-jacket": {
            game: "Genshin Impact",
            name: "Genshin Impact Xiao Jacket Clothing",
            price: "107.00",
            image: "images/Genshin Products/Xiao-Jacket.webp",
            description: "",
            variants: [""]
        },
        "genshin-small-plush": {
            game: "Genshin Impact",
            name: "Genshin Impact Small Character Plush",
            price: "29.00",
            image: "images/Genshin Products/Small-Plush.webp",
            description: "",
            variants: [""]
        },
        "genshin-saurian-plushie": {
            game: "Genshin Impact",
            name: "Genshin Impact Baby Saurian Natlan Plushie",
            price: "59.99",
            image: "images/Genshin Products/Saurian-Plush.webp",
            description: "",
            variants: [""]
        },
        "zzz-mousepad": {
            game: "Zenless Zone Zero",
            name: "Zenless Zone Zero Mousepad Peripheral",
            price: "35.00",
            image: "images/ZZZ Products/Zenless-Mousepad.webp",
            description: "",
            variants: [""]
        },
        "hi3-pin-badge": {
            game: "Honkai Impact 3",
            name: "Honkai Impact 3 Pin Badge",
            price: "16.99",
            image: "images/HI3 Products/Pin-Badge.webp",
            description: "",
            variants: [""]
        },
        "hsr-waggy-keychain": {
            game: "Honkai Star Rail",
            name: "Honkai Star Rail Waggy Tail Keychain",
            price: "19.99",
            image: "images/HSR Products/Keychain.webp",
            description: "",
            variants: [""]
        },
        "hsr-ampho-badge": {
            game: "Honkai Star Rail",
            name: "Honkai Star Rail Amphoreus' Saga of Heroes Badge",
            price: "11.99",
            image: "images/HSR Products/Amphoreus-Badge.webp",
            description: "",
            variants: [""]
        },
        "hsr-kafka-keyboard": {
            game: "Honkai Star Rail",
            name: "Honkai Star Rail Kafka Keyboard Peripheral",
            price: "249.99",
            image: "images/HSR Products/Kafka-Keyboard.webp",
            description: "",
            variants: [""]
        },
        "zzz-char-badge": {
            game: "Zenless Zone Zero",
            name: "Zenless Zone Zero Character Badges Vol. 3",
            price: "29.99",
            image: "images/ZZZ Products/Character-Badges.webp",
            description: "",
            variants: [""]
        },
        "hi3-herscherr-keyboard": {
            game: "Honkai Impact 3",
            name: "Honkai Impact 3 Herscherr Keyboard",
            price: "245.99",
            image: "images/HI3 Products/Herscherr-Keyboard.webp",
            description: "",
            variants: [""]
        },
        "zzz-bangboo-keychain": {
            game: "Zenless Zone Zero",
            name: "Zenless Zone Zero Bangboo Acrylic Keychains",
            price: "39.99",
            image: "images/ZZZ Products/Bangboo-Keychains.webp",
            description: "",
            variants: [""]
        }
    };

    // Check if product exists
    if (productId in products) {
        const product = products[productId];

        // Populate product details
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-price").textContent = `$${product.price}`;
        document.getElementById("product-img").src = product.image;
        document.getElementById("product-img").alt = product.name;
        document.getElementById("product-description").textContent = product.description;

        // Populate variants dropdown if available
        const variantSelect = document.getElementById("variant-select");
        if (product.variants.length > 0) {
            variantSelect.innerHTML = ""; // Clear any existing options
            product.variants.forEach(variant => {
                const option = document.createElement("option");
                option.value = variant;
                option.textContent = variant;
                variantSelect.appendChild(option);
            });
        } else {
            // Hide the variants dropdown if there are no variants
            variantSelect.style.display = "none";
        }

        // Display recommended products
        displayRecommendedProducts(productId);
    } else {
        console.error("Product not found:", productId);
        document.getElementById("product-title").textContent = "Product Not Found";
        document.getElementById("product-description").textContent =
            "The product you are looking for does not exist.";
    }

    // Function to get random products, excluding the current one
    function getRandomProducts(excludeId) {
        const allProducts = Object.values(products);
        const filteredProducts = allProducts.filter(product => product.id !== excludeId);

        // Shuffle the array
        for (let i = filteredProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredProducts[i], filteredProducts[j]] = [filteredProducts[j], filteredProducts[i]];
        }

        // Return the first 3 random products
        return filteredProducts.slice(0, 3);
    }

    // Function to display recommended products
    function displayRecommendedProducts(currentProductId) {
        const recommendedProducts = getRandomProducts(currentProductId);
        const container = document.getElementById("recommended-products");

        if (!container) {
            console.error("Recommended products container not found.");
            return;
        }

        container.innerHTML = ""; // Clear previous content

        recommendedProducts.forEach(product => {
            const productHTML = `
                <div class="pro">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                    <div class="des">
                        <span>${product.game}</span>
                        <h5>${product.name}</h5>
                        <h4>$${product.price}</h4>
                    </div>
                </div>
            `;
            container.innerHTML += productHTML;
        });
    }
});
