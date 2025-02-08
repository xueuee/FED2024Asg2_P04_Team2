document.addEventListener("DOMContentLoaded", function () {
    const orderItemsContainer = document.querySelector(".order-items");
    const subtotalElement = document.querySelector(".prices p:first-child");
    const totalElement = document.querySelector(".prices h3");

    function getCart() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }

    function updateCheckoutDisplay() {
        const cart = getCart();
        orderItemsContainer.innerHTML = ""; // Clear previous items

        if (cart.length === 0) {
            orderItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            subtotalElement.textContent = "$0.00";
            totalElement.textContent = "$0.00";
            return;
        }

        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const orderItem = document.createElement("div");
            orderItem.classList.add("order-item");
            orderItem.innerHTML = `
                <div class="order-item-details">
                    <p><strong>${item.name}</strong> (${item.variant || "Default"})</p>
                </div>
                <p>Qty: ${item.quantity}</p>
                <p>$${itemTotal.toFixed(2)}</p>
            `;
            orderItemsContainer.appendChild(orderItem);
        });

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    updateCheckoutDisplay();

    document.getElementById("place-order-button").addEventListener("click", function () {
        alert("Order placed successfully!");
        localStorage.removeItem("cart"); // Clear cart after order is placed
        window.location.href = "order-confirmation.html";
    });
});


