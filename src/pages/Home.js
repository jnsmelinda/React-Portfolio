import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import ProfileImage from '../components/ProfileImage';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <div class="row" id="intro">
            <div class="col-sm-7">
              <Intro></Intro>
            </div>
            <div class="col-sm-5">
              <ProfileImage></ProfileImage>


              <div class="row">
                <h2 class="display-4" id="contact">More about me:</h2>
              </div>
              <div class="row">
                {/* <a href="https://www.linkedin.com/in/melinda-ivanov/" id="linkedin" class="fa fa-linkedin fa-4x" data-toggle="tooltip" data-placement="right" title="Linkedin"></a>
                <a href="https://github.com/jnsmelinda" class="fa fa-github fa-4x" data-toggle="tooltip" data-placement="right" title="GitHub" id="github"></a>
                <a href="assets/cv/resume.pdf" class="fa fa-file-pdf-o fa-4x" data-toggle="tooltip" data-placement="right" title="Resume" id="resume"></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;