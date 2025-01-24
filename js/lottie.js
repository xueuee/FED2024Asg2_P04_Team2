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
  
      // Play the animation for 4900ms, then show the main content
      setTimeout(() => {
        loadingElement.style.opacity = 0;
  
        setTimeout(() => {
          loadingElement.style.display = "none";
          mainElement.style.display = "block";
          setTimeout(() => {
            mainElement.style.opacity = 1; // Fade in main content
          }, 50);
        }, 1000);
      }, 4900);
    } else {
      // If not on the Home tab, show main content directly
      mainElement.style.display = "block";
    }
  });  
  