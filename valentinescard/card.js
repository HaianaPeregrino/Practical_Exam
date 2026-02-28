// Question screen logic
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const dodgeMessage = document.getElementById('dodgeMessage');
const buttonsContainer = document.getElementById('buttonsContainer');
const questionScreen = document.getElementById('questionScreen');
const envelopeScreen = document.getElementById('envelopeScreen');

let dodgeCount = 0;
let yesBtnScale = 1;

const messages = [
    "Are you sure? 🥺",
    "Really? Think again! 💭",
    "The No button is running away! 🏃",
    "Please? 🥹",
    "Come on... 💝",
    "You know you want to say yes! 😊",
    "The Yes button is getting bigger! 👀",
    "Just click Yes already! 💕",
    "No is not an option! 😤",
    "Yes is the only way! 💖"
];

// Position No button initially
noBtn.style.left = '60%';
noBtn.style.top = '50%';
noBtn.style.transform = 'translate(-50%, -50%)';

noBtn.addEventListener('mouseenter', () => {
    dodgeCount++;
    
    // Increase Yes button size
    yesBtnScale += 0.3;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
    yesBtn.style.padding = `${15 * yesBtnScale}px ${40 * yesBtnScale}px`;
    
    // Show message
    if (dodgeCount <= messages.length) {
        dodgeMessage.textContent = messages[dodgeCount - 1];
    }
    
    // Move No button to random position
    const containerRect = buttonsContainer.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Make No button smaller
    if (dodgeCount > 3) {
        const noScale = Math.max(0.5, 1 - (dodgeCount * 0.1));
        noBtn.style.transform = `scale(${noScale})`;
    }
});

yesBtn.addEventListener('click', () => {
    // Hide question screen
    questionScreen.classList.add('hidden');
    
    // Show envelope screen after a brief delay
    setTimeout(() => {
        envelopeScreen.classList.add('show');
    }, 500);
});

// Envelope screen logic
let opened = false;

function openEnvelope() {
    if (!opened) {
        opened = true;
        document.getElementById('envelope').classList.add('opened');
        document.getElementById('card').classList.add('show');
        document.getElementById('clickText').classList.add('hidden');
    }
}