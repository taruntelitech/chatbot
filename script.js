const responses = {
    "hello": "Hi! How can I help you?",
    "hi": "Hello! How are you?",
    "how are you": "I'm doing great! What about you?",
    "i am fine": "That's good to hear!",
    "bye": "Goodbye! Have a great day!",
    "who created you": "I was created by Tarun Teli!",
    "what is your name": "I am a simple chatbot.",

    // 🔹 GOD & SPIRITUALITY
    "who is god": "God is the divine power that created the universe.",
    "भगवान कौन हैं": "भगवान वह दिव्य शक्ति हैं जिन्होंने इस ब्रह्मांड को बनाया।",

    "does god exist": "Many believe in God, while others seek proof. It's a matter of faith.",
    "क्या भगवान का अस्तित्व है": "कुछ लोग भगवान पर विश्वास करते हैं, कुछ प्रमाण खोजते हैं। यह आस्था की बात है।",

    "who is mahadev": "Mahadev (Shiva) is the supreme god of destruction and transformation in Hinduism.",
    "महादेव कौन हैं": "महादेव (शिव) हिंदू धर्म के परम देवता हैं, जो संहार और परिवर्तन के देवता माने जाते हैं।",

    "who is lord vishnu": "Lord Vishnu is the preserver of the universe in Hinduism.",
    "भगवान विष्णु कौन हैं": "भगवान विष्णु हिंदू धर्म में सृष्टि के पालनहार माने जाते हैं।",

    "who is lord brahma": "Lord Brahma is known as the creator of the universe in Hinduism.",
    "भगवान ब्रह्मा कौन हैं": "भगवान ब्रह्मा को सृष्टि का रचयिता माना जाता है।",

    "what is moksha": "Moksha is liberation from the cycle of birth and death.",
    "मोक्ष क्या है": "मोक्ष जन्म और मृत्यु के चक्र से मुक्ति है।",

    "how to find peace through god": "Faith, meditation, and selfless service lead to peace.",
    "भगवान के माध्यम से शांति कैसे मिले": "आस्था, ध्यान और निःस्वार्थ सेवा से शांति प्राप्त होती है।",

    "why do people pray": "People pray to connect with God and seek guidance and blessings.",
    "लोग प्रार्थना क्यों करते हैं": "लोग भगवान से जुड़ने और मार्गदर्शन व आशीर्वाद प्राप्त करने के लिए प्रार्थना करते हैं।",

    "what is karma": "Karma is the law of cause and effect – your actions shape your destiny.",
    "कर्म क्या है": "कर्म कारण और प्रभाव का नियम है – आपके कर्म आपका भविष्य तय करते हैं।",

    "how to connect with god": "Prayer, meditation, and good deeds strengthen your connection with God.",
    "भगवान से कैसे जुड़ें": "प्रार्थना, ध्यान और अच्छे कर्मों से भगवान से जुड़ाव मजबूत होता है।",

    "does god answer prayers": "Many believe God answers prayers in mysterious ways.",
    "क्या भगवान प्रार्थनाओं का उत्तर देते हैं": "बहुत से लोग मानते हैं कि भगवान रहस्यमय तरीकों से उत्तर देते हैं।",

    "who is hanuman": "Hanuman is the greatest devotee of Lord Rama and a symbol of strength and devotion.",
    "हनुमान कौन हैं": "हनुमान भगवान राम के सबसे बड़े भक्त और शक्ति व भक्ति के प्रतीक हैं।",

    "who is krishna": "Krishna is the 8th avatar of Lord Vishnu, known for his wisdom and love.",
    "कृष्ण कौन हैं": "कृष्ण भगवान विष्णु के 8वें अवतार हैं, जो ज्ञान और प्रेम के लिए प्रसिद्ध हैं।",

    "what is bhagavad gita": "The Bhagavad Gita is a sacred Hindu scripture that teaches wisdom and duty.",
    "भगवद गीता क्या है": "भगवद गीता एक पवित्र हिंदू ग्रंथ है, जो ज्ञान और कर्तव्य सिखाता है।",

    "what is dharma": "Dharma is one's duty and righteous path in life.",
    "धर्म क्या है": "धर्म जीवन में सही रास्ते और कर्तव्य का पालन करना है।",

    "what happens after death": "Different beliefs exist: some believe in rebirth, others in heaven or moksha.",
    "मृत्यु के बाद क्या होता है": "कुछ पुनर्जन्म में विश्वास करते हैं, कुछ स्वर्ग या मोक्ष में।",

    "who is ram": "Lord Ram is the 7th avatar of Vishnu and the symbol of virtue and righteousness.",
    "राम कौन हैं": "भगवान राम विष्णु के 7वें अवतार और मर्यादा पुरुषोत्तम हैं।",

    "why do bad things happen": "Life has both good and bad experiences; it’s part of karma and growth.",
    "बुरी चीजें क्यों होती हैं": "जीवन में अच्छे और बुरे अनुभव होते हैं; यह कर्म और सीखने का हिस्सा है।",

    "how can I strengthen my faith": "Through devotion, prayer, and understanding spiritual teachings.",
    "मैं अपनी आस्था कैसे मजबूत कर सकता हूँ": "भक्ति, प्रार्थना और आध्यात्मिक शिक्षाओं को समझकर।",
   // 🔹 Life & Success
    "what is life": "Life is a journey of experiences, challenges, and growth.",
    "जीवन क्या है": "जीवन अनुभवों, चुनौतियों और सीखने की यात्रा है।",
    
    "how to be successful": "Hard work, consistency, and a positive mindset are key to success.",
    "सफल कैसे बनें": "मेहनत, निरंतरता और सकारात्मक सोच सफलता की कुंजी हैं।",

    "how to stay motivated": "Set clear goals, track progress, and reward yourself.",
    "प्रेरित कैसे रहें": "लक्ष्य तय करें, अपनी प्रगति ट्रैक करें और खुद को इनाम दें।",

    "how to improve myself": "Read books, stay positive, and learn new skills.",
    "आत्म-सुधार कैसे करें": "किताबें पढ़ें, सकारात्मक सोचें और नई चीजें सीखें।",

    "what is the meaning of life": "The meaning of life is to find purpose and spread happiness.",
    "जीवन का उद्देश्य क्या है": "जीवन का उद्देश्य अपने सपनों को पूरा करना और खुशियाँ फैलाना है।",

    // 🔹 Happiness & Relationships
    "how to be happy": "Happiness comes from within. Focus on gratitude and self-improvement.",
    "खुश कैसे रहें": "खुशी भीतर से आती है। आभार प्रकट करें और आत्म-सुधार पर ध्यान दें।",

    "how to make good friends": "Be kind, be honest, and support others.",
    "अच्छे दोस्त कैसे बनाएं": "दयालु बनें, ईमानदार रहें और दूसरों का समर्थन करें।",

    "how to deal with breakups": "Give yourself time, focus on self-growth, and surround yourself with positivity.",
    "ब्रेकअप से कैसे उबरें": "खुद को समय दें, आत्म-विकास पर ध्यान दें और सकारात्मकता से घिरे रहें।",

    "how to build confidence": "Believe in yourself, prepare well, and take small steps forward.",
    "आत्म-विश्वास कैसे बढ़ाएं": "खुद पर विश्वास रखें, तैयारी करें और छोटे-छोटे कदम उठाएँ।",

    // 🔹 Stress & Mindset
    "how to handle stress": "Take deep breaths, focus on solutions, and practice mindfulness.",
    "तनाव कैसे दूर करें": "गहरी सांस लें, हल निकालें और ध्यान (meditation) करें।",

    "how to control anger": "Take deep breaths, think before speaking, and find healthy ways to express emotions.",
    "गुस्से पर कैसे काबू पाएं": "गहरी सांस लें, सोचें और भावनाओं को सकारात्मक रूप से व्यक्त करें।",

    "how to deal with failure": "Failure is a part of learning. Analyze mistakes and keep improving.",
    "असफलता से कैसे निपटें": "असफलता सीखने का हिस्सा है। गलतियों का विश्लेषण करें और सुधार करें।",

    // 🔹 Personal Growth & Learning
    "how to develop a new habit": "Start small, be consistent, and track your progress.",
    "नयी आदत कैसे डालें": "छोटे से शुरू करें, निरंतर रहें और अपनी प्रगति ट्रैक करें।",

    "best way to learn a new skill": "Practice daily, take courses, and apply what you learn.",
    "नया कौशल सीखने का सबसे अच्छा तरीका क्या है": "रोज़ अभ्यास करें, कोर्स लें और जो सीखें उसे लागू करें।",

    "how to stop overthinking": "Focus on the present moment and engage in meaningful activities.",
    "ज्यादा सोचना कैसे बंद करें": "वर्तमान क्षण पर ध्यान दें और सार्थक गतिविधियों में व्यस्त रहें।",

    "how to wake up early": "Sleep on time, set an alarm, and follow a morning routine.",
    "जल्दी उठने का तरीका क्या है": "समय पर सोएं, अलार्म लगाएं और सुबह की दिनचर्या बनाएं।",

    "how to achieve goals faster": "Break goals into smaller steps and stay consistent.",
    "तेजी से लक्ष्य कैसे प्राप्त करें": "लक्ष्य को छोटे हिस्सों में बांटें और निरंतर रहें।",

    // 🔹 Spirituality & Peace
    "how to find inner peace": "Meditate, avoid negativity, and stay grateful.",
    "आंतरिक शांति कैसे पाएं": "ध्यान करें, नकारात्मकता से बचें और आभारी रहें।",

    "how to be positive in life": "Focus on solutions, avoid negativity, and practice gratitude.",
    "जीवन में सकारात्मक कैसे बनें": "समाधान पर ध्यान दें, नकारात्मकता से बचें और आभार प्रकट करें।"
};

// 🌟 Image Responses (User can request images)
const imageResponses = {
    "ram image": "2.jpg",
    "elon musk image": "1.jpg",
    "tarun teli image": "3.jpg",
    "mahadev image": "4.jpg",
    "best wallpaper": "5.jpg"
};

// 📌 Function to Calculate Similarity (Levenshtein Distance)
function getBestMatch(userInput) {
    let keys = Object.keys(responses);
    let bestMatch = "";
    let lowestDistance = Infinity;

    keys.forEach(key => {
        let distance = levenshteinDistance(userInput, key);
        if (distance < lowestDistance) {
            lowestDistance = distance;
            bestMatch = key;
        }
    });

    return lowestDistance <= 3 ? bestMatch : null; // 3 ka matlab - agar user thoda galat likhe to bhi jawab mile
}

// 📌 Function to Send Messages
function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase().trim();
    let chatBox = document.getElementById("chat-box");

    if (!userInput) return;

    chatBox.innerHTML += `<div class="message user">${userInput}</div>`;

    // 🖼️ Image Check
    if (imageResponses[userInput]) {
        chatBox.innerHTML += `<div class="message bot">
            <img src="${imageResponses[userInput]}" alt="Requested Image" style="max-width: 100%; border-radius: 10px;">
        </div>`;
    } else {
        let bestMatch = getBestMatch(userInput);
        let reply = bestMatch ? responses[bestMatch] : "Sorry, I don't understand that. 😕";

        setTimeout(() => {
            chatBox.innerHTML += `<div class="message bot">${reply}</div>`;
        }, 500);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById("user-input").value = "";
}

// 📌 Function to Handle "Enter" Key
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// 🔢 Function to Calculate Levenshtein Distance (for matching similar words)
function levenshteinDistance(s1, s2) {
    let dp = Array(s1.length + 1)
        .fill(null)
        .map(() => Array(s2.length + 1).fill(null));

    for (let i = 0; i <= s1.length; i++) dp[i][0] = i;
    for (let j = 0; j <= s2.length; j++) dp[0][j] = j;

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            let cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + cost
            );
        }
    }
    return dp[s1.length][s2.length];
}
