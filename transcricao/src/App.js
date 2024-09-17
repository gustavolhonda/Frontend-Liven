import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import NewTranscription from './pages/NewTranscription';
import TranscriptionList from './pages/TranscriptionsList';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/transcriptions/new" element={<ProtectedRoute element={<NewTranscription />} />} />
          <Route path="/transcriptions" element={<ProtectedRoute element={<TranscriptionList />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;