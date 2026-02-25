const audio = document.getElementById("bg-music");
const audioBtn = document.getElementById("audio-btn");
audio.muted = true;
audioBtn.addEventListener("click", function (){
    audio.muted = !audio.muted;
    audioBtn.textContent = audio.muted ? "🔇" : "🔊";
});