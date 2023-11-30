import React from 'react';
import styles from './Endometriosis.module.css';

function Endometriosis() {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
      What is Endometriosis?
      </div>
      <div>
        <ul className={styles.container}>
          <li className={styles.textCard}>
          Prevalence: Endometriosis affects approximately 1 in 10 women during their reproductive years, which is estimated to be about 176 million women worldwide.
          </li>
          <li className={styles.textCard}>
          Diagnosis Delay: On average, it can take up to 6 to 10 years for a woman to receive an accurate diagnosis of endometriosis. This is due to a combination of factors including normalization of symptoms and variability in disease presentation.
          </li>
        </ul>
        <ul className={styles.container}>
          <li className={styles.textCard}>
          Symptoms: The most common symptom of endometriosis is pelvic pain, often associated with menstrual periods. Although many experience cramping during their menstrual periods, those with endometriosis typically describe menstrual pain that's far worse than usual.
          </li>
          <li className={styles.textCard}>
          Fertility Impact: About 30% to 50% of women with endometriosis may experience infertility. Endometriosis is one of the top three causes of female infertility.
          </li>
        </ul>
        <ul className={styles.container}>
          <li className={styles.textCard}>
          Economic Burden: The economic impact of endometriosis is significant, with estimates suggesting that it may cost approximately $9,579 per woman annually in the United States, accounting for both healthcare costs and loss of productivity.
          </li>
          <li className={styles.textCard}>
          Treatment: While there is no cure for endometriosis, treatments do exist and can include pain medications, hormonal therapies, and surgery. The choice of treatment depends on the severity of symptoms and other factors. 
          </li>
        </ul>
        <ul className={styles.container}>
          <li className={styles.textCard}>
          Mental Health Impact: Women with endometriosis are at a higher risk of developing anxiety, depression, and other mental health issues, largely due to chronic pain and fertility challenges associated with the condition.
          </li>
          <li className={styles.textCard}>
          Risk Factors: Factors that may increase a woman’s risk of developing endometriosis include never giving birth, starting your period at an early age, going through menopause at an older age, short menstrual cycles, and higher levels of estrogen in the body.
          </li>
        </ul>
        
      
    </div>
    </div>
    
  );
}

export default Endometriosis;
