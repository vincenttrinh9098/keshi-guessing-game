const songs = [
{file: "https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/2%20HELL%20&%20BACK.mp3", answer:"2 hell and back"},
{file: "https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/2%20soon%20-%20keshi%20-%20Spotimate.app.mp3", answer:"2 soon"},
{file: "https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Say%20-%20keshi%20-%20Spotimate.app.mp3",answer: "say"},

{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/ANGEL%20-%20keshi%20-%20Spotimate.app.mp3", answer:"angel"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/ANGOSTURA%20-%20keshi%20-%20Spotimate.app.mp3", answer:"angostura"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/B.Y.S.%20-%20keshi%20-%20Spotimate.app.mp3", answer:"bys"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Bodies%20-%20keshi%20-%20Spotimate.app.mp3", answer:"bodies"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Dream%20-%20keshi%20-%20Spotimate.app.mp3", answer:"dream"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/GET%20IT%20-%20keshi%20-%20Spotimate.app.mp3", answer:"get it"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/HELL_HEAVEN%20-%20keshi%20-%20Spotimate.app.mp3", answer:"hell/heaven"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Id%20-%20keshi%20-%20Spotimate.app.mp3", answer:"id"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Just%20To%20Die%20-%20keshi%20-%20Spotimate.app.mp3", answer:"just to die"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Like%20That%20-%20keshi%20-%20Spotimate.app.mp3", answer:"like that"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/LIMBO%20-%20keshi%20-%20Spotimate.app.mp3", answer:"limbo"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/more%20-%20keshi%20-%20Spotimate.app.mp3", answer:"more"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Night%20-%20keshi%20-%20Spotimate.app%20(1).mp3", answer:"night"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Say%20-%20keshi%20-%20Spotimate.app.mp3", answer:"say"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Soft%20Spot%20-%20keshi%20-%20Spotimate.app.mp3", answer:"soft spot"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/SOMEBODY%20-%20keshi%20-%20Spotimate.app.mp3", answer:"somebody"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/talk%20-%20keshi%20-%20Spotimate.app.mp3", answer:"talk"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/Texas%20-%20keshi%20-%20Spotimate.app.mp3", answer:"texas"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/TOUCH%20-%20keshi%20-%20Spotimate.app.mp3", answer:"touch"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/UNDERSTAND%20-%20keshi%20-%20Spotimate.app.mp3", answer:"understand"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/WANTCHU%20-%20keshi%20-%20Spotimate.app.mp3", answer:"wantchu"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/War%20-%20keshi%20-%20Spotimate.app.mp3", answer:"war"},
{file:"https://hvgcbsycxjreanddnmaf.supabase.co/storage/v1/object/public/Keshi%20songs/WESTSIDE%20-%20keshi%20-%20Spotimate.app.mp3", answer:"westside"}

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
    playSong();
    result.textContent = "";
    userInput.value = "";
    canPlay = true;
    playBtn.disabled = false;
});

let snippetStart = 0; // stores the current snippet start

playBtn.addEventListener("click", playSong);

function playSong(){
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
};

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