const name = "Sir Osama Tahir";
const currentHour = new Date().getHours();
let greeting;

if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
const greetingMessage = `${greeting}, ${name}!`;

const greetingElement = document.getElementById("greeting-message");

if (greetingElement) {
    greetingElement.textContent = greetingMessage;
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

function animateSkillBars() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    skillProgressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        
        setTimeout(() => {
            bar.style.width = targetWidth;
            bar.textContent = targetWidth;
        }, 100);
    });
}

animateSkillBars();