function showRegister() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('registerContainer').style.display = 'none';
}

function validateLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessage = document.getElementById('login-error-message');

    if (username === "admin" && password === "12345") {
        alert("Login successful!");
        return true;
    } else {
        errorMessage.textContent = "Invalid username or password";
        return false;
    }
}

function validateRegister() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('register-error-message');

    // Simple validation for demonstration
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    if (name && email && username && password) {
        alert("Registration successful!");
        return true;
    } else {
        errorMessage.textContent = "Please fill out all fields.";
        return false;
    }
}
