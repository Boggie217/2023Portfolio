import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className='footer-section'>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='footer-section'>
          <h3>Explore</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        &copy; {new Date().getFullYear()} Your Website Name
      </div>
    </div>
  );
}

export default Footer;
