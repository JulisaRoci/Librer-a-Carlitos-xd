// src/App.js
import React from 'react';
import Header from './header';
import Footer from './footer';
import BookList from './booklist';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main style={styles.main}>
        <h2>Bienvenidos a la Libreria Carlitos</h2>
        <p>Estos son nuestros libros disponibles.</p>
        <BookList />
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  main: {
    padding: '20px',
    minHeight: '80vh'
  }
};

export default App;
