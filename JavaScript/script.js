// Select the generate button, QR code display div, and input element
const generateBtn = document.querySelector("#generate");
const qrCodeDiv = document.querySelector("#qrcode");
const input = document.querySelector("#input");

// Add an event listener to the generate button
generateBtn.addEventListener('click', function () {
    // Get the input text from the input element
    const inputText = input.value;

    // Check if input text is not empty
    if (inputText) {
        // Clear the QR code display div
        qrCodeDiv.innerHTML = '';

        // Generate a new QR code with the input text
        new QRCode(qrCodeDiv, inputText);

        // Display the QR code
        qrCodeDiv.style.display = 'flex';
    } else {
        // Alert the user to enter a text or URL
        alert('Please enter a text or URL');
    }
});

// Select the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Add an event listener to the theme toggle button
themeToggleButton.addEventListener('click', function () {
    // Select the body element
    const body = document.body;

    // Check if the body has the light-theme class
    if (body.classList.contains('light-theme')) {
        // Replace the light-theme class with the dark-theme class
        body.classList.replace('light-theme', 'dark-theme');

        // Change the text content of the theme toggle button
        themeToggleButton.textContent = 'Switch to Light Theme';
    } else {
        // Replace the dark-theme class with the light-theme class
        body.classList.replace('dark-theme', 'light-theme');

        // Change the text content of the theme toggle button
        themeToggleButton.textContent = 'Switch to Dark Theme';
    }
});