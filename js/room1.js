// ===============================
// Escape Room - Room 1
// Part 3A
// ===============================

// ---------- Player ----------
const playerName = localStorage.getItem("playerName") || "Guest";
document.getElementById("playerDisplay").innerHTML = "👤 " + playerName;

// ---------- Elements ----------
const message = document.getElementById("message");
const inventory = document.getElementById("inventory");
const scoreText = document.getElementById("score");
const progress = document.getElementById("progress");

// ---------- Game Variables ----------
let score = Number(localStorage.getItem("score")) || 1000;

let cluesFound = 0;

let keyFound = false;

let paused = false;

// ---------- Load Score ----------
scoreText.innerHTML = score;

// ---------- Message Function ----------
function showMessage(text){

message.innerHTML = text;

}

// ---------- Progress ----------
function updateProgress(){

progress.innerHTML = cluesFound + " / 4 Clues Found";

}

// ---------- Score ----------
function updateScore(points){

score += points;

scoreText.innerHTML = score;

localStorage.setItem("score", score);

}

// ---------- Inventory ----------
function addInventory(item){

inventory.innerHTML = item;

}

// ---------- Welcome ----------
showMessage("Welcome " + playerName + "! Escape before the timer ends.");

// ===============================
// TIMER
// ===============================

let minutes = 15;
let seconds = 0;

const timer = setInterval(() => {

if(paused) return;

if(seconds===0){

if(minutes===0){

clearInterval(timer);

window.location.href="gameover.html";

return;

}

minutes--;

seconds=59;

}

else{

seconds--;

}

document.getElementById("time").innerHTML=

minutes.toString().padStart(2,"0")

+

":"

+

seconds.toString().padStart(2,"0");

},1000);
// ===============================
// Part 3B
// Puzzle Logic
// ===============================

// ---------- TABLE ----------
document.getElementById("table").onclick = () => {

    showMessage("Nothing is under the table.");

};

// ---------- CLOCK ----------
document.getElementById("clock").onclick = () => {

    if(cluesFound < 1){
        cluesFound++;
        updateProgress();
    }

    showMessage("🕒 The clock is stuck at 10:15.");

};

// ---------- WINDOW ----------
document.getElementById("window").onclick = () => {

    if(cluesFound < 2){
        cluesFound++;
        updateProgress();
    }

    showMessage("🪟 The window is locked from the inside.");

};

// ---------- LOCKER ----------
document.getElementById("locker").onclick = () => {

    if(!keyFound){

        keyFound = true;

        cluesFound++;

        updateProgress();

        addInventory("Golden Key 🔑");

        updateScore(100);

        showMessage("🎉 You found the Golden Key!");

    }

    else{

        showMessage("Locker is empty.");

    }

};

// ---------- DOOR ----------
document.getElementById("door").onclick = () => {

    if(!keyFound){

        showMessage("🚪 The door is locked. Find the key first.");

    }

    else{

        showMessage("The lock requires a password.");

    }

};

// ---------- UNLOCK BUTTON ----------
document.getElementById("unlockBtn").onclick = () => {

    const answer =
    document.getElementById("answer").value.trim();

    if(!keyFound){

        showMessage("🔑 Find the Golden Key first.");

        return;

    }

    if(answer === "1015"){

        cluesFound = 4;

        updateProgress();

        updateScore(500);

        localStorage.setItem("room","2");

        alert("🎉 Congratulations!\nRoom 1 Completed!");

        window.location.href = "loading.html";

    }

    else{

        updateScore(-50);

        showMessage("❌ Wrong Password!");

    }

};

// ---------- HINT ----------
document.getElementById("hintBtn").onclick = () => {

    updateScore(-25);

    if(!keyFound){

        showMessage("💡 Hint: Search the locker carefully.");

    }

    else{

        showMessage("💡 Hint: The clock shows the password.");

    }

};
// ===============================
// Part 3C
// Flashlight
// ===============================

const flashlight = document.getElementById("flashlight");

document.addEventListener("mousemove",(e)=>{

flashlight.style.left=(e.clientX-90)+"px";
flashlight.style.top=(e.clientY-90)+"px";

});

// ===============================
// Audio
// ===============================

const bgMusic=document.getElementById("bgMusic");
const clickSound=document.getElementById("clickSound");
const unlockSound=document.getElementById("unlockSound");

// Play background music after first click
document.body.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.volume=0.3;

bgMusic.play().catch(()=>{});

}

},{once:true});

// Object click sounds
document.querySelectorAll(".object").forEach(obj=>{

obj.addEventListener("click",()=>{

if(localStorage.getItem("sound")!=="off"){

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

}

});

});

// Unlock sound
document.getElementById("unlockBtn").addEventListener("click",()=>{

if(localStorage.getItem("sound")!=="off"){

unlockSound.currentTime=0;

unlockSound.play().catch(()=>{});

}

});

// ===============================
// Pause Menu
// ===============================

const pauseMenu=document.getElementById("pauseMenu");

document.getElementById("pauseBtn").onclick=()=>{

paused=true;

pauseMenu.style.display="flex";

};

document.getElementById("resumeBtn").onclick=()=>{

paused=false;

pauseMenu.style.display="none";

};

document.getElementById("restartBtn").onclick=()=>{

location.reload();

};

document.getElementById("homeBtn").onclick=()=>{

window.location.href="index.html";

};

// ===============================
// Settings
// ===============================

const settingsMenu=document.getElementById("settingsMenu");

document.getElementById("settingsBtn").onclick=()=>{

settingsMenu.style.display="block";

};

document.getElementById("closeSettings").onclick=()=>{

settingsMenu.style.display="none";

};

const musicToggle=document.getElementById("musicToggle");
const soundToggle=document.getElementById("soundToggle");

// Load saved settings
musicToggle.checked=localStorage.getItem("music")!=="off";
soundToggle.checked=localStorage.getItem("sound")!=="off";

// Apply music setting
bgMusic.muted=!musicToggle.checked;

// Music toggle
musicToggle.onchange=()=>{

bgMusic.muted=!musicToggle.checked;

localStorage.setItem(
"music",
musicToggle.checked?"on":"off"
);

};

// Sound toggle
soundToggle.onchange=()=>{

localStorage.setItem(
"sound",
soundToggle.checked?"on":"off"
);

};

// ===============================
// Auto Save
// ===============================

window.addEventListener("beforeunload",()=>{

localStorage.setItem("score",score);

localStorage.setItem("room","1");

});

// ===============================
// Room Ready
// ===============================

console.log("✅ Room 1 Loaded Successfully");
