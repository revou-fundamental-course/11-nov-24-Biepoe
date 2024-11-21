document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;

    // Validate inputs
    if (name === '' || email === '' || destination === '') {
        alert('Please fill in all fields.');
    } else {
        alert(`Thank you, ${name}! We will contact you shortly.`);
    }
});
