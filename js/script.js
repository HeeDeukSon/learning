// JavaScript for 10 Day Language Journey Website

// Initialize EmailJS (replace with your actual keys)
(function() {
    emailjs.init("Eef8BXaqwSO9PY9zh"); // Replace with your EmailJS public key
})();

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Toggle mobile menu
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Enhanced form submission with EmailJS
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const formMessage = document.getElementById('form-message');
    formMessage.classList.add('hidden');

    console.log('Validation checks starting...');

    if (!name) {
        console.log('Name field is empty.');
        formMessage.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">❌ Please fill in your name.</div>';
        formMessage.classList.remove('hidden');
        e.preventDefault();
        return;
    }

    if (!email) {
        console.log('Email field is empty.');
        formMessage.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">❌ Please fill in your email.</div>';
        formMessage.classList.remove('hidden');
        e.preventDefault();
        return;
    }

    if (!message) {
        console.log('Message field is empty.');
        formMessage.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">❌ Please fill in your message.</div>';
        formMessage.classList.remove('hidden');
        e.preventDefault();
        return;
    }

    console.log('Validation checks passed.');

    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');

    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');

    console.log('Sending form data via EmailJS...');
    console.log('Form data:', { name, email, message });

    try {
        emailjs.sendForm('service_s5opeg3', 'template_792vtvq', this)
            .then(function(response) {
                console.log('EmailJS response:', response);
                formMessage.innerHTML = '<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">✅ Your message has been sent successfully! I\'ll get back to you soon.</div>';
                formMessage.classList.remove('hidden');
                console.log('Success message displayed.');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.error('EmailJS error:', error);
                formMessage.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">❌ Sorry, there was an error sending your message. Please try again or contact me directly.</div>';
                formMessage.classList.remove('hidden');
                console.log('Error message displayed.');
            })
            .finally(function() {
                console.log('Resetting button state...');
                submitBtn.disabled = false;
                btnText.classList.remove('hidden');
                btnLoading.classList.add('hidden');
            });
    } catch (err) {
        console.error('Unexpected error during form submission:', err);
        formMessage.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">❌ An unexpected error occurred. Please try again later.</div>';
        formMessage.classList.remove('hidden');
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
    }
});