document.addEventListener('DOMContentLoaded', () => {

    
    displayCurrentDate();

    
    setupThemeToggle();

    
    setupJobTitleEdit();

    
    setupSkillsToggle();

    
    setupCharCounter();

    
    displayTimeGreeting();
    
   
    setupQuoteGenerator(); 
});


function displayCurrentDate() {
    const dateElement = document.getElementById('dateDisplay');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('en-US', {
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

function setupThemeToggle() {
    const themeCheckbox = document.getElementById('themeCheckbox');
    
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', () => {
            if (themeCheckbox.checked) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        });
    }
}

function setupJobTitleEdit() {
    const editJobBtn = document.getElementById('editJobBtn');
    const jobTitleElement = document.getElementById('jobTitleElement');

    if (editJobBtn && jobTitleElement) {
        editJobBtn.addEventListener('click', () => {
            const currentTitle = jobTitleElement.textContent;
            
            const newTitle = prompt('Enter the new job title:', currentTitle);

            
            if (newTitle !== null && newTitle.trim() !== '') {
                jobTitleElement.textContent = newTitle.trim();
            }
        });
    }
}

function setupSkillsToggle() {
    const toggleBtn = document.getElementById('toggleSkillsBtn');
    const skillsSection = document.getElementById('skillsSection');

    if (toggleBtn && skillsSection) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = skillsSection.style.display === 'none';

            if (isHidden) {
                
                skillsSection.style.display = 'block';
                toggleBtn.textContent = 'Hide Skills';
            } else {
                
                skillsSection.style.display = 'none';
                toggleBtn.textContent = 'Show Skills';
            }
        });
    }
}

function setupCharCounter() {
    const msgBox = document.getElementById('msgBox');
    const counterSpan = document.getElementById('counter');
    const MAX_LENGTH = 200; 

    if (msgBox && counterSpan) {
        msgBox.addEventListener('input', () => {
            const currentLength = msgBox.value.length;
            const remaining = MAX_LENGTH - currentLength;
            
            counterSpan.textContent = remaining;

            
            if (remaining < 20) {
                counterSpan.style.color = 'red';
            } else {
                counterSpan.style.color = 'gray';
            }
        });
    }
}


function validateForm(event) {
    const nameField = document.getElementById('nameField').value.trim();
    const emailField = document.getElementById('emailField').value.trim();
    
    
    if (nameField === '' || emailField === '') {
        event.preventDefault(); 
        alert('Validation Error: Please fill out both the Name and Email fields before sending the message.');
        return false;
    }
    
    
    alert('Message form validated successfully! (Submission prevented for demo.)');
    event.preventDefault(); 
    return true; 
}


function displayTimeGreeting() {
    const greetingElement = document.getElementById('greetingMessage');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting;

        if (hour < 12) {
            greeting = 'Good Morning! ☀️';
        } else if (hour < 18) {
            greeting = 'Good Afternoon! ☕';
        } else {
            greeting = 'Good Evening! 🌙';
        }

        greetingElement.textContent = greeting;
    }
}

function setupQuoteGenerator() {
    const quotes = [
        "The best way to predict the future is to create it.",
        "Strive not to be a success, but rather to be of value.",
        "The only way to do great work is to love what you do.",
        "Patience is the companion of wisdom.",
        "It does not matter how slowly you go as long as you do not stop."
    ];

    const quoteBtn = document.getElementById('quoteBtn');
    const quoteDisplay = document.getElementById('quoteDisplay');

    if (quoteBtn && quoteDisplay) {
        quoteBtn.addEventListener('click', () => {
            
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const newQuote = quotes[randomIndex];
            
            quoteDisplay.textContent = newQuote;
        });
    }
}