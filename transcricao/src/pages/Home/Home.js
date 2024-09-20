// src/pages/Home.js
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import DailyLimit from '../../components/DailyLimit/DailyLimit';

function Home() {
  const navigate = useNavigate();

  const handleNewTranscription = () => {
    navigate('/transcriptions/new');
  };

  const handleTranscriptionList = () => {
    navigate('/transcriptions');
  };

  const { user } = useContext(AuthContext);

  if (user === undefined) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="home-container">
      <h2>Bem-vindo ao Sistema de Transcrições</h2>
      <p>Aqui você pode criar e gerenciar suas transcrições de forma fácil e rápida.</p>
      <DailyLimit />
      <div className="home-buttons">
        <button onClick={handleNewTranscription} className="home-action-button">
          Nova Transcrição
        </button>
        <button onClick={handleTranscriptionList} className="home-action-button">
          Minhas Transcrições
        </button>
      </div>
    </div>
  );
}

export default Home;
