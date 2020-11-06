import React from "react";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import resume from "./images/resume.pdf";
import './index.css';

function Info() {
  return (
    <div>
      <div class="row">
        <h2 class="display-4" id="contact">More about me:</h2>
      </div>
      <div class="row">
        <a href="https://github.com/jnsmelinda">
          <FaGithub data-toggle="tooltip" size={60} title="Github" id="github"></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/melinda-ivanov/">
          <FaLinkedin data-toggle="tooltip" size={60} title="LinkedIn" id="linkedin"></FaLinkedin>
        </a>
        <a href={resume}>
          <FaRegFilePdf data-toggle="tooltip" size={60} title="resume" id="resume"></FaRegFilePdf>
        </a>
      </div>
    </div >
  );
}

export default Info;