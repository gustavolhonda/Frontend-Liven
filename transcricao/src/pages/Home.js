// src/pages/Home.js
import React, { useContext } from 'react';
import LogoutButton from '../components/LogoutButton';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Home() {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Bem-vindo ao Serviço de Transcrição</h1>
      <nav>
        <ul>
          <li><Link to="/transcriptions/new">Nova Transcrição</Link></li>
          <li><Link to="/transcriptions">Minhas Transcrições</Link></li>
          <li><LogoutButton /></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
