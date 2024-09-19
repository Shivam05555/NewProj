'use client';

import { useSearchParams } from 'next/navigation';
import styles from '../styles/Form.module.css';

export default function FinalPage() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const city = searchParams.get('city');
  const state = searchParams.get('state');
  const email = searchParams.get('email');
  const phone = searchParams.get('phone');

  const handleSubmitToAPI = async () => {
    const data = {
      firstName,
      lastName,
      city,
      state,
      email,
      phone,
    };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Data submitted successfully');
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Review Your Information</h1>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>State:</strong> {state}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>

      <button onClick={handleSubmitToAPI} className={styles.button}>
          Submit
      </button>
    </div>
  );
}
