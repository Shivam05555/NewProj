'use client';
import styles from '../styles/Form.module.css';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/second?firstName=${firstName}&lastName=${lastName}`);
  };

  return (
    <div className={styles.container}>
      <h1>Step 1: First Name & Last Name</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className={styles.input}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className={styles.input}
        />
        <br />
        <button type="submit" className={styles.button}>Next</button>
      </form>
    </div>
  );
}
