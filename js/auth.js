// Register

const registerForm=document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("regEmail").value;

const password=document.getElementById("regPassword").value;

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Registration Successful!");

window.location="login.html";

});

}

// Login

const playerName =
document.getElementById("playerName").value.trim();

if(playerName===""){

alert("Please enter your name.");

return;

}

localStorage.setItem("playerName",playerName);

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const savedEmail=localStorage.getItem("email");

const savedPassword=localStorage.getItem("password");

if(email===savedEmail && password===savedPassword){

alert("Login Successful!");

window.location="story.html";

}else{

alert("Invalid Email or Password!");

}

});

}
