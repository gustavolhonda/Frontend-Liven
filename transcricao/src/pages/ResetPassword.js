import React, { useState } from 'react';
import api from '../services/api';

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
    <form onSubmit={handleReset}>
      <h2>Esqueci minha senha</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br/>
      <br/>
      <button type="submit">Resetar Senha</button>
    </form>
  );
}

export default ResetPassword;