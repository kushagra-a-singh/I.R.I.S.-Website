import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Home.module.css';
import videoSource from './vid1.mp4';
import backgroundVideo from './vid2.mp4';
import smallPhoto from './sephackathon.png'; // Correct path for the small photo

function Home() {
  return (
    <div className={styles.home}>
      <video className={styles.backgroundVideo} autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Header />

      <div className={styles.overlay}>
        <main className="flex-grow-1">
          {/* New Registration Section */}
          <div className={`${styles.registration} d-flex align-items-center justify-content-center`}>
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h2 className={`${styles.registrationTitle} display-4`}>Innovation Hackathon</h2>
                  <p className="lead">Be part of the innovation and research.</p>
                  {/* Use Link component for navigation */}
                  <Link to="/events/2" className={styles.registerBtn}>
                    Register Now
                  </Link>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={smallPhoto} alt="Join Now" className={styles.registrationPhoto} />
                </div>
              </div>
            </div>
          </div>

          {/* Existing Hero Section */}
          <div className={`${styles.hero} text-white d-flex align-items-center`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className={`${styles.wordart} display-3`}>I.R.I.S</h1>
                  <h2 className="lead">Innovation Research & Intelligence Support</h2>
                  <p className="mb-4">Empowering innovation and fostering technological advancements.</p>
                </div>
                <div className="col-lg-6 text-center">
                  <video className={styles.heroVideo} autoPlay loop muted>
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.journey} py-5 text-center text-light`}>
            <div className="container">
              <h3 className={styles.journeyTitle}>Join us on the I.R.I.S Journey</h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className={`${styles.step} p-4 shadow-sm h-100`}>
                    <h4>Bring Your Idea</h4>
                    <p>Transform your concepts into reality with our supportive community.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${styles.step} p-4 shadow-sm h-100`}>
                    <h4>Collaborate and Develop</h4>
                    <p>Work with like-minded individuals to refine and expand your projects.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${styles.step} p-4 shadow-sm h-100`}>
                    <h4>Achieve and Launch</h4>
                    <p>Bring your innovations to life and make a lasting impact in the tech world.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        
      </div>
    </div>
  );
}

export default Home;
