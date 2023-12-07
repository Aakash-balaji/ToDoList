
function submitForm() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Perform validation (you can add more robust validation as needed)

    // Example: Check if any field is empty
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    // Example: Check if the email is valid
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // If all validation passes, you can send the data to your backend or perform other actions
    // Here, we're just displaying an alert with the collected information
    alert(`Thank you, ${name}!\nYour message:\n${message}\n\nwill be sent to ${email}`);
    
    // You can also reset the form if needed
    document.getElementById("contactForm").reset();
}

function isValidEmail(email) {
    // This is a simple email validation example, you can use more complex logic if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
