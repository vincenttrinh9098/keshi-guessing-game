const audio = document.getElementById("bg-music");
const audioBtn = document.getElementById("audio-btn");

// Start muted to comply with browser expectations
audio.muted = true;

audioBtn.addEventListener("click", function () {
    // 1. Check if the audio is actually playing (fixes the Autoplay block)
    if (audio.paused) {
        audio.play().catch(error => {
            console.error("Playback failed:", error);
        });
    }

    // 2. Toggle mute logic
    audio.muted = !audio.muted;

});