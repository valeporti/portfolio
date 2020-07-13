import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './HardSkills.css';

//Import Components
import SkillBar from '../SkillBar/SkillBar';

//Other funcitonalities
import VisibilitySensor from 'react-visibility-sensor';

function HardSkills(props, context) {
  let isVisible = props.isVisible;
  const hard_program_arr = [
    {name: 'PHP', percentage: 100},
    {name: 'C', percentage: 80},
    {name: 'JS', percentage: 100},
    {name: 'VBA', percentage: 100},
    {name: 'Python', percentage: 100},
    {name: 'Matlab', percentage: 60},
    {name: 'Java', percentage: 80},
    {name: 'OCAML', percentage: 80},
    {name: 'Scala', percentage: 80},
  ];
  const hard_langs_arr = [
    {name: 'Français', percentage: 100},
    {name: 'English', percentage: 100},
    {name: 'Español', percentage: 100},
    {name: 'Italiano', percentage: 60},
  ];
  const hard_stacks_arr = [
    {name: 'LARAVEL', percentage: 100},
    {name: 'MERN', percentage: 100},
    {name: 'Hadoop', percentage: 100},
    {name: 'PyNLP', percentage: 80},
    {name: 'PyML', percentage: 100},
    {name: 'PyData', percentage: 100},
  ];
  const hard_frame_arr = [
    {name: 'ExpressJS', percentage: 100},
    {name: 'React/Redux', percentage: 100},
    {name: 'D3.js', percentage: 80},
    {name: 'Mongoose', percentage: 100},
    {name: 'Spark', percentage: 80},
    {name: 'Scikit-L', percentage: 80},
    {name: 'Keras', percentage: 80},
  ];
  const hard_others_arr = [
    {name: 'HTML', percentage: 100},
    {name: 'CSS', percentage: 80},
    {name: 'SQL', percentage: 100},
    {name: 'Git', percentage: 100},
    {name: 'NPM', percentage: 80},
    {name: 'Mongo', percentage: 100},
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
        <div className={styles.hardTitle}><FormattedMessage id="ttLang" /></div>
        {hard_langs}
      </div>
      <div className={styles.hardProgramming}>
        <div className={styles.hardTitle}><FormattedMessage id="ttProgLang" /></div>
        {hard_programs}
      </div>
      <div className={styles.hardStacks}>
        <div className={styles.hardTitle}><FormattedMessage id="ttStacks" /></div>
        {hard_stack}
      </div>
      <div className={styles.hardFrame}>
        <div className={styles.hardTitle}><FormattedMessage id="ttFrameworks" /></div>
        {hard_frame}
      </div>
      <div className={styles.hardOther}>
        <div className={styles.hardTitle}><FormattedMessage id="ttOther" /></div>
        {hard_other}
      </div>
      
    </div>
  );
}

HardSkills.propTypes = {
};

export default HardSkills;
