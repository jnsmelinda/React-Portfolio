import React from "react";
import './index.css';

function Intro() {
  return (
    <div>
      <h1 className="display-4" id="greeting">Hi there!</h1>
      <p className="lead">My name is <strong>Melinda Ivanov</strong>, nice to meet you.</p>
      <p>I am a technical-minded developer leveraging an MSc degree in earth sciences from
      University of Szeged while currently working towards a full-stack web development
      certificate at University of Washington. My experience includes taking responsibilities
      in design, technical, and development decisions in academic projects using newly
      developed skills in Java backend and JavaScript full stack. As a passionate problem
      solver, my aim is to deliver quality products by applying clean design/coding principles
      and following agile methodologies. I enjoy creating user-friendly applications while
      utilizing both my engineering and science qualifications. I am a fast learner who is
      enthusiastic about innovative techniques and excited to leverage my skills as part of a
                                fast-paced, quality-driven team.</p>
    </div>
  );
}

export default Intro;