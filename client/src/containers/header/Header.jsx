import React, { useState } from 'react';
import axios from 'axios';
import people from '../../assets/people.png';
import logo from '../../assets/logo.svg';
import './header.css';

const Header = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const date = new Date().toISOString();
      //await axios.post('http://localhost:5000/emails', { email, date });
      await axios.post('https://skillful-ai-io.onrender.com/emails', { email, date });

      setEmail('');
      setMessage('Congratulations you have joined to the waiting list!');
      setShowModal(true);
    } catch (error) {
      setMessage('Something went wrong, please try again later.');
    }
  };

  return (
    <div className="skillfulai__header section__padding" id="home">
      <div className="skillfulai__header-content">
        <h1 className="header_gradient__text">Let&apos;s Build Something amazing with Skillful-AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <button type="submit">WHITELIST ME</button>
        

        
      </div>

      <div className="skillfulai__header-image">
        <img src={logo} alt='logo'/>
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
