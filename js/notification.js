// Handle the bell click event and toggle the notification window
document.getElementById("notificationBell").addEventListener("click", function() {
    const popup = document.getElementById("notificationPopup");
    const isPopupVisible = popup.style.display === "block";
    
    // Toggle visibility of the notification popup
    popup.style.display = isPopupVisible ? "none" : "block"; 

    // Update notification count (just for demo, can be dynamic)
    const notificationCount = 0;  // Replace with actual dynamic count
    const header = document.querySelector("#popupHeader strong");
    header.textContent = `Notifications (${notificationCount})`;

    // Display default text for no notifications
    const content = document.getElementById("popupContent");
    if (notificationCount === 0) {
        content.textContent = "You have no new notifications.";
    } else {
        content.textContent = "You have new notifications.";
    }

    // Toggle active class for the bell icon
    this.classList.toggle("active");
})