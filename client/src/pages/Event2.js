import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './event2.css';

const Event2 = () => {
  const [formData, setFormData] = useState({
    team_name: '',
    leader_name: '',
    leader_phone: '',
    leader_email: '',
    leader_prn: '',
    leader_branch: '',
    member2_name: '',
    member2_phone: '',
    member2_email: '',
    member2_prn: '',
    member2_branch: '',
    member3_name: '',
    member3_phone: '',
    member3_email: '',
    member3_prn: '',
    member3_branch: '',
    member4_name: '',
    member4_phone: '',
    member4_email: '',
    member4_prn: '',
    member4_branch: '',
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\d{10}$/;
    const prnRegex = /^\d{10}$/;

    const requiredFields = [
      'team_name', 'leader_name', 'leader_phone', 'leader_email',
      'leader_prn', 'member2_name', 'member2_phone', 'member2_email',
      'member2_prn', 'member3_name', 'member3_phone', 'member3_email',
      'member3_prn', 'member4_name', 'member4_phone', 'member4_email',
      'member4_prn'
    ];

    requiredFields.forEach((key) => {
      if (formData[key].trim() === '') {
        newErrors[key] = 'This field is required';
      }
    });

    ['leader_prn', 'member2_prn', 'member3_prn', 'member4_prn'].forEach((key) => {
      if (!prnRegex.test(formData[key])) {
        newErrors[key] = 'Enter valid PRN';
      }
    });

    ['leader_phone', 'member2_phone', 'member3_phone', 'member4_phone'].forEach((key) => {
      if (!phoneRegex.test(formData[key])) {
        newErrors[key] = 'Enter valid 10 digits number';
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = document.querySelector(`input[name="${Object.keys(newErrors)[0]}"]`);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/event2', formData);

      if (response.data.success) {
        console.log('Registration successful!');
        setShowModal(true);
        setFormData({
          team_name: '',
          leader_name: '',
          leader_phone: '',
          leader_email: '',
          leader_prn: '',
          leader_branch: '',
          member2_name: '',
          member2_phone: '',
          member2_email: '',
          member2_prn: '',
          member2_branch: '',
          member3_name: '',
          member3_phone: '',
          member3_email: '',
          member3_prn: '',
          member3_branch: '',
          member4_name: '',
          member4_phone: '',
          member4_email: '',
          member4_prn: '',
          member4_branch: '',
        });
        setErrors({});
      } else {
        console.error('Error registering:', response.data.error);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const checkoutHandler = async () => {
    try {
      const amount = 1; // Replace this with the actual amount
      const { data: { key } } = await axios.get("http://localhost:5000/api/getkey");
      const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", { amount });
  
      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "I.R.I.S. MIT WPU",
        description: "Hackathon Transaction",
        image: "https://avatars.githubusercontent.com/u/160888318?v=4",
        order_id: order.id,
        callback_url: `http://localhost:5000/api/paymentverification?leader_email=${encodeURIComponent(formData.leader_email)}`,
        prefill: {
          name: formData.leader_name,
          email: formData.leader_email,
          contact: formData.leader_phone,
        },
        notes: {
          "address": "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error('Error during checkout request:', err);
    }
  };
  
  const Modal = () => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Team details saved!</h2>
          <p>*Complete the payment for successful registration*</p>
          <button className="proceed-button" onClick={checkoutHandler}>Proceed to Pay</button>
          <button onClick={() => setShowModal(false)} className="close-button">Close (Cancel Registration)</button>
        </div>
      </div>
    );
  };

  return (
    <div className="event2">
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
        <h1 className="title">Upcoming Event: September Hackathon</h1>
        <p>This is a short description of the event.</p>
        <img src="/hackathon.png" alt="Event 2 Image" />
        <div className="checkout-box">
          <h2 className="title2">Registration Fee: INR 250</h2>
          <form onSubmit={handleSubmit}>
            <h3>Team Information:</h3>
            {errors.team_name && <div className="error-text">{errors.team_name}</div>}
            <input
              type="text"
              name="team_name"
              value={formData.team_name}
              onChange={handleChange}
              placeholder="Team Name"
            />
            <h3>Leader:</h3>
            {errors.leader_name && <div className="error-text">{errors.leader_name}</div>}
            <input
              type="text"
              name="leader_name"
              value={formData.leader_name}
              onChange={handleChange}
              placeholder="Leader Name"
            />
            {errors.leader_phone && <div className="error-text">{errors.leader_phone}</div>}
            <input
              type="tel"
              name="leader_phone"
              value={formData.leader_phone}
              onChange={handleChange}
              placeholder="Leader Phone Number"
            />
            {errors.leader_email && <div className="error-text">{errors.leader_email}</div>}
            <input
              type="email"
              name="leader_email"
              value={formData.leader_email}
              onChange={handleChange}
              placeholder="Leader Email ID"
            />
            {errors.leader_prn && <div className="error-text">{errors.leader_prn}</div>}
            <input
              type="text"
              name="leader_prn"
              value={formData.leader_prn}
              onChange={handleChange}
              placeholder="Leader PRN"
            />
            <input
              type="text"
              name="leader_branch"
              value={formData.leader_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <h3>Member 2:</h3>
            {errors.member2_name && <div className="error-text">{errors.member2_name}</div>}
            <input
              type="text"
              name="member2_name"
              value={formData.member2_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member2_phone && <div className="error-text">{errors.member2_phone}</div>}
            <input
              type="tel"
              name="member2_phone"
              value={formData.member2_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member2_email && <div className="error-text">{errors.member2_email}</div>}
            <input
              type="email"
              name="member2_email"
              value={formData.member2_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {errors.member2_prn && <div className="error-text">{errors.member2_prn}</div>}
            <input
              type="text"
              name="member2_prn"
              value={formData.member2_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member2_branch"
              value={formData.member2_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <h3>Member 3:</h3>
            {errors.member3_name && <div className="error-text">{errors.member3_name}</div>}
            <input
              type="text"
              name="member3_name"
              value={formData.member3_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member3_phone && <div className="error-text">{errors.member3_phone}</div>}
            <input
              type="tel"
              name="member3_phone"
              value={formData.member3_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member3_email && <div className="error-text">{errors.member3_email}</div>}
            <input
              type="email"
              name="member3_email"
              value={formData.member3_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {errors.member3_prn && <div className="error-text">{errors.member3_prn}</div>}
            <input
              type="text"
              name="member3_prn"
              value={formData.member3_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member3_branch"
              value={formData.member3_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <h3>Member 4:</h3>
            {errors.member4_name && <div className="error-text">{errors.member4_name}</div>}
            <input
              type="text"
              name="member4_name"
              value={formData.member4_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member4_phone && <div className="error-text">{errors.member4_phone}</div>}
            <input
              type="tel"
              name="member4_phone"
              value={formData.member4_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member4_email && <div className="error-text">{errors.member4_email}</div>}
            <input
              type="email"
              name="member4_email"
              value={formData.member4_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {errors.member4_prn && <div className="error-text">{errors.member4_prn}</div>}
            <input
              type="text"
              name="member4_prn"
              value={formData.member4_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member4_branch"
              value={formData.member4_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <button type="submit">Submit</button>
          </form>
          {showModal && <Modal />}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Event Organizers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Event2;
