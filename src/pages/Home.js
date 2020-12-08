import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import ProfileImage from '../components/ProfileImage';
import Info from '../components/Info';
import Project from "../components/Project";

function Home() {

  return (
    <div>
      <Header></Header>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row" id="intro">
            <div className="col-sm-7">
              <Intro></Intro>
            </div>
            <div className="col-sm-5">
              <ProfileImage></ProfileImage>
            </div>
            <Info></Info>
          </div>

          <div className="row" id="projects">
            <h2 id="sectiontitle">Projects</h2>
          </div>
          <div className="row">
            <Project></Project>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
