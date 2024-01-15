import React, { useState, useEffect } from 'react';
import HorizontalCalendar from '../../components//HorizontalCalendar'; // Ensure this is correctly imported
import styles from './SymptomTracker.module.css';

function SymptomTracker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  /* const [symptomSeverity, setSymptomSeverity] = useState({}); */


  useEffect(() => {
    // Load stored symptoms from local storage when selectedDate changes
    const dateKey = selectedDate.toISOString().split('T')[0];
    const storedSymptoms = JSON.parse(localStorage.getItem(`symptoms-${dateKey}`)) || [];
    setSelectedSymptoms(storedSymptoms);
  }, [selectedDate]);

  const symptoms = ['menstrual cramps', 'menstrual bleeding','bleeding or spotting between periods',
    'pelvic pain', 'lower back pain', 'pain during or after sex', 'pain during urination', 'fatigue',
    'pain during bowel movements', 'diarrhea', 'constipation', 'headache', 'nausea',
    'bloating', 'mood swings']; // Add more symptoms as needed

  const handleSymptomClick = (symptom) => {
    const newSelectedSymptoms = selectedSymptoms.includes(symptom) 
      ? selectedSymptoms.filter(s => s !== symptom) 
      : [...selectedSymptoms, symptom];
    setSelectedSymptoms(newSelectedSymptoms);

    const dateKey = selectedDate.toISOString().split('T')[0];
    localStorage.setItem(`symptoms-${dateKey}`, JSON.stringify(newSelectedSymptoms));
  };

  return (
    <div className={styles.tracker}>
      <h2>Symptom Tracker</h2>
      <HorizontalCalendar onDateSelect={setSelectedDate} />
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
