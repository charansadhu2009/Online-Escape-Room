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
