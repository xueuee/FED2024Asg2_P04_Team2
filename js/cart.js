document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout");

    function getCart() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }

    function updateCartDisplay() {
        const cart = getCart();
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalElement.textContent = "$0.00";
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="60">
                <div class="cart-details">
                    <p>${item.name} <br> <small>Variant: ${item.variant || "Default"}</small></p>
                    <p>Quantity: 
                        <input type="number" value="${item.quantity}" min="1" data-index="${index}">
                    </p>
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });

        attachEventListeners();
        updateTotal();
    }

    function attachEventListeners() {
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                removeFromCart(this.getAttribute("data-index"));
            });
        });

        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener("change", function () {
                updateQuantity(this.getAttribute("data-index"), this.value);
            });
        });
    }

    function removeFromCart(index) {
        let cart = getCart();
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    function updateQuantity(index, quantity) {
        let cart = getCart();
        if (quantity < 1) return;
        cart[index].quantity = parseInt(quantity, 10);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    function updateTotal() {
        let cart = getCart();
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    checkoutButton.addEventListener("click", function () {
        if (getCart().length === 0) {
            alert("Your cart is empty.");
            return;
        }
        window.location.href = "checkout.html"; // Redirect to checkout page
    });

    updateCartDisplay();
});


