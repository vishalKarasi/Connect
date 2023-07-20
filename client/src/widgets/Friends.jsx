import React from "react";
import { FaUserMinus } from "react-icons/fa";
import profilePic from "@assets/images/pfp.png";
import adsPic from "@assets/images/ads.jpg";

function Friends() {
  return (
    <>
      <section className="ads">
        <h3>Sponsored</h3>
        <span className="adsImg">
          <img src={adsPic} alt="" />
        </span>
        <p>
          <span className="adsTitle">PUMA</span>
          <span className="price">20$</span>
        </p>
        <p className="adsDes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          soluta doloribus, itaque sit id nulla!
        </p>
      </section>

      <section className="friends">
        <h2>Friends List</h2>
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
            <FaUserMinus />
          </span>
        </div>
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
            <FaUserMinus />
          </span>
        </div>
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
            <FaUserMinus />
          </span>
        </div>
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
            <FaUserMinus />
          </span>
        </div>
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
            <FaUserMinus />
          </span>
        </div>
      </section>
    </>
  );
}

export default Friends;
