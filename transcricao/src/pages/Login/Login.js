// src/pages/Login.js
import React, { useState, useContext, useEffect } from 'react';
import api from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, setUser, checkAuth } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      // Se o usuário já estiver autenticado, redireciona para a home
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/login', { email, password });
      alert(response.data.message);
      await checkAuth(); // Atualiza o estado do usuário no contexto
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Erro ao fazer login');
      }
    }
  };

  if (user === undefined) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        &nbsp; &nbsp; &nbsp;
        <Link to="/signup">Ainda não tenho conta</Link><br/>
      
        <Link to="/reset-password">Esqueci minha senha</Link><br/>
      </form>
    </div>
  );
}

export default Login;
