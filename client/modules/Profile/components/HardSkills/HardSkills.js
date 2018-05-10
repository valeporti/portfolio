import React, { PropTypes } from 'react';

// Import Style
import styles from './HardSkills.css';

//Import Components
import SkillBar from '../SkillBar/SkillBar';

//Other funcitonalities
import VisibilitySensor from 'react-visibility-sensor';

function HardSkills(props, context) {
  let isVisible = props.isVisible;
  const hard_program_arr = [
    {name: 'PHP', percentage: 90},
    {name: 'C', percentage: 60},
    {name: 'JS', percentage: 90},
    {name: 'VBA', percentage: 90},
    {name: 'Python', percentage: 60},
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
  const hard_frame_arr = [
    {name: 'Node.js', percentage: 80},
    {name: 'React', percentage: 90},
    {name: 'Redux', percentage: 80},
    {name: 'Express.js', percentage: 80},
    {name: 'D3.js', percentage: 80},
    {name: 'Mongoose', percentage: 60},
  ];
  const hard_others_arr = [
    {name: 'HTML', percentage: 90},
    {name: 'CSS', percentage: 70},
    {name: 'SQL', percentage: 80},
    {name: 'NoSQL', percentage: 70},
    {name: 'Git', percentage: 80},
    {name: 'NPM', percentage: 70},
  ];
  let hard_programs;
  let hard_langs;
  let hard_other;
  let hard_frame;
  let hard_stack;
  if (isVisible) {
    hard_programs = hard_program_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
    );
    hard_langs = hard_langs_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
    );
    hard_other = hard_others_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
    );
    hard_frame = hard_frame_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
    );
    hard_stack = hard_stacks_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
    );
  } else {
    hard_programs = hard_program_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={0} />
    );
    hard_langs = hard_langs_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={0} />
    );
    hard_other = hard_others_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={0} />
    );
    hard_frame = hard_frame_arr.map((skill, index) =>
      <SkillBar key={index} name={skill.name} percentage={0} />
    );
    hard_stack = hard_stacks_arr.map((skill, index) =>
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
        <div className={styles.hardTitle}>Stacks</div>
        {hard_stack}
      </div>
      <div className={styles.hardFrame}>
        <div className={styles.hardTitle}>Frameworks</div>
        {hard_frame}
      </div>
      <div className={styles.hardOther}>
        <div className={styles.hardTitle}>Other</div>
        {hard_other}
      </div>
      
    </div>
  );
}

HardSkills.propTypes = {
};

export default HardSkills;
