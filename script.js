/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link, .nav-cta, .order-btn');

// Toggle menu on hamburger click
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
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
        if (!name || !email