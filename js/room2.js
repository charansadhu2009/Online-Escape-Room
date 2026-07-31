// =============================
// Escape Room - Room 2
// Haunted Library
// =============================

// Player
const player = localStorage.getItem("playerName") || "Guest";
document.getElementById("playerName").innerHTML = "👤 " + player;

// Score
let score = Number(localStorage.getItem("score")) || 1000;
document.getElementById("score").innerHTML = score;

// Inventory
let inventory = [];
let diaryFound = false;
let keyFound = false;

// Message
const message = document.getElementById("message");

function showMessage(text){

message.innerHTML = text;

}

function updateInventory(){

if(inventory.length===0){

document.getElementById("inventory").innerHTML="Empty";

}

else{

document.getElementById("inventory").innerHTML=inventory.join(", ");

}

}

function updateScore(points){

score+=points;

document.getElementById("score").innerHTML=score;

localStorage.setItem("score",score);

}

// =============================
// Bookshelf
// =============================

document.getElementById("bookshelf").onclick=()=>{

showMessage("📚 Book Number 8 looks suspicious.");

updateScore(20);

};

// =============================
// Painting
// =============================

document.getElementById("painting").onclick=()=>{

showMessage("🖼️ The painting reads: BLUE = 4");

updateScore(20);

};

// =============================
// Desk
// =============================

document.getElementById("desk").onclick=()=>{

if(!diaryFound){

diaryFound=true;

inventory.push("📖 Diary");

updateInventory();

updateScore(50);

showMessage("You found an old diary.");

}

else{

showMessage("Nothing else inside.");

}

};

// =============================
// Safe
// =============================

document.getElementById("safe").onclick=()=>{

if(!diaryFound){

showMessage("The safe needs a clue first.");

return;

}

const code=prompt("Enter Safe Code");

if(code==="8412"){

if(!keyFound){

keyFound=true;

inventory.push("🔑 Silver Key");

updateInventory();

updateScore(100);

showMessage("Safe opened! You found the Silver Key.");

}

else{

showMessage("Safe is already open.");

}

}

else{

updateScore(-30);

showMessage("Wrong Safe Code.");

}

};

// =============================
// Door
// =============================

document.getElementById("unlockBtn").onclick=()=>{

const answer=document.getElementById("answer").value.trim();

if(!keyFound){

showMessage("🔑 You need the Silver Key.");

return;

}

if(answer==="8412"){

updateScore(500);

localStorage.setItem("room","3");

alert("🎉 Congratulations!\nRoom 2 Completed!");

window.location.href="leaderboard.html";

}

else{

updateScore(-50);

showMessage("❌ Wrong Door Password.");

}

};

// =============================
// Door Click
// =============================

document.getElementById("door").onclick=()=>{

showMessage("🚪 The exit is locked.");

};

updateInventory();

showMessage("Welcome to the Haunted Library. Search every object carefully!");
