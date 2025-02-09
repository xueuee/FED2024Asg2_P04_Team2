// Handle the bell click event and toggle the notification window
document.getElementById("notificationBell").addEventListener("click", function() {
    var popup = document.getElementById("notificationPopup");
    var isPopupVisible = popup.style.display === "block";
    
    // Toggle visibility of the notification popup
    popup.style.display = isPopupVisible ? "none" : "block"; 

    // Update notification count (just for demo)
    var notificationCount = 0;  // Replace with actual dynamic count
    var header = document.querySelector("#popupHeader strong");
    header.textContent = "Notifications (" + notificationCount + ")";

    // Display default text for no notifications
    var content = document.getElementById("popupContent");
    if (notificationCount === 0) {
        content.textContent = "You have no new notifications.";
    } else {
        content.textContent = "You have new notifications.";
    }

    // Toggle active class for the bell icon
    this.classList.toggle("active");
});