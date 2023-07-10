import React from "react";
import {
  FaBriefcase,
  FaLinkedinIn,
  FaPlusCircle,
  FaLocationArrow,
  FaTwitter,
  FaLink,
} from "react-icons/fa";
import profilePic from "@assets/images/pfp.png";

function Friends() {
  return (
    <div className="container">
      <div>
        <span>
          <span className="profileImg">
            <img src={profilePic} alt="" />
          </span>
          <div>
            <h2>Vishal Karasi</h2>
            <span className="label">Follower: 323</span>
          </div>
        </span>
        <span className="icon">
          <FaPlusCircle />
        </span>
      </div>
      <div>
        <p>
          <span className="icon">
            <FaLocationArrow />
          </span>
          <span className="label">My Location</span>
        </p>
        <p>
          <span className="icon">
            <FaBriefcase />
          </span>
          <span className="label">My Occupation</span>
        </p>
      </div>
      <div>
        <p>
          <span className="label">No of profile views</span>
          <span className="viewCount">3434</span>
        </p>
        <p>
          <span className="label">No of Likes</span>
          <span className="likeCount">45354</span>
        </p>
      </div>
      <div>
        <h2>Social Profiles</h2>
        <p>
          <span className="socialContainer">
            <span className="icon">
              <FaTwitter />
            </span>
            <span>Twitter</span>
          </span>
          <span className="icon">
            <FaLink />
          </span>
        </p>
        <p>
          <span className="socialContainer">
            <span className="icon">
              <FaLinkedinIn />
            </span>
            <span>LinkedIn</span>
          </span>
          <span className="icon">
            <FaLink />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Friends;
