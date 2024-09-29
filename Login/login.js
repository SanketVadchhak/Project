document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation check (for example purposes)
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // You can send this data to your server for authentication
    // For now, we'll just log the form values
    console.log(`Email: ${email}, Password: ${password}`);

    // Optionally, you can redirect the user after login
    // window.location.href = "dashboard.html"; // Example redirect after login
});