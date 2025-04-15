const loginForm = document.getElementById('LoginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (!storedUsername || !storedPassword) {
        alert('Please register first.');
        return;
    }
    if (username !== storedUsername) {
        alert('Username does not match');
        return;
    }
    if (password !== storedPassword) {
        alert('Password does not match');
        return;
    }
    alert('Login Successful');
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'Home.html';
});