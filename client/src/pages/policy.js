import React from 'react';
import {Link} from 'react-router-dom';
import './policy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Policy() {
  return (
    <div className="policy">   
  <header>
    <nav>
      <ul className="navbar">
        <li className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
  <main>
    <div className='policy-container'>
        <h1>Our Privacy Policy</h1>
        <h3>At I.R.I.S, we are committed to protecting the privacy of our users. This policy explains how we collect, use, and protect your personal data.</h3>
    <div className='policy-content-container'>

   

    <div className='cards-container'>
    <div class="policy-card">
    <h2>Information We Collect</h2>
    <p>
    When you register for our hackathon, we may collect personal information such as your name, email address, contact number, and payment details.
    </p>
    <p>
    We may collect payment details such as credit card numbers or bank information through secure methods provided by our payment processor. However, we do not store this information directly.
    </p>
    <p>
    We may collect data on how you interact with our website or services, such as pages visited and interaction with event registration forms.
    </p>
    </div>
    <div class="policy-card">
  <h2>Use of Information</h2>
  <p>
    Your personal information will be used to manage registrations, provide event updates, and handle customer support.
  </p>
  <p>
    Your payment details will be used solely for the purpose of processing your hackathon participation fee.
  </p>
  <p>
    We may use your email to send important updates, event-related information, and promotional materials, unless you opt out.
  </p>
</div>

    
    <div class="policy-card">
  <h2>Data Sharing</h2>
  <p>
    We share payment information with third-party payment processors, which comply with industry-standard data protection regulations.
  </p>
  <p>
    We may disclose personal information if required to comply with legal obligations.
  </p>
</div>

<div class="policy-card">
  <h2>Data Security</h2>
  <p>
    We take reasonable measures to protect your personal data. However, no online transaction is 100% secure, and we cannot guarantee absolute security.
  </p>
</div>

<div class="policy-card">
  <h2>Your Rights</h2>
  <p>
    You may request access to, correction, or deletion of your personal data by contacting us. You may also opt out of promotional communications at any time.
  </p>
</div>

<div class="policy-card">
  <h2>Third-Party Services</h2>
  <p>
    Our payment processing is handled by third-party services that comply with strict security and privacy standards. You can refer to their privacy policy for detailed information on how they handle your payment information.
  </p>
</div>

<div class="policy-card">
  <h2>Changes to This Policy</h2>
  <p>
    We may update this policy from time to time. Any changes will be posted on this page with the revised date.
  </p>
  <p>For more information, contact us at: iris@mitwpu.edu.in</p>
</div>
    </div>
    </div>
        </div>
    </main>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Club</Link></li>
              <li><Link to="/about">Our Team</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Events</h4>
            <ul>
              <li><Link to="/events">Hackathons</Link></li>
              <li><Link to="/events">Podcasts</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.instagram.com/iris_mitwpu/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://chat.whatsapp.com/Lnu3YpiEM4WDmwCjwDCY6n" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Policies</h4>
            <ul>
              <li><Link to="/policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms and Conditions</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 I.R.I.S. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Policy;