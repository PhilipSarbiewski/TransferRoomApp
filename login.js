document.addEventListener('DOMContentLoaded', function () {
    // Selecting form, username, password, and login button
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('button');

    // Hardcoded valid username and password (Replace with your actual validation logic)
    const validUsername = 'admin';
    const validPassword = 'admin';

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission to handle it manually

        // Get entered username and password
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value;

        // Validate the entered credentials
        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            // Redirect to the dashboard page (replace 'dashboard.html' with your actual dashboard page)
            window.location.href = 'dashboard.html';
        } else {
            // Display an error message (you can customize this part)
            alert('Invalid username or password. Please try again.');
        }
    });
});
