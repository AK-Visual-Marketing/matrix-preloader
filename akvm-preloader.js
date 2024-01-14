const canvas = document.getElementById('matrixCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const fontSize = 16;
const columns = canvas.width/fontSize;
const rainDrops = [];

for(let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

function draw() {
    // context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillStyle = 'rgba(0, 0, 0, .25)'; // Less frequent rain drops
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.globalAlpha = .3; // Semi-transparent text
    context.fillStyle = '#0F0'; // Green text
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 30);

const text = "Code Generating...Building CSS...Copying Files...Running JavaScript...";
const typingDiv = document.getElementById("typingEffect");
let j = 0;

function type() {
  if (j < text.length) {
    typingDiv.innerHTML += text.charAt(j);
    j++;
    setTimeout(type, 100); // Adjust typing speed here
  }
}

type(); // Start the typing effect


// Hide the preloader when the page loads or after a timeout, then make the page-wrapper visible
window.onload = function() {
    setTimeout(function() {
        // Hide the preloader
        document.getElementById("typingEffect").style.opacity = '0';
        document.getElementById("matrixCanvas").style.opacity = '0';

        // Make the page-wrapper visible
        var pageWrapper = document.getElementById("page-wrapper");
        pageWrapper.style.opacity = '1'; // Make the page-wrapper visible
        pageWrapper.style.zIndex = '10000'; // Make sure the page-wrapper is on top of the preloader

    }, 10000); // Adjust preloader delay here
};
