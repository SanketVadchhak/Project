document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect user input data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Prepare the email parameters
    const emailParams = {
        from_name: username,
        from_email: email,
        password: password,  // You might not want to send passwords this way; this is just for example
    };

    // Use EmailJS to send the email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams)
    .then(function(response) {
        alert('Signup successful! Your details have been sent.');
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        alert('Failed to send email. Please try again later.');
        console.log('FAILED...', error);
    });
});
