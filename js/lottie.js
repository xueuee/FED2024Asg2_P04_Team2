document.addEventListener("DOMContentLoaded", () => {
  const loadingElement = document.getElementById("loading");
  const mainElement = document.getElementById("main");

  // Function to check if the user is on the Home tab
  function isHomePage() {
    const currentURL = window.location.pathname;
    return currentURL.includes("index.html") || currentURL === "/";
  }

  if (isHomePage()) {
    // Show the loading animation
    loadingElement.style.display = "flex";
    mainElement.style.display = "none";

    // Wait for the Lottie animation to complete or a fixed timeout
    setTimeout(() => {
      // Fade out the loading screen
      loadingElement.style.opacity = "0";

      // Wait for the fade-out transition to finish before hiding it
      loadingElement.addEventListener(
        "transitionend",
        () => {
          loadingElement.style.display = "none"; // Hide loading element
          mainElement.style.display = "block"; // Show main content

          // Trigger main content fade-in
          setTimeout(() => {
            mainElement.style.opacity = "1";
          }, 50); // Small delay to ensure the style is applied
        },
        { once: true } // Only trigger the event listener once
      );
    }, 4900); // Adjust timeout to match animation duration
  } else {
    // If not on the Home tab, show main content directly
    mainElement.style.display = "block";
    mainElement.style.opacity = "1";
  }
});