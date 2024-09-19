import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import HomeButton from '../../components/HomeButton/HomeButton';
import './TranscriptionsList.css';

function TranscriptionList() {
  const [transcriptions, setTranscriptions] = useState([]);
  const [error, setError] = useState('');

  const fetchTranscriptions = async () => {
    try {
      const response = await api.get('/api/transcriptions');
      setTranscriptions(response.data.transcriptions);
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao obter transcrições');
    }
  };

  useEffect(() => {
    fetchTranscriptions();
    // Opcional: Atualizar a cada X segundos
    const interval = setInterval(fetchTranscriptions, 10000); // Atualiza a cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  const handleDownload = async (id) => {
    try {
      const response = await api.get(`/api/transcriptions/${id}/download`, {
        responseType: 'blob',
      });
      // Criar um link para download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `transcription_${id}.txt`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao baixar transcrição');
    }
  };

  return (
    <div className="transcription-list-container">
      <h2>Minhas Transcrições</h2>
      <br />
      {error && <p className="error">{error}</p>}
      <table className="transcription-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Arquivo</th>
            <th>Status</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {transcriptions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.originalFileName}</td>
              <td>{t.status}</td>
              <td>{new Date(t.createdAt).toLocaleString()}</td>
              <td>
                {t.status === 'completed' && (
                  <button onClick={() => handleDownload(t.id)} className="download-button">
                    Baixar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TranscriptionList;
