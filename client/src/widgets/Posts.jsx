import React from "react";
import {
  FaComment,
  FaImage,
  FaLink,
  FaMicrophone,
  FaShare,
  FaThumbsUp,
  FaUserMinus,
  FaUserTag,
  FaVideo,
} from "react-icons/fa";
import profilePic from "@assets/images/pfp.png";
import ads from "@assets/images/ads.jpg";
import Button from "@components/Button";

function Posts() {
  return (
    <>
      <article className="container createPost">
        <div className="top">
          <p className="profileImg">
            <img src={profilePic} alt="profileImg" />
          </p>
          <Button label="Audio" icon={<FaMicrophone />} className="tabs" />
          <Button label="Video" icon={<FaVideo />} className="tabs" />
          <Button label="Tag" icon={<FaLink />} className="tabs" />
          <Button
            label="Tag&nbsp;Friend"
            icon={<FaUserTag />}
            className="tabs"
          />
        </div>

        <div className="bottom">
          <input
            type="text"
            placeholder="What's on your mind..."
            autoComplete="off"
            className="input"
          />
          <input
            type="file"
            id="createImg"
            name="createPostImg"
            required={true}
          />
          <label htmlFor="createImg">
            <span className="icon">
              <FaImage />
            </span>
          </label>
        </div>
      </article>

      <article className="container post">
        <div className="top">
          <p className="left">
            <p className="profileImg">
              <img src={profilePic} alt="profileImg" />
            </p>
            <p className="info">
              <span>Vishal Karasi</span>
              <span>3:54</span>
            </p>
          </p>
          <p className="icon">
            <FaUserMinus />
          </p>
        </div>
        <div className="postImg">
          <img src={ads} alt="postImg" />
        </div>
        <div className="bottom">
          <Button label="Like" icon={<FaThumbsUp />} className="tabs" />
          <Button label="Comment" icon={<FaComment />} className="tabs" />
          <Button label="Share" icon={<FaShare />} className="tabs" />
        </div>
      </article>
      <article className="container post">
        <div className="top">
          <p className="left">
            <p className="profileImg">
              <img src={profilePic} alt="profileImg" />
            </p>
            <p className="info">
              <span>Vishal Karasi</span>
              <span>3:54</span>
            </p>
          </p>
          <p className="icon">
            <FaUserMinus />
          </p>
        </div>
        <div className="postImg">
          <img src={ads} alt="postImg" />
        </div>
        <div className="bottom">
          <Button label="Like" icon={<FaThumbsUp />} className="tabs" />
          <Button label="Comment" icon={<FaComment />} className="tabs" />
          <Button label="Share" icon={<FaShare />} className="tabs" />
        </div>
      </article>
      <article className="container post">
        <div className="top">
          <p className="left">
            <p className="profileImg">
              <img src={profilePic} alt="profileImg" />
            </p>
            <p className="info">
              <span>Vishal Karasi</span>
              <span>3:54</span>
            </p>
          </p>
          <p className="icon">
            <FaUserMinus />
          </p>
        </div>
        <div className="postImg">
          <img src={ads} alt="postImg" />
        </div>
        <div className="bottom">
          <Button label="Like" icon={<FaThumbsUp />} className="tabs" />
          <Button label="Comment" icon={<FaComment />} className="tabs" />
          <Button label="Share" icon={<FaShare />} className="tabs" />
        </div>
      </article>
    </>
  );
}

export default Posts;
