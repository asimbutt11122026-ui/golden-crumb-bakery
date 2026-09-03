/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link, .nav-cta, .order-btn');

// Function to close menu
function closeMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
}

// Toggle menu on hamburger click
if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Don't close for Order Now button in navbar (it opens modal)
        if (link.classList.contains('order-btn') && link.closest('.nav-menu')) {
            e.stopPropagation();
        }
        closeMenu();
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(e.target)) {
        closeMenu();
    }
});

/* ==========================================================================
   ORDER MODAL
   ========================================================================== */

const orderBtn = document.getElementById('orderBtn');
const orderModal = document.getElementById('orderModal');
const orderModalClose = document.getElementById('orderModalClose');

if (orderBtn && orderModal) {
    // Open modal
    orderBtn.addEventListener('click', () => {
        orderModal.classList.add('active');
    });
}

if (orderModalClose && orderModal) {
    // Close modal
    orderModalClose.addEventListener('click', () => {
        orderModal.classList.remove('active');
    });
}

// Close modal when clicking outside
if (orderModal) {
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            orderModal.classList.remove('active');
        }
    });
}

/* ==========================================================================
   NAVBAR SCROLL EFFECT
   ========================================================================== */

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(61, 40, 23, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 15px rgba(61, 40, 23, 0.1)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

/* ==========================================================================
   FADE-IN ON SCROLL ANIMATION
   ========================================================================== */

function observeElements() {
    const elements = document.querySelectorAll(
        '.menu-card, .favourite-card, .testimonial-card, .recipe-card, .feature, .btn'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Run observer when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

/* ==========================================================================
   FORM HANDLING
   ========================================================================== */

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !message) {
            showFormNote('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormNote('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show success message
        showFormNote(
            `Thank you, ${name}! We've received your message and will get back to you soon.`,
            'success'
        );
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formNote.textContent = '';
            formNote.classList.remove('success', 'error');
        }, 5000);
    });
}

function showFormNote(message, type) {
    if (formNote) {
        formNote.textContent = message;
        formNote.classList.remove('success', 'error');
        formNote.classList.add(type);
    }
}

/* ==========================================================================
   CHATBOT FUNCTIONALITY
   ========================================================================== */

// Chatbot Knowledge Base
const chatbotKB = {
    greetings: ['hello', 'hi', 'hey', 'howdy', 'greetings'],
    hours: ['hours', 'open', 'closed', 'when are you', 'when do you open'],
    location: ['address', 'where', 'location', 'find you', 'visit'],
    menu: ['menu', 'what do you sell', 'items', 'products', 'price', 'cost'],
    custom_cake: ['custom cake', 'wedding', 'birthday cake', 'special occasion', 'cake order'],
    contact: ['phone', 'call', 'email', 'contact', 'reach'],
    delivery: ['delivery', 'ship', 'mail', 'send'],
    ingredients: ['ingredients', 'local', 'fresh', 'quality', 'organic'],
    testimonials: ['review', 'rating', 'testimonial', 'feedback'],
    help: ['help', 'support', 'question', 'assist', 'faq'],
};

const chatbotResponses = {
    greetings: "Hello! 👋 Welcome to Golden Crumb Bakery. How can I help you today?",
    
    hours: "Our hours are:\n📅 Monday–Friday: 7:00 AM – 6:00 PM\n📅 Saturday: 8:00 AM – 5:00 PM\n📅 Sunday: 8:00 AM – 3:00 PM",
    
    location: "You can find us at:\n📍 123 Main Street\nToronto, Ontario M5V 3A8\n\nWe'd love to see you!",
    
    menu: "We offer:\n🍞 Artisan Breads\n🥐 Croissants & Pastries\n🎂 Cakes\n🧁 Cupcakes\n🍪 Cookies & Treats\n☕ Coffee & Drinks\n\nCheck out our full menu for prices!",
    
    custom_cake: "Absolutely! We create beautiful custom cakes for any occasion. Whether it's a wedding, birthday, or celebration, we'd love to make something special for you. Please contact us at hello@goldencrumbbakery.ca or call (416) 555-0147 to discuss your vision!",
    
    contact: "📞 Phone: (416) 555-0147\n📧 Email: hello@goldencrumbbakery.ca\n\nFeel free to reach out anytime!",
    
    delivery: "Currently, we only serve in-store. However, we're happy to discuss custom orders for special events. Please contact us directly!",
    
    ingredients: "We're committed to quality! We use locally-sourced ingredients and traditional baking techniques. Everything is made fresh daily with no shortcuts.",
    
    testimonials: "Our customers love us! ⭐ We've been called 'the best croissants outside of France' and people rave about our fresh sourdough. Check our testimonials section on the website!",
    
    help: "I can help you with:\n• Hours & location\n• Our menu & products\n• Custom cake orders\n• Contact information\n• Ingredients & freshness\n\nJust ask!",
    
    default: "That's a great question! For anything specific, feel free to call us at (416) 555-0147 or email hello@goldencrumbbakery.ca. Our team is always happy to help! 😊"
};

// Chatbot Elements
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWidget = document.getElementById('chatbotWidget');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// Toggle chatbot
if (chatbotToggle && chatbotWidget) {
    chatbotToggle.addEventListener('click', () => {
        chatbotWidget.classList.toggle('active');
        if (chatbotWidget.classList.contains('active')) {
            chatbotToggle.classList.add('hidden');
            if (chatbotInput) chatbotInput.focus();
            // Scroll to latest message
            setTimeout(() => {
                if (chatbotMessages) chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }, 0);
        }
    });
}

// Close chatbot
if (chatbotClose && chatbotWidget && chatbotToggle) {
    chatbotClose.addEventListener('click', () => {
        chatbotWidget.classList.remove('active');
        chatbotToggle.classList.remove('hidden');
    });
}

// Send message
if (chatbotSend) {
    chatbotSend.addEventListener('click', sendChatMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

function sendChatMessage() {
    if (!chatbotInput) return;
    
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatbotInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Get bot response after a short delay
    setTimeout(() => {
        removeTypingIndicator();
        const response = getBotResponse(message);
        addChatMessage(response, 'bot');
    }, 600);
}

function addChatMessage(text, sender) {
    if (!chatbotMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = text;
    
    messageDiv.appendChild(bubble);
    chatbotMessages.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function showTypingIndicator() {
    if (!chatbotMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot';
    messageDiv.id = 'typingIndicator';
    
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    
    messageDiv.appendChild(typing);
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check each category
    for (const [category, keywords] of Object.entries(chatbotKB)) {
        if (keywords.some(keyword => message.includes(keyword))) {
            return chatbotResponses[category];
        }
    }
    
    // Default response
    return chatbotResponses.default;
}

// Welcome message on load
window.addEventListener('load', () => {
    setTimeout(() => {
        addChatMessage("🥐 Hi there! Need help with anything about Golden Crumb Bakery?", 'bot');
    }, 500);
});

/* ==========================================================================
   UTILITY: Log page loaded
   ========================================================================== */

console.log('🥐 Golden Crumb Bakery website loaded successfully!');
