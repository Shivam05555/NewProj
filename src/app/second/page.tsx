'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/Form.module.css';

export default function SecondPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/third?firstName=${firstName}&lastName=${lastName}&city=${city}&state=${state}`);
  };

  return (
    <div className={styles.container}>
      <h1>Step 2: City & State</h1>
      <form onSubmit={handleSubmit}className={styles.form}>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className={styles.input}
        />
        <br />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          className={styles.input}
        />
        <br />
        <button type="submit"className={styles.button}>Next</button>
      </form>
    </div>
  );
}
