'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/Form.module.css';

export default function ThirdPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const city = searchParams.get('city');
  const state = searchParams.get('state');

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/final?firstName=${firstName}&lastName=${lastName}&city=${city}&state=${state}&email=${email}&phone=${phone}`);
  };

  return (
    <div className={styles.container}>
      <h1>Step 3: Email & Phone</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <br />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={styles.input}
        />
        <br />
        <button type="submit" className={styles.button}>Next</button>
      </form>
    </div>
  );
}
