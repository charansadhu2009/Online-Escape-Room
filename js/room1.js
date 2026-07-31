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
