import React from "react";
import {
  FaBriefcase,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
  FaLink,
  FaUserEdit,
} from "react-icons/fa";
import profilePic from "@assets/images/pfp.png";

function Profile() {
  return (
    <article className="profile sticky">
      <div>
        <span>
          <span className="profileImg">
            <img src={profilePic} alt="" />
          </span>
          <i>
            <h3>Vishal Karasi</h3>
            <span className="label theme">Follower: 323</span>
          </i>
        </span>
        <span className="icon">
          <FaUserEdit />
        </span>
      </div>
      <div>
        <p>
          <span className="icon">
            <FaMapMarkerAlt />
          </span>
          <span className="label grow">My Location</span>
        </p>
        <p>
          <span className="icon">
            <FaBriefcase />
          </span>
          <span className="label grow">My Occupation</span>
        </p>
      </div>
      <div>
        <p>
          <span className="label">No of profile views</span>
          <span className="label theme">3434</span>
        </p>
        <p>
          <span className="label">No of Likes</span>
          <span className="label theme">45354</span>
        </p>
      </div>
      <div>
        <h3>Social Profiles</h3>
        <p>
          <span className="socialContainer">
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="label">Twitter</span>
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
            <span className="label">LinkedIn</span>
          </span>
          <span className="icon">
            <FaLink />
          </span>
        </p>
      </div>
    </article>
  );
}

export default Profile;
