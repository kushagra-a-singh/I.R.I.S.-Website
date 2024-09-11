import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Events.module.css'; // Import CSS Module
import Header from '../components/Header';
import Footer from '../components/Footer';

function Events() {
  const pastEvent = {
    id: 1,
    title: "Innovation Hackathon",
    description: "This is a past event",
    image: "./past-innovation-hackathon.jpg",
    date: "Held on: 15/02/2024",
    time: "",
  };

  const upcomingEvent = {
    id: 2,
    title: "Sept Hackathon",
    description: "Hackathon details to be added soon. Registration starts from 13th Sept, 2024. Stay Tuned!",
    image: "./sephackathon.png",
    date: "To be held on: 26/09/2024 || ",
    time: "04:00 PM",
  };

  const podcast = {
    id: 1,
    title: "I.R.I.S. Podcast",
    description: "Our latest podcast episode",
    image: "./podcast1.jpg",
    date: "2024-03-14 || ",
    length: "Length: 21 mins 02 secs",
  };

  return (
    <div className={styles.events}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Events</h1>
        
        {/* Upcoming Events Section */}
        <section className={styles.upcomingEvents}>
          <h2 className={styles.upcoming}>Upcoming Events</h2>
          <div className={styles.eventList}>
            <div key={upcomingEvent.id} className={styles.eventCard}>
              <img src={upcomingEvent.image} alt={upcomingEvent.title} />
              <h2>{upcomingEvent.title}</h2>
              <p>{upcomingEvent.description}</p>
              <p>
                <span>{upcomingEvent.date}</span>
                <span>{upcomingEvent.time}</span>
              </p>
              <Link to={`/events/${upcomingEvent.id}`} className={styles.btn}>
                REGISTRATION OPEN!
              </Link>
            </div>
          </div>
        </section>
        
        {/* Past Events Section */}
        <section className={styles.pastEvents}>
          <h2 className={styles.past}>Past Events</h2>
          <div className={styles.eventList}>
            <div key={pastEvent.id} className={styles.eventCard}>
              <img src={pastEvent.image} alt={pastEvent.title} />
              <h2>{pastEvent.title}</h2>
              <p>{pastEvent.description}</p>
              <p>
                <span>{pastEvent.date}</span>
                <span>{pastEvent.time}</span>
              </p>
              <Link to={`/events/${pastEvent.id}`} className={styles.btn}>
                Click to know more
              </Link>
            </div>
          </div>
        </section>
        
        {/* Podcast Section */}
        <section className={styles.podcasts}>
          <h2 className={styles.podcastTitle}>Podcasts</h2>
          <div className={styles.eventList}>
            <div key={podcast.id} className={styles.eventCard}>
              <img src={podcast.image} alt={podcast.title} />
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
              <p>
                <span>{podcast.date}</span>
                <span>{podcast.length}</span>
              </p>
              <a
                href="https://www.youtube.com/watch?v=sFbYHID_w2c"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                Listen now
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default Events;
