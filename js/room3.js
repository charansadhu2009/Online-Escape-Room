
// ===========================
// Room 3 - Secret Laboratory
// ===========================

// Player
const player=localStorage.getItem("playerName")||"Guest";
document.getElementById("playerName").innerHTML="👤 "+player;

// Score
let score=Number(localStorage.getItem("score"))||1000;
document.getElementById("score").innerHTML=score;

// Inventory
let inventory=[];
let bottleFound=false;
let dnaSolved=false;

const message=document.getElementById("message");

function showMessage(text){

message.innerHTML=text;

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

// Computer
document.getElementById("computer").onclick=()=>{

showMessage("💻 Computer Login Hint: ADMIN");

updateScore(20);

};

// Microscope
document.getElementById("microscope").onclick=()=>{

showMessage("🔬 Hidden Number: 31");

updateScore(20);

};

// Cabinet
document.getElementById("cabinet").onclick=()=>{

if(!bottleFound){

bottleFound=true;

inventory.push("🧪 Antidote");

updateInventory();

updateScore(50);

showMessage("You found the antidote.");

}

else{

showMessage("Cabinet is empty.");

}

};

// DNA
document.getElementById("dna").onclick=()=>{

dnaSolved=true;

showMessage("🧬 DNA Sequence Hint: 42");

updateScore(30);

};

// Door
document.getElementById("door").onclick=()=>{

showMessage("🚪 Enter the exit code.");

};

// Unlock
document.getElementById("unlockBtn").onclick=()=>{

const answer=document.getElementById("answer").value.trim();

if(!bottleFound){

showMessage("Find the antidote first.");

return;

}

if(answer==="3142"){

updateScore(500);

alert("🎉 Room 3 Completed!");

window.location.href="winner.html";
}

else{

updateScore(-50);

showMessage("Wrong Code!");

}

};

updateInventory();

showMessage("Welcome to the Secret Laboratory.");
