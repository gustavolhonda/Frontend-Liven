import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeButton.css';

function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button onClick={handleClick} className="home-button">
      Home
    </button>
  );
}

export default HomeButton;