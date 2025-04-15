const username = localStorage.getItem('username');
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

if (username && email && password) {
    document.getElementById("username").textContent = username;
    document.getElementById("useremail").textContent = email;
    document.getElementById("password").textContent = password;
} else {
    window.location.href = "Login.html";
}