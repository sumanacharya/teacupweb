// Form handling functions
function resetForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('formMessage').innerHTML = '';
    document.getElementById('thankYouMessage').classList.add('hidden');
    document.getElementById('contactForm').classList.remove('hidden');
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formMessage = document.getElementById('formMessage');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Get form data
    const formData = {
        name: sanitizeInput(form.name.value.trim()),
        email: sanitizeInput(form.email.value.trim()),
        message: sanitizeInput(form.message.value.trim())
    };

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
        formMessage.innerHTML = '<p class="text-red-400">Please fill in all required fields</p>';
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        formMessage.innerHTML = '<p class="text-red-400">Please enter a valid email address</p>';
        return;
    }

    // Validate input lengths
    if (formData.name.length > 100 || formData.email.length > 100 || formData.message.length > 2000) {
        formMessage.innerHTML = '<p class="text-red-400">Input length exceeds maximum allowed</p>';
        return;
    }

    try {
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Sending...';

        // Execute reCAPTCHA v3
        const recaptchaToken = await grecaptcha.execute(CONFIG.RECAPTCHA.SITE_KEY, {action: 'submit'});

        // Send form data to Node.js server
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                'g-recaptcha-response': recaptchaToken
            })
        });

        const result = await response.json();

        if (result.success) {
            // Show thank you message
            form.classList.add('hidden');
            document.getElementById('thankYouMessage').classList.remove('hidden');
            formMessage.innerHTML = '';
        } else {
            throw new Error(result.message || 'Failed to send message');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        formMessage.innerHTML = '<p class="text-red-400">Sorry, there was an error sending your message. Please try again later.</p>';
    } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.textContent = SITE_CONTENT.contact.form.submit;
    }
}

// Sanitize input to prevent XSS
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Initialize form handling when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        formMessage.innerHTML = '<p class="text-blue-400">Sending...</p>';
        fetch('mail.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
        })
        .then(response => response.text().then(text => ({ status: response.status, text })))
        .then(({ status, text }) => {
          if (status === 200) {
            formMessage.innerHTML = `<p class="text-green-400">${text}</p>`;
            contactForm.reset();
          } else {
            formMessage.innerHTML = `<p class="text-red-400">${text}</p>`;
          }
          setTimeout(() => { formMessage.innerHTML = ''; }, 5000);
        })
        .catch(() => {
          formMessage.innerHTML = '<p class="text-red-400">Failed to send. Please try again later.</p>';
          setTimeout(() => { formMessage.innerHTML = ''; }, 5000);
        });
      } else {
        formMessage.innerHTML = '<p class="text-red-400">Please fill in all fields</p>';
        setTimeout(() => { formMessage.innerHTML = ''; }, 3000);
      }
    });
  }
}); 