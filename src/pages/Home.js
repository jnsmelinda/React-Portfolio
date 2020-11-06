import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import ProfileImage from '../components/ProfileImage';
import Info from '../components/Info';

const Home = () => {
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;