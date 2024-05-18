const generateBtn = document.querySelector("#generate");
const qrCodeDiv = document.querySelector("#qrcode");
const input = document.querySelector("#input");

generateBtn.addEventListener('click', function () {
    const inputText = input.value;
    if (inputText) {
        qrCodeDiv.innerHTML = '';
        new QRCode(qrCodeDiv, inputText);
        qrCodeDiv.style.display = 'flex';
    } else {
        alert('Please enter a text or URL');
    }
});

const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function () {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggleButton.textContent = 'Switch to Light Theme';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggleButton.textContent = 'Switch to Dark Theme';
    }
});
