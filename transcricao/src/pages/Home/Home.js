// src/pages/Home.js
import React, { useContext } from 'react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="home-container">
      <h1>Bem-vindo ao Serviço de Transcrição</h1>
      <nav>
        <ul>
          <li><Link to="/transcriptions/new">Nova Transcrição</Link></li>
          <li><Link to="/transcriptions">Minhas Transcrições</Link></li>
          <br/>
          <LogoutButton />
        </ul>
      </nav>
    </div>
  );
}

export default Home;
