// Ensure the script runs after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get a reference to the button element using its class
    var startButton = document.querySelector(".continue.w-button");

    // Add a click event listener to the button
    startButton.addEventListener("click", function(event) {
        event.preventDefault(); // prevent any default action of the anchor tag

        // Create an audio element
        var audio = new Audio("music/china.mp3");

        // Set volume to 70% of the original level
        audio.volume = 0.5;

        // Enable looping for the audio, if desired
        audio.loop = true;

        // Play the audio file
        audio.play();
    });

});
