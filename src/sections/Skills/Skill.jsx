import React from 'react';
import styles from './SkilStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-light.svg';

function SkillItem({ title, items }) {
  return (
    <div className={styles.skillGroup}>
      <h3>{title}</h3>
      <ul>
        {items.map((skill, index) => (
          <li key={index}>
            <img src={checkMarkIcon} alt="CheckMark" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skill() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillWrapper}>
        <SkillItem 
          title="Programming Languages" 
          items={['C++', 'Python', 'JavaScript', 'HTML', 'PHP', 'CSS']} 
        />
        <SkillItem 
          title="Frameworks" 
          items={['TensorFlow', 'Django']} 
        />
        <SkillItem 
          title="Database" 
          items={['MySQL']} 
        />
      </div>
    </section>
  );
}

export default Skill;
