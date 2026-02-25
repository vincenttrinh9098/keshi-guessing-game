const songs = [
{file: "../songs/2hellANDback.mp3", answer:"2 hell and back"},
{file: "../songs/2soon.mp3", answer:"2 soon"}
/*
{file: "songs/2soon.mp3", answer:"2 soon"},
{file: "songs/2soon.mp3", answer:"2 soon"},
{file: "songs/2soon.mp3", answer:"2 soon"},
{file: "songs/2soon.mp3", answer:"2 soon"},
{file: "songs/2soon.mp3", answer:"2 soon"},
*/
];

const submitBtn = document.getElementById("submit-btn");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");
const playBtn = document.getElementById("playBtn");
const newSongBtn = document.getElementById("newSongBtn");
const snippetBtn = document.getElementById("snippetBtn");

let currentSong = null;
let audio = new Audio();
let canPlay = true;

function loadNewSong(){
    currentSong = songs[Math.floor(Math.random() * songs.length)];
    audio.src = currentSong.file;
}
loadNewSong();

newSongBtn.addEventListener("click", () => {
    loadNewSong();
    result.textContent = "";
    userInput.value = "";
    canPlay = true;
    playBtn.disabled = false;
});

let snippetStart = 0; // stores the current snippet start

playBtn.addEventListener("click", () => {
    if (!currentSong) return;

    audio.addEventListener('loadedmetadata', () => {
        audio.currentTime = snippetStart; // use stored snippet
        audio.play();

        setTimeout(() => {
            audio.pause();
            audio.currentTime = snippetStart; // reset to same snippet
        }, 5000);
    }, { once: true });

    audio.src = currentSong.file;
});

snippetBtn.addEventListener("click", () => {
    if (!currentSong) return;

    audio.addEventListener('loadedmetadata', () => {
        const maxStart = Math.max(0, audio.duration - 5);
        snippetStart = Math.random() * maxStart; // pick a new snippet
        audio.currentTime = snippetStart;
        audio.play();

        setTimeout(() => {
            audio.pause();
            audio.currentTime = snippetStart;
        }, 5000);
    }, { once: true });

    audio.src = currentSong.file;
});

userInput.addEventListener("keydown", function (event) {
        if (event.key === 'Enter') {
            checkGuess(); 
        }
});

submitBtn.addEventListener("click", checkGuess);

function checkGuess(){
        if (
            currentSong &&
            userInput.value.trim().toLowerCase() === currentSong.answer.toLowerCase()
        ) {
            result.textContent = "You did it!";
        } else {
            result.textContent = "Try Again";
        }

    userInput.value = "";

}
