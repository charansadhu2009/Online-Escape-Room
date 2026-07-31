let clues=0;

function updateProgress(){

document.getElementById("progress").innerHTML=

clues+" / 4 Clues Found";

}
const inventory=document.getElementById("inventory");

let hasKey=false;

document.getElementById("table").onclick=function(){

message.innerHTML="📄 You found Note 1.<br><br>Number : <b>9</b>";

clues++;

updateProgress();

}

}

document.getElementById("clock").onclick=function(){

message.innerHTML="🕒 Clock shows 3:15";

clues++;

updateProgress();

}

}

document.getElementById("locker").onclick=function(){

if(!hasKey){

hasKey=true;

inventory.innerHTML="🔑 Rusty Key";

message.innerHTML="You collected the Rusty Key.";

clues++;

updateProgress();

}
else{

message.innerHTML="Locker Empty.";

}

}
document.getElementById("window").onclick=function(){

message.innerHTML="🪟 RED = 2";

clues++;

updateProgress();

}

}
document.getElementById("door").onclick=function(){

if(clues<4){

message.innerHTML="🚪 You still haven't found every clue.";

return;

}

if(!hasKey){

message.innerHTML="Need Rusty Key.";

return;

}

message.innerHTML="Door Ready To Unlock.";

}
}

else{

message.innerHTML="Door is locked. Find the key first.";

}

}
}

document.getElementById("unlockBtn").onclick=function(){

const password=document.getElementById("answer").value;

if(clues<4){

alert("Find all clues first!");

return;

}

if(!hasKey){

alert("Need Rusty Key!");

return;

}

if(password==="9281"){

document.getElementById("door").classList.add("door-open");

setTimeout(function(){

alert("🎉 ROOM COMPLETED");

window.location="room2.html";

},1200);

window.location="room2.html";

}

else{

score-=20;

updateScore();

document.body.classList.add("shake");

setTimeout(function(){

document.body.classList.remove("shake");

},500);

alert("Wrong Password!");

}

}
}

if(password==="9281"){

alert("Congratulations!");

alert("Room 1 Completed!");

window.location="room2.html";

}

else{

alert("Wrong Password!");

}

}
}
// ---------------------
// TIMER
// ---------------------

let totalTime = 900;

const timer = setInterval(function(){

let minutes = Math.floor(totalTime/60);

let seconds = totalTime%60;

if(seconds<10){

seconds="0"+seconds;

}

document.getElementById("time").innerHTML=
minutes+":"+seconds;

totalTime--;

if(totalTime<0){

clearInterval(timer);

alert("⏰ Time Up!");

location.reload();

}

},1000);

// ---------------------
// SCORE
// ---------------------

let score=1000;

function updateScore(){

document.getElementById("score").innerHTML=score;

}

// ---------------------
// HINT SYSTEM
// ---------------------

let hints=3;

document.getElementById("hintBtn").onclick=function(){

if(hints==3){

alert("💡 Hint 1\nCheck the table carefully.");

score-=50;

}

else if(hints==2){

alert("💡 Hint 2\nThe locker hides something useful.");

score-=50;

}

else if(hints==1){

alert("💡 Hint 3\nCombine every clue before opening the door.");

score-=50;

}

else{

alert("No hints remaining.");

return;

}

hints--;

updateScore();

};

// ---------------------
// WRONG PASSWORD
// ---------------------

const oldUnlock=document.getElementById("unlockBtn").onclick;

document.getElementById("unlockBtn").onclick=function(){

const password=document.getElementById("answer").value;

if(!hasKey){

alert("Find the key first!");

return;

}

if(password==="9281"){

alert("🎉 Room Completed!");

window.location="room2.html";

}

else{

score-=20;

updateScore();

alert("Wrong Password!");

}

}

updateScore();
updateProgress();
// Flashlight

const flashlight=document.getElementById("flashlight");

document.addEventListener("mousemove",function(e){

flashlight.style.left=e.clientX+"px";

flashlight.style.top=e.clientY+"px";

});

// Auto Save

window.addEventListener("beforeunload",function(){

localStorage.setItem("room1Completed",hasKey);

localStorage.setItem("score",score);

localStorage.setItem("clues",clues);

});

const savedKey=localStorage.getItem("room1Completed");

if(savedKey==="true"){

hasKey=true;

inventory.innerHTML="🔑 Rusty Key";

}

const savedScore=localStorage.getItem("score");

if(savedScore){

score=parseInt(savedScore);

updateScore();

}

const savedClues=localStorage.getItem("clues");

if(savedClues){

clues=parseInt(savedClues);

updateProgress();

}
