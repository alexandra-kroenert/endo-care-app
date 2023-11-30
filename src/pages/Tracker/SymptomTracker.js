import React, { useState, useEffect } from 'react';
import styles from './SymptomTracker.module.css';

function SymptomTracker({ date }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    // Check if date is defined
    if (!date) {
      console.error("Date prop is undefined.");
      return;
    }

    // Load stored symptoms from local storage on component mount
    const dateKey = date.toISOString().split('T')[0];
    const storedSymptoms = JSON.parse(localStorage.getItem(`symptoms-${dateKey}`)) || [];
    setSelectedSymptoms(storedSymptoms);
  }, [date]);

  // Return a fallback UI if date is not provided
  if (!date) {
    return <div>Invalid date</div>;
  }

  const symptoms = ['Pain', 'Fatigue', 'Nausea', 'Headache', 'Bloating']; // Add more symptoms as needed

  const handleSymptomClick = (symptom) => {
    const newSelectedSymptoms = selectedSymptoms.includes(symptom) 
      ? selectedSymptoms.filter(s => s !== symptom) 
      : [...selectedSymptoms, symptom];
    setSelectedSymptoms(newSelectedSymptoms);
    localStorage.setItem(`symptoms-${date.toISOString().split('T')[0]}`, JSON.stringify(newSelectedSymptoms));
  };

  return (
    <div className={styles.tracker}>
      <h2>Symptom Tracker</h2>
      <div className={styles.symptoms}>
        {symptoms.map(symptom => (
          <button 
            key={symptom}
            className={`${styles.symptomButton} ${selectedSymptoms.includes(symptom) ? styles.selected : ''}`}
            onClick={() => handleSymptomClick(symptom)}
          >
            {symptom}
          </button>
        ))}
      </div>
      <p className={styles.disclaimer}>Note: Data is stored locally. Clearing cookies and cache will delete the data.</p>
    </div>
  );
}

export default SymptomTracker;
