const responses = {
    "hello": "Hi! How can I help you?",
    "hi": "Hello! How are you?",
    "how are you": "I'm doing great! What about you?",
    "i am fine": "That's good to hear!",
    "bye": "Goodbye! Have a great day!",
    
    "who created you": "I was created by Tarun Teli!",
    "what is your name": "I am a simple chatbot.",

    "नमस्ते": "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?",
    "कैसे हो": "मैं अच्छा हूँ! आप कैसे हैं?",
    "अलविदा": "अलविदा! आपका दिन शुभ हो!",
};

// Function to get image URLs for specific requests
const imageResponses = {
    "ram image": "2.jpg",
    "elon musk image": "1.jpg",
    "tarun teli image": "3.jpg",
    "mahadev image": "4.jpg",
    "best wallpaper": "5.jpg"
};

// Function to send and receive messages
function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase().trim();
    let chatBox = document.getElementById("chat-box");

    if (!userInput) return;

    let userMessage = `<div class="message user">${userInput}</div>`;
    chatBox.innerHTML += userMessage;

    // Check if user requested an image
    if (imageResponses[userInput]) {
        let imageMessage = `<div class="message bot">
            <img src="${imageResponses[userInput]}" alt="Requested Image" style="max-width: 100%; border-radius: 10px;">
        </div>`;
        chatBox.innerHTML += imageMessage;
    } else {
        let reply = responses[userInput] || "Sorry, I don't understand that. 😕";
        setTimeout(() => {
            let botMessage = `<div class="message bot">${reply}</div>`;
            chatBox.innerHTML += botMessage;
        }, 500);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById("user-input").value = "";
}

// Function to send message on "Enter" key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
