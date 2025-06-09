import React, { useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.getElementById('year').textContent = new Date().getFullYear();
    emailjs.init("zpPs_pc0j0wZvg8rY");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm('service_gmail_ndzalo', 'template_5tuogfb', form.current)
      .then(() => {
        alert('Thank you for your message! I will get back to you soon.');
        form.current.reset();
      }, (error) => {
        alert('Oops! There was an error sending your message. Please try again later.');
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Your email:
          <input type="email" name="email" required />
        </label>
        <label>
          Name:
          <textarea name="name" required></textarea>
        </label>
        <label>
          Your message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send'}</button>
      </form>
    </section>
  );
};

export default ContactForm;
