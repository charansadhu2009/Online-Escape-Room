
let leaderboard=[

{

name:"Player",

score:localStorage.getItem("score")||1000

}

];

function loadLeaderboard(){

const body=document.getElementById("leaderboardBody");

body.innerHTML="";

leaderboard.sort((a,b)=>b.score-a.score);

leaderboard.forEach((player,index)=>{

body.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${player.name}</td>

<td>${player.score}</td>

</tr>

`;

});

}

function playAgain(){

localStorage.clear();

window.location="index.html";

}

loadLeaderboard();
