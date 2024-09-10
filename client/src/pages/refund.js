import React from 'react';
import { Link } from 'react-router-dom';
import './refund.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Refund() {
  return (
    
    <div className="refund">
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
  <div className='refund-container'>
        <h1>Refund Policy</h1>
        <h3> At I.R.I.S, we want to ensure that you are satisfied with our services. If you are not satisfied, we offer a refund policy.</h3>
        <div className='cards-container'>
      <div class="policy-card">
  <h2>Eligibility for Refunds</h2>
  <p>
    <strong>Full Refund:</strong> Participants are eligible for a full refund if they cancel their registration 7 days before the hackathon start date.
  </p>
  <p>
    <strong>No Refunds:</strong> No refunds will be issued for cancellations made less than 7 days before the hackathon start date or for participants who do not attend the event.
  </p>
</div>

<div class="policy-card">
  <h2>Refund Process</h2>
  <p>
    <strong>Request Submission:</strong> To request a refund, participants must contact us via email at iris@mitwpu.edu.in with their registration details.
  </p>
  <p>
    <strong>Processing Time:</strong> Refunds will be processed within 15-20 days after the request is received and approved. The refunded amount will be returned to the original payment method used during registration.
  </p>
</div>

<div class="policy-card">
  <h2>Event Cancellation or Postponement</h2>
  <p>
    In the event that the hackathon is canceled or postponed by I.R.I.S, participants will be eligible for a full refund. Alternatively, participants may opt to transfer their registration to a future event organized by I.R.I.S.
  </p>
</div>

<div class="policy-card">
  <h2>Non-Refundable Fees</h2>
  <p>
    Transaction processing fees incurred through third-party payment processors are non-refundable unless the event is canceled by I.R.I.S.
  </p>
</div>

<div class="policy-card">
  <h2>Changes to This Policy</h2>
  <p>
    We reserve the right to modify this refund policy at any time. Any changes will be communicated to participants via email and updated on our website.
  </p>
</div>

<p className="text">For more information, contact us at: iris@mitwpu.edu.in</p>
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

export default Refund;