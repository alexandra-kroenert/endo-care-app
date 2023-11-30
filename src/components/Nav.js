import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import SignOutButton from './SignOutButton';
import logoImage from '../Images/EndoCareLogo4.svg'; // Make sure the path is correct


function Nav() {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logoImage} alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.navList}>
        {/* Navigation links */}
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/endometriosis">Endometriosis</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/tracker">Tracker</Link>
        </li>
        {/* ... other list items */}
        {!isAuthenticated && (
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/signup">Sign Up</Link>
          </li>
        )}
        {isAuthenticated && (
          <li className={styles.navItem}>
            <SignOutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
