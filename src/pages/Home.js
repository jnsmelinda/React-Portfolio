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
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <div class="row" id="intro">
            <div class="col-sm-7">
              <Intro></Intro>
            </div>
            <div class="col-sm-5">
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