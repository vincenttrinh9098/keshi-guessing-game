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

playBtn.addEventListener("click", () =>{
    if(!currentSong) return;
    audio.currentTime = 0;
    audio.play();
    setTimeout(()=>{
        audio.pause();
        audio.currentTime = 0;
    },5000);

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
