import React from "react";
import './index.css';

function Intro() {
  return (
    <div>
      <h1 className="display-4" id="greeting">Hi there!</h1>
      <p className="lead">My name is <strong>Melinda Ivanov</strong>, nice to meet you.</p>
      <p>I am a technical-minded developer leveraging MSc degree in earth sciences from University of Szeged and earned
        full-stack web development certificate at University of Washington where I honed skills in JavaScript, React,
        Node.js and MySQL, MongoDB and gained special interest in server-side technologies. My experience includes taking
        responsibilities in design, technical, and development decisions in academic projects using newly developed skills.
        I am a passionate problem solver, aiming to deliver quality products by applying clean design/coding principles
        while following agile methodologies and a fast learner who is enthusiastic about innovative techniques and excited
        to leverage skills as part of a fast-paced, quality-driven team. </p>
    </div>
  );
}

export default Intro;
