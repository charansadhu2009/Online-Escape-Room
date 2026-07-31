
let width=0;

const bar=document.getElementById("bar");

const percent=document.getElementById("percent");

const load=setInterval(function(){

width++;

bar.style.width=width+"%";

percent.innerHTML=width+"%";

if(width>=100){

clearInterval(load);

window.location="room2.html";

}

},40);
