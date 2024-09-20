import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute';

import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import NewTranscription from './pages/Transcriptions/NewTranscription';
import TranscriptionList from './pages/Transcriptions/TranscriptionsList';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/transcriptions/new" element={<ProtectedRoute element={<NewTranscription />} />} />
          <Route path="/transcriptions" element={<ProtectedRoute element={<TranscriptionList />} />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;