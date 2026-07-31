let clues=0;

const message=document.getElementById("message");

bookshelf.onclick=function(){

message.innerHTML="Book Number 8";

clues++;

}

painting.onclick=function(){

message.innerHTML="Painting says BLUE = 4";

clues++;

}

desk.onclick=function(){

message.innerHTML="Desk contains old diary.";

clues++;

}

ghost.onclick=function(){

message.innerHTML="Ghost whispers '8412'";

clues++;

}

unlock.onclick=function(){

const password=answer.value;

if(clues<4){

alert("Find all clues first!");

return;

}

if(password==="8412"){

alert("🎉 Room 2 Completed!");

window.location="leaderboard.html";

}

else{

alert("Wrong Password!");

}

}
