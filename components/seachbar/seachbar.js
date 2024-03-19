import styles from './seachbar.module.css';
import React, { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.flexContainer}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="検索..."
      />
      <button type="submit">検索</button>
    </form>
  );
}