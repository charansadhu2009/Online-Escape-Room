const message=document.getElementById("message");

document.getElementById("table").onclick=function(){

message.innerHTML="📄 You found a paper with number <b>9</b>";

}

document.getElementById("clock").onclick=function(){

message.innerHTML="🕒 Clock stopped at <b>3:15</b>";

}

document.getElementById("locker").onclick=function(){

message.innerHTML="🗄️ Locker contains a KEY.";

}

document.getElementById("window").onclick=function(){

message.innerHTML="🪟 Someone wrote RED = 2 on the glass.";

}

document.getElementById("door").onclick=function(){

message.innerHTML="🚪 Door is locked.";

}

document.getElementById("unlockBtn").onclick=function(){

const password=document.getElementById("answer").value;

if(password=="9281"){

alert("🎉 Room Completed!");

window.location="room2.html";

}

else{

alert("Wrong Password!");

}

}
