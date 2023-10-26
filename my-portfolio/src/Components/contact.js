import React from 'react';
import ContactForm from './ContactForm';
import './contactForm.css'; 
function Contact() {
  return ( <div className='contactUs'>
    {<h2>Contact me </h2>}
    {<p> "Feel free to get in touch with us. You can reach out to our friendly support team via email or phone. We're here to help you."</p>}
    <ContactForm />
    
    </div>
  );
}

export default Contact;