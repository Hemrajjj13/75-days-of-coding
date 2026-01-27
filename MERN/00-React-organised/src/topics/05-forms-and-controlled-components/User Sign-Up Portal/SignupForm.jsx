import React, { useState } from 'react';
import styles from './SignupForm.module.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const isValid =
      name.trim().length >= 3 &&
      emailRegex.test(email) &&
      password.trim().length >= 8;

    if (isValid) {
      setSuccess(true);
    }
  };

  return (
    <div className={styles.container}>
      {!success ? (
        <form className={styles.form} onSubmit={submit}>
          <h2 className={styles.title}>Signup</h2>

          <label>Name</label>
          <input
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
          {submitted && name.trim().length < 3 && (
            <p className={styles.error}>Name must be at least 3 characters</p>
          )}

          <label>Email</label>
          <input
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          {submitted && !emailRegex.test(email) && (
            <p className={styles.error}>Enter a valid email address</p>
          )}

          <label>Password</label>
          <input
            type="password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          {submitted && password.trim().length < 8 && (
            <p className={styles.error}>
              Password must be at least 8 characters
            </p>
          )}

          <button className={styles.button}>Submit</button>
        </form>
      ) : (
        <div className={styles.successCard}>
          <h2 className={styles.successTitle}>Hey {name} 👋</h2>
          <p className={styles.successText}>
            Thank you for signing up with us. Your account has been successfully
            created and you can now explore features, manage your profile, and
            get started right away.
          </p>

          <div className={styles.actions}>
            <button className={styles.secondaryBtn}>Go to Dashboard</button>
            <button className={styles.secondaryBtn}>View Profile</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
