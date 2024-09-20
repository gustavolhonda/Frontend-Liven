import React, { useEffect, useState } from 'react';
import api from '../../services/api'; // Axios instance
import './DailyLimit.css';

function DailyLimit() {
  const [remaining, setRemaining] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchDailyLimit = async () => {
    try {
      const response = await api.get('/transcriptions/daily-limit');
      setRemaining(response.data.remainingTranscriptions);
    } catch (err) {
      setError('Erro ao obter o limite diário');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyLimit();
  }, []);

  return (
    <div className="daily-limit-container">
      {loading ? (
        <p>Carregando limite diário...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <p>Você ainda tem {remaining} transcrições disponíveis hoje.</p>
      )}
    </div>
  );
}

export default DailyLimit;
