document.addEventListener("DOMContentLoaded", function () {
    const checkInStatus = document.getElementById("check-in-status");
    const checkInImages = document.querySelectorAll(".check-in-item img");

    // Define rewards for each day
    const rewards = {
        1: "100 Mora",
        2: "x2 Adventurers' Experience",
        3: "10 Primogems",
        4: "100 Mora",
        5: "x2 Adventurer's Experience",
        6: "200 Mora",
        7: "30 Primogems 🎉"
    };

    // Retrieve the logged-in username
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser || loggedInUser === "GUEST") {
        checkInStatus.textContent = "Please sign in to check-in!";
        return; // Exit the function if the user is not logged in
    }

    // Retrieve stored check-in data for the current user
    let lastCheckInDate = localStorage.getItem(`${loggedInUser}_lastCheckInDate`);
    let checkInProgress = parseInt(localStorage.getItem(`${loggedInUser}_checkInProgress`)) || 0;

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Function to update UI
    function updateCheckInUI() {
        checkInImages.forEach((img, index) => {
            if (index < checkInProgress) {
                img.classList.add("checked-in");
            }
        });

        if (lastCheckInDate === today) {
            checkInStatus.textContent = "You've already checked in today!";
        }
    }

    // Function to handle daily check-in
    checkInImages.forEach(img => {
        img.addEventListener("click", function () {
            if (lastCheckInDate === today) {
                alert("You have already checked in today!");
                return;
            }

            const day = parseInt(img.getAttribute("data-day"));

            if (day !== checkInProgress + 1) {
                alert("Remember to check in every day!");
                return;
            }

            // Get reward
            const reward = rewards[day] || "Unknown Reward";

            // Show pop-up message with the reward
            showPopup(`You claimed: ${reward}! 🎉`);

            // Increase check-in progress
            checkInProgress++;
            lastCheckInDate = today;

            // Save progress for the logged-in user
            localStorage.setItem(`${loggedInUser}_lastCheckInDate`, lastCheckInDate);
            localStorage.setItem(`${loggedInUser}_checkInProgress`, checkInProgress);

            // Update UI
            updateCheckInUI();
        });
    });

    // Function to show pop-up message
    function showPopup(message) {
        const popup = document.createElement("div");
        popup.classList.add("popup-message");
        popup.textContent = message;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 500);
        }, 2000);
    }

    // Initial UI update
    updateCheckInUI();
});
