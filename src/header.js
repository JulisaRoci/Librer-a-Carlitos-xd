// src/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>Libreria Carlitos</h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a style={styles.navLink} href="#app.js">Inicio</a></li>
            <li style={styles.navItem}><a style={styles.navLink} href="#catalogo">Catálogo</a></li>
            <li style={styles.navItem}><a style={styles.navLink} href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#6D8B74',
    padding: '10px 20px',
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    margin: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Header;
