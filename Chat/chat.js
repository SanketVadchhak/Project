const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-btn');
const voiceButton = document.getElementById('voice-btn'); // Voice button

// Array of pre-defined bot responses
const botResponses = [
    "How can I assist you today?",
    "What would you like to know about interview preparation?",
    "Remember to stay calm and confident during your interviews.",
    "Would you like some tips on improving your responses?",
    "I can help you track your interview progress over time."
];

// Function to add a message to the chat window
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto scroll to the bottom
}

// Function to simulate bot reply and voice response
function botReply() {
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    const botMessage = botResponses[randomIndex];
    addMessage(botMessage, 'bot');
    speakText(botMessage); // Convert the bot's message to voice
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const userInput = chatInput.value.trim();
    if (userInput) {
        addMessage(userInput, 'user');
        chatInput.value = '';
        botReply(); // Trigger bot response after user message
    }
});

// Event listener for 'Enter' key press
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

// Web Speech API - Speech Recognition for Voice Input
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US'; // Set language to English
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Start speech recognition when the voice button is clicked
voiceButton.addEventListener('click', () => {
    recognition.start();
});

// Handle speech recognition result
recognition.onresult = (event) => {
    const voiceInput = event.results[0][0].transcript; // Get the voice input
    addMessage(voiceInput, 'user');
    chatInput.value = ''; // Clear input field
    botReply(); // Trigger bot response after voice input
};

// Web Speech API - Speech Synthesis for Voice Output
function speakText(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1; // Volume (0 to 1)
    speech.rate = 1;   // Speed (default: 1)
    speech.pitch = 1;  // Pitch (default: 1)
    speech.lang = 'en-US'; // Language
    
    window.speechSynthesis.speak(speech); // Speak the text
}