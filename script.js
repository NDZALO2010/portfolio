// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  emailjs.sendForm('service_gmail_ndzalo', 'templete_er50ggq', this)
    .then(() => {
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    }, (error) => {
      alert('Oops! There was an error sending your message. Please try again later.');
      console.error('EmailJS Error:', error);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
});
