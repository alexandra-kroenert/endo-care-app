// src/pages/SignUpPage.js
import React from 'react';
import SignUp from '../../components/SignUp';
import styles from './SignUpPage.module.css';

function SignUpPage() {
  return (
    <div className={styles.h1}>
      <h1>Sign Up</h1>
      <SignUp />
    </div>
  );
}

export default SignUpPage;
