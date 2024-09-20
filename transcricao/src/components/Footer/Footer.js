import {React, useContext} from 'react';
import './Footer.css';
import { AuthContext } from '../../context/AuthContext';

function Footer() {
  const { user } = useContext(AuthContext); 

  return (
    <footer className="footer">
      <div className="footer-content">
        {user ? (
          <p>Logged in as: <strong>{user.email}</strong></p>
        ) : (
          <p>Você não está logado.</p>
        )}
        <p>&copy; {new Date().getFullYear()} TranscriMais. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;