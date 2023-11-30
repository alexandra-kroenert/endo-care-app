// src/pages/SignInPage.js
import React from 'react';
import SignIn from '../../components/SignIn';
import { Link } from 'react-router-dom';
/* import styles from './SignInPage.module.css'; */

function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <SignIn />
      {/* Optionally, provide a link to the Sign Up page in case the user doesn't have an account yet */}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default SignInPage;
