import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './NewTranscription.css';

function NewTranscription() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Por favor, selecione um arquivo MP4');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setMessage('Enviando arquivo...');
      const response = await api.post('/api/transcriptions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setError('');
      setFile(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao enviar arquivo');
      setMessage('');
    }
  };

  return (
    <div className='new-transcription-container'>
      <h2>Nova Transcrição</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".mp4" onChange={handleFileChange} />
        <br /><br />
        <button type="submit">Enviar</button>
      </form>
      <br />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default NewTranscription;