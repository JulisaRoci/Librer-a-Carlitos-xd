// src/BookList.js
import React from 'react';

const books = [
  { id: 1, title: 'Libro 1', imgSrc: process.env.PUBLIC_URL + '/imagenes/libro1.jpg' },
  { id: 2, title: 'Libro 2', imgSrc: process.env.PUBLIC_URL + '/imagenes/libro2.jpg' },
  { id: 3, title: 'Libro 3', imgSrc: process.env.PUBLIC_URL + '/imagenes/libro3.jpg' },
];

const BookList = () => {
  return (
    <div style={styles.container}>
      {books.map(book => (
        <div key={book.id} style={styles.bookItem}>
          <img src={book.imgSrc} alt={book.title} style={styles.bookImage} />
          <p style={styles.bookTitle}>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
  },
  bookItem: {
    margin: '10px',
    textAlign: 'center',
  },
  bookImage: {
    width: '150px',
    height: '200px',
    objectFit: 'cover',
  },
  bookTitle: {
    marginTop: '10px',
    fontSize: '16px',
  },
};

export default BookList;
