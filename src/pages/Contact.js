import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className='col-sm-6'>
                <h1 className="display-4" id="greeting">Let's connect!</h1>
                <div className="row">
                  <a href="https://github.com/jnsmelinda">
                    <FaGithub data-toggle="tooltip" size={70} title="Github" id="github"></FaGithub>
                  </a>
                  <a href="https://www.linkedin.com/in/melinda-ivanov/">
                    <FaLinkedin data-toggle="tooltip" size={70} title="LinkedIn" id="linkedin"></FaLinkedin>
                  </a>
                </div>
              </div>
              <div className='col-sm-6'>
                <form action="mailto:jns.melinda@gmail.com" method="GET" target="top">
                  <div className="form-group">
                    <label for="email-subject" style={{color: "rgb(143, 44, 90)"}}>Subject</label>
                    <input name="subject" className="form-control" id="email-subject" placeholder="Hi Melinda! Let's Connect"></input>
                      <label for="email-body" style={{color: "rgb(143, 44, 90)"}}>Message</label>
                      <textarea name="body" className="form-control" id="email-body" rows="3"></textarea>
                  </div>
                    <button type="submit" className="btn btn-primary" id="sendButton">Send</button>     
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

