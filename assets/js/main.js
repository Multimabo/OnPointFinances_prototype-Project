// Loan Calculator Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Loan Calculator
    const loanAmount = document.getElementById('loanAmount');
    const loanAmountValue = document.getElementById('loanAmountValue');
    const loanTerm = document.getElementById('loanTerm');
    const monthlyPayment = document.getElementById('monthlyPayment');
    
    // Update loan amount display
    if (loanAmount) {
        loanAmount.addEventListener('input', updateLoanCalculator);
    }
    if (loanTerm) {
        loanTerm.addEventListener('change', updateLoanCalculator);
    }
    
    function updateLoanCalculator() {
        const amount = parseInt(loanAmount.value);
        const term = parseInt(loanTerm.value);
        
        // Update displayed value
        loanAmountValue.textContent = `R${amount}`;
        
        // Calculate monthly payment (simple interest calculation)
        const interestRate = 0.15; // 15% interest
        const totalRepayment = amount + (amount * interestRate);
        const monthlyRepayment = totalRepayment / term;
        
        // Display result
        monthlyPayment.textContent = `R${Math.round(monthlyRepayment)}`;
    }
    
    // Initialize calculator
    if (loanAmount && loanTerm) {
        updateLoanCalculator();
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation for loan application
    const loanForm = document.getElementById('loanApplicationForm');
    if (loanForm) {
        loanForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const isValid = validateLoanForm();
            
            if (isValid) {
                // Submit form (in a real app, this would be an AJAX call)
                alert('Application submitted successfully! We will contact you shortly.');
                loanForm.reset();
            }
        });
    }
    
    function validateLoanForm() {
        let isValid = true;
        const requiredFields = document.querySelectorAll('#loanApplicationForm input[required], #loanApplicationForm select[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
            }
        });
        
        // Check terms checkbox
        const termsCheckbox = document.getElementById('terms');
        if (termsCheckbox && !termsCheckbox.checked) {
            termsCheckbox.classList.add('is-invalid');
            isValid = false;
        } else if (termsCheckbox) {
            termsCheckbox.classList.remove('is-invalid');
        }
        
        if (!isValid) {
            alert('Please fill in all required fields and accept the terms and conditions.');
        }
        
        return isValid;
    }
});

// WhatsApp integration
function sendWhatsAppMessage(message) {
    const phoneNumber = '27834852436';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Quick apply via WhatsApp
function quickApplyWhatsApp() {
    const message = `Hello OnPointFinances! I'm interested in applying for a loan. Please provide me with more information about your loan products and application process.`;
    sendWhatsAppMessage(message);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.card, .hero-section, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .navbar.scrolled {
        background-color: rgba(0, 123, 255, 0.95) !important;
        backdrop-filter: blur(10px);
    }
    
    .is-invalid {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
`;
document.head.appendChild(style);
