
// function to play audio, parameter comes from "onclick" notated in index
function playAudio(audioFile) {
// playing the audio
    new Audio(audioFile).play();
    // using JS to add class to body element
    document.body.classList.add("change-cursor")
    // setting a timer to remove said class from element
    setTimeout(() => {
        document.body.classList.remove("change-cursor");
      }, 1000);
}

// create event listeners for keys on computer keyboard
document.addEventListener("keydown", function (evt) {
    if (evt.code === "KeyS") {
        playAudio("./drum-samples/Snare.mp3")
    }
    if (evt.code === "KeyA") {
        playAudio("./drum-samples/kick.mp3")
    }
    if (evt.code === "KeyE") {
        playAudio("./drum-samples/Hi-Hat.mp3")
    }
    if (evt.code === "KeyR") {
        playAudio("./drum-samples/Cymbal.mp3")
    }
});

