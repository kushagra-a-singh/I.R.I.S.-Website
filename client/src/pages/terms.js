import React from 'react';
import { Link } from 'react-router-dom';
import './terms.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Terms() {
  return (
    <div className="terms">
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
        <div className='terms-container'>
          <h1>Terms and Conditions</h1>
          <h3>By using our website, you agree to these terms and conditions.
        Please read them carefully before using our website.</h3>
          <div className='cards-container'>
        <div class="policy-card">
<h2>Eligibility</h2> <p>To participate in I.R.I.S activities, you must be at least 16 years old or have parental consent if under 16. By participating, you confirm that you meet these eligibility requirements.</p> </div>
<div class="policy-card">
<h2>Code of Conduct</h2> <p>All participants must adhere to our Code of Conduct. This includes respectful behavior towards others, compliance with all event rules, and avoiding any form of harassment or discrimination.</p> </div>
<div class="policy-card">
<h2>Use of Our Website</h2> <p>You must use our website for lawful purposes only. You must not use our website to harm or offend others.</p> </div>
<div class="policy-card">
<h2>Intellectual Property</h2> <p>All content on our website is owned by us or our licensors. You must not copy, modify, or distribute our content without our permission. Any intellectual property created during I.R.I.S activities remains the property of the creator. By participating, you grant I.R.I.S a non-exclusive license to use your work for promotional purposes.</p> </div>
<div class="policy-card">
<h2>Liability</h2> <p>We are not liable for any damages or losses arising from your use of our website. We are not responsible for any third-party content or services. I.R.I.S is not liable for any direct, indirect, incidental, or consequential damages arising from your participation in our activities or use of our services.</p> </div>
<div class="policy-card">
<h2>Privacy Policy</h2> <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p> </div>
<div class="policy-card">
<h2>Changes to Terms</h2> <p>We may update these Terms and Conditions from time to time. Any changes will be posted on our website, and your continued use of our services constitutes acceptance of the new terms.</p> </div>
<div class="policy-card">
<h2>Governing Law</h2> <p>These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms will be resolved in the courts of India.</p> </div>
<div class="policy-card">
<h2>Contact Us</h2> <p>If you have any questions or concerns about these Terms and Conditions, please contact us at iris@mitwpu.edu.in.</p> </div>
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

export default Terms;