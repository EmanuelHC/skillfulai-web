import React, { useState } from 'react';
import axios from 'axios';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5000/emails', { email });
      setEmail('');
      setMessage('Congratulations for joining the waiting list!');
      setShowModal(true);
    } catch (error) {
      setMessage('Something went wrong, please try again later.');
    }
  };

  return (
    <div className="skillfulai__header section__padding" id="home">
      <div className="skillfulai__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with Skillful-AI</h1>
        <p>Welcome to Skillful AI, where we transform the art of personalization into a science. We empower you to craft your own AI experience, tailored to your unique needs and skills. With our innovative platform, you can create, share, and monetize AI skills, shaping the future of personalized AI. Let's build something amazing with Skillful AI, where your vision becomes reality.</p>

        <form onSubmit={handleSubmit} className="skillfulai__header-content__input">
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Get Started</button>
        </form>

        <div className="skillfulai__header-content__people">
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="skillfulai__header-image">
        <img src={ai} alt='ai'/>
      </div>

      {showModal && (
        <div className="modal">
          <h2>{message}</h2>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Header;
