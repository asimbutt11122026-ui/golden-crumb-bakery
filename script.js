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

/* ==========================================================================
   DYNAMIC MENU (loads from the backend API; falls back to the static
   cards already in the HTML if the API is unreachable)
   ========================================================================== */

const API_BASE_URL = 'https://golden-crumb-bakery-api.vercel.app';

async function loadMenuFromApi() {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    try {
        const response = await fetch(`${API_BASE_URL}/api/menu`);
        if (!response.ok) throw new Error(`API returned ${response.status}`);
        const data = await response.json();

        const items = (data.categories || []).flatMap(cat => cat.items || []);
        if (items.length === 0) return; // keep static fallback if menu is empty

        grid.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';

            const img = document.createElement('img');
            img.src = item.imageUrl || '';
            img.alt = item.name;

            const title = document.createElement('h3');
            title.textContent = item.name;

            const desc = document.createElement('p');
            desc.textContent = item.description || '';

            const price = document.createElement('p');
            price.className = 'price';
            price.textContent = `$${(item.priceCents / 100).toFixed(2)}`;

            const addBtn = document.createElement('button');
            addBtn.className = 'add-to-cart-btn';
            addBtn.type = 'button';
            addBtn.textContent = 'Add to Cart';
            addBtn.addEventListener('click', () => addToCart(item));

            card.append(img, title, desc, price, addBtn);
            grid.appendChild(card);
        });
    } catch (err) {
        console.warn('Could not load menu from API, showing static fallback:', err);
    }
}

document.addEventListener('DOMContentLoaded', loadMenuFromApi);

/* ==========================================================================
   CART (Phase 2) — client-side cart state, persisted to localStorage,
   plus the checkout flow that hands off to Stripe Checkout.
   ========================================================================== */

const CART_STORAGE_KEY = 'gcb_cart';
let cart = [];

function loadCartFromStorage() {
    try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        cart = raw ? JSON.parse(raw) : [];
    } catch (err) {
        cart = [];
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
        // ignore (e.g. private browsing storage limits)
    }
}

function addToCart(item) {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
        existing.quantity = Math.min(existing.quantity + 1, 20);
    } else {
        cart.push({ id: item.id, name: item.name, priceCents: item.priceCents, quantity: 1 });
    }
    saveCartToStorage();
    renderCart();
    openCartDrawer();
}

function updateCartQuantity(itemId, delta) {
    const line = cart.find(c => c.id === itemId);
    if (!line) return;
    line.quantity += delta;
    if (line.quantity <= 0) {
        cart = cart.filter(c => c.id !== itemId);
    }
    saveCartToStorage();
    renderCart();
}

function removeFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    saveCartToStorage();
    renderCart();
}

function cartTotals() {
    const subtotalCents = cart.reduce((sum, c) => sum + c.priceCents * c.quantity, 0);
    const taxCents = Math.round(subtotalCents * 0.13);
    const totalCents = subtotalCents + taxCents;
    return { subtotalCents, taxCents, totalCents };
}

function formatCents(cents) {
    return `$${(cents / 100).toFixed(2)}`;
}

function renderCart() {
    const itemsEl = document.getElementById('cartItems');
    const countEl = document.getElementById('cartCount');
    const subtotalEl = document.getElementById('cartSubtotal');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    if (!itemsEl) return;

    itemsEl.innerHTML = '';

    if (cart.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'cart-empty';
        empty.textContent = 'Your cart is empty.';
        itemsEl.appendChild(empty);
    } else {
        cart.forEach(line => {
            const row = document.createElement('div');
            row.className = 'cart-item';

            const info = document.createElement('div');
            const name = document.createElement('div');
            name.className = 'cart-item-name';
            name.textContent = line.name;
            const price = document.createElement('div');
            price.className = 'cart-item-price';
            price.textContent = `${formatCents(line.priceCents)} each`;
            info.append(name, price);

            const qtyWrap = document.createElement('div');
            qtyWrap.className = 'cart-item-qty';
            const minusBtn = document.createElement('button');
            minusBtn.className = 'qty-btn';
            minusBtn.type = 'button';
            minusBtn.textContent = '−';
            minusBtn.addEventListener('click', () => updateCartQuantity(line.id, -1));
            const qtySpan = document.createElement('span');
            qtySpan.textContent = line.quantity;
            const plusBtn = document.createElement('button');
            plusBtn.className = 'qty-btn';
            plusBtn.type = 'button';
            plusBtn.textContent = '+';
            plusBtn.addEventListener('click', () => updateCartQuantity(line.id, 1));
            qtyWrap.append(minusBtn, qtySpan, plusBtn);

            const removeBtn = document.createElement('button');
            removeBtn.className = 'cart-item-remove';
            removeBtn.type = 'button';
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => removeFromCart(line.id));

            const right = document.createElement('div');
            right.append(qtyWrap, removeBtn);

            row.append(info, right);
            itemsEl.appendChild(row);
        });
    }

    const totals = cartTotals();
    if (subtotalEl) subtotalEl.textContent = formatCents(totals.subtotalCents);
    if (taxEl) taxEl.textContent = formatCents(totals.taxCents);
    if (totalEl) totalEl.textContent = formatCents(totals.totalCents);

    const itemCount = cart.reduce((sum, c) => sum + c.quantity, 0);
    if (countEl) {
        countEl.textContent = itemCount;
        countEl.hidden = itemCount === 0;
    }
    if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.add('active');
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.remove('active');
}

function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.add('active');
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.remove('active');
}

function showCheckoutError(message) {
    const el = document.getElementById('checkoutError');
    if (!el) return;
    el.textContent = message;
    el.hidden = false;
}

function clearCheckoutError() {
    const el = document.getElementById('checkoutError');
    if (el) el.hidden = true;
}

async function submitCheckout(event) {
    event.preventDefault();
    clearCheckoutError();

    const submitBtn = document.getElementById('checkoutSubmitBtn');
    const name = document.getElementById('checkoutName').value.trim();
    const email = document.getElementById('checkoutEmail').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const pickup = document.getElementById('checkoutPickup').value;

    if (cart.length === 0) {
        showCheckoutError('Your cart is empty.');
        return;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Redirecting to payment…';
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: cart.map(c => ({ menuItemId: c.id, quantity: c.quantity })),
                customer: { name, email, phone },
                pickupTime: pickup ? new Date(pickup).toISOString() : null,
            }),
        });
        const data = await response.json();
        if (!response.ok || !data.url) {
            throw new Error(data.error || 'Checkout failed');
        }
        // Cart is cleared once payment actually succeeds (handled on return
        // via the success banner), so a cancelled checkout doesn't lose it.
        window.location.href = data.url;
    } catch (err) {
        showCheckoutError(err.message || 'Something went wrong. Please try again.');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Pay with Stripe';
        }
    }
}

function showOrderBanner(type, message) {
    const banner = document.getElementById('orderBanner');
    if (!banner) return;
    banner.className = `order-banner ${type}`;
    banner.innerHTML = '';
    const span = document.createElement('span');
    span.textContent = message;
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Dismiss';
    closeBtn.addEventListener('click', () => { banner.hidden = true; });
    banner.append(span, closeBtn);
    banner.hidden = false;
}

async function handleOrderReturnParams() {
    const params = new URLSearchParams(window.location.search);
    const order = params.get('order');
    if (order === 'success') {
        const sessionId = params.get('session_id');
        cart = [];
        saveCartToStorage();
        renderCart();
        if (sessionId) {
            try {
                const response = await fetch(`${API_BASE_URL}/api/orders/${encodeURIComponent(sessionId)}`);
                if (response.ok) {
                    const order = await response.json();
                    const paid = order.status === 'paid';
                    showOrderBanner(
                        'success',
                        paid
                            ? `Thanks, ${order.customerName}! Your order is confirmed — total ${formatCents(order.totalCents)}.`
                            : `Thanks, ${order.customerName}! We're confirming your payment now — you'll get an email shortly.`
                    );
                } else {
                    showOrderBanner('success', 'Thanks for your order! We\'re confirming your payment now.');
                }
            } catch (err) {
                showOrderBanner('success', 'Thanks for your order! We\'re confirming your payment now.');
            }
        } else {
            showOrderBanner('success', 'Thanks for your order!');
        }
    } else if (order === 'cancelled') {
        showOrderBanner('cancelled', 'Checkout was cancelled — your cart is still saved.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderCart();
    handleOrderReturnParams();

    const cartFab = document.getElementById('cartFab');
    const cartDrawerClose = document.getElementById('cartDrawerClose');
    const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
    const checkoutModalClose = document.getElementById('checkoutModalClose');
    const checkoutForm = document.getElementById('checkoutForm');

    if (cartFab) cartFab.addEventListener('click', openCartDrawer);
    if (cartDrawerClose) cartDrawerClose.addEventListener('click', closeCartDrawer);
    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', () => {
            closeCartDrawer();
            openCheckoutModal();
        });
    }
    if (checkoutModalClose) checkoutModalClose.addEventListener('click', closeCheckoutModal);
    if (checkoutForm) checkoutForm.addEventListener('submit', submitCheckout);
});
