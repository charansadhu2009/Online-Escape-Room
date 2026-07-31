// =============================
// REGISTER
// =============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;

        if (name === "" || email === "" || password === "") {
            alert("Please fill all fields!");
            return;
        }

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}


// =============================
// LOGIN
// =============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const playerName = document.getElementById("playerName").value.trim();

        if (playerName === "") {
            alert("Please enter your name.");
            return;
        }

        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if (email === savedEmail && password === savedPassword) {

            localStorage.setItem("playerName", playerName);

            alert("Login Successful!");

            window.location.href = "story.html";

        } else {

            alert("Invalid Email or Password!");

        }

    });

}
