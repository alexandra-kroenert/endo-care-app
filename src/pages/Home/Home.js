import React from 'react';
import styles from './Home.module.css';
// Import your image from the assets
import groupPhoto from '../../Images/groupPhoto.png';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>EndoCare - Your Endometriosis Symptom Tracker</h1>
        <p className={styles.subtitle}>The more your understand about your body and your endo, the easier it will be to decide which treatment works best for you.</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={groupPhoto} alt="Group of Women" className={styles.groupImage} />
      </div>
    </div>
  );
}

export default Home;