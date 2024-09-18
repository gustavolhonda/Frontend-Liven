import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import './LogoutButton.css';

function LogoutButton() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await api.post('/api/logout');
      setUser(null);
      alert('Logout realizado com sucesso');
      navigate('/login');
    } catch (err) {
      console.error('Erro ao fazer logout', err);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
}

export default LogoutButton;