import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <div class="row">
              <div class='col-sm-6'>
                <h1 class="display-4" id="greeting">Let's connect!</h1>
                <div class="row">
                  <a href="https://github.com/jnsmelinda">
                    <FaGithub data-toggle="tooltip" size={70} title="Github" id="github"></FaGithub>
                  </a>
                  <a href="https://www.linkedin.com/in/melinda-ivanov/">
                    <FaLinkedin data-toggle="tooltip" size={70} title="LinkedIn" id="linkedin"></FaLinkedin>
                  </a>
                </div>
              </div>
              <div class='col-sm-6'>
                <form action="mailto:jns.melinda@gmail.com" method="GET" target="top">
                  <div class="form-group">
                    <label for="email-subject" style={{color: "rgb(143, 44, 90)"}}>Subject</label>
                    <input name="subject" class="form-control" id="email-subject" placeholder="Hi Melinda! Let's Connect"></input>
                      <label for="email-body" style={{color: "rgb(143, 44, 90)"}}>Message</label>
                      <textarea name="body" class="form-control" id="email-body" rows="3"></textarea>
                  </div>
                    <button type="submit" class="btn btn-primary" id="sendButton">Send</button>     
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;

