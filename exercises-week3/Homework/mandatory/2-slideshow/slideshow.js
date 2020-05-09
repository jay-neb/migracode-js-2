window.onload = setupSlideshow;

var numberOfImages = 5;
var imageIndex = 0;
var slideshowInterval;
var millisPerSlide = 1000;

function setupSlideshow() {
    var forwardButton = document.querySelector("#forwardButton");
    forwardButton.addEventListener("click", forward);

    var backButton = document.querySelector("#backButton");
    backButton.addEventListener("click", back);

    var autoForwardButton = document.querySelector("#autoForwardButton");
    autoForwardButton.addEventListener("click", autoForward);

    var autoBackButton = document.querySelector("#autoBackButton");
    autoBackButton.addEventListener("click", autoBack);

    var stopButton = document.querySelector("#stopButton");
    stopButton.addEventListener("click", stop);
}

function forward() {
    if (imageIndex < numberOfImages - 1) {
        imageIndex++;
    }
    var mainImage = document.querySelector("#mainImage");
    mainImage.src = getImageUri();
}

function back() {
    if (imageIndex > 0) {
        imageIndex--;
    }
    var mainImage = document.querySelector("#mainImage");
    mainImage.src = getImageUri();
}

function autoForward() {
    // Calling stop in case autoforward or autobackward was playing previously
    stop();

    slideshowInterval = setInterval(forward, millisPerSlide);
}

function autoBack() {
    // Calling stop in case autoforward or autobackward was playing previously
    stop();

    slideshowInterval = setInterval(back, millisPerSlide);
}

function stop() {
    clearInterval(slideshowInterval);
}

function getImageUri() {
    return "images/beach-" + imageIndex + ".jpeg";
}