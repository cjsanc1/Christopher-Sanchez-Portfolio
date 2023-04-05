// const kickImage = document.getElementById('kickImage')
// const snareImage = document.getElementById('snareImage')
// const hatImage = document.getElementById('hatImage')
// const cymbalImage = document.getElementById('cymbalImage')

function playAudio(audioFile) {
    new Audio(audioFile).play();
}

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