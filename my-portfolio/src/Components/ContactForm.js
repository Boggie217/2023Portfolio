import React, { useState } from 'react';
import './contactForm.css';

function ContactForm() {
  // Define state variables for form inputs
  const [name, setName] = useState('Please enter your name');
  const [email, setEmail] = useState('Please enter your email');
  const [phone, setPhone] = useState('Please enter your phone number'); // Add phone state
  const [subject, setSubject] = useState('Please let me know the subject of your message?'); // Add subject state
  const [message, setMessage] = useState('Please enter a message and i will get back to you as soon as possible!');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here (e.g., send it to a server)
    console.log('Form submitted with data:', { name, email, phone, subject, message });
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
