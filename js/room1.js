const inventory=document.getElementById("inventory");

let hasKey=false;

document.getElementById("table").onclick=function(){

message.innerHTML="📄 You found a paper with number <b>9</b>";

}

document.getElementById("clock").onclick=function(){

message.innerHTML="🕒 Clock stopped at <b>3:15</b>";

}

document.getElementById("locker").onclick=function(){

if(!hasKey){

hasKey=true;

inventory.innerHTML="🔑 Rusty Key";

message.innerHTML="You found a Rusty Key!";

}

else{

message.innerHTML="Locker is empty.";

}

}
}

document.getElementById("window").onclick=function(){

message.innerHTML="🪟 Someone wrote RED = 2 on the glass.";

}

document.getElementById("door").onclick=function(){

if(hasKey){

message.innerHTML="Door unlocked. Enter the password.";

}

else{

message.innerHTML="Door is locked. Find the key first.";

}

}
}

document.getElementById("unlockBtn").onclick=function(){

const password=document.getElementById("answer").value;

if(!hasKey){

alert("You need the Rusty Key first!");

return;

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
