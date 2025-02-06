document.addEventListener("DOMContentLoaded", function () {
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    // Product database
    const products = {
        "hsr-small-plush": {
            id: "hsr-small-plush",
            game: "Honkai Star Rail",
            name: "Honkai Star Rail Small Character Plush",
            price: "29.00",
            image: "images/HSR Products/Small-Plush.webp",
            description: "The first batch of official small character plushies from the Chibi Doll Series! Featuring - Jing Yuan, Jing Liu, Dan Heng (Imbibitor Lunae vers.), Blade",
            variants: ["Jing Yuan","Jing Liu","Dan Heng: Imbibitor Lunae","Blade"]
        },
        "genshin-xiao-jacket": {
            id: "genshin-xiao-jacket",
            game: "Genshin Impact",
            name: "Genshin Impact Xiao Jacket Clothing",
            price: "107.00",
            image: "images/Genshin Products/Xiao-Jacket.webp",
            description: "Worker jacket from the Bane of All Evil Apparel Collection inspired by Xiao's yaksha character style! Comes in 4 sizes - XS, S, M, L",
            variants: ["XS","S","M","L"]
        },
        "genshin-small-plush": {
            id: "genshin-small-plush",
            game: "Genshin Impact",
            name: "Genshin Impact Small Character Plush",
            price: "29.00",
            image: "images/Genshin Products/Small-Plush.webp",
            description: "Genshin Impact Plush Doll - Fontaine Edition! Choose from the 4 main characters of the Fontaine storyline - Neuvillette, Furina, Wriothesley, Navia",
            variants: ["Neuvillette","Furina","Wriothesley","Navia"]
        },
        "genshin-saurian-plushie": {
            id: "genshin-saurian-plushie",
            game: "Genshin Impact",
            name: "Genshin Impact Baby Saurian Natlan Plushie",
            price: "59.99",
            image: "images/Genshin Products/Saurian-Plush.webp",
            description: "Adorable and very huggable plushies of the Saurian dragon whelps of Natlan from the Blaze to Natlan series! Choose from the 3 species - Tepetlisaurus, Koholasaurus, Yumkasaurus",
            variants: ["Tepetlisaurus","Koholasaurus","Yumkasaurus"]
        },
        "zzz-mousepad": {
            id: "zzz-mousepad",
            game: "Zenless Zone Zero",
            name: "Zenless Zone Zero Mousepad Peripheral",
            price: "35.00",
            image: "images/ZZZ Products/Zenless-Mousepad.webp",
            description: "A Zenless Graphic Printed Mousepad featuring Ellen Joe Fanart! Choose from 3 different sizes - 900x400mm, 700x300mm, 300x250mm",
            variants: ["900x400mm","700x300mm","300x250mm"]
        },
        "hi3-pin-badge": {
            id: "hi3-pin-badge",
            game: "Honkai Impact 3",
            name: "Honkai Impact 3 Pin Badge",
            price: "16.99",
            image: "images/HI3 Products/Pin-Badge.webp",
            description: "Celebrate Chinese New Year 2025 with the Chinese New Year Gift Box merch series! Choose from characters featured - Durandal, Kiana Kaslana, Theresa Apocalypse",
            variants: ["Durandal","Kiana Kaslana","Theresa Apocalypse"]
        },
        "hsr-waggy-keychain": {
            id: "hsr-waggy-keychain",
            game: "Honkai Star Rail",
            name: "Honkai Star Rail Waggy Tail Keychain",
            price: "19.99",
            image: "images/HSR Products/Keychain.webp",
            description: "Cute and playful waggy tail keychain that can be flicked and will wag playfully. Choose from the featured characters of the Xianzhou Luofu",
            variants: ["Jing Yuan","Fei Xiao","Jiao Qiu","Huo Huo"]
        },
        "hsr-ampho-badge": {
            id: "hsr-ampho-badge",
            game: "Honkai Star Rail",
            name: "Honkai Star Rail Amphoreus' Saga of Heroes Badge",
            price: "11.99",
            image: "images/HSR Products/Amphoreus-Badge.webp",
            description: "70x43mm Tinplate badges of character arts from the Amphoreus PV, in the Amphoreus' Saga of Hereos series. Choose from 4 different characters!",
            variants: ["Anaxa","Phainon","Mydei","Castorice"]
        },
        "hsr-kafka-keyboard": {
            id: "hsr-kafka-keyboard",
            game: "Honkai Star Rail",
            name: "Honkai Star Rail Kafka Keyboard Peripheral",
            price: "249.99",
            image: "images/HSR Products/Kafka-Keyboard.webp",
            description: "Kafka-themed RGB backlit mechanical keyboard tailor-made for the best experience in study, office work, and of course gaming! Choose between 2 layout options - 108 keys / 87 keys, and 2 keyswitches - Crystal / Autumn!",
            variants: ["108-Key Crystal","108-Key Autumn","87-Key Crystal","87-Key Autumn"]
        },
        "zzz-char-badge": {
            id: "zzz-char-badge",
            game: "Zenless Zone Zero",
            name: "Zenless Zone Zero Character Badges Vol. 3",
            price: "29.99",
            image: "images/ZZZ Products/Character-Badges.webp",
            description: "Badges of Zenless Characters' agent avatar pictures from the Excellent Afinity series. Comes in a set of 8!",
            variants: [""]
        },
        "hi3-herscherr-keyboard": {
            id: "hi3-herscherr-keyboard",
            game: "Honkai Impact 3",
            name: "Honkai Impact 3 Herscherr Keyboard",
            price: "245.99",
            image: "images/HI3 Products/Herscherr-Keyboard.webp",
            description: "Kiana Kaslana: Herscherr of Finality themed custom mechanical keyboard which includes peripherals like a keycap puller, spare keycaps, dust cover, and more! Choose between 2 keyswitches - Linear / Tactile!",
            variants: ["Linear","Tactile"]
        },
        "zzz-bangboo-keychain": {
            id: "zzz-bangboo-keychain",
            game: "Zenless Zone Zero",
            name: "Zenless Zone Zero Bangboo Acrylic Keychains",
            price: "39.99",
            image: "images/ZZZ Products/Bangboo-Keychains.webp",
            description: "Event merch from Hoyoland 2024, an event held in South Korea. Comes with 6 bangboo types and a triple Z keychain!",
            variants: [""]
        }
    };

    if (!productId || !products[productId]) {
        // Handle missing or invalid product ID
        console.error("Product not found:", productId);
        document.getElementById("product-title").textContent = "Product Not Found";
        document.getElementById("product-description").textContent =
            "The product you are looking for does not exist.";
        return;
    }

    // Display product details
    const product = products[productId];
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price}`;
    const img = document.getElementById("product-img");
    img.src = product.image;
    img.alt = product.name;
    document.getElementById("product-description").textContent = product.description;

    // Populate variants if available
    const variantSelect = document.getElementById("variant-select");
    if (product.variants.length > 0) {
        variantSelect.style.display = "block";
        variantSelect.innerHTML = `<option value="" disabled selected>Select an option</option>`;
        product.variants.forEach(variant => {
            const option = document.createElement("option");
            option.value = variant;
            option.textContent = variant;
            variantSelect.appendChild(option);
        });
    } else {
        variantSelect.style.display = "none";
    }

    // Display recommended products
    displayRecommendedProducts(productId);

    /**
     * Function to shuffle and get random products, excluding the current one.
     */
    function getRandomProducts(excludeId) {
        const productList = Object.values(products).filter(product => product.id !== excludeId);

        // Shuffle the array
        for (let i = productList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [productList[i], productList[j]] = [productList[j], productList[i]];
        }

        // Return the first 3 random products
        return productList.slice(0, 3);
    }

    /**
     * Function to display recommended products.
     */
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

