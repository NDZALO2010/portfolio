import React from 'react';

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      <div className="skill-category">
        <h3>Frontend</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>Backend</h3>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>PL/SQL</li>
          <li>Django</li>
          <li>Express.js</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>Soft Skills</h3>
        <ul>
          <li>Time Management</li>
          <li>Interpersonal</li>
          <li>Communication</li>
          <li>Teamwork</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
