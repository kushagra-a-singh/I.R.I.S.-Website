import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
        <div className="container">
            <div className="row ">
              <div className="col-md-3 px-5">
                <h5 class="py-2 px-5">About</h5>
                <ul className="list-unstyled px-5">
                  <li><Link to="/about" className="text-light">Club</Link></li>
                  <li><Link to="/about" className="text-light">Our Team</Link></li>
                </ul>
              </div>
              <div className="col-md-3 px-5">
                <h5 class="py-2 px-5">Events</h5>
                <ul className="list-unstyled px-5">
                  <li><Link to="/events" className="text-light">Hackathons</Link></li>
                  <li><Link to="/events" className="text-light">Podcasts</Link></li>
                </ul>
              </div>
              <div className="col-md-3 px-5">
                <h5 class="py-2 px-5">Follow Us</h5>
                <ul className="list-unstyled px-5">
                  <li><a href="https://www.instagram.com/iris_mitwpu/" className="text-light" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://chat.whatsapp.com/Lnu3YpiEM4WDmwCjwDCY6n" className="text-light" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
                </ul>
              </div>
              <div className="col-md-3 px-5">
                <h5 class="py-2 px-5">Policies</h5>
                <ul className="list-unstyled px-5">
                <li><Link to="/policy" className="text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-white">Terms and Conditions</Link></li>
                <li><Link to="/refund" className="text-white">Refund Policy</Link></li>
                </ul>
              </div>
            </div>
            <hr class="mx-0 "></hr>
            <div className="text-center mt-4">
              <p>&copy; 2024 I.R.I.S. All rights reserved</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;