import React from "react";
import profile from "./profile.jpg";
import './index.css'

function ProfileImage() {
  return (
    <div>
      <img src={profile} alt="Profile" class="center" id="profileImg"></img>
    </div>
  );
}

export default ProfileImage;