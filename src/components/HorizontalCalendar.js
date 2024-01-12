import React, { useState } from 'react';
import styles from './HorizontalCalendar.module.css';

const HorizontalCalendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDates = (year, month) => {
    const dates = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      dates.push(new Date(year, month, day));
    }

    return dates;
  };

  const handleDateClick = date => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + offset));
    setCurrentDate(newDate);
  };

  return (
    <div>
      <div className={styles.monthSelector}>
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <span>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</span>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div className={styles.calendarContainer}>
        {getDates(currentDate.getFullYear(), currentDate.getMonth()).map(date => (
          <button
            key={date.toISOString()}
            className={`${styles.dateButton} ${selectedDate.toDateString() === date.toDateString() ? styles.selectedDate : ''}`}
            onClick={() => handleDateClick(date)}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCalendar;
