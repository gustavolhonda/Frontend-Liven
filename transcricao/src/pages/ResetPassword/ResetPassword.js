import React, { useState } from 'react';
import api from '../../services/api';
import './ResetPassword.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/reset-password', { email });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao resetar a senha');
      setMessage('');
    }
  };

  return (
    <div className="reset-password-container">  
        <h2>Redefinir Senha</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Resetar Senha</button>
      </form>
    </div>  
  );
}

export default ResetPassword;