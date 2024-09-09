import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Contact.module.css';
import backgroundVideo from './vid2.mp4'; // Import the background video file
import Header from '../components/Header'; // Import the Header component

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showNotification, setShowNotification] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithTimestamp = {
        ...formData,
        created_at: new Date().toISOString(),
      };
      const response = await axiosInstance.post('/contact', formDataWithTimestamp);
      if (response.data.success) {
        setShowNotification(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Error submitting form:', response.data.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleOkayButton = () => {
    setShowNotification(false);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.overlay}></div>
      <Header /> {/* Import Header component */}
      <main className={styles.content}>
        <h1 className={styles.contactUsTitle}>Contact Us</h1>
        <p className={styles.titleDesc}>
          If you have a new and innovative scalable project, unique idea, or research you'd like to pursue, fill out the form below. We're here to help guide and support you!
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject*</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Description*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Send Message</button>
          </div>
        </form>
        {showNotification && (
          <div className={styles.notificationPopup}>
            <div className={styles.notificationContent}>
              <h2>Message sent successfully!</h2>
              <p>Your message has been sent. Thank you for reaching out!</p>
              <button onClick={handleOkayButton}>Okay</button>
            </div>
          </div>
        )}
      </main>
      <footer>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Club</Link></li>
              <li><Link to="/about">Our Team</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Events</h4>
            <ul>
              <li><Link to="/events">Hackathons</Link></li>
              <li><Link to="/events">Podcasts</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.instagram.com/iris_mitwpu/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://chat.whatsapp.com/Lnu3YpiEM4WDmwCjwDCY6n" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@iris-mitwpu.com">Email Us</a></li>
              <li><a href="tel:+1234567890">Call Us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
