import React, { PropTypes } from 'react';

// Import Style
import styles from './HardSkills.css';

//Import Components
import SkillBar from '../SkillBar/SkillBar';

function HardSkills(props, context) {
  let isVisible = props.isVisible;
  let width = 0
  
  const hard_program_arr = [
    {name: 'HTML', percentage: 90},
    {name: 'PHP', percentage: 90},
    {name: 'C', percentage: 60},
    {name: 'JS', percentage: 90}
  ];
  const hard_langs_arr = [
    {name: 'Français', percentage: 90},
    {name: 'English', percentage: 90},
    {name: 'Español', percentage: 90},
    {name: 'Italiano', percentage: 60},
  ];
  const hard_stacks_arr = [
    {name: 'LARAVEL', percentage: 80},
    {name: 'MERN', percentage: 60},
  ];
  let hard_programs;
  let hard_langs;
  if (isVisible) {
    hard_programs = hard_program_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
    );
    hard_langs = hard_langs_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
    );
  } else {
    hard_programs = hard_program_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={0} />
    );
    hard_langs = hard_langs_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={0} />
    );
  }
  
  return (
    <div className={styles.hardSkills}>
      <div className={styles.hardLanguages}>
        <div className={styles.hardTitle}>Languages</div>
        {hard_langs}
      </div>
      <div className={styles.hardProgramming}>
      <div className={styles.hardTitle}>Programming Languages</div>
        {hard_programs}
      </div>
      <div className={styles.hardStacks}>
      
      </div>
    </div>
  );
}

HardSkills.propTypes = {
};

export default HardSkills;
