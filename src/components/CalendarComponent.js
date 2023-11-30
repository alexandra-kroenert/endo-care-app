import React, { useState } from 'react';
import Calendar from 'react-calendar';
import SymptomTracker from './SymptomTracker'; // Import your SymptomTracker component
import 'react-calendar/dist/Calendar.css'; // Standard calendar styling
import styles from './CalendarComponent.module.css';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles.calendarComponent}>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <div className={styles.symptomTrackerSection}>
        <h3>Track Symptoms for: {date.toDateString()}</h3>
        <SymptomTracker date={date} />
      </div>
    </div>
  );
}

export default CalendarComponent;
