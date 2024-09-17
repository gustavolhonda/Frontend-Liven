// src/pages/Home.js
import React, { useContext } from 'react';
import LogoutButton from '../components/LogoutButton';
import { AuthContext } from '../context/AuthContext';

function Home() {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Bem-vindo, {user && user.email}</h1>
      <LogoutButton />
    </div>
  );
}

export default Home;
