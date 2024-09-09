import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Adjust the path if necessary
import styles from './About.module.css'; // Import the CSS module
import backgroundVideo from './vid2.mp4'; // Import the background video file

function About() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.overlay}></div>
      
      <Header />
      
      <main className={styles.content + ' py-5'}>
        <div className="container">
          <h1 className={styles.title}>About I.R.I.S</h1>
          <p className={styles.titleDesc}>I.R.I.S (Innovation Research & Intelligence Support) is a tech club dedicated to fostering innovation and supporting research in the field of technology.</p>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.contactInfo + ' p-4'}>
                <h2>Contact Information</h2>
                <p>Email: iris@mitwpu.edu.in</p>
                <p>Phone: +91 7715958053</p>
                <p>Address: MIT World Peace University Survey No, 124, Paud Rd, Kothrud, Pune, Maharashtra 411038</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.mission + ' p-4'}>
                <h2>Our Mission</h2>
                <h4>To provide a platform for tech enthusiasts to:</h4>
                <h5>* Collaborate</h5>
                <h5>* Learn</h5>
                <h5>* Innovate</h5>
              </div>
            </div>
          </div>
          <div className={styles.vision + ' p-4'}>
            <h2>Our Vision</h2>
            <p>To be the leading tech community that drives technological advancements and shapes the future of innovation.</p>
          </div>
          <div className={styles.teamMembers + ' p-4'}>
            <h2>Team Members</h2>
            <p>Person info with roles to be added.</p>
          </div>
        </div>
      </main>
      
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-light">Club</Link></li>
                <li><Link to="/about" className="text-light">Our Team</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Events</h5>
              <ul className="list-unstyled">
                <li><Link to="/events" className="text-light">Hackathons</Link></li>
                <li><Link to="/events" className="text-light">Podcasts</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="https://www.instagram.com/iris_mitwpu/" className="text-light" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://chat.whatsapp.com/Lnu3YpiEM4WDmwCjwDCY6n" className="text-light" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 I.R.I.S. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
