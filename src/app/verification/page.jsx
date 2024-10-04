'use client'

import { useState } from 'react';
import resendVerification from '@/lib/resendVerification'; // Import the function

const ResendVerificationPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResend = async (e) => {
    e.preventDefault();
    await resendVerification(email);
    setMessage('If this email exists, a new verification link has been sent.');
  };

  return (
    <div>
      <h2>Resend Email Verification</h2>
      <form onSubmit={handleResend}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Resend Verification</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResendVerificationPage;
