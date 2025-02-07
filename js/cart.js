document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");

    // Function to retrieve cart data from local storage
    function getCart() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }

    // Ensure variant selection is displayed in the cart
    function updateCartDisplay() {
        const cart = getCart();
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="50">
                <p>${item.name} (${item.variant || "No Variant"})</p>
                <p>Quantity: <input type="number" value="${item.quantity}" min="1" data-index="${index}"></p>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        attachEventListeners();
    }

    // Function to attach event listeners to cart item inputs and buttons
    function attachEventListeners() {
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                removeFromCart(index);
            });
        });

        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener("change", function () {
                const index = this.getAttribute("data-index");
                updateQuantity(index, this.value);
            });
        });
    }

    // Function to remove item from cart
    function removeFromCart(index) {
        let cart = getCart();
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    // Function to update item quantity
    function updateQuantity(index, quantity) {
        let cart = getCart();
        if (quantity < 1) return;
        cart[index].quantity = parseInt(quantity, 10);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    updateCartDisplay();
});
