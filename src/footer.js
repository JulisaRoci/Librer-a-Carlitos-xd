// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Libreria Carlitos. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#6D8B74',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    marginTop: '20px'
  }
};

export default Footer;
