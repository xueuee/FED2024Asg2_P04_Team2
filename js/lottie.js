// show loading
document.getElementById('loading').style.display = 'flex';

// hide loading and display main after 4900ms
setTimeout(function () {
    const loadingElement = document.getElementById('loading');
    const mainELement = document.getElementById('main');

    // fade out - loading
    loadingElement.style.opacity = 0;

    // show main
    setTimeout(function () {
        loadingElement.style.display = 'none';
        mainELement.style.display = 'block';
        setTimeout(function (){
            mainELement.style.opacity = 1;  // fade in - main
        }, 50)
    }, 1000)
}, 4900);