const loadingElement = document.getElementById("loading");
const mainElement = document.getElementById("main");

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